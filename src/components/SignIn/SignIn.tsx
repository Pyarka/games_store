import React, { useState } from "react";
import InputField from "../InputField/InputField";
import { SignInContainer } from "./SignInStyles";

const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return(
        <SignInContainer>
            <InputField value={login}
                    onChange={(value) => setLogin(value)}
                    onBlur={(value) => setLogin(value)}
                    type='text'/>
        <InputField value={password}
                    onChange={(value) => setPassword(value)}
                    onBlur={(value) => setPassword(value)}
                    type='password'/>
        </SignInContainer>
        
    )
}

export default SignIn;