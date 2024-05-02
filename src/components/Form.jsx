import React, { useState } from 'react'
import { useForm, FormProvider } from "react-hook-form"
import FormInput from './FormInput'
import * as Realm from "realm-web";


export default function Form() {
    const [openThanks, setOpenThanks] = useState(false)
    const [errorCatch, setErrorCatch] = useState(false)
    const methods = useForm()

    console.log();

    const onSubmit = methods.handleSubmit(data => {
      const app = new Realm.App({ id: import.meta.env.VITE_EMAIL_API_KEY });
      const credentials = Realm.Credentials.emailPassword(import.meta.env.VITE_EMAIL_SECRET, import.meta.env.VITE_EMAIL_KEY);
      app.logIn(credentials).then(response => {
        const mongodb = response.mongoClient("mongodb-atlas");
        const database = mongodb.db("letishery");
        const collection = database.collection("contacts");
        collection.insertOne(data)
      }).catch(
        () => setErrorCatch(true)
      ).finally(
        () => setOpenThanks(true)
      )

      
    })

  

  return (
    <div className='w-full md:w-3/4 lg:w-2/4 '>
      {!openThanks? 
        <FormProvider {...methods}>
          <form className='w-full flex flex-col' onSubmit={(e) => {e.preventDefault()}} noValidate>
            {errorCatch?
            <div className='mb-8 bg-sunglo-200 rounded-full p-4 border border-sunglo-400'><p className='text-dawn-pink-800 '><b>Oh no!</b> Something went wrong, your request couldn't be sent. <br /><br /> Try again later or sent your request directly to <a className='text-sunglo-400 hover:text-sunglo-500 underline transition-colors' href={`mailto:letishery.art@gmail.com?'subject=New request from ${methods.watch('name', false)}'&body=${methods.watch('request', false)}`}>letishery.art@gmail.com</a></p></div>
            :''
            }
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
      :
        <div>
          <h3 className='font-msmadi text-sunglo-400 text-5xl tracking-wide mb-8'>Thank you!</h3>
          <p className='mb-8 text-dawn-pink-800'>Your request has been sent! <br/>I'll review your request and get back to you as soon as possible.</p>
          {/* agregar leti chibi con una cartita aqui ~ */}
        </div>
      }
      
    </div>
    
  )
}
