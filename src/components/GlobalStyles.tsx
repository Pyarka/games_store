import styled from "styled-components";

interface SizeProps {
    isPercent: boolean;
    value: number;
}

export interface Props {
    theight?: SizeProps;
    twidth?: SizeProps;
    bgColor?: string;
    textColor?: string;
    fontSize?: number;
    fontWeight?: number | string;
}

export const countSize = (props: SizeProps = {isPercent: false, value: 100}) => {
    return props.isPercent ? `${props.value}%` : `${props.value}px`;
}

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    height: ${({theight}: Props) => countSize(theight)};
    width: ${({twidth}: Props) => countSize(twidth)};
    background: ${({bgColor = '#000'}: Props) => `${bgColor}`};
    color: ${({textColor = '#fff'}: Props) => `${textColor}`};
    font-size: ${({fontSize = 16}: Props) => `${fontSize}pt`};
    font-weight: ${({fontWeight = 600}: Props) => `${fontWeight}`};
`;

export const Field = styled.input`
    border: 0px;
    height: 30px;
    width: auto;
    font-size: ${({fontSize = 16}: Props) => `${fontSize}`};
    font-weight: ${({fontWeight = 600}: Props) => `${fontWeight}`};
`;