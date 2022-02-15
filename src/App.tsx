import React from "react"
import Counter from "./components/Counter"
import TextInput from "./components/TextInput"
import Topbar from "./components/Topbar"

const App = () => {
	return (
		<>
			<Topbar />
			<div className="flex flex-col mt-10">
				<Counter />
				<TextInput />
			</div>
		</>
	)
}

export default App
