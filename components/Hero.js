'use client';

import React from "react";

const Hero = ({ title, subtitle }) => {
    return (
        <div className="min-h-[60vh] grid grid-cols-6 items-center bg-blue-700 p-4">
            <div className="text-gray-200 text-left col-span-6 lg:col-span-3">
                <h1 className="text-7xl leading-tight mb-4">{title}</h1>
                <h2 className="text-3xl leading-tight italic">{subtitle}</h2>
                <div className="grid gap grid-cols-2 gap-4">
                    {/* <a href="" className="btn-block block text-center bg-gray-200 text-blue-700 p-4 text-3xl mt-8 rounded-md">View Plans</a> */}
                    <a href="https://fgisonni.typeform.com/to/Q6HHBXr2" className="btn-block block col-span-2 lg:col-span-1 text-center text-gray-200 p-4 text-3xl mt-8 rounded-md border">Schedule a Call</a>
                </div>
            </div>
            <div className="col-span-6 lg:col-start-5 lg:col-span-2 mt-4 lg:mt-0 bg-gray-200 text-blue-700 px-4 py-8 text-left rounded-lg shadow-lg">
                <h2 className="text-3xl leading-tight">Shopify experts at freelancer rates!</h2>
                <h3 className="font-medium text-2xl mt-4 leading-tight">We offer generous retainers that include:</h3>
                <ul className="pl-4 mt-4 ml-4 list-disc">
                    <li className="text-xl tracking-tight mb-2">Performance, Optimization & ADA Compliance</li>
                    <li className="text-xl tracking-tight mb-2">Custom Theme Development</li>
                    <li className="text-xl tracking-tight mb-2">App Integrations</li>
                    <li className="text-xl tracking-tight mb-2">Content & Updates</li>
                    <li className="text-xl tracking-tight mb-2">Template & Feature Enhancements</li>
                    <li className="text-xl tracking-tight mb-2">Unlimited Revisions</li>
                </ul>
                <a href="#pricing" className="btn-block block text-center text-gray-200 bg-blue-700 p-4 text-3xl mt-8 rounded-md">Click For Details</a>
            </div>
            {/* <div>
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="500px" height="500px"><path d="M 22.839844 2.0351562 C 19.659152 1.9484924 16.325547 6.1910156 14.529297 12.720703 L 8.8847656 14.560547 C 8.5177656 14.680547 8.2511719 14.999812 8.2011719 15.382812 L 4.7558594 42.193359 C 4.6888594 42.718359 5.0415 43.204734 5.5625 43.302734 L 29.630859 47.882812 L 31.488281 7.1972656 L 30.376953 7.5585938 C 29.713953 5.1145938 28.473844 3.5775156 26.839844 3.2285156 C 26.344844 3.1205156 25.866344 3.1427656 25.402344 3.2597656 C 24.845344 2.6717656 24.203656 2.266375 23.472656 2.109375 C 23.262469 2.0645 23.05189 2.0409338 22.839844 2.0351562 z M 22.720703 4.0371094 C 22.835859 4.0344238 22.948953 4.0437813 23.056641 4.0664062 C 23.227641 4.1034062 23.392734 4.17925 23.552734 4.28125 C 21.567734 5.97825 20.050047 9.1985469 19.248047 11.185547 L 16.847656 11.966797 C 18.482656 6.9417969 20.993363 4.0773926 22.720703 4.0371094 z M 26.65625 5.2675781 C 27.42425 5.5845781 28.071563 6.6167344 28.476562 8.1777344 L 27.453125 8.5117188 C 27.293125 7.2737188 27.02925 6.1775781 26.65625 5.2675781 z M 24.755859 5.9179688 C 25.120859 6.7669688 25.386484 7.865625 25.521484 9.140625 L 21.791016 10.355469 C 22.804016 8.2054687 23.847859 6.7299688 24.755859 5.9179688 z M 33.482422 7.3964844 L 31.636719 47.806641 L 44.216797 45.023438 C 44.728797 44.910438 45.065234 44.421297 44.990234 43.904297 C 43.389234 32.807297 40.349922 11.701203 40.294922 11.283203 C 40.283922 11.183203 40.25875 11.085188 40.21875 10.992188 C 40.02275 10.542188 39.668313 10.219641 39.195312 10.056641 C 39.103313 10.025641 38.993484 10.007906 38.896484 10.003906 C 38.674484 9.9949062 36.702281 9.8413906 35.863281 9.7753906 C 35.177281 9.0743906 33.860578 7.7328281 33.517578 7.4238281 C 33.506578 7.4128281 33.493422 7.4064844 33.482422 7.3964844 z M 22.71875 18.023438 C 24.78275 18.023438 25.880734 18.672172 25.927734 18.701172 C 26.124734 18.820172 26.213578 19.06125 26.142578 19.28125 L 24.630859 23.941406 C 24.584859 24.083406 24.479797 24.196953 24.341797 24.251953 C 24.201797 24.309953 24.046016 24.298516 23.916016 24.228516 C 23.903016 24.221516 22.63025 23.539063 21.15625 23.539062 C 19.37325 23.539062 19.107422 24.451141 19.107422 24.994141 C 19.107422 25.583141 19.880344 26.166844 20.777344 26.839844 C 22.364344 28.031844 24.537109 29.663453 24.537109 32.939453 C 24.537109 37.043453 21.982219 39.912109 18.324219 39.912109 C 14.164219 39.912109 12.069422 37.320937 11.982422 37.210938 C 11.881422 37.083937 11.848531 36.913813 11.894531 36.757812 L 12.957031 33.185547 C 13.006031 33.022547 13.136781 32.894656 13.300781 32.847656 C 13.463781 32.803656 13.641531 32.840172 13.769531 32.951172 C 13.789531 32.969172 15.726719 34.662109 17.261719 34.662109 C 18.154719 34.662109 18.390625 33.946359 18.390625 33.568359 C 18.390625 32.588359 17.673625 31.991328 16.765625 31.236328 C 15.511625 30.194328 13.953125 28.897031 13.953125 26.082031 C 13.953125 22.201031 16.658609 18.025391 22.599609 18.025391 C 22.639609 18.025391 22.67875 18.023438 22.71875 18.023438 z"/></svg>
            </div> */}
        </div>
    );
};

export default Hero;
