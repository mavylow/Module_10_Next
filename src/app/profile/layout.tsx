"use client";

import { useProfilePage } from "@/store/profileStore";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface ProfileLayoutProps {
  children: ReactNode;
}

function ProfileLayout({ children }: ProfileLayoutProps) {
  const { t } = useTranslation();
  const { profilePage, changePage } = useProfilePage((state) => state);

  return (
    <main className="profile">
      <nav>
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
      {children}
    </main>
  );
}

export default ProfileLayout;
