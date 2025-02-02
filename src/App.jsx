import React from "react"
import LandingPage from "./LandingPage/LandingPage"
import { SpeedInsights } from "@vercel/speed-insights/next"
function App() {
  return (
    <div>
      <LandingPage/>
      <SpeedInsights />
    </div>
  )
}

export default App
