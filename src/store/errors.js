import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "errors",
    initialState: {
        data: {}
    },
    reducers: {
        getErrors: (errors, action) => {
            errors.data = action.payload.errors;
        }
    }
})

export const {getErrors} = slice.actions;

export default slice.reducer;