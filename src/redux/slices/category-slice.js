import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        activeCategory: null,
        category: [],
        categoryCount: [],
    },
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
        },
        setCategoryCount: (state, action) => {
            const { key, count } = action.payload;

            const existingCountObj = state.categoryCount.find(
                (countObj) => countObj.key === key
            );

            if (existingCountObj) {
                return;
            }

            state.categoryCount.push({ key, count });
        },
    },
});

export default categorySlice.reducer;
export const { setActiveCategory, setCategoryCount } = categorySlice.actions;