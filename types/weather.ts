export interface WeatherLocation {
  id: string;
  nameBn: string;
  nameEn: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export type WeatherConditionKey =
  | 'clear'
  | 'partlyCloudy'
  | 'overcast'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'heavyRain'
  | 'snow'
  | 'thunderstorm';

export interface WeatherData {
  location: WeatherLocation;
  temperatureCelsius: number;
  apparentTemperatureCelsius: number;
  relativeHumidity: number;
  weatherCode: number;
  isDay: boolean;
  conditionTextBn: string;
  conditionKey: WeatherConditionKey;
  updatedAt: Date;
  rawTime: string;
}

export type WeatherFetchStatus = 'idle' | 'loading' | 'success' | 'error';
