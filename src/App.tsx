import React from "react"
import Counter from "./components/Counter"
import TextInput from "./components/TextInput"
import Options from "./components/Options"
import Topbar from "./components/Topbar"

const App = () => {
	return (
		<>
			<Topbar />
			<div className="grid h-[70vh] lg:grid-cols-6 lg:grid-rows-5 lg:gap-y-8 mt-10 lg:mt-16">
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
		</>
	)
}

export default App
