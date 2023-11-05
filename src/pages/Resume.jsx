import * as React from "react";
import { PDFObject } from "react-pdfobject";

// import my resume
import myResume from "../assets/public/huy-resume.pdf";

if (PDFObject.supportsPDFs) {
  console.log("Yay, this browser supports inline PDFs.");
} else {
  console.log("Boo, inline PDFs are not supported by this browser");
}

export default function Resume() {
  return (
    <div className="main">
      <h1>Resume</h1>
      {/* embedded pdf viewer */}
      <div className="pdfDiv">
        <PDFObject url={myResume} />
      </div>
    </div>
  );
}
