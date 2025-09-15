import { MdEmail, MdPhone, MdLocationOn, MdCheckCircle, MdCancel, MdOutlineMail } from "react-icons/md";
import { FaUser, FaBirthdayCake, FaLanguage, FaHandsHelping, FaHeart } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export default function SupportCoordinatorProfile({ profile }) {
    if (!profile) return <p>Loading...</p>;

    return (
        <div className="w-full mx-auto rounded-2xl p-3">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 py-12 rounded-2xl bg-purple-100 px-6">
                <img
                    src={profile.profile_image_url}
                    alt={profile.name}
                    className="w-28 h-28 rounded-full border-4 border-purple-600"
                />
                <div className="text-center">
                    <h1 className="text-2xl font-bold">{profile.name}</h1>
                    <p className="text-gray-600 capitalize">{profile.type}</p>
                    <p className="text-sm text-green-600 font-medium">
                        {profile.account_status}
                    </p>
                </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">


                    <div className="flex items-center gap-2 text-gray-700 bg-purple-100 rounded-2xl px-4 py-4">
                        <MdOutlineMail className="text-purple-600" size={25}/>
                        <span>{profile.email}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 bg-purple-100 rounded-2xl px-4 py-4">
                        <FiPhone className="text-purple-600" size={25}/>
                        <span>{profile.phone_number}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 bg-purple-100 rounded-2xl px-4 py-4">
                        <GrLocation className="text-purple-600" size={35}/>
                        <a
                            href={profile.address_model?.address_url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            {profile.address_model?.address}
                        </a>
                    </div>

                </div>
            </div>

            {/* Compliance Documents */}
            <div className="mt-6">
                <h2 className="font-semibold text-lg mb-2">Compliance Documents</h2>
                <div className="space-y-2">
                    {[
                        { label: "First Aid Certificate", value: profile.compliance_documents?.first_aid_certificate },
                        { label: "NDIS Workers Check", value: profile.compliance_documents?.ndis_workers_check },
                        { label: "Working with Children Check", value: profile.compliance_documents?.working_with_children_check },
                        { label: "Police Check", value: profile.compliance_documents?.police_check },
                    ].map((doc, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <p className="text-gray-700">{doc.label}</p>
                            {doc.value ? (
                                <MdCheckCircle className="text-green-500 text-xl" />
                            ) : (
                                <MdCancel className="text-red-500 text-xl" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Languages & Hobbies */}
            <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                    <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <FaLanguage className="text-purple-600" /> Languages
                    </h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {profile.languages?.map((lang, i) => (
                            <li key={i}>{lang}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <FaHeart className="text-purple-600" /> Hobbies
                    </h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {profile.hobbies?.map((hobby, i) => (
                            <li key={i}>{hobby}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Last Login */}
            <div className="mt-6 text-sm text-gray-500">
                Last login: {new Date(profile.last_login).toLocaleString()}
            </div>
        </div>
    );
}
