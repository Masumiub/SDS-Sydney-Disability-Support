import React from "react";
import Loading from "../../Components/Loading";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrLocation, GrStatusGood } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { IoDocumentsOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";


export default function profileProfile({ profile }) {

    if (!profile) return <Loading></Loading>;

    return (
        <div className=" mx-auto bg-white  space-y-4">

            <div className="flex flex-col items-center gap-4 py-12 rounded-2xl px-6 my-6 bg-gradient-to-r from-[#6B2B77] to-[#9041b2]">
                <img
                    src={profile.profile_image_url || "https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg"}
                    alt={profile.name}
                    className="w-28 h-28 rounded-full border-2 border-white opacity-80 p-2"
                />
                <h2 className="text-2xl font-bold text-white">{profile.name}</h2>

                <div className="grid grid-cols-1 gap-1">

                    <div className="flex items-center gap-2 text-white ">
                        <FiPhone className="text-white" size={20} />
                        <span>{profile.phone_number}</span>
                    </div>

                    <div className="flex items-center gap-2 text-white justify-center">
                        <GrStatusGood className="text-white" size={20} />
                        <span>PARTICIPANT</span>
                    </div>

                </div>
            </div>

            <div className="px-5">

                <div className="py-2">
                    {/* About Me */}
                    {profile.about_me && (
                        <p className="mt-2">
                            <span className="font-semibold">About me:</span> {profile.about_me}
                        </p>
                    )}
                </div>

                <div className="py-2">
                    {/* Address */}
                    {profile.address_model?.address && (
                        <div className="flex gap-2 items-center">
                            <div>
                                <GrLocation className="text-[#6B2B77]" size={20} />
                            </div>
                            <div>
                                <span className="font-semibold">Address:</span>{" "}
                                {profile.address_model.address}
                                {profile.address_model.address_url && (
                                    <a
                                        href={profile.address_model.address_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 ml-2"
                                    >
                                        View on map
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>


                <div className="flex items-center gap-2 py-2">
                    <MdOutlineMail className="text-[#6B2B77]" size={20} />
                   <p><span className="font-bold"> Email: </span>{profile.email}</p> 
                </div>

                <div className="py-2">
                    {/* Hobbies */}
                    {profile.hobbies?.length > 0 && (
                        <div className="flex gap-2 items-center">
                            <div>
                                <FaRegHeart className="text-[#6B2B77]" size={20} />
                            </div>
                            <div>
                                <span className="font-semibold">Hobbies:</span>{" "}
                                {profile.hobbies.join(", ")}
                            </div>
                        </div>
                    )}
                </div>

                <div className="py-2">
                    {/* Languages */}
                    {profile.languages?.length > 0 && (
                        <div className="flex gap-2 items-center">
                            <div>
                                <IoLanguage className="text-[#6B2B77]" size={20} />
                            </div>
                            <div>
                                <span className="font-semibold">Languages:</span>{" "}
                                {profile.languages.join(", ")}
                            </div>
                        </div>
                    )}
                </div>

                <div className="py-2">
                    {/* Compliance Documents */}
                    <div>
                        <div className="flex gap-2 items-start">
                            <div>
                                <IoDocumentsOutline className="text-[#6B2B77]" size={20} />
                            </div>

                            <div>
                                <h3 className="font-semibold">Compliance Documents:</h3>
                                <ul className="list-disc list-inside">
                                    {Object.entries(profile.compliance_documents || {}).map(
                                        ([docName, value]) => (
                                            <li key={docName}>
                                                {docName.replace(/_/g, " ")}:{" "}
                                                <span className={value ? "text-green-600" : "text-red-600"}>
                                                    {value ? "✔️ Yes" : "❌ No"}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="py-2">
                    {/* Contract Persons */}
                    {profile.contract_persons?.length > 0 && (
                        <div className="flex gap-2 items-start">
                            <div>
                                <MdOutlinePersonOutline className="text-[#6B2B77]" size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold">Contract Persons:</h3>
                                <ul className="list-disc list-inside">
                                    {profile.contract_persons.map((person, idx) => (
                                        <li key={idx}>
                                            {person.name} ({person.relation_with_profile}) –{" "}
                                            {person.email}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
}
