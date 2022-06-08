import React from "react";
import { HeaderContainer, Logo, SignInButton } from "./HeaderAndFooterStyles";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderContainer height={window.innerHeight}>
            <Logo onClick={() => navigate('/')}>GS</Logo>
            <SignInButton onClick={() => {navigate('/sign_in_page')}}>Вход</SignInButton>
        </HeaderContainer>
    )
}

export const Footer = () => {
    return (
        <footer>footer</footer>
    )
}