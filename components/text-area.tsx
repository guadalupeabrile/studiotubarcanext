import React from "react";

interface TextAreaProps {
    id: string
    name: string
    label: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
    error: boolean
    errorMessage: string | undefined
}

const Textarea = ({ id, name, label, placeholder, value, onChange, error, errorMessage, ...props }: TextAreaProps) => {
    return (
        <div className="w-full mb-3">
            <label className="block text-lg" htmlFor={id}>{label}</label>
            <textarea
                autoComplete="off"
                rows={5}
                id={id}
                name={name}
                placeholder={placeholder}
                style={{ resize: 'none' }}
                value={value}
                onChange={onChange}
                className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-purple-500"
                {...props}></textarea>
            {error ? <p className="text-red-500 italic text-sm">*{errorMessage}</p> : null}
        </div>
    )
}

export default Textarea;