import { useState, useEffect } from "react"
import { CounterSlice } from "../app/slices/counter"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector"
import Options from "./Options"

const Counter = () => {
	const wordCount = useAppSelector((state) => state.counter.wordCount)
	const charCount = useAppSelector((state) => state.counter.charCount)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		window.addEventListener("resize", () => setWindowWidth(window.innerWidth))

		return () => {
			window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
		}
	})

	return (
		<div className="grid grid-cols-2 lg:grid-cols-none lg:grid-row-2 gap-x-2 lg:gap-y-none justify-items-center lg:justify-items-start lg:items-center bg-blue-light dark:bg-blue-dark rounded-lg shadow-lg shadow-blue-light/60 dark:shadow-blue-dark/50 h-full py-5 px-3 lg:px-5 lg:py-0 mx-6">
			<div className="text-center lg:text-left">
				<p className="font-bold text-5xl lg:text-6xl lg:mb-2">{wordCount}</p>
				<p className="font-semibold text-2xl lg:text-4xl">Words</p>
			</div>
			<div className="text-center lg:text-left">
				<p className="font-bold text-5xl lg:text-6xl lg:mb-2">{charCount}</p>
				<p className="font-semibold text-2xl lg:text-4xl">
					{windowWidth >= 1024 ? "Characters" : "Chars"}
				</p>
			</div>
			<div className="justify-self-start col-span-2 lg:hidden">
				<Options />
			</div>
		</div>
	)
}

export default Counter
