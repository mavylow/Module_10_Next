"use client";

import "@app/profile/style.css";
import ProfileInfo from "@components/ProfileInfo";
import Statistics from "@components/Statistics";
import { useProfilePage } from "@/store/profileStore";

function Profile() {
  const { profilePage } = useProfilePage((state) => state);

  return (
    <>
      {profilePage === "info" && <ProfileInfo />}
      {profilePage === "statistics" && <Statistics />}
    </>
  );
}

export default Profile;
