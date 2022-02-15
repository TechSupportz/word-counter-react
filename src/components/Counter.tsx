import React from "react"

const Counter = () => {
	return (
		<div className="grid grid-cols-2 gap-x-2 justify-items-center bg-blue-light rounded-lg shadow-lg shadow-blue-light/75 h-2/5 py-4 px-3 mx-6">
			<div className="text-center">
				<p className="font-bold text-5xl">42</p>
				<p className="font-semibold text-2xl">Words</p>
			</div>
			<div className="text-center">
				<p className="font-bold text-5xl">420</p>
				<p className="font-semibold text-2xl">Chars</p>
			</div>
			<p className="justify-self-start font-bold text-xl underline my-3.5">Options</p>
			<br />
			<div className="flex gap-2.5 sm:gap-5 col-span-2 justify-self-start">
				<label htmlFor="citation" className="text-[0.85em] sm:text-[1.1em]">
					<input
						id="citation"
						type="checkbox"
						className="rounded border-gray-300 text-blue-400 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-500/20 h-4 w-4 sm:h-6 sm:w-6 mr-1"
					/>
					Ignore in-text citation
				</label>

				<label htmlFor="autosave" className="text-[0.85em] sm:text-[1.1em]">
					<input
						id="autosave"
						type="checkbox"
						className="rounded border-gray-300 text-blue-400 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-500/20 h-4 w-4 sm:h-6 sm:w-6 mr-1"
					/>
					Enable autosave
				</label>
			</div>
		</div>
	)
}

export default Counter
