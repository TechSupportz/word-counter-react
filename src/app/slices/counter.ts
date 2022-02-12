import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface CounterState {
	wordCount: number
	charCount: number
}

const initialState: CounterState = {
	wordCount: 0,
	charCount: 0,
}

export const CounterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		updateWordCount: (state, action: PayloadAction<string>) => {
			let wordArray: string[] = action.payload
				.replace(/\n/g, " ")
				.split(" ")
				.filter((i) => i !== "")

			state.wordCount = wordArray.length
		},
		updateCharCount: (state, action: PayloadAction<string>) => {
			let charArray: string[] = action.payload
				.replace(/\n/g, "")
				.split("")
				.filter((i) => i !== "")

			state.charCount = charArray.length
		},
	},
})

export const { updateWordCount, updateCharCount } = CounterSlice.actions
export default CounterSlice.reducer
