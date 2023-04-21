import { useEffect, useState } from 'react'

function App() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [locationLoaded, setLocationLoaded] = useState(false);
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((location) => {
    //   setLocationLoaded(true);
    //   setLat(location.coords.latitude);
    //   setLon(location.coords.longitude);
    // }, (err) => {
    //   console.log(err)
    // }, {
    //   enableHighAccuracy: true,
    // })
    const watch = navigator.geolocation.watchPosition((location) => {
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      setLocationLoaded(true);
    }, (err) => {
      console.log(err)
    }, {
      enableHighAccuracy: true,
    })

    return () => navigator.geolocation.clearWatch(watch)
  }, []);

  return (
    <div className="location">
      My location is: {locationLoaded ? (`Lat: ${lat}, Lon: ${lon}`) : 'Loading...'}
    </div>
  )
}

export default App
