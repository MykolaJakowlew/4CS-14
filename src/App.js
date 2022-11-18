import { useState } from 'react';
import './App.css';
import WidgetWeather from './components/widget-weather';

function App () {
  const [cityName, setCityName] = useState();
  const onBlur = (event) => {
    const value = event.target.value;
    console.log(value);
    setCityName(value);
  };

  return (
    <div className="App">
      <input
        onBlur={onBlur}
        type="text"
        placeholder='Input city name'
      />
      <WidgetWeather city={cityName} />
    </div>
  );
}

export default App;
