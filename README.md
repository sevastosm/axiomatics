# XML Tree Viewer

## Table of Contents
- [Overview](#Overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Testing](#testing)
- [Project Structure](#project-structure)

## Overview
The XML Tree Viewer is a React application that allows users to upload an XML file, parse it, extract valuable information based on predefined criteria, and display it in a structured, tree-like format. This tool is designed to make working with XML data more accessible and visually intuitive.

## Features
- **XML File Upload:** Users can upload an XML file directly from their system.
- **Valuable Information Extraction:** The application filters out irrelevant nodes and attributes, focusing on important data.
- **Tree Visualization:** The extracted data is presented in a clean, hierarchical tree structure.
- **Responsive Design:** Styled with Tailwind CSS to ensure the application looks great on all devices.

## Technologies
- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** Provides static typing for JavaScript, improving code quality.
- **Tailwind CSS:** A utility-first CSS framework for styling the application.
- **Jest & React Testing Library:** For testing the application.

## Setup
To get started with the XML Tree Viewer, follow these steps:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/xml-tree-viewer.git
2. **Navigate to the project directory:**
   ```bash
   cd xml-tree-viewer
3. **Install dependencies:**
   ```bash
   npm install or yarn

4. **Start the application dev mode:**
   ```bash
   npm run dev or yarn dev    
   
By default, the development server runs on http://localhost:5173
   
5. **Start the application:**
   ```bash
   npm run preview or yarn preview
   
The application runs on http://localhost:4173



6. **Build the project (if needed):**
   ```bash
   npm run build or yarn build

## Testing
**Run tests:**
   ```bash
npm run test or yarn test     


## Project-Structure

The project is organized as follows:

src/
├── components/
│   ├── FileUploader.tsx
│   ├── Tree/
│   │   ├── Tree.tsx
│   │   ├── TreeView.tsx
│   └── Layout/
│       ├── AppContainer.tsx
│       ├── Header.tsx
├── utils/
│   ├── parseXML.ts
├── App.tsx
├── index.tsx
└── index.css
