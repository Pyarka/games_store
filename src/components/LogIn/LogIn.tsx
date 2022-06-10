import React from "react";
import { useForm } from "react-hook-form";
import { setName } from "../UserPage/slices/userState";
import { store } from "../../store/store";
import { Field } from "../GlobalStyles";
import { FieldContainer, FieldLabel, LogInButton, LogInContainer, LogInFormContainer } from "./LogInStyles";

const LogIn = ({type}) => {
    const { register, handleSubmit } = useForm();

    if (type === 'register') {
        return(
            <LogInContainer>
                <LogInFormContainer onSubmit={handleSubmit((data) => {
                    store.dispatch(setName(data.name))
                })}
                    theight={{isPercent: false, value: (window.outerHeight * 0.55)}}
                    twidth={{isPercent: false, value: (window.outerHeight * 0.6)}}>
                    <FieldContainer>
                        <FieldLabel htmlFor='name'>Имя</FieldLabel>
                        <Field type='text'
                        id='name'
                        {...register('name')}
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <FieldLabel htmlFor='accountName'>Название аккаунта</FieldLabel>
                        <Field type='text'
                        id='accountName'
                        {...register('accountName')}
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <FieldLabel htmlFor='mail'>Почта</FieldLabel>
                        <Field type='text'
                        id='mail'
                        {...register('mail')}
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <FieldLabel htmlFor='password'>Пароль</FieldLabel>
                        <Field type='password'
                        id='password'
                        {...register('password')}
                        />
                    </FieldContainer>
                    <LogInButton theight={{isPercent: false, value: 30}}
                        twidth={{isPercent: true, value: 27}}
                        type='submit'>Войти</LogInButton>
                </LogInFormContainer>
                
            </LogInContainer>
        )
    } else {
        return(
            <LogInContainer>
                <LogInFormContainer onSubmit={handleSubmit((data) => null)}
                    theight={{isPercent: false, value: (window.outerHeight * 0.55)}}
                    twidth={{isPercent: false, value: (window.outerHeight * 0.6)}}>
                    <FieldContainer>
                        <FieldLabel htmlFor='accountName'>Название аккаунта</FieldLabel>
                        <Field type='text'
                        id='accountName'
                        {...register('accountName')}
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <FieldLabel htmlFor='password'>Пароль</FieldLabel>
                        <Field type='password'
                        id='password'
                        {...register('password')}
                        />
                    </FieldContainer>
                    <LogInButton theight={{isPercent: false, value: 30}}
                        twidth={{isPercent: true, value: 27}}
                        type='submit'>Войти</LogInButton>
                </LogInFormContainer>
                <span>Нет аккаунта? <a href='/register_page'>Создай его</a></span>
            </LogInContainer>
        )}
}

export default LogIn;