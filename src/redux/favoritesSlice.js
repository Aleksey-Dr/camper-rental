import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
        favoritesIds: [],
    },
    reducers: {
        changeFavorites(state, action) {
            const listId = [];
            state.favorites.map(item => listId.push(item._id));
            const contain = listId.indexOf(action.payload._id)
            if(listId.includes(action.payload._id)) {
                state.favorites.splice(contain, 1);
                state.favoritesIds = state.favoritesIds.filter(id =>
                    id !== action.payload._id
                );
            } else {
                state.favorites.push(action.payload);
                state.favoritesIds.push(action.payload._id);
            }
        },
    },
});

export const { changeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;