import React, { useState } from "react";
import { isObject } from "../../helpers";

// Define the props interface for the TreeView component
interface TreeViewProps {
  data: any;
  label?: string | null;
}

const TreeView: React.FC<TreeViewProps> = ({ data, label }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Check if the data is an object and has children
  const hasChildren:boolean = isObject(data) && Object.keys(data as string).length > 0;

  // Toggle collapse state
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  // Remove "xacml3:" from the label if it exists
  const option = label ? label.replace("xacml3:", "").replace("#text:","") : null;

  return (
    <div>
      {option && (
        <div
          onClick={hasChildren ? toggleCollapse : undefined}
          className={`flex items-baseline ${
            hasChildren ? "cursor-pointer" : "cursor-default"
          } text-blue-600`}
        >
          {hasChildren && (
            <span className="text-lg">{isCollapsed ? "►" : "▼"}</span>
          )}
          <span className="font-medium capitalize">{option}:</span>
          {!hasChildren && typeof data === "string" && (
            <span className="text-gray-600">{data.replace("xacml3:", "")}</span>
          )}
        </div>
      )}
      {!isCollapsed && hasChildren && (
        <ul className={`list-none pl-4`}>
          {Object.keys(data as string).map((key) => (
            <li key={key}>
              <TreeView data={(data as string)[key]} label={key} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TreeView;
