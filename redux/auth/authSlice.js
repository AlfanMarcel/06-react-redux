import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin(state, action) {
            if (action && action.payload && action.payload.isLogin !== 'undefined') {
                state.isLogin = action.payload.isLogin;
            }
        }
    },
})

export const { setLogin } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;

// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//    name: 'auth',
//    initialState: {
//       isLogin: false, // Pastikan Anda menginisialisasi isLogin dengan nilai yang sesuai
//    },
//    reducers: {
//       setLogin(state, action) {
//          state.isLogin = action.payload.isLogin;
//       },
//    },
// });

// export const { setLogin } = authSlice.actions;
// export default authSlice.reducer;
