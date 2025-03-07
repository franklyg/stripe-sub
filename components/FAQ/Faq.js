'use client';

const FAQ = ({children}) => {
    return (
        <div className="pt-10">
            <div className="border-b p-2">
                <h2 className="font-bold text-3xl lg:text-5xl tracking-tight flex justify-between items-center">FAQs<span className="block">?</span></h2>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default FAQ;