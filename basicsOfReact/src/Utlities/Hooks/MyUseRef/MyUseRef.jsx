import React, { useRef } from 'react'

export const MyUseRef = () => {


    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const ageRef = useRef();



    const formSubmit = (e)=>{
        e.preventDefault()
        console.log(firstNameRef.current.value)
        console.log(lastNameRef.current.value)
        console.log(ageRef.current.value)
    }



  return (
    <div>
        <h1 className='text-4xl font-medium text-center'>My UseRef</h1>

 <br />

            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2.5 text-sm font-medium text-heading">First name</label>
                        <input type="text" id="first_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required ref={firstNameRef}  />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2.5 text-sm font-medium text-heading">Last name</label>
                        <input type="text" id="last_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Doe" required ref={lastNameRef}  />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2.5 text-sm font-medium text-heading">Age</label>
                        <input type="text" id="company" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Flowbite" required ref={ageRef}  />
                    </div>
                    
                </div>
                <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" onClick={formSubmit} >Submit</button>
            </form>




    </div>
  )
}
