import * as React from 'react'
import { PDFObject } from 'react-pdfobject'

if(PDFObject.supportsPDFs){
  console.log("Yay, this browser supports inline PDFs.");
} else {
  console.log("Boo, inline PDFs are not supported by this browser");
}

export default function Resume() {
  return (
    <div className="main">
      <h1>Resume</h1>
      <div className='pdfDiv'>
        <PDFObject url="./src/assets/huy-resume.pdf"/>
      </div>
    </div>
  );
}