import React from 'react'
import { useForm } from 'react-hook-form'

export const MyReactHookForm = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();


    console.log(watch())


  return (
        <div>
            <h1 className='text-4xl font-medium text-center'>React Hook Form</h1>
            <br />

            <form onSubmit={handleSubmit((data)=>console.log(data))}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2.5 text-sm font-medium text-heading">First name</label>
                        <input type="text" id="first_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" {...register("firstName", {required: true})} />
                        {console.log(errors?.firstName?.type)}
                        <p style={{color:'red'}}>{errors.firstName && 'This feild is required'}</p>
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2.5 text-sm font-medium text-heading">Email</label>
                        <input type="email-" id="last_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Doe" {...register("email",{pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})} />
                        <p style={{color:'red'}}>{errors?.email?.type == 'pattern' && 'Email pattern is wrong'}</p>

                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2.5 text-sm font-medium text-heading">Age</label>
                        <input type="text" id="company" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Flowbite" {...register("age", {required:true, min:18,max:50})} />
                        <p style={{color:'red'}}>{errors?.age?.type == 'required' && 'This feild is required'}</p>
                        <p style={{color:'red'}}>{errors?.age?.type == 'min' && 'Your age must be above than 18'}</p>
                        <p style={{color:'red'}}>{errors?.age?.type == 'max' && 'Your age must be below than 50'}</p>

                  
                    </div>
               
             
                    
                </div>
                <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>

        </div>
  )
}
