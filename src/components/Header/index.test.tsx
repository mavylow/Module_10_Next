import { describe, expect, it, afterEach, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Header from "@/_assets/_components/Header";
import authReducer from "@/slices/authSlice";
import userEvent from "@testing-library/user-event";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { mockUser } from "@/tests/consts";
import { useProfilePage } from "@/store/profileStore";
import Link from "next/link";

const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
    preloadedState: {
      auth: {
        user: null,
        isAuth: false,
        isLoading: false,
        error: null,
        ...initialState,
      },
    },
  });
};

jest.mock("next/link", () => {
  const MockLink = ({ children, href, onClick, ...props }: any) => {
    return (
      <a
        href={href}
        onClick={onClick}
        data-testid={`nav-${href?.replace(/\//g, "-") || "home"}`}
        {...props}
      >
        {children}
      </a>
    );
  };
  MockLink.displayName = "MockLink";
  return MockLink;
});

const renderComponent = (store = createTestStore()) => {
  return render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

describe("Header", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it("header without auth", () => {
    jest.spyOn(window.screen, "width", "get").mockReturnValue(769);
    jest.mocked(useSelector).mockReturnValue(null);
    renderComponent();

    expect(screen.getByTestId("logo-text-icon")).toBeInTheDocument();
    expect(screen.getByTestId("logo-icon")).toBeInTheDocument();

    expect(screen.getByText("Sing In")).toBeInTheDocument();
    expect(screen.getByText("Sing Up")).toBeInTheDocument();
  });

  it("header with auth", () => {
    jest.spyOn(window.screen, "width", "get").mockReturnValue(769);

    jest.mocked(useSelector).mockReturnValue(mockUser);
    renderComponent();

    expect(screen.getByTestId("logo-text-icon")).toBeInTheDocument();
    expect(screen.getByTestId("logo-icon")).toBeInTheDocument();

    expect(screen.getByText(`Helena Hills`)).toBeInTheDocument();
    expect(screen.getByAltText(`profile-image`)).toBeInTheDocument();
    expect(screen.getByAltText(`profile-image`).getAttribute("src")).toEqual(
      "/assets/user-helena.png"
    );
  });

  it("changing desktop top mobile class", () => {
    jest.spyOn(window.screen, "width", "get").mockReturnValue(769);
    jest.mocked(useSelector).mockReturnValue(mockUser);
    renderComponent();
    expect(screen.getByTestId(`header`).className).toMatch(/desktop.+/);

    cleanup();
    jest.spyOn(window.screen, "width", "get").mockReturnValue(767);
    renderComponent();

    expect(screen.getByTestId(`header`).className).toMatch(/mobile.+/);
  });

  it("expand and hide mobile menu", async () => {
    jest.spyOn(window.screen, "width", "get").mockReturnValue(767);
    jest.mocked(useSelector).mockReturnValue(mockUser);
    renderComponent();

    const expandedButton = screen
      .getByTestId("hamburger-icon")
      .closest("button");

    await userEvent.click(expandedButton!);

    const overlay = screen.getByTestId("overlay");
    const hideButton = screen
      .getByAltText("Hide menu profile image")
      .closest("button");

    expect(screen.getByTestId(`header`).className).toMatch("mobile expanded");

    await userEvent.click(overlay!);

    expect(screen.getByTestId(`header`).className).not.toMatch(
      "mobile expanded"
    );

    await userEvent.click(expandedButton!);
    await userEvent.click(hideButton!);

    expect(screen.getByTestId(`header`).className).not.toMatch(
      "mobile expanded"
    );
  });

  it("navigating to profile page", async () => {
    jest.spyOn(window.screen, "width", "get").mockReturnValue(767);
    jest.mocked(useSelector).mockReturnValue(mockUser);
    renderComponent();

    const expandedButton = screen
      .getByTestId("hamburger-icon")
      .closest("button");

    await userEvent.click(expandedButton!);

    const linkToInfo = screen.getByText("Profile info");

    await userEvent.click(linkToInfo);

    expect(useProfilePage().changePage).toHaveBeenCalledOnce();
    expect(useProfilePage().changePage).toHaveBeenCalledWith("info");
  });

  it("navigating to statistics", async () => {
    jest.spyOn(window.screen, "width", "get").mockReturnValue(767);
    jest.mocked(useSelector).mockReturnValue(mockUser);
    renderComponent();

    const expandedButton = screen
      .getByTestId("hamburger-icon")
      .closest("button");

    await userEvent.click(expandedButton!);

    const linkToInfo = screen.getByText("Statistics");

    await userEvent.click(linkToInfo);

    expect(useProfilePage().changePage).toHaveBeenCalledOnce();
    expect(useProfilePage().changePage).toHaveBeenCalledWith("statistics");
  });
});
