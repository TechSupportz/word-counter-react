import { useState, useEffect } from "react"
import { updateWordCount } from "../app/slices/counter"
import { updateCharCount } from "../app/slices/counter"
import { useAppSelector } from "../hooks/useAppSelector"
import { useAppDispatch } from "../hooks/useAppDispatch"

const TextInput = () => {
	const dispatch = useAppDispatch()

	const [input, setInput] = useState("")
	const ignoreCitation = useAppSelector((state) => state.counter.ignoreCitation)
	const autoSave = useAppSelector((state) => state.counter.autoSave)

	useEffect(() => {
		setInput(localStorage.getItem("input") || "")
		localStorage.setItem("input", input)
	}, [])

	useEffect(() => {
		dispatch(updateWordCount(input))
		dispatch(updateCharCount(input))
	}, [input, ignoreCitation, autoSave])

	useEffect(() => {
		autoSave ? localStorage.setItem("input", input) : localStorage.removeItem("input")
	}, [input, autoSave])

	return (
		<div className="flex h-[50vh] justify-center mx-4 mt-7">
			<textarea
				placeholder="Start typing to start counting :D"
				className="w-full h-full rounded-lg bg-transparent border-blue-300 dark:border-slate-800 border-2 font-arial text-sm resize-none"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</div>
	)
}

export default TextInput
