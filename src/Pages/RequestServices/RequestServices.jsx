import React, { useEffect, useState } from "react";
import ServicesOverview from "../../Components/ServicesOverview";
import imageHand from "../../assets/imagehand.png";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const formatTime12 = (time24) => {
  // time24: "14:30" -> "2:30 PM"
  if (!time24) return "";
  const [hh, mm] = time24.split(":").map(Number);
  const date = new Date();
  date.setHours(hh, mm, 0);
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
};

const RequestServices = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [userData, setUserData] = useState([]);
  const [services, setServices] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [dates, setDates] = useState([]); // store ISO date strings (yyyy-mm-dd)
  const [dateInput, setDateInput] = useState(""); // single date input value
  const [startTime, setStartTime] = useState(""); // "14:00"
  const [endTime, setEndTime] = useState(""); // "15:00"
  const [genderPref, setGenderPref] = useState("Male");
  const [address, setAddress] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [participantFirstName, setParticipantFirstName] = useState("");
  const [participantLastName, setParticipantLastName] = useState("");
  const [participantMobile, setParticipantMobile] = useState("");
  const [participantEmail, setParticipantEmail] = useState("");



  useEffect(() => {
    // Fetch services from backend API
    fetch("https://server-kappa-eight-95.vercel.app/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!user?.uid) return; //  wait until user is available


        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData(data)

          // Populate participant fields from Firestore
          setParticipantFirstName(data.name || "");
          setParticipantLastName(data.name || "");
          setParticipantMobile(data.phone_number || "");
          setParticipantEmail(data.email || user.email || "");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [user]);



  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await axiosSecure.get("/api/users/staff");
        setStaffList(res.data);
      } catch (err) {
        console.error("Error fetching staff", err);
      }
    };
    fetchStaff();
  }, [axiosSecure]);

  const addDate = () => {
    if (!dateInput) return;
    if (dates.includes(dateInput)) {
      Swal.fire("Date already added");
      return;
    }
    setDates((s) => [...s, dateInput]);
    setDateInput("");
  };

  const removeDate = (d) => setDates((s) => s.filter((x) => x !== d));

  const handleSelectStaff = (staff) => {
    setSelectedStaff(staff);
    // close dialog if using native dialog
    const modal = document.getElementById("my_modal_1");
    if (modal?.close) modal.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      return Swal.fire({ icon: "warning", title: "Please accept terms & conditions" });
    }
    if (!serviceType) return Swal.fire({ icon: "error", title: "Pick a service type" });
    if (dates.length === 0) return Swal.fire({ icon: "error", title: "Please add at least one date" });
    if (!startTime || !endTime) return Swal.fire({ icon: "error", title: "Please set start and end times" });

    setSubmitting(true);
    try {
      // prepare payload: send ISO dates (YYYY-MM-DD) and times in "h:mm A" strings
      const payload = {
        service_id: serviceType,
        service_type: services.find(s => s.service_id === serviceType)?.name || "",
        service_history_id:"",
        description: services.find(s => s.service_id === serviceType)?.name || "",
        selected_support_worker_id: selectedStaff?.user_id || null,
        preferred_dates: dates, // backend will convert to Firestore Timestamps
        time_of_day: formatTime12(startTime),
        time_of_day_end: formatTime12(endTime),
        gender_preference: genderPref,
        address_model: {
          address,
          // address_url/lat/long optional - can add map lookup later
        },
        additional_details: additionalDetails, 
        participant_email: participantEmail,
        participant_first_name: participantFirstName,
        participant_last_name: participantLastName,
        participant_mobile: participantMobile,
      };

      const res = await axiosSecure.post("/api/service-request", payload);
      Swal.fire({ icon: "success", title: "Booking submitted", text: `ID: ${res.data.id}` });
      // clear form or redirect
      setServiceType("");
      setDescription("");
      setSelectedStaff(null);
      setDates([]);
      setStartTime("");
      setEndTime("");
      setGenderPref("Male");
      setAddress("");
      setAcceptTerms(false);
    } catch (err) {
      console.error("Failed create booking", err);
      Swal.fire({ icon: "error", title: "Failed to submit booking" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="w-full mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-8 text-center border-b-1 border-gray-200 pb-25">
          <h1 className="text-5xl font-semibold text-gray-800 mb-6">Request a Service</h1>
          <p className="text-gray-600">Input details of your requested service</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 px-4 py-8">
            <form onSubmit={handleSubmit}>
              {/* Service Type */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">Service Type</label>
                <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="select w-full">
                  <option value="">Select service</option>

                  {services.map((service) => (
                    <option key={service.service_id} value={service.service_id}>
                      {service.name}
                    </option>
                  ))}

                </select>
              </div>

              {/* Details */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">Details</label>
                <textarea className="textarea w-full" value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} placeholder="Describe what you need" />
              </div>

              {/* Select Staff (modal) */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">Select Staff </label>
                <button type="button" className="input w-full text-left" onClick={() => document.getElementById("my_modal_1").showModal()}>
                  {selectedStaff ? selectedStaff.name : "Choose staff "}
                </button>

                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Select Staff</h3>

                    <div className="mt-4 space-y-4 max-h-[60vh] overflow-auto">
                      {staffList.map((s) => (
                        <div key={s.user_id} className="p-4 rounded-lg shadow-sm border-1 border-gray-200 flex flex-col ">

                          <div className="flex items-center gap-3">
                            <img src={s.profile_image_url || "https://via.placeholder.com/48"} alt="" className="w-12 h-12 rounded-full" />
                            <div>
                              <div className="font-semibold">{s.name}</div>
                              <div className="text-sm text-gray-500">{s.about_me}</div>
                            </div>
                          </div>


                          <div className="my-5">
                            <p className="font-bold">Compliance Documents</p>
                            <div className="flex items-center justify-between text-gray-600 my-2">
                              <p>First Aid Certificate</p>
                              {s.compliance_documents?.first_aid_certificate ? <MdCheckCircle className="text-green-500" /> : <MdCancel className="text-gray-500" />}
                            </div>

                            <div className="flex items-center justify-between text-gray-600 my-2">
                              <p>NDIS Workers Check</p>
                              {s.compliance_documents?.ndis_workers_check ? <MdCheckCircle className="text-green-500" /> : <MdCancel className="text-gray-500" />}
                            </div>

                            <div className="flex items-center justify-between text-gray-600 my-2">
                              <p>Working with Children Check</p>
                              {s.compliance_documents?.working_with_children_check ? <MdCheckCircle className="text-green-500" /> : <MdCancel className="text-gray-500" />}
                            </div>

                            <div className="flex items-center justify-between text-gray-600 my-2">
                              <p>Police Check</p>
                              {s.compliance_documents?.police_check ? <MdCheckCircle className="text-green-500" /> : <MdCancel className="text-gray-500" />}
                            </div>

                            <div className="flex items-center justify-between text-gray-600 my-2">
                              {/* <p>Rating: {staff?.rating || "N/A"}</p>
                                                            <p>{staff?.distance || "Unknown"} km</p> */}
                            </div>
                          </div>

                          <div>
                            <button type="button" className="btn btn-sm bg-[#6B2B77] text-white w-full rounded-lg my-2" onClick={() => handleSelectStaff(s)}>
                              Select Staff
                            </button>
                          </div>

                        </div>
                      ))}
                    </div>
                    <div className="modal-backdrop mt-5">
                      <button className="btn" onClick={() => document.getElementById("my_modal_1").close()}>
                        Close
                      </button>
                    </div>

                  </div>
                </dialog>
              </div>

              {/* Date selection (add multiple) */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">Preferred Dates</label>
                <div className="flex gap-2 items-center">
                  <input type="date" value={dateInput} onChange={(e) => setDateInput(e.target.value)} className="input w-full" />
                  <button type="button" className="btn" onClick={addDate}>Add</button>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {dates.map((d) => (
                    <div key={d} className="px-3 py-1 bg-gray-100 rounded flex items-center gap-2">
                      <span>{new Date(d).toLocaleDateString()}</span>
                      <button type="button" onClick={() => removeDate(d)} className="text-red-500">✕</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-medium">Start Time</label>
                  <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="input w-full" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">End Time</label>
                  <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="input w-full" />
                </div>
              </div>

              {/* Gender */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">Gender Preference</label>
                <select value={genderPref} onChange={(e) => setGenderPref(e.target.value)} className="select w-full">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>No preference</option>
                </select>
              </div>

              {/* Address */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="input w-full" placeholder="Enter address" />
              </div>



              <div className="mb-6 hidden">
                <label className="block mb-2 font-medium">First Name</label>
                <input type="text" value={participantFirstName} readOnly className="input w-full" />
              </div>
              <div className="mb-6 hidden">
                <label className="block mb-2 font-medium">Last Name</label>
                <input type="text" value={participantLastName} readOnly className="input w-full" />
              </div>
              <div className="mb-6 hidden">
                <label className="block mb-2 font-medium">Email</label>
                <input type="text" value={participantEmail} readOnly className="input w-full" />
              </div>
              <div className="mb-6 hidden">
                <label className="block mb-2 font-medium">Mobile</label>
                <input type="text" value={participantMobile} readOnly className="input w-full" />
              </div>


              {/* Terms */}
              <div className="mb-6 flex items-center gap-3">
                <input type="checkbox" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} className="checkbox mt-1" />
                <div className="text-sm text-gray-600">I accept the <a className="underline">terms & conditions</a></div>
              </div>

              {/* Submit */}
              <button type="submit" disabled={submitting} className="btn w-full bg-[#6B2B77] text-white rounded-lg">
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 px-4 py-8">
            <img src={imageHand} alt="imageHand" className="w-full" />
          </div>
        </div>

        <ServicesOverview />
      </div>
    </div>
  );
};

export default RequestServices;




{/* <option>House Cleaning And Other Household Activities</option>
                  <option>Short Term/Emergency Accommodation</option>
                  <option>Daily Living</option>
                  <option>Community and Social Participation</option>
                  <option>House or Yard Maintenance</option>
                  <option>Accommodation and Tenancy Support</option>
                  <option>Support Coordination</option>
                  <option>Travel and Transport Assistance</option>
                  <option>Skill Development and Life Transition</option> */}