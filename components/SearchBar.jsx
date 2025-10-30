const SearchBar = function () {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-6">
      <h1 className="font-medium text-5xl mb-6 pt-10 text-white text-center">
        Come sarà la giornata oggi?
      </h1>

      <div className="flex w-full max-w-4/10 gap-4 pt-5">
        <input
          type="text"
          placeholder="Inserisci la città"
          className="flex-1 px-4 py-3 rounded-md outline-none text-white bg-white/20 backdrop-blur-sm placeholder-white"
        />
        <button className="bg-blue-400 text-white px-6 py-3 rounded-md hover:bg-blue-600">
          Cerca
        </button>
      </div>
    </div>
  )
}

export default SearchBar
