import { useEffect, useState } from "react"
import axios from "axios"
import ForecastCard from "./ForecastCard"

const ForecastContainer = ({ city }) => {
  const [forecast, setForecast] = useState([])

  const weatherCodeToIcon = (code) => {
    const map = {
      0: "01d",
      1: "02d",
      2: "03d",
      3: "04d",
      45: "50d",
      48: "50d",
      51: "09d",
      53: "09d",
      55: "10d",
      61: "10d",
      63: "10d",
      65: "10d",
      71: "13d",
      73: "13d",
      75: "13d",
      95: "11d",
      96: "11d",
      99: "11d",
    }
    return map[code] || "01d"
  }

  useEffect(() => {
    if (!city) return

    const fetchForecast = async () => {
      try {
        const geoRes = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=it`
        )
        const { latitude, longitude } = geoRes.data.results[0]

        const forecastRes = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&forecast_days=7&timezone=auto`
        )

        const days = forecastRes.data.daily
        const formatted = days.time.map((date, i) => ({
          dt: date,
          temp_max: Math.round(days.temperature_2m_max[i]),
          temp_min: Math.round(days.temperature_2m_min[i]),
          icon: weatherCodeToIcon(days.weathercode[i]),
        }))

        setForecast(formatted)
      } catch (err) {
        console.error("Errore fetch forecast:", err)
        setForecast([])
      }
    }

    fetchForecast()
  }, [city])

  return <div>{forecast.length > 0 && <ForecastCard data={forecast} />}</div>
}

export default ForecastContainer
