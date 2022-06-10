import React from 'react'
import { useState } from 'react'
const HelloForm = () => {
    const [contact, setContact] = useState({
        fName : "",
        lName : "",
        email : ""
    })
    const handleChange =(event)=>{
        const {name , value } = event.target; // destructuring 
        setContact((prevValue)=>{
            if(name =="fName"){
                return{
                    fName:value,
                    lName: prevValue.lName,
                    email: prevValue.email
                }
            }
            else if(name =="lName"){
                return{
                    fName:prevValue.fName,
                    lName:value,
                    email:prevValue.email
                }
            }
            else if(name =="email"){
                return{
                    fName:prevValue.fName,
                    lName: prevValue.lName,
                    email: value
                }
            }
        })
        console.log("fName:",contact.fName ,"lName :",contact.lName ,"email:", contact.email)
    }
  return (
    <div className='py-52'> 
        <h1 className='text-center font-serif text-4xl py-1'>Hello {contact.fName}  {contact.lName}</h1>
        <p className='text-center'>{contact.email}</p>
        <div className="flex  flex-col space-y-2  mt-1 w-1/5 mx-auto">
            <input type="text" onChange={handleChange}  name='fName' value={contact.fName} placeholder='First Name' className=' text-center border-2 font-serif text-lg py-1 border-solid rounded-md'/>
            <input type="text" onChange={handleChange}  name='lName' value={contact.lName} placeholder='Last Name' className='border-2 text-center border-solid rounded-md font-serif text-lg py-1' />
            <input type="text" onChange={handleChange}  name='email' value={contact.email} placeholder='Email' className='border-2 border-solid text-center rounded-md font-serif text-lg py-1'/>
            <button className='border-2 border-solid text-center rounded-md font-serif text-lg py-1'>Submit</button>
        </div>
    </div>
  )
}

export default HelloForm