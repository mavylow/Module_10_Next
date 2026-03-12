import { Metadata } from "next";
import { ReactNode } from "react";
import ProfileNav from "@components/ProfileNav";

interface ProfileLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Profile",
};

function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <main className="profile">
      <ProfileNav />
      {children}
    </main>
  );
}

export default ProfileLayout;
