import { useState, useEffect } from "react"

const TextInput = () => {
	const [input, setInput] = useState("")

	useEffect(() => {
		console.log(input)
		
	}, [input])

	return (
		<div className="flex h-[50vh] justify-center mx-4 mt-7">
			<textarea
				placeholder="Start typing to start counting "
				className="w-full h-full rounded-lg border-blue-300 border-2 font-arial resize-none"
				onChange={(e) => setInput(e.target.value)}
			>
				{input}
			</textarea>
		</div>
	)
}

export default TextInput
