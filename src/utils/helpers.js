 export default function formatDate(timestamp) {
  const dateObj = new Date(timestamp);
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const finalDate = `${day}.${month}`;
  return finalDate;
}

 export function describeWeather(weatherCode) {
  let description;
    switch (weatherCode+'') {
      case '0':
      case '1':
        description = 'Sunny';
        break;

      case '2':
      case '3':
        description = 'Cloudy'
        break;

      case '45':
      case '48':
        description = 'Foggy'
        break;

      case '51':
      case '53':
      case '55':
      case '56':
      case '57':
      case '61':
      case '63':
      case '65':
      case '66':
      case '67':
      case '80':
      case '81':
      case '82':
        description = 'Rainy'
        break;

      case '71':
      case '73':
      case '75':
      case '77':
        description = 'Snowy'
        break;

      case '95':
      case '96':
      case '99':
        description = 'Thunderstorm'
        break;
      default:
        description = 'Unknown'
        break;
    }

  return description
}

export function getWeatherImage(weatherCode){
  
  let imageName;
    switch (weatherCode+'') {
      case '0':
      case '1':
        imageName = 'sun.png';
        break;

      case '2':
      case '3':
        imageName = 'cloud.png'
        break;

      case '45':
      case '48':
        imageName = 'haze.png'
        break;

      case '51':
      case '53':
      case '55':
      case '56':
      case '57':
      case '61':
      case '63':
      case '65':
      case '66':
      case '67':
      case '80':
      case '81':
      case '82':
        imageName = 'rain.png'
        break;

      case '71':
      case '73':
      case '75':
      case '77':
        imageName = 'snow.png'
        break;

      case '95':
      case '96':
      case '99':
        imageName = 'thunderstorm.png'
        break;
      default:
        imageName = 'question-mark.png'
        break;
    }

  return imageName
}

