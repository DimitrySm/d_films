import React, { ChangeEvent } from 'react'

type InputBlockPropsType = {
    name?: string
    type: string,
    value: string | number,
    label: string,
    placeholder?: string,
    children?: JSX.Element | JSX.Element[] | "",
    disabled?: boolean,
    isFullWidth?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onKeyPress?: () => void,
}

const InputBlock = (props: InputBlockPropsType) => {
    const { name, type, value, label, children, isFullWidth, disabled, onKeyPress, onChange, placeholder } = props;

    return (
        <div className={`mb-3 ${isFullWidth ? "fw-bold" : "col-md-6"}`}>
            <label className="form-label">{label}</label>
            <input
                className="form-control"
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                type={type}
                name={name ?? props.label.toLowerCase()}
                disabled={disabled}
                placeholder={placeholder ?? label}
            />
            {children}
        </div>
    )
}

export default InputBlock