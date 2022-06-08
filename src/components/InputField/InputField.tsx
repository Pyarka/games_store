import React from "react";
import styled from "styled-components";

export const Field = styled.input`
    height: 20px;
    width: 30%;
    font-size: 16;
    font-weight: 700;
`;

interface InputFieldProps {
    value: string;
    onChange: (newValue: string) => void;
    onBlur: (newValue: string) => void;
    type: "password" | 'text';
}

const InputField = ({value, onChange, onBlur, type}: InputFieldProps) => {
    return (
        <Field type='text'
                onChange={(e) => onChange(e.target.value)}
                onBlur={(e) => onBlur(e.target.value)}
                value={ value ? value : ''}
                placeholder={type === "password" ? 'Пароль' : 'Логин'}/>
    )
}

export default InputField;