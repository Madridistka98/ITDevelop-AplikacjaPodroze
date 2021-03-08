import React from "react";
import { screen, render } from "@testing-library/react";
import TripSearch from "../TripSearch";
import userEvent from "@testing-library/user-event";
import "jest-canvas-mock";

it("Start and destination point are properly insterted and swapped", () => {
    render(<TripSearch />);

    const startInput = screen.getByPlaceholderText("Start");
    const destInput = screen.getByPlaceholderText("Destination");
    const swapBtn = screen.getByTestId("tripsearch-swap");
    userEvent.type(startInput, "Amsterdam");
    userEvent.type(destInput, "Warsaw");
    expect(startInput.value).toBe("Amsterdam");
    expect(destInput.value).toBe("Warsaw");

    userEvent.click(swapBtn);

    expect(startInput.value).toBe("Warsaw");
    expect(destInput.value).toBe("Amsterdam");
});
