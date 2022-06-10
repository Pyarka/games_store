import styled from "styled-components";

// СТИЛИ HEADER
export const HeaderContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: ${({height}: {height: number}) => `${height * 0.1}px`};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    background: #000;
    height: 100%;
    width: auto;
    color: #fff;
    font-size: xxx-large;
    font-weight: 400;
`;

export const Title = styled.div`
    
`;

export const SignInButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    background: #000;
    height: 100%;
    width: auto;
    color: #fff;
    font-size: large;
`


// СТИЛИ FOOTER