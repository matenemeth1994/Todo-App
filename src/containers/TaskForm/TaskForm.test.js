import React from "react";
import { render } from "@testing-library/react";
import TaskForm from "./TaskForm";

describe("TaskForm tests", () => {
  it("should render", () => {
    expect(render(<TaskForm />)).toBeTruthy();
  });
});
