import "./styles.css";
import React, { useState } from "react";
import FolderExplorer from "./components/FolderExplorer";

export default function App() {
  const [data, setData] = useState({
    name: "root",
    isFolder: true,
    items: [
      {
        name: "src",
        isFolder: true,
        items: [
          {
            name: "assets",
            isFolder: false
          }
        ]
      },
      {
        name: "images",
        isFolder: true,
        items: [
          {
            name: "images.jpg",
            isFolder: false
          }
        ]
      }
    ]
  });
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <FolderExplorer explorer={data} />
    </div>
  );
}
