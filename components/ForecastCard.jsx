const ForecastCard = ({ data }) => {
  if (!data || !Array.isArray(data)) return null

  const days = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-2xl text-white font-semibold mb-4 text-center">
        Previsioni giornaliere
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {data.map((day, index) => {
          const date = new Date(day.dt * 1000)
          const dayName = days[date.getDay()]

          const { temp_min, temp_max, weather } = day
          const description = weather.description
          const icon = weather.icon

          return (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white flex flex-col items-center shadow-lg hover:bg-white/30 transition"
            >
              <p className="text-sm font-medium">{dayName}</p>
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={description}
                className="w-12 h-12"
              />
              <p className="text-lg font-semibold tracking-wide">
                {Math.round(temp_max)}°/{Math.round(temp_min)}°
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ForecastCard
