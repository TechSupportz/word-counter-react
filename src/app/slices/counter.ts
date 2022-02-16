import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import type { RootState } from "../store"

interface CounterState {
	wordCount: number
	charCount: number
	ignoreCitation: boolean
	autoSave: boolean
}

export const CounterSlice = createSlice({
	name: "counter",
	initialState: {
		wordCount: 0,
		charCount: 0,
		ignoreCitation: false,
		autoSave: false,
	} as CounterState,
	reducers: {
		updateWordCount: (state, action: PayloadAction<string>) => {
			state.ignoreCitation && (action.payload = action.payload.replace(/ *\([^)]*\) */g, ""))

			const wordArray = action.payload
				.replace(/\n/g, " ")
				.split(" ")
				.filter((i) => i !== "")

			state.wordCount = wordArray.length
		},
		updateCharCount: (state, action: PayloadAction<string>) => {
			state.ignoreCitation && (action.payload = action.payload.replace(/ *\([^)]*\) */g, ""))

			const charArray = action.payload
				.replace(/\n/g, "")
				.split("")
				.filter((i) => i !== "")

			state.charCount = charArray.length
		},
		toggleIgnoreCitation: (state) => {
			state.ignoreCitation = !state.ignoreCitation
		},
		toggleAutoSave: (state) => {
			state.autoSave = !state.autoSave
			localStorage.setItem("autoSave", state.autoSave ? "true" : "false")
		},
	},
})

export const { updateWordCount, updateCharCount, toggleIgnoreCitation, toggleAutoSave } =
	CounterSlice.actions
export default CounterSlice.reducer
