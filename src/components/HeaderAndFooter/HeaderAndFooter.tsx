import React from "react";
import { HeaderContainer, Logo, SignInButton } from "./HeaderAndFooterStyles";
import { useNavigate } from "react-router-dom";
import { useAppSelector as select } from '../../store/hooks';

export const Header = ({isSigningIn = false}) => {
    const navigate = useNavigate();
    const state = select((state) => state)

    return (
        <HeaderContainer height={window.innerHeight}>
            <Logo onClick={() => navigate('/')}>GS</Logo>
            {
                state.user.name === 'неизвестный'
                    ? isSigningIn ? null : <SignInButton onClick={() => {navigate('/log_in_page')}}>Вход</SignInButton>
                    : isSigningIn ? null : <SignInButton onClick={() => {navigate('/user')}}>Кабинет</SignInButton>
            }
        </HeaderContainer>
    )
}

export const Footer = () => {
    return (
        <footer>footer</footer>
    )
}