const Process  = () => {
    return(
        <section className="process">
            <div className="border-b p-2">
                <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">Our Process</h2>
            </div>
            <div className="p-4 grid grid-cols-12 gap-1 bg-gray-200">
                {/* 
                    Processes:
                    
                    Free Discovery call
                    Subscribe to retainer that suits                    
                    Assign tasks
                    Development
                    Review and feedback
                    Final delivery
                */}
                <div className="col-span-12 lg:col-span-4 text-gray-200 bg-blue-700 rounded-3xl p-4">
                    <p className="text-gray-200 text-3xl">Our process is simple and effective. There are no catches, no hidden fees, and no fluff. Our process is as listed. We will not take you for a ride. Our process is proven and has worked for years.</p>
                </div>
                <div className="grid grid-cols-12 gap-1 col-span-12 lg:col-span-8">
                    <div className="col-span-12 lg:col-span-4 text-gray-200 bg-blue-700 rounded-3xl p-4">
                        <h3 className="font-bold text-3xl lg:text-3xl tracking-tight mb-2">Free Discovery Call</h3>
                        <p className="text-gray-200">We start with a free discovery call to understand your needs and how we can help you.</p>
                    </div>
                    <div className="col-span-12 lg:col-span-4 text-gray-200 bg-blue-700 rounded-3xl p-4">
                        <h3 className="font-bold text-3xl lg:text-3xl tracking-tight mb-2">Subscribe</h3>
                        <p className="text-gray-200">You will then subscribe to the retainer that suits your needs and budget.</p>
                    </div>
                    <div className="col-span-12 lg:col-span-4 text-gray-200 bg-blue-700 rounded-3xl p-4">
                        <h3 className="font-bold text-3xl lg:text-3xl tracking-tight mb-2">Assign tasks</h3>
                        <p className="text-gray-200">Once subscribed, you will be able to assign tasks to us on a collaborative Trello board.</p>
                    </div>
                    <div className="col-span-12 lg:col-span-4 text-gray-200 bg-blue-700 rounded-3xl p-4">
                        <h3 className="font-bold text-3xl lg:text-3xl tracking-tight mb-2">Development</h3>
                        <p className="text-gray-200">We will develop the tasks and provide you with a review and feedback. We create a source controlled environment, via Github.</p>
                    </div>
                    <div className="col-span-12 lg:col-span-4 text-gray-200 bg-blue-700 rounded-3xl p-4">
                        <h3 className="font-bold text-3xl lg:text-3xl tracking-tight mb-2">Review and feedback</h3>
                        <p className="text-gray-200">Once you are happy with the tasks, we will deliver the final product.</p>
                    </div>
                    <div className="col-span-12 lg:col-span-4 text-gray-200 bg-blue-700 rounded-3xl p-4">
                        <h3 className="font-bold text-3xl lg:text-3xl tracking-tight mb-2">Final delivery</h3>
                        <p className="text-gray-200">Once you are happy with the final deliverables, we will publish your newly built updates.</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Process;