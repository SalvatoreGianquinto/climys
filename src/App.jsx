import Header from "../components/Header"
import WeatherCard from "../components/WeatherCard"
import WeatherContainer from "../components/WeatherContainer"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col relative">
      <Header />
      <WeatherCard />
      <WeatherContainer />
    </div>
  )
}

export default App
