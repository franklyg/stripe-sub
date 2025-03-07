'use client';

import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
    
    const [selectedFAQ, setSelectedFAQ] = useState(false);
    
    return (
        <div className="border-b p-4" onClick={() => setSelectedFAQ(!selectedFAQ)}>
            <div>
                <h3 className="font-bold text-3xl lg:text-3xl tracking-tight">{question}</h3>
            </div>
            <div className={`${selectedFAQ ? 'block' : 'hidden'} pt-4`}>
                <p>{answer}</p>
            </div>
        </div>
    )   
}

export default FAQItem;