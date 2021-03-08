import React from "react";
import { screen, render } from "@testing-library/react";
import TripSearch from "../TripSearch";
import userEvent from "@testing-library/user-event";
import "jest-canvas-mock";

it("Start point is properly insterted", () => {
    render(<TripSearch />);

    const startInput = screen.getByPlaceholderText("Start");
    const destInput = screen.getByPlaceholderText("Destination");
    userEvent.type(startInput, "Amsterdam");
    userEvent.type(destInput, "Warsaw");
    expect(startInput.value).toBe("Amsterdam");
    expect(destInput.value).toBe("Warsaw");
});
