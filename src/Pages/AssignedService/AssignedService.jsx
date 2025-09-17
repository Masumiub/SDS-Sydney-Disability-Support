import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { enUS, fr, es } from "date-fns/locale";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const locales = {
  "en-US": enUS,
  fr: fr,
  es: es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function AssignedService() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchServices = async () => {
      try {
        const res = await axiosSecure.get("/api/scheduledServiceforStaff");
        const data = res.data;
        console.log("Raw data from API:", data); // Debug log

        const formatted = data.flatMap((service) => {
          if (service.preferred_date && Array.isArray(service.preferred_date)) {
            return service.preferred_date.map((timestamp) => {
              try {
                // Handle Firestore timestamp format with underscores
                let baseDate;
                if (timestamp && typeof timestamp === 'object') {
                  // Check for underscore properties
                  if (timestamp._seconds !== undefined) {
                    baseDate = new Date(timestamp._seconds * 1000);
                  } 
                  // Check for regular properties (without underscores)
                  else if (timestamp.seconds !== undefined) {
                    baseDate = new Date(timestamp.seconds * 1000);
                  }
                  else if (timestamp.toDate) {
                    baseDate = timestamp.toDate();
                  } else {
                    console.warn("Unknown timestamp format:", timestamp);
                    return null;
                  }
                } else {
                  console.warn("Invalid timestamp:", timestamp);
                  return null;
                }

                if (isNaN(baseDate.getTime())) {
                  console.warn("Invalid date from timestamp:", timestamp);
                  return null;
                }

                // Parse time strings (e.g., "10:00 AM")
                const parseTimeString = (timeStr) => {
                  if (!timeStr) return { hours: 0, minutes: 0 };
                  
                  const [time, modifier] = timeStr.split(' ');
                  let [hours, minutes] = time.split(':').map(Number);
                  
                  if (modifier === 'PM' && hours < 12) hours += 12;
                  if (modifier === 'AM' && hours === 12) hours = 0;
                  
                  return { hours, minutes };
                };

                const startTime = parseTimeString(service.time_of_day);
                const endTime = parseTimeString(service.time_of_day_end);

                // Create start and end dates
                const start = new Date(
                  baseDate.getFullYear(),
                  baseDate.getMonth(),
                  baseDate.getDate(),
                  startTime.hours,
                  startTime.minutes
                );

                const end = new Date(
                  baseDate.getFullYear(),
                  baseDate.getMonth(),
                  baseDate.getDate(),
                  endTime.hours,
                  endTime.minutes
                );

                return {
                  id: service._id || `${service.service_type}-${baseDate.getTime()}`,
                  title: service.service_type || "Assigned Service",
                  start,
                  end,
                  location: service.address_model?.address || "No location provided",
                  allDay: false
                };
              } catch (error) {
                console.error("Error processing service:", error, service);
                return null;
              }
            }).filter(Boolean);
          }
          return [];
        });

        console.log("Formatted events:", formatted); // Debug log
        setEvents(formatted);
      } catch (error) {
        console.error("❌ Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [user, axiosSecure]);

  const eventStyleGetter = (event) => {
    let backgroundColor = "#6B2B77"; // default purple
    if (event.title.includes("Life")) {
      backgroundColor = "#f97316"; // orange
    }
    return {
      style: {
        backgroundColor,
        borderRadius: "8px",
        opacity: 0.9,
        color: "white",
        border: "0px",
        display: "block",
        padding: "4px 8px",
      },
    };
  };

  return (
    <>
      {/* Header Section */}
      <div className="mb-8 p-6 mt-10 text-center">
        <h1 className="text-5xl font-semibold text-gray-800 mb-6">Assigned Service</h1>
        <p className="text-gray-600">Find your assigned services here.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6">
        {/* Left panel */}
        <div className="col-span-3 lg:col-span-1 border-1 border-gray-200 p-3 rounded-2xl">
          <button className="bg-[#6B2B77] text-white px-4 py-2 rounded mb-4">
            + Add New Event
          </button>
          <h3 className="font-semibold mb-2">You are going to</h3>
          <ul className="space-y-3">
            {loading ? (
              <p>Loading...</p>
            ) : events.length === 0 ? (
              <p>No assigned services found.</p>
            ) : (
              events.map((ev) => (
                <li key={ev.id} className="p-3 rounded shadow-sm bg-white">
                  <h4 className="font-bold text-purple-800">{ev.title}</h4>
                  <p className="text-gray-700">
                    {ev.start.toLocaleDateString()} at{" "}
                    {ev.start.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{ev.location}</p>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Calendar */}
        <div className="col-span-3 lg:col-span-3 border-1 border-gray-200 p-3 rounded-2xl bg-white">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            views={["month", "week", "day"]}
            defaultDate={new Date()}
            eventPropGetter={eventStyleGetter}
          />
        </div>
      </div>
    </>
  );
}

    // useEffect(() => {

    //     const assignedServices = [
    //         {
    //             id: 1,
    //             title: "Skills Development",
    //             start: new Date(2024, 9, 20, 17, 0), // Oct 20, 2024 at 5 PM
    //             end: new Date(2024, 9, 20, 19, 0),
    //             location: "853 Moore Flats, Sweden",
    //         },
    //         {
    //             id: 2,
    //             title: "Life Transitions",
    //             start: new Date(2024, 9, 16, 20, 0),
    //             end: new Date(2024, 9, 18, 22, 0),
    //             location: "Walter Road, Turks",
    //         },
    //     ];
    //     setEvents(assignedServices);
    // }, []);