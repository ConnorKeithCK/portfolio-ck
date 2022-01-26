import React from "react";
import ResumeStyles from '../styles/Resume.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
import MyResume from '../assets/Connor_Keith_Portfolio.pdf'
import Window from '../components/Window'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {
    return (
            <Window windowContent={
                <Document file={MyResume} className={ResumeStyles['resume-wrapper']} onLoadSuccess={() => console.log('yeehee')}>
                    <Page width={1000} className={ResumeStyles['resume']} pageNumber={1}/>
                </Document> }>
            </Window>
    )
}

export default Resume;