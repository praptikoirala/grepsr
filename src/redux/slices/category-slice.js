import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        activeCategory: null,
        category: [],
        categoryCount: []
    },
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        },
        setCategoryCount: (state, action) => {
            state.category.push(action.payload.key)
            state.categoryCount.push(action.payload.count)
        }
    }
})

export default categorySlice.reducer
export const { setActiveCategory, setCategoryCount } = categorySlice.actions
