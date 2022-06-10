import styled from "styled-components";
import { countSize, Props } from '../GlobalStyles';

export const Unknown = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${({theight}: Props) => countSize(theight)};
    font-size: 16pt;
`;

export const UserData = styled.div`
    display: flex;
    width: 100%;
    height: ${({theight}: Props) => countSize(theight)};
`;

export const Avatar = styled.div`
    background-image: none;
    background-color: #8856ff;
    width: 200px;
    height: 200px;
`;

export const AccountName = styled.div`
    color: black;
    font-size: 17pt;
`;

