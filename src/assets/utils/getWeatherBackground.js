export default function getWeatherBackground(iconCode) {
  if (!iconCode) return "from-[#0f172a] via-[#1e293b] to-[#334155]"

  const code = iconCode.slice(0, 2)
  const isNight = iconCode.endsWith("n")

  const gradients = {
    day_clear: "from-sky-300 via-blue-400 to-blue-700",
    night_clear: "from-[#0f172a] via-[#1e293b] to-[#334155]",
    few_clouds: "from-sky-300 via-sky-500 to-indigo-700",
    clouds: "from-gray-400 via-gray-500 to-gray-700",
    rain: "from-blue-600 via-slate-700 to-gray-900",
    thunder: "from-indigo-800 via-purple-900 to-black",
    snow: "from-blue-200 via-sky-200 to-gray-300",
    mist: "from-gray-300 via-gray-400 to-gray-600",
    default: "from-[#0f172a] via-[#1e293b] to-[#334155]",
  }

  if (code === "01")
    return isNight ? gradients.night_clear : gradients.day_clear
  if (code === "02") return gradients.few_clouds
  if (code === "03" || code === "04") return gradients.clouds
  if (code === "09" || code === "10") return gradients.rain
  if (code === "11") return gradients.thunder
  if (code === "13") return gradients.snow
  if (code === "50") return gradients.mist

  return gradients.default
}
