import Input from "./input";
import Textarea from "./text-area";
import React from 'react';
import { useState } from 'react';
import { validate } from '../utils/validate';

const ContactForm = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errors = validate(values)
        const isError = Object.keys(errors).length

        if (isError && isError > 0) {
            setErrors(errors)
            return
        }
        try {
            const res = await fetch('/../lib/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)

            })
            if (!res.ok) {
                setValues({ name: '', message: '', email: '' })
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (

        <div className="w-full h-screen bg-custom-background">
            <div className="px-3 pt-10">
                <form onSubmit={handleSubmit} className="w-1/3 flex flex-col items-center w-full mx-auto">
                    <Input
                        error={!!errors.name}
                        errorMessage={errors.message}
                        value={values.name}
                        onChange={onChange}
                        id="name" name="name"
                        placeholder="name"
                        label="Your Name" />
                    <Input
                        error={!!errors.email}
                        errorMessage={errors.email}
                        value={values.email}
                        onChange={onChange}
                        id="email"
                        name="email"
                        placeholder="youremail@gmail.com"
                        label="Your Email" />
                    <Textarea
                        error={!!errors.message}
                        errorMessage={errors.message}
                        value={values.message}
                        onChange={onChange}
                        id="message"
                        name="message"
                        placeholder="Hi There"
                        label="Your Message" />
                    <button
                        className="w-full py-2 mt-6 text'lg text-white bg-purple-500 rounded-md outline-none active:bg-purple-600 focus:ring-2 focus:ring-purple-400 disabled:bg-opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                    >Submit</button>
                </form>
            </div>
        </div>

    )
}

export default ContactForm;