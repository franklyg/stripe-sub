'use client';

import React from "react";

const Hero = ({ title, subtitle }) => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-blue-700">
            <div className="text-gray-200 p-8 text-center">
                <h1 class="text-5xl leading-tight mb-4">{title}</h1>
                <h2 class="text-3xl leading-tight">{subtitle}</h2>
            </div>
        </div>
    );
};

export default Hero;
