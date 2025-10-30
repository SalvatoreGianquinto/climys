import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col relative">
      <Header />
      <SearchBar />
    </div>
  )
}

export default App
