import React, { useEffect, useState } from 'react'

export const RestoreForm = () => {



    const [formData,setFormData] = useState(JSON.parse(localStorage.getItem('formData')));






    console.log(formData)

    useEffect(()=>{
        localStorage.setItem('formData',JSON.stringify(formData));
    },[formData])



    return (
        <div>
            <h1 className='text-4xl font-medium text-center'>Restore Forms</h1>
            <br />

            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2.5 text-sm font-medium text-heading">First name</label>
                        <input type="text" id="first_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required value={formData?.firstName} onChange={(e)=> setFormData({...formData, firstName: e.target.value})} />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2.5 text-sm font-medium text-heading">Last name</label>
                        <input type="text" id="last_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Doe" required value={formData?.lastName} onChange={(e)=> setFormData({...formData,lastName:e.target.value})} />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2.5 text-sm font-medium text-heading">Age</label>
                        <input type="text" id="company" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Flowbite" required value={formData?.age} onChange={(e)=> setFormData({...formData,age:e.target.value})} />
                  
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2.5 text-sm font-medium text-heading">Age</label>
                        <input type="file" id="company" onChange={(e)=> setFormData({...formData,img:URL.createObjectURL(e.target.files[0])})} />
                    </div>
                    <div>
                        <img src={formData?.img} width={100} />
                    </div>
                    
                </div>
                <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>

        </div>
    )
}
