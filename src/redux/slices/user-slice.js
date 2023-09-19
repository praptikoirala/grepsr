import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        authUser: null
    },
    reducers: {
        setUser: (state, action) => {
            state.authUser = action.payload
        },
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer