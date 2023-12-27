import React from "react";
import { StringDecoder } from "string_decoder";
import { StringLiteral } from "typescript";

interface InputProps {
    id: string
    name: string
    label: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
    error: boolean
    errorMessage: string | undefined
}

const Input = ({ id, name, label, placeholder, value, onChange, error, errorMessage, ...props }: InputProps) => {
    return (
        <div className="w-full mb-3">
            <label className="block text-lg" htmlFor={id}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                autoComplete="off"
                type="text"
                id={id}
                name={name}
                placeholder={placeholder}
                className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-purple-500"
                {...props} />
            {error ? <p className="text-red-500 italic text-sm">*{errorMessage}</p> : null}
        </div>
    )
}

export default Input; 