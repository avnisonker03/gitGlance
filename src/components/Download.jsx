import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadButton = ({ fileName }) => {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownload = () => {
        setIsGenerating(true);

        const element = document.getElementById('capture');
    
        html2canvas(element, {
            scrollY: -window.scrollY,
            logging: false,
            scale: 2,
            useCORS: true, // Use CORS to load images
            allowTaint: true, // Allow images from different origins
            imageTimeout: 15000 // Increase timeout for loading images
        }).then(canvas => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);

            pdf.save(fileName);
            setIsGenerating(false);
        }).catch(error => {
            console.error("Error capturing PDF:", error);
            setIsGenerating(false);
        });
    };
    

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownload} disabled={isGenerating}>
            {isGenerating ? "Generating PDF..." : "Download as PDF"}
        </button>
    );
};

export default DownloadButton;


