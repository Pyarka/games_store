import React from 'react';
import { AccountName, Avatar, Unknown, UserData } from './UserPageStyles';
import { useAppSelector as select } from '../../store/hooks';

const UserPage = () => {
    const state = select((state) => state)

    if (state.user.name === 'неизвестный') {
        return (
            <Unknown theight={{isPercent: false, value: window.outerHeight * 0.8}}>
                <span>Вы ещё не вошли в свой аккаунт</span>
            </Unknown>
        )
    }

    return (
        <UserData theight={{isPercent: false, value: window.innerHeight * 0.8}}>
            <Avatar/>
            <AccountName>{state.user.accountName}</AccountName>
        </UserData>
    )
}

export default UserPage;