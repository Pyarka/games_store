import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store';

interface UserState {
    name: string | null,
    accountName: string,
    mail: string,
    games: []
}

const initialState: UserState = {
    name: 'неизвестный',
    accountName: '',
    mail: '',
    games: [],
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, newState: PayloadAction<UserState>) => {
            state = newState.payload;
        },
        setName: (state, name: PayloadAction<string>) => {
            state.name = name.payload;
        },
        setAccountName: (state, accountName: PayloadAction<string>) => {
            state.accountName = accountName.payload;
        },
        setMail: (state, mail: PayloadAction<string>) => {
            state.mail = mail.payload;
        }
    }
})

export const { setName } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user;

export default userSlice.reducer;