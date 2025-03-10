const Content = () => {
    return(
        <section className="content">
            <div className="px-4 py-10 grid grid-cols-3">
                <div className="col-span-3 lg:col-span-1">
                    <h2 className="text-5xl font-bold mb-4">Who is linefortyeight?</h2>
                </div>
                <div className="col-span-3 lg:col-start-3">
                    <p className="text-3xl mb-4">Linefortyeight is managed by Francesco Gisonni and Stephan Peralta. They collectivelty hold <strong>15 years</strong> of experince working in the Shopify ecommerce space.</p>
                    <p className="text-3xl mb-4">They are a dream team having worked with over 50 merchants combined specializing all areas listed in <a href="/" className="underline">our plans</a>.</p>
                    <p className="text-3xl mb-4">We ONLY have <strong>10</strong> available retainers per month. Once we are fully booked, you will have to wait for the next available slot.</p>
                </div>
            </div>      
            <div className="grid grid-cols-3 gap-[.1rem] bg-blue-700 py-[.1rem]">
                <div className="col-span-3 lg:col-span-1 lg:col-start-1 bg-gray-200 text-blue-700 px-4 py-10">
                    <h3 className="text-3xl font-bold">Francesco Gisonni</h3>
                    <h4 className="mb-4">Web Developer</h4>
                    <p className="text-3xl mb-4">Francesco Gisonni is a web developer with a decade and a half of experience. He has been working with Shopify since Shopify 1.0, working closely with Shopify merchants and agencies. He was worked with brands like NVGTN, Et Ochs, Amur, and Lomi. </p>
                </div>
                <div className="col-span-3 lg:col-span-1 lg:col-start-2 bg-gray-200 text-blue-700 px-4 py-10">
                    <h3 className="text-3xl font-bold">Stephan Peralta</h3> 
                    <h4 className="mb-4">Frontend Developer/Designer</h4> 
                    <p className="text-3xl mb-4">line48 is managed by Francesco Gisonni and Stephan Peralta. They collectivelty hold 15 years of experince working in the Shopify ecommerce space.</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 px-4 py-10">
                <div className=" col-span-3lg:col-span-1">
                    <h2 className="text-5xl font-bold mb-4">We are more than just developers</h2>
                </div>
                <div className="col-span-3 lg:col-start-3">
                    <p className="text-3xl mb-4">Before development, we know strong relationships with our clients is most important. We want to give you less worry, and more results.</p> 
                    <p className="text-3xl mb-4">So much so, our client first approach has been focused on making our process simple for everyone. We offer affordable <strong>flat</strong> rates, <strong>50% less</strong> than your typical agency. We are Shopify theme developers and designers who are passionate about providing the best product and solutions for your store.</p>
                    <p className="text-3xl">If you want to know more about what our plans cost and include click <a href="/" className="underline">here</a>.</p>
                </div>
            </div>      
        </section>
    )
}

export default Content;