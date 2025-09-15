import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useUserRole from '../../hooks/useUserRole';
import ParticipantProfile from './ParticipantProfile';
import StaffProfile from './StaffProfile';
import SupportCoordinatorProfile from './SupportCoordinatorProfile';
import Loading from '../../Components/Loading';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';


const ManageProfile = () => {

    const { user } = useAuth();
    const { role, roleLoading } = useUserRole();
    const [profile, setProfile] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (!user?.uid) return; //  wait until user is available


                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setProfile(data);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [user, setProfile]); // re-run when user changes

    if (roleLoading) return <Loading></Loading>;

    //console.log(user)
    //console.log(profile);

    return (
        <div>
            <>
                {
                    role == 'staff' ? (
                        <StaffProfile profile={profile}></StaffProfile>) : role === "participant" ?
                        (
                            <ParticipantProfile profile={profile}></ParticipantProfile>
                        ) : role === "support coordinator" ? (
                            <SupportCoordinatorProfile profile={profile}></SupportCoordinatorProfile>
                        ) : (
                            <div>No User data available.</div>
                        )
                }
            </>
        </div>
    );
};

export default ManageProfile;