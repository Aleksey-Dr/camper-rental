import { createSlice } from '@reduxjs/toolkit';

import { fetchCampers } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        campers: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.campers = action.payload;
            })
            .addCase(fetchCampers.rejected, handleRejected);
    },
});

export default campersSlice.reducer;