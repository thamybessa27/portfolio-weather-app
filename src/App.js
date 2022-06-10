import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import useGetCurrentWeather from "./hooks/useGetCurrentWeather";

function App() {
  const { getCurrentWeatherByCoordinates } = useGetCurrentWeather();

  useEffect(() => {
    getCurrentWeatherByCoordinates();
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
