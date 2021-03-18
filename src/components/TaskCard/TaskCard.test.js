import React from "react";
import { render } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe("TaskCard tests", () => {
  it("should render", () => {
    expect(render(<TaskCard />)).toBeTruthy();
  });
});
