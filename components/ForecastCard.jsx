const ForecastCard = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-2xl text-white font-semibold mb-4 text-center">
        Previsioni giornaliere
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white flex flex-col items-center shadow-lg hover:bg-white/30 transition">
          <p className="text-sm font-medium">Lun</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="soleggiato"
            className="w-12 h-12"
          />
          <p className="text-lg font-semibold tracking-wide">18°/10°</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white flex flex-col items-center shadow-lg hover:bg-white/30 transition">
          <p className="text-sm font-medium">Mar</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="soleggiato"
            className="w-12 h-12"
          />
          <p className="text-lg font-semibold tracking-wide">18°/10°</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white flex flex-col items-center shadow-lg hover:bg-white/30 transition">
          <p className="text-sm font-medium">Mer</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="soleggiato"
            className="w-12 h-12"
          />
          <p className="text-lg font-semibold tracking-wide">18°/10°</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white flex flex-col items-center shadow-lg hover:bg-white/30 transition">
          <p className="text-sm font-medium">Gio</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="soleggiato"
            className="w-12 h-12"
          />
          <p className="text-lg font-semibold tracking-wide">18°/10°</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white flex flex-col items-center shadow-lg hover:bg-white/30 transition">
          <p className="text-sm font-medium">Ven</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="soleggiato"
            className="w-12 h-12"
          />
          <p className="text-lg font-semibold tracking-wide">18°/10°</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white flex flex-col items-center shadow-lg hover:bg-white/30 transition">
          <p className="text-sm font-medium">Sab</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="soleggiato"
            className="w-12 h-12"
          />
          <p className="text-lg font-semibold tracking-wide">18°/10°</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white flex flex-col items-center shadow-lg hover:bg-white/30 transition">
          <p className="text-sm font-medium">Dom</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="soleggiato"
            className="w-12 h-12"
          />
          <p className="text-lg font-semibold tracking-wide">18°/10°</p>
        </div>
      </div>
    </div>
  )
}

export default ForecastCard
