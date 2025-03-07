'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import logo from '@/app/icon.png';
import './../app/styles/components/Pricing/styles.css';

// Stripe Plans >> fill in your own priceId & link
export const plans = [
    {
        link: process.env.NODE_ENV === 'development' ? '********' : '',
        priceId: process.env.NODE_ENV === 'development' ? '********' : '',
        price: 2250,
        duration: '/month'
    },
    {
        link: process.env.NODE_ENV === 'development' ? '********' : '',
        priceId: process.env.NODE_ENV === 'development' ? '********' : '',

        price: 1750,
        duration: '/month',
        savings: '(22% OFF)'
    }
];

const Pricing = () => {
    const { data: session } = useSession();
    const [plan, setPlan] = useState(plans[0]);

    return (
        <>
            <section id="pricing" className="our-services">
                <div className="border-b p-2">
                    <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">Our Plans</h2>
                </div>
                <div className="grid grid-cols-12">
                    <div className="py-8 px-4 bg-blue-700 text-gray-200 lg:col-span-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl inline-block px-6 rounded-full bg-gray-200 text-blue-700">theme light</h3>
                            <div className="our-services--buttons-plans flex py-2">
                                <div className="w-1/2">
                                    <input
                                        type="radio"
                                        id="monthly"
                                        name="plan"
                                        value="monthly"
                                        className="hidden"
                                        checked={plan.price === 2250}
                                        onChange={() => setPlan(plans[0])}
                                    />
                                    <label
                                        for="monthly"
                                        className="w-full block p-4 text-center cursor-pointer border border-gray-300 label-checked:bg-red-600"
                                    >
                                        monthly
                                    </label>
                                </div>
                                <div className="w-1/2">
                                    <input
                                        type="radio"
                                        id="quarterly"
                                        name="plan"
                                        value="quarterly"
                                        className="hidden"
                                        checked={plan.price === 1750}
                                        onChange={() => setPlan(plans[1])}
                                    />
                                    <label
                                        for="quarterly"
                                        className="w-full block p-4 text-center cursor-pointer border border-gray-300 label-checked:bg-red-600"
                                    >
                                        quarterly
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="our-services--buttons">

                            <div class="flex py-20">
                                <div className="flex w-2/6">
                                    <p className={`text-9xl tracking-tight font-extrabold`}>
                                        ${plan.price}
                                    </p>
                                    <p className="text-sm tracking-wide text-base-content/80 uppercase font-semibold">{plan.duration}{plan.savings}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="grid lg:col-span-8">
                        <div className="border-b border-b p-4 flex justify-between items-center">
                            <h3 className="font-bold text-3xl lg:text-3xl tracking-tight">What you get</h3>
                            <div className="w-4/6">
                                <div className="space-y-2">
                                    <a
                                        className="btn-block block text-center bg-red-500 text-gray-200 p-4 text-3xl"
                                        target="_blank"
                                        href={
                                            plan.link +
                                            '?prefilled_email=' +
                                            session?.user?.email
                                        }
                                    >
                                        subscribe
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-[.1rem] bg-blue-700">
                            <div className="col-span-3 p-4 lg:col-span-1 bg-gray-200 text-blue-700">
                                <h4 className="font-bold text-3xl lg:text-2xl tracking-tight mb-2">Performance & Optimization</h4>
                                Audits, analytics, page speed improvements, diagnostics, and image optimization
                            </div>
                            <div className="col-span-3 p-4 lg:col-span-1 bg-gray-200 text-blue-700">
                                <h4 className="font-bold text-3xl lg:text-2xl tracking-tight mb-2">Compliance & Integrations</h4>
                                Accessibility compliance, app integrations, metafield/metaobject implementations
                            </div>
                            <div className="col-span-3 p-4 lg:col-span-1 bg-gray-200 text-blue-700">
                                <h4 className="font-bold text-3xl lg:text-2xl tracking-tight mb-2">Content & Updates</h4>
                                Content entry and updates (pages, products, blogs, collections)
                            </div>
                            <div className="col-span-3 p-4 lg:col-span-1 bg-gray-200 text-blue-700">
                                <h4 className="font-bold text-3xl lg:text-2xl tracking-tight mb-2">Content & Updates Custom Development</h4>
                                New section development, updates to existing sections, additional fields, interface improvements
                            </div>
                            <div className="col-span-3 p-4 lg:col-span-1 bg-gray-200 text-blue-700">
                                <h4 className="font-bold text-3xl lg:text-2xl tracking-tight mb-2">Template & Feature Enhancements</h4>
                                Custom page, collection, product, and blog templates, custom feature development
                            </div>
                            <div className="col-span-3 p-4 lg:col-span-1 bg-gray-200 text-blue-700">
                                <h4 className="font-bold text-3xl lg:text-2xl tracking-tight mb-2">Unlimited Revisions</h4>
                                Within the agreed-upon hourly range
                            </div>
                            {/* {
                            [
                                {name: 'NextJS boilerplate'},
                                { name: 'User oauth' },
                                { name: 'Database' },
                                { name: 'Emails' },
                                { name: '1 year of updates' },
                                { name: '24/7 support' }
                            ].map((feature, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] opacity-80 shrink-0"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span>{feature.name} </span>
                                </li>
                            ))} */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="fixed right-8 bottom-8">
                <a
                    href="https://shipfa.st?ref=stripe_pricing_viodeo"
                    className="bg-white font-medium inline-block text-sm border border-base-content/20 hover:border-base-content/40 hover:text-base-content/90 hover:scale-105 duration-200 cursor-pointer rounded text-base-content/80 px-2 py-1"
                >
                    <div className="flex gap-1 items-center">
                        <span>Built with</span>
                        <span className="font-bold text-base-content flex gap-0.5 items-center tracking-tight">
                            <Image
                                src={logo}
                                alt="ShipFast logo"
                                priority={true}
                                className="w-5 h-5"
                                width={20}
                                height={20}
                            />
                            ShipFast
                        </span>
                    </div>
                </a>
            </section> */}
        </>
    );
};

export default Pricing;
