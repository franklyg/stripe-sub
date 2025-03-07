import ButtonCustomerPortal from '@/components/ButtonCustomerPortal';
import Pricing from '@/components/Pricing';
import Hero from '@/components/Hero';

import FAQ from '@/components/FAQ/Faq';
import FAQItem from '@/components/FAQ/FaqItem';

import Process from '@/components/Process';

import Content from '@/components/Content';

export default function Page() {
    return (
        <>
            <main className="bg-base-200 min-h-screen">
                <header className="p-4 flex justify-end max-w-7xl mx-auto">
                    <ButtonCustomerPortal />
                </header>
                <div>
                    <Hero title={'We\'re Shopify Developers'} subtitle={'That want to help you get sh*t done.'} />
                </div>
                <Content />
                <Process />
                <Pricing />
                <div>
                    <FAQ>
                        <FAQItem question={'How long do tasks take to complete?'} answer={'Tasks will typically take 1-2 days. Larger tasks will require additional time and we will relay our soonest deadline to you.'} />
                        <FAQItem question={'What is your refund policy'} answer={'We do not offer refunds. Once the subscription is made it is locked in. If you do not require our services, you will need to cancel your subscription. You can come back anytime if we have spots available.'} />
                        <FAQItem question={'How do I assign tasks?'} answer={'We will create a Trello board for you. You will be able to assign tasks, within the services provided in our plan. Each task assigned will be addressed and completed within the 1-2 day timeframe.'} />
                        <FAQItem question={'Who works at [SiteName]'} answer={'[SiteName] is managed by Francesco Gisonni and Stephan Peralta. You will work directly with either developer to help you accomplish the tasks you'} />
                    </FAQ>
                </div>
            </main>
        </>
    );
}
