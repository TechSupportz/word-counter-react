import React from 'react'

const Options = () => {
  return (
	<>
		<p className="justify-self-start font-bold text-xl underline my-3.5 lg:hidden">
					Options
				</p>
				<br className="lg:hidden"/>
				<div className="flex gap-2.5 sm:gap-5 col-span-2 justify-self-start lg:hidden">
					<label htmlFor="citation" className="text-[0.85em] sm:text-[1.1em]">
						<input
							id="citation"
							type="checkbox"
							className="rounded border-none bg-white/90 dark:bg-gray-600/70 text-blue-400 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-500/20 h-4 w-4 sm:h-6 sm:w-6 mr-1"
						/>
						Ignore in-text citation
					</label>
		
					<label htmlFor="autosave" className="text-[0.85em] sm:text-[1.1em]">
						<input
							id="autosave"
							type="checkbox"
							className="rounded border-none bg-white/90 dark:bg-gray-600/70 text-blue-400 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-500/20 h-4 w-4 sm:h-6 sm:w-6 mr-1"
						/>
						Enable autosave
					</label>
				</div>
	</>
  )
}

export default Options