import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        value: [],
        search: [],
    },
    reducers: {
        changeFilter(state, action) {
            state.value.push(action.payload);
        },
        submitFilter(state) {
            state.search = state.value;
        },
    },
});

export const { changeFilter, submitFilter } = filterSlice.actions;
export default filterSlice.reducer;