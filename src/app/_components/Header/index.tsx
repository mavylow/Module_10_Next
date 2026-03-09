"use client";
import SidekickLogoText from "@/assets/SidekickLogoText";
import SidekickLogo from "@/assets/SidekickLogo";
import "./style.css";
import { useEffect, useState } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPageAuth, setIsPageAuth] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsExpanded(false);
    if (location.pathname !== "/signin" && location.pathname !== "/signup") {
      setIsPageAuth(true);
    } else {
      setIsPageAuth(false);
    }
  }, [location]);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.classList.add("nav-expanded");
    } else {
      document.body.classList.remove("nav-expanded");
    }

    return () => {
      document.body.classList.remove("nav-expanded");
    };
  }, [isExpanded]);

  return (
    <>
      <header
        className={
          (isMobile ? "mobile" : "desktop") +
          " " +
          (isExpanded ? "expanded" : "") +
          " " +
          (!isPageAuth ? "auth-page" : "")
        }
        data-testid="header"
      >
        <div className="logo" onClick={() => console.log("/")}>
          <SidekickLogo />
          <SidekickLogoText />
        </div>
      </header>
    </>
  );
}

export default Header;
