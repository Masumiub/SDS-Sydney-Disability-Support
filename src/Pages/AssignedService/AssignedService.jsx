import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { enUS, fr, es } from "date-fns/locale";


const locales = {
    "en-US": enUS,
    "fr": fr,
    "es": es,
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


    //     useEffect(() => {
    //   fetch("http://localhost:5000/api/events")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // convert string dates into JS Date objects
    //       const formatted = data.map(ev => ({
    //         ...ev,
    //         start: new Date(ev.start),
    //         end: new Date(ev.end),
    //       }));
    //       setEvents(formatted);
    //     });
    // }, []);

    // Simulated fetch
    useEffect(() => {
        // This would come from your backend API
        const assignedServices = [
            {
                id: 1,
                title: "Skills Development",
                start: new Date(2024, 9, 20, 17, 0), // Oct 20, 2024 at 5 PM
                end: new Date(2024, 9, 20, 19, 0),
                location: "853 Moore Flats, Sweden",
            },
            {
                id: 2,
                title: "Life Transitions",
                start: new Date(2024, 9, 16, 20, 0),
                end: new Date(2024, 9, 18, 22, 0),
                location: "Walter Road, Turks",
            },
        ];
        setEvents(assignedServices);
    }, []);


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
                        {events.map((ev) => (
                            <li key={ev.id} className="p-3  rounded shadow-sm">
                                <h4 className="font-bold">{ev.title}</h4>
                                <p>{ev.start.toLocaleDateString()} at {ev.start.toLocaleTimeString()}</p>
                                <p className="text-sm text-gray-500">{ev.location}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Calendar */}
                <div className="col-span-3 lg:col-span-3 border-1 border-gray-200 p-3 rounded-2xl">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                        views={["month", "week", "day"]}
                        defaultDate={new Date(2024, 9, 1)} // October 2024
                        eventPropGetter={eventStyleGetter}
                    />
                </div>
            </div>
        </>
    );
}
