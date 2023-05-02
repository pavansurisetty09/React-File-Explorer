import React, { useState } from "react";
import { FileIcon } from "./assets/FileIcon";
import { FolderIcon } from "./assets/FolderIcon";
// import { faFolder } from "@fortawesome/free-solid-svg-icons";

const FolderExplorer = ({ explorer }) => {
  const [showFiles, setShowFiles] = useState(false);
  console.log(explorer, "explorerData");
  if (explorer?.isFolder) {
    return (
      <div>
        <p
          onClick={() => setShowFiles(!showFiles)}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <span style={{ paddingRight: "5px" }}>{showFiles ? "V" : ">"}</span>
          <FolderIcon />
          {explorer?.name}
        </p>
        <div style={{ marginLeft: "20px" }}>
          {explorer?.items?.map((item, i) => {
            return (
              <div>
                <div style={{ display: showFiles ? "block" : "none" }} key={i}>
                  <FolderExplorer explorer={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <p style={{ width: "100px", display: "flex", alignItems: "center" }}>
        <FileIcon />
        {explorer?.name}
      </p>
    );
  }
};
export default FolderExplorer;
