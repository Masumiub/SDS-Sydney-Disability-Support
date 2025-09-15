import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

const useUserRole = () => {
  const { user, loading } = useAuth();
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      if (!user?.uid) return;

      try {
        const token = localStorage.getItem("access-token");
        const res = await axios.get("https://server-kappa-eight-95.vercel.app/api/users/role", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setRole(res.data.role);
      } catch (err) {
        console.error("Error fetching user role:", err);
      } finally {
        setRoleLoading(false);
      }
    };

    fetchRole();
  }, [user]);

  return { role, roleLoading };
};

export default useUserRole;
