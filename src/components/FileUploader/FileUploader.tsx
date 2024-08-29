/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { parseXML } from "../../utils/parseXML";

// Define the props interface
interface FileUploaderProps {
  onDataParsed: (data:any) => void;
}
// Main FileUploader component
const FileUploader = ({ onDataParsed }:FileUploaderProps) => {
  // State to handle and display errors
  const [error, setError] = useState<string | null>(null);

  // Handle file input changes
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    // Check if the file is an XML file
    if (file && file.type === "text/xml") {
      const reader = new FileReader();
      
      // Once the file is read, process it
      reader.onload = (e) => {
        try {
          const xmlString = e.target?.result as string;
          
          // Parse the XML string into a JSON object
          const parsedJsonData = parseXML(xmlString);
          
          // Pass the parsed data to the parent component
          onDataParsed(parsedJsonData);
          
          // Clear any previous error messages
          setError(null);
        } catch (err) {
          // Set an error message if parsing fails
          console.log("err",err)
          setError("Failed to parse XML file. Please ensure the XML structure is correct.");
        }
      };
      
      // Read the file as text
      reader.readAsText(file);
    } else {
      // Set an error message if the file is not a valid XML
      setError("Please upload a valid XML file.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg">
      {/* Label acts as a custom styled button for the file input */}
      <label
        htmlFor="file-upload"
        className="w-full p-3 text-center text-blue-600 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200"
      >
        Select XML File
      </label>
      
      {/* Hidden file input that triggers file selection */}
      <input
        id="file-upload"
        type="file"
        accept=".xml"
        onChange={handleFileChange}
        className="hidden"
      />
      
      {/* Display error message if any */}
      {error && (
        <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
};

export default FileUploader;
