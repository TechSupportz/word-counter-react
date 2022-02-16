import { useState, useEffect } from "react"
import { CounterSlice } from "../app/slices/counter"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector"
import Options from "./Options"

const Counter = () => {
	const wordCount = useAppSelector((state) => state.counter.wordCount)
	const charCount = useAppSelector((state) => state.counter.charCount)

	return (
		<div className="grid grid-cols-2 gap-x-2 justify-items-center bg-blue-light dark:bg-blue-dark rounded-lg shadow-lg shadow-blue-light/60 dark:shadow-blue-dark/50 h-2/5 py-5 px-3 mx-6">
			<div className="text-center">
				<p className="font-bold text-5xl">{wordCount}</p>
				<p className="font-semibold text-2xl">Words</p>
			</div>
			<div className="text-center">
				<p className="font-bold text-5xl">{charCount}</p>
				<p className="font-semibold text-2xl">Chars</p>
			</div>
			<div className="justify-self-start col-span-2 lg:hidden">
				<Options />
			</div>
			
		</div>
	)
}

export default Counter
