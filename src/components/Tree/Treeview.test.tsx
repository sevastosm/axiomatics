import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import TreeView from "./TreeView";

describe("TreeView Component", () => {
  test("renders label correctly without children", () => {
    render(<TreeView data="Test data" label="xacml3:Label" />);

    const label = screen.getByText("Label:");
    expect(label).toBeInTheDocument();

    const data = screen.getByText("Test data");
    expect(data).toBeInTheDocument();
  });

  test("removes 'xacml3:' and '#text:' prefixes from the label", () => {
    render(<TreeView data="Test data" label="xacml3:#text:Label" />);

    const label = screen.getByText("Label:");
    expect(label).toBeInTheDocument();
  });

  test("collapses and expands on click when there are children", () => {
    const data = {
      child1: "Child data 1",
      child2: "Child data 2",
    };

    render(<TreeView data={data} label="Parent" />);

    const toggleIcon = screen.getByText("▼");
    expect(toggleIcon).toBeInTheDocument();

    fireEvent.click(toggleIcon);

    expect(screen.queryByText("Child data 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Child data 2")).not.toBeInTheDocument();

    fireEvent.click(toggleIcon);

    expect(screen.getByText("Child data 1")).toBeInTheDocument();
    expect(screen.getByText("Child data 2")).toBeInTheDocument();
  });

  test("doesn't collapse when there are no children", () => {
    render(<TreeView data="No children data" label="Label" />);

    const label = screen.getByText("Label:");
    expect(label).toBeInTheDocument();

    fireEvent.click(label);

    expect(screen.getByText("No children data")).toBeInTheDocument();
  });
});
