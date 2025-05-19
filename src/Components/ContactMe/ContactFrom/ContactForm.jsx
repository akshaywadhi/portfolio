import React, { useEffect, useState } from 'react'
import './ContactForm.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function ContactForm() {

const [name, setName ] = useState('')
const [fname, setFname ] = useState('')
const [email, setEmail ] = useState('')
const [comment, setComment ] = useState('')

const {register, reset, handleSubmit} = useForm();

const [isSuccess, setIsSuccess] = useState(false);
const [result, setResult] = useState(null);
const accessKey = "17be182f-b4e2-4fa1-8666-d26c9e77aacf";

const { submit: onSubmit } = useWeb3Forms({
  access_key: accessKey,
  settings: {
    from_name: "Enquiry On akshaywadhi.in",
    subject: "New Contact Message from your Website",
    // ... other settings
  },
  onSuccess: (msg, data) => {
    setIsSuccess(true);
    setResult(msg);
    reset();
  },
  onError: (msg, data) => {
    setIsSuccess(false);
    setResult(msg);
  },
});
  


  return (
    <div className='contact-form-content'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='name-container'>
                <input type='text' placeholder='Enter Your Name'  {...register("name", { required: true })}/>
               
            </div>
            <input type='email' placeholder='Enter Your Email' {...register("email", { required: true })}/>
            <textarea type='text'  placeholder='Message' {...register("message", { required: true })}/>
            <button type='submit'>SEND</button>
        </form>
        <div style={{textAlign: "center"}}>{result}</div>
      
    </div>
  )
}
