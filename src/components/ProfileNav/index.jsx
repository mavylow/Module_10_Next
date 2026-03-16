"use client";

import "@components/ProfileNav/style.css";
import { useTranslation } from "react-i18next";
import { useProfilePage } from "@/store/profileStore";

function ProfileNav() {
  const { t } = useTranslation();
  const { profilePage, changePage } = useProfilePage((state) => state);
  return (
    <nav className="profile-nav">
      <a
        onClick={() => changePage("info")}
        className={profilePage === "info" ? "active" : ""}
      >
        {t("profileInfo")}
      </a>
      <a
        onClick={() => changePage("statistics")}
        className={profilePage === "statistics" ? "active" : ""}
      >
        {t("statistics")}
      </a>
    </nav>
  );
}

export default ProfileNav;
