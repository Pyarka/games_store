import styled from "styled-components";
import { Button } from "../GlobalStyles";
import { Props } from '../GlobalStyles';

export const LogInContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
`;

export const LogInFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    height: ${({theight = {isPercent: false, value: 100}}: Props) => theight.isPercent ? `${theight.value}%` : `${theight.value}px`};
    width: ${({twidth = {isPercent: false, value: 100}}: Props) => twidth.isPercent ? `${twidth.value}%` : `${twidth.value}px`};
`;

export const LogInButton = styled(Button)`
    
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
`;

export const FieldLabel = styled.label`
    
`