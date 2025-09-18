import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../Components/Loading";

const PreviousReferred = () => {
  const axiosSecure = useAxiosSecure();
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const res = await axiosSecure.get("/api/prereferrals");
        setReferrals(res.data);
      } catch (error) {
        console.error("Failed to fetch referrals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReferrals();
  }, [axiosSecure]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-6 mt-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-semibold text-gray-800 mb-4">
          Your Previous Referred Clients
        </h1>
        <p className="text-gray-600">
          Find your previous referred clients here.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-20">
        <table className="table w-full rounded-lg">
          <thead className="bg-purple-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Details</th>
              <th className="p-3 text-left">Referred Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {referrals.map((ref) => (
              <tr key={ref.id} className="border-t hover:bg-purple-50">
                <td className="p-3 font-semibold">
                  {ref.firstName} {ref.lastName}
                </td>
                <td className="p-3">{ref.email}</td>
                <td className="p-3">{ref.phone}</td>
                <td className="p-3">{ref.service_name}</td>
                <td className="p-3">{ref.serviceDetails}</td>
                <td className="p-3">
                  {format(new Date(ref.referred_date), "PPP p")}
                </td>
                <td className="p-3">
                  <span>
                    {ref.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {referrals.length === 0 && (
          <p className="text-center mt-6 text-gray-600">
            No referrals found.
          </p>
        )}
      </div>
    </div>
  );
};

export default PreviousReferred;




// {`px-2 py-1 rounded-lg text-white text-sm ${
//                       ref.status === "Open"
//                         ? "bg-green-600"
//                         : ref.status === "Closed"
//                         ? "bg-gray-500"
//                         : "bg-yellow-600"
//                     }`}