import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Profile from "@app/profile/page";
import { userEvent } from "@testing-library/user-event";
import { useProfilePage } from "@/store/profileStore";

import "@testing-library/jest-dom/vitest";

vi.mock("@components/ProfileInfo", () => ({
  default: () => <div data-testid="profile-info"></div>,
}));

vi.mock("@components/Statistics", () => ({
  default: () => <div data-testid="statistics"></div>,
}));

describe("Profile", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("render different children", () => {
    vi.mocked(useProfilePage).mockReturnValue({
      profilePage: "statistics",
      changePage: vi.fn(),
    });
    render(<Profile />);

    expect(screen.queryByTestId("profile-info")).not.toBeInTheDocument();
    expect(screen.getByTestId("statistics")).toBeInTheDocument();
  });
});
