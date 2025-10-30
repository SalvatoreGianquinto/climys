import { useState } from "react"

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    onSearch(input)
    setInput("")
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mt-6">
      <h1 className="font-medium text-5xl mb-6 pt-10 text-white text-center">
        Come sarà la giornata oggi?
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-lg gap-4 pt-5 pb-10"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Inserisci la città"
          className="flex-1 px-4 py-3 rounded-md outline-none text-white bg-white/20 backdrop-blur-sm placeholder-white/80 focus:ring-2 focus:ring-white/40"
        />
        <button
          type="submit"
          className="bg-blue-400 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
        >
          Cerca
        </button>
      </form>
    </div>
  )
}

export default SearchBar
