import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import ProfileLayout from "@app/profile/layout";
import { userEvent } from "@testing-library/user-event";
import { useProfilePage } from "@/store/profileStore";

describe("ProfileLayout", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });
  it("render profile ui correctly", () => {
    render(<ProfileLayout>ProfileLayout</ProfileLayout>);

    expect(screen.getByText("profileInfo")).toBeInTheDocument();
    expect(screen.getByText("statistics")).toBeInTheDocument();
  });

  it("navigate to pages", async () => {
    const user = userEvent.setup();

    render(<ProfileLayout>ProfileLayout</ProfileLayout>);

    await user.click(screen.getByText("profileInfo"));
    expect(useProfilePage().changePage).toHaveBeenCalledWith("info");

    await user.click(screen.getByText("statistics"));
    expect(useProfilePage().changePage).toHaveBeenCalledWith("statistics");
  });
});
