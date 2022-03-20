import React from "react"
import Counter from "./components/Counter"
import TextInput from "./components/TextInput"
import Options from "./components/Options"
import Topbar from "./components/Topbar"

const App = () => {
	return (
		<div className="flex-col space-y-10">
			<Topbar />
			<div className="grid block minH-[80vh] lg:h-[72.5vh] lg:grid-cols-6 lg:grid-rows-5 lg:gap-y-8 mt-10 lg:mt-16">
				<div className="lg:col-span-2 lg:row-span-3 h-full">
					<Counter />
				</div>
				<div className="hidden lg:block col-span-2 row-span-2 bg-blue-light dark:bg-blue-dark rounded-lg shadow-lg shadow-blue-light/60 dark:shadow-blue-dark/50 h-full px-5 mx-6">
					<Options />
				</div>
				<div className="h-[50vh] lg:h-full mx-4 mt-7 lg:mt-0 lg:col-span-4 lg:row-span-full lg:order-first">
					<TextInput />
				</div>
			</div>
			<div className="flex space-x-3 justify-center mt-auto">
				<a
					href="https://www.privacypolicies.com/live/e45cc32d-d3d3-4d67-b874-18e9b7d2aa09"
					target="_blank"
					className="text-sm  lg:w-fit py-2 lg:px-5 text-center lg:text-left lg:align-self-bottom text-sm  underline text-blue-300 visited:text-blue-300 dark:text-slate-700/70 dark:visited:text-slate-700/70"
				>
					Privacy Policy
				</a>

				<a
					href="https://github.com/TechSupportz/word-counter-tsx"
					target="_blank"
					className="text-sm lg:w-fit py-2 lg:px-5 text-center lg:text-left lg:align-self-bottom text-sm  underline text-blue-300 visited:text-blue-300 dark:text-slate-700/70 dark:visited:text-slate-700/70"
				>
					Check out the github repository here
				</a>
			</div>
		</div>
	)
}

export default App
