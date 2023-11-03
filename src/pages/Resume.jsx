import * as React from 'react'
import { PDFObject } from 'react-pdfobject'

export default function Resume() {
  return (
    <div className="main">
      <h1>Resume</h1>
        <PDFObject url="src\assets\huy-resume.pdf"/>
    </div>
  );
}