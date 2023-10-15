import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./App.tsx";

describe("App", () => {
  test("should render", () => {
    render(<App />);

    expect(screen.getByText("Chess Openings Trainer")).toBeInTheDocument();
  });
});
