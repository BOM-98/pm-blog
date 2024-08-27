import React from "react";
import { render, screen, act } from "@testing-library/react";
import Typewriter from "@/components/Design/Typewriter";

describe("Typewriter Component", () => {
  jest.useFakeTimers(); // Use fake timers to control setInterval and setTimeout

  it("renders without crashing", () => {
    render(<Typewriter text="Hello, world!" actions={[]} />);
    expect(screen.getByText("")).toBeInTheDocument(); // Initial state is an empty string
  });

  it("types out the text correctly", async () => {
    render(<Typewriter text="Hello, world!" actions={[{ type: "type", count: 5 }]} />);

    // Fast-forward time to allow the typing action to complete
    await act(async () => {
      jest.advanceTimersByTime(500); // Assuming 100ms per character, adjust if necessary
    });

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  //   it("deletes text correctly", async () => {
  //     render(
  //       <Typewriter
  //         text="Hello, world!"
  //         actions={[
  //           { type: "type", count: 5 },
  //           { type: "delete", count: 2 },
  //         ]}
  //       />
  //     );

  //     // Type the text
  //     await act(async () => {
  //       jest.advanceTimersByTime(500);
  //     });

  //     // Delete part of the text
  //     await act(async () => {
  //       jest.advanceTimersByTime(200); // Adjust based on delete interval
  //     });

  //     expect(screen.getByText("Hel")).toBeInTheDocument();
  //   });

  //   it("pauses correctly", async () => {
  //     render(
  //       <Typewriter
  //         text="Hello, world!"
  //         actions={[
  //           { type: "type", count: 5 },
  //           { type: "pause", duration: 1000 },
  //           { type: "type", count: 7 },
  //         ]}
  //       />
  //     );

  //     // Type the first part of the text
  //     await act(async () => {
  //       jest.advanceTimersByTime(500);
  //     });

  //     // Pause (no text change expected during pause)
  //     await act(async () => {
  //       jest.advanceTimersByTime(1000); // Pauses for 1000ms
  //     });

  //     // Continue typing
  //     await act(async () => {
  //       jest.advanceTimersByTime(700);
  //     });

  //     expect(screen.getByText("Hello, world")).toBeInTheDocument();
  //   });
});
