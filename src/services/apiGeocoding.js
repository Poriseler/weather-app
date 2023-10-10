export async function getCoordsByName(cityName) {
  //   const cityName = useSelector((state) => state.search.city); //can be replaced later
  const url = `https://api.geoapify.com/v1/geocode/search?apiKey=68676bcb2db44a3884a245d0beb1b850&city=${cityName}`;
  const res = await fetch(url);
  const data = await res.json();

  const lat = data.features[0].properties.lat;
  const lon = data.features[0].properties.lon;
  const coords = { lat: lat, lon: lon };

  
  return coords;
}

export async function getCityNameByCoords({lat, lon}) {
  
  const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`)
  if (!res.ok) throw new Error('Failed getting address')

  const data = await res.json()
  return(data.city)
}