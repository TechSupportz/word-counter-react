import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface CounterState {
	wordCount: number
	charCount: number
}

export const CounterSlice = createSlice({
	name: "counter",
	initialState: {
		wordCount: 0,
		charCount: 0,
	} as CounterState,
	reducers: {
		updateWordCount: (state, action: PayloadAction<string>) => {
			let wordArray = action.payload
				.replace(/\n/g, " ")
				.split(" ")
				.filter((i) => i !== "")

			state.wordCount = wordArray.length
		},
		updateCharCount: (state, action: PayloadAction<string>) => {
			let charArray = action.payload
				.replace(/\n/g, "")
				.split("")
				.filter((i) => i !== "")

			state.charCount = charArray.length
		},
	},
})

export const { updateWordCount, updateCharCount } = CounterSlice.actions
export default CounterSlice.reducer
