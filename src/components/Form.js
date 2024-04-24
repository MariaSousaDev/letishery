import React, { useState } from 'react'
import { useForm, FormProvider } from "react-hook-form"
import FormInput from './FormInput'

export default function Form() {
    const methods = useForm()

    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
    })


  return (
    <FormProvider {...methods}>
          <form className='w-3/4 flex flex-col' onSubmit={(e) => {e.preventDefault()}} noValidate>
            <FormInput 
              label="company" 
              id="company" 
              type="text" 
              placeholder="" 
              validation={
                {maxLength: {
                  value:30,
                  message: "Company name is too long"
                }}
              }  
            />
            <FormInput 
              label="name" 
              id="name" 
              type="text" 
              placeholder="" 
              validation={
                {required: {
                  value:true,
                  message: "Name is required"
                }}
              }  
            />
            <FormInput 
              label="email" 
              id="email" 
              type="email" 
              placeholder="" 
              validation={
                {required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                }}
              }  
            />
            <FormInput 
              label="request" 
              id="request" 
              type="textarea" 
              placeholder="" 
              validation={
                {required: {
                  value:true,
                  message: "Request is required"
                }}
              }  
            />
        <input className='block px-6 py-2 border b-1 rounded-full m-2 bg-white text-sunglo-400 border-sunglo-200 self-center hover:cursor-pointer mt-8' type="submit" value="Submit" onClick={onSubmit} />
        </form>
    </FormProvider>
  )
}
