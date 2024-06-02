import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import DarkMode from "./DarkMode";
import { act } from "react";

describe("DarkMode Component", () => {
  test("should have a button", async () => {
    render(<DarkMode />);
    const button = await screen.getByTestId("button-switch-dark-mode");
    expect(button).toBeInTheDocument();
  });

  test("should have the dark icon when it starts", async () => {
    render(<DarkMode />);
    const darkIcon = await screen.getByTestId("dark-icon");
    expect(darkIcon).toBeInTheDocument();
  });

  test("should have the light icon when the button is pressed", async () => {
    render(<DarkMode />);
    const button = await screen.getByTestId("button-switch-dark-mode");
    await act(async () => {
      fireEvent.click(button);
    });
    const lightIcon = await screen.getByTestId("light-icon");
    expect(lightIcon).toBeInTheDocument();
  });

  test("should have the dark icon when the button is pressed twice", async () => {
    render(<DarkMode />);
    const button = await screen.getByTestId("button-switch-dark-mode");
    await act(async () => {
      fireEvent.click(button);
    });
    await act(async () => {
      fireEvent.click(button);
    });
    const darkIcon = await screen.getByTestId("dark-icon");
    expect(darkIcon).toBeInTheDocument();
  });
});
