import { useAppSelector } from "../hooks/useAppSelector"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { toggleIgnoreCitation, toggleAutoSave } from "../app/slices/counter"
import { useEffect } from "react"


const Options = () => {
	const dispatch = useAppDispatch()

	const ignoreCitation = useAppSelector((state) => state.counter.ignoreCitation)
	const autoSave = useAppSelector((state) => state.counter.autoSave)

  return (
		<>
			<p className="justify-self-start font-bold text-xl underline my-3.5 lg:mb-6">Options</p>
			<div className="flex lg:flex-col gap-2.5 sm:gap-5 col-span-2 justify-self-start">
				<label htmlFor="citation" className="text-[0.85em] sm:text-sm lg:text-base">
					<input
						id="citation"
						type="checkbox"
						className="rounded border-none bg-white/90 dark:bg-gray-600/70 text-blue-400 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-500/20 h-4 w-4 sm:h-6 sm:w-6 mr-1 sm:mr-2.5"
						checked={ignoreCitation}
						onChange={(e) => dispatch(toggleIgnoreCitation())}
					/>
					Ignore in-text citation
				</label>

				<label htmlFor="autosave" className="text-[0.85em] sm:text-sm lg:text-base">
					<input
						id="autosave"
						type="checkbox"
						className="rounded border-none bg-white/90 dark:bg-gray-600/70 text-blue-400 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-500/20 h-4 w-4 sm:h-6 sm:w-6 mr-1 sm:mr-2.5"
						checked={autoSave}
						onChange={(e) => dispatch(toggleAutoSave())}
					/>
					Enable autosave
				</label>
			</div>
		</>
  )
}

export default Options