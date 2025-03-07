const Content = () => {
    return(
        <section className="content">
            <div className="px-4 py-10 grid grid-cols-3">
                <div className="col-span-1">
                    <h2 className="text-5xl font-bold">Who is [SiteName]</h2>
                </div>
                <div className="col-start-3 ">
                    <p className="text-3xl mb-4">[SiteName] is managed by Francesco Gisonni and Stephan Peralta. They collectivelty hold 15 years of experince working in the Shopify ecommerce space.</p>
                    <p className="text-3xl">They are a dream team having worked with over 50 merchants combined specializing all areas listed in <a href="/" className="underline">our plans</a>.</p>
                </div>
            </div>      
            <div className="grid grid-cols-3 gap-[.1rem] bg-blue-700 py-[.1rem]">
                <div className="col-start-1 bg-gray-200 text-blue-700 px-4 py-10">
                    <h3 className="text-3xl font-bold">Francesco Gisonni</h3>
                    <h4 className="mb-4">Web Developer</h4>
                    <p className="text-3xl mb-4">Francesco Gisonni is a web developer with a decade and a half of experience. He has been working with Shopify since Shopify 1.0, working closely with Shopify merchants and agencies. He was worked with brands like NVGTN, Et Ochs, Amur, and Lomi. </p>
                </div>
                <div className="col-start-2 bg-gray-200 text-blue-700 px-4 py-10">
                    <h3 className="text-3xl font-bold">Stephan Peralta</h3> 
                    <h4 className="mb-4">Frontend Developer/Designer</h4> 
                    <p className="text-3xl mb-4">[SiteName] is managed by Francesco Gisonni and Stephan Peralta. They collectivelty hold 15 years of experince working in the Shopify ecommerce space.</p>
                </div>
            </div>      
        </section>
    )
}

export default Content;