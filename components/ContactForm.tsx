import React from 'react';
import emailjs from "@emailjs/browser";
import { useState, useRef } from 'react';
import { validate } from '../utils/validate';
import Input from "./input";
import Textarea from "./text-area";
import Banner from "./banner";

const ContactForm = () => {
    const form = useRef();
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [success, setSuccess] = useState(false)

    const onChange = (e: { target: { name: any; value: any; }; }) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const closeButtonClicked = () => {
        setSuccess(false)
    }

    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(values)
        const isError = Object.keys(errors).length
        setErrors({ name: '', message: '' })
        setSuccess(false)
        if (isError && isError > 0) {
            setErrors(errors)
            return
        }
        try {
            emailjs.sendForm('service_ey18hlh', 'template_7t834mq', e.target, 'gH8gPEVte3skgnXsY')
                .then((result) => {
                    console.log(result.text);
                    setSuccess(true);
                    setValues({ name: '', message: '', email: '' })

                })
        } catch (error) {
            console.error(error)
        };
    }



    return (

        <div className="w-full h-screen bg-custom-background flex items-center flex-col ">
            <div className={success ? 'block' : 'hidden'}>
                <Banner headline={undefined} text={undefined} width={undefined} maxWidth={undefined} height={undefined} maxHeight={undefined} backgroundColor={undefined} closeButtonClicked={closeButtonClicked}></Banner>
            </div>
            <div className="md:px-3 pt-10 md:w-1/3 ">
                <form ref={form} onSubmit={handleSubmit} className="flex flex-col items-center w-full ">
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