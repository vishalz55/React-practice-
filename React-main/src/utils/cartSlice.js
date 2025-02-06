import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice( {
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // console.log(action.payload.info.id);

            const index = state.items.findIndex(item => item.id === action.payload.info.id);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;