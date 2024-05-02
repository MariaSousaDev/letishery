import React from 'react'
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError } from '../utils/findInputError';
import { isFormInvalid } from '../utils/isFormInvalid';
import { LiaAsteriskSolid } from "react-icons/lia";
import { IoAlert } from "react-icons/io5";
import { framerError } from '../utils/framerData';

export default function FormInput({label, type, id, placeholder, validation}) {
    const {register, formState: {errors}} = useFormContext()

    const inputError = findInputError(errors, id)
    const isInvalid = isFormInvalid(inputError)

    const isRequired = () => { 
        return validation.required !== undefined ? <LiaAsteriskSolid size={"0.7rem"} className='inline-block mb-4 ml-1 fill-[#cf3d33]'/> : false
    }

  return (
        <div 
            className='flex flex-col md:flex-row gap-6 md:items-center text-left py-6 border-t border-t-dawn-pink-200 last-of-type:border-b last-of-type:border-b-dawn-pink-200 '>
            <label className={`capitalize basis-1/4 text-sunglo-800 opacity-80`} htmlFor={id}>{label}{isRequired()}</label>
            <div className='basis-3/4'>
                    {
                        (type === "textarea") ? 
                        <textarea 
                            className='block  border text-dawn-pink-800 border-sunglo-100 p-4 rounded-lg w-full' 
                            name={id} 
                            id={id} 
                            placeholder={placeholder} 
                        {...register(id, validation)} 
                        /> :
                        <input
                            className='block border text-dawn-pink-800 border-sunglo-100 p-4 rounded-lg w-full'
                            name={id}
                            id={id}
                            type={type}
                            placeholder={placeholder}
                            {...register(id, validation)}
                        /> 

                    }
                <AnimatePresence mode="wait" initial={false}>
                {isInvalid && (
                    <InputError
                        // @ts-ignore
                        message={inputError.error.message}
                        // @ts-ignore
                        key={inputError.error.message}
                    />
                )}
                </AnimatePresence>
                </div>
        </div>
  )
}

const InputError = ({ message }) => {
    return (
        <motion.p
            className="flex items-center gap-1 px-2 text-sm text-sunglo-500 border-t-red-500 rounded-md mt-3"
            {...framerError}
        >   <IoAlert size={"1rem"} className='stroke-[#cf3d33]' />
            {message}
        </motion.p>
    )
}
