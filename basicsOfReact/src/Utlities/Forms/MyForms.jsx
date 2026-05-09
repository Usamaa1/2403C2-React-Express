import React, { useState } from 'react'

export const MyForms = () => {



    const [zain,setZain] = useState();



    console.log("zain value",zain)



    return (
        <div>
            <h1 className='text-4xl font-medium text-center'>My Forms</h1>
            <br />

            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2.5 text-sm font-medium text-heading">First name</label>
                        <input type="text" id="first_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required onChange={(e)=> setZain({...zain, firstName: e.target.value})} />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2.5 text-sm font-medium text-heading">Last name</label>
                        <input type="text" id="last_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Doe" required  onChange={(e)=> setZain({...zain,lastName:e.target.value})} />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2.5 text-sm font-medium text-heading">Age</label>
                        <input type="text" id="company" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Flowbite" required  onChange={(e)=> setZain({...zain,age:e.target.value})} />
                    </div>
                    
                </div>
                <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>

        </div>
    )
}
