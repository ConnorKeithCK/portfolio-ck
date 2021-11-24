import React from "react";
import ResumeStyles from '../styles/Resume.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
import MyResume from '../assets/Connor_Keith_Portfolio.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {
    return (
        <div className={ResumeStyles['wrapper']}>
                <Document file={MyResume} className={ResumeStyles['resume-wrapper']} onLoadSuccess={() => console.log('yeehee')}>
                    <Page width={1500} className={ResumeStyles['resume']} pageNumber={1}/>
                </Document>
        </div>
    )
}

export default Resume;