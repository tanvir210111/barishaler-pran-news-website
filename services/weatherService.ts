import { WeatherData, WeatherLocation, WeatherConditionKey } from '@/types/weather';

/**
 * Standard Bangladeshi divisional locations
 * Dhaka is the primary default location.
 */
export const BANGLADESH_LOCATIONS: WeatherLocation[] = [
  {
    id: 'dhaka',
    nameBn: 'ঢাকা',
    nameEn: 'Dhaka',
    latitude: 23.8103,
    longitude: 90.4125,
    timezone: 'Asia/Dhaka',
  },
  {
    id: 'chittagong',
    nameBn: 'চট্টগ্রাম',
    nameEn: 'Chattogram',
    latitude: 22.3569,
    longitude: 91.7832,
    timezone: 'Asia/Dhaka',
  },
  {
    id: 'sylhet',
    nameBn: 'সিলেট',
    nameEn: 'Sylhet',
    latitude: 24.8949,
    longitude: 91.8687,
    timezone: 'Asia/Dhaka',
  },
  {
    id: 'rajshahi',
    nameBn: 'রাজশাহী',
    nameEn: 'Rajshahi',
    latitude: 24.3636,
    longitude: 88.6241,
    timezone: 'Asia/Dhaka',
  },
  {
    id: 'khulna',
    nameBn: 'খুলনা',
    nameEn: 'Khulna',
    latitude: 22.8456,
    longitude: 89.5403,
    timezone: 'Asia/Dhaka',
  },
  {
    id: 'barishal',
    nameBn: 'বরিশাল',
    nameEn: 'Barishal',
    latitude: 22.701,
    longitude: 90.3535,
    timezone: 'Asia/Dhaka',
  },
  {
    id: 'rangpur',
    nameBn: 'রংপুর',
    nameEn: 'Rangpur',
    latitude: 25.7439,
    longitude: 89.2752,
    timezone: 'Asia/Dhaka',
  },
  {
    id: 'mymensingh',
    nameBn: 'ময়মনসিংহ',
    nameEn: 'Mymensingh',
    latitude: 24.7471,
    longitude: 90.4203,
    timezone: 'Asia/Dhaka',
  },
];

export const DEFAULT_WEATHER_LOCATION = BANGLADESH_LOCATIONS[0]; // Dhaka

/**
 * Maps WMO weather interpretation code (0-99) to Bengali condition text and icon key
 * Reference: World Meteorological Organization code table
 */
export function interpretWeatherCode(
  code: number,
  isDay: boolean = true
): { conditionTextBn: string; conditionKey: WeatherConditionKey } {
  switch (code) {
    case 0:
      return {
        conditionTextBn: isDay ? 'রৌদ্রোজ্জ্বল' : 'পরিষ্কার আকাশ',
        conditionKey: 'clear',
      };
    case 1:
      return {
        conditionTextBn: 'প্রধানত পরিষ্কার',
        conditionKey: 'clear',
      };
    case 2:
      return {
        conditionTextBn: 'আংশিক মেঘলা',
        conditionKey: 'partlyCloudy',
      };
    case 3:
      return {
        conditionTextBn: 'মেঘাচ্ছন্ন',
        conditionKey: 'overcast',
      };
    case 45:
    case 48:
      return {
        conditionTextBn: 'কুয়াশাচ্ছন্ন',
        conditionKey: 'fog',
      };
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return {
        conditionTextBn: 'গুঁড়ি গুঁড়ি বৃষ্টি',
        conditionKey: 'drizzle',
      };
    case 61:
      return {
        conditionTextBn: 'হালকা বৃষ্টি',
        conditionKey: 'rain',
      };
    case 63:
      return {
        conditionTextBn: 'বৃষ্টি',
        conditionKey: 'rain',
      };
    case 65:
    case 66:
    case 67:
      return {
        conditionTextBn: 'ভারী বৃষ্টি',
        conditionKey: 'heavyRain',
      };
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return {
        conditionTextBn: 'তুষারপাত',
        conditionKey: 'snow',
      };
    case 80:
    case 81:
      return {
        conditionTextBn: 'বৃষ্টির ঝাপটা',
        conditionKey: 'rain',
      };
    case 82:
      return {
        conditionTextBn: 'ভারী বৃষ্টির ঝাপটা',
        conditionKey: 'heavyRain',
      };
    case 95:
      return {
        conditionTextBn: 'বজ্রঝড়',
        conditionKey: 'thunderstorm',
      };
    case 96:
    case 99:
      return {
        conditionTextBn: 'শিলাবৃষ্টিসহ বজ্রঝড়',
        conditionKey: 'thunderstorm',
      };
    default:
      return {
        conditionTextBn: 'পরিষ্কার আকাশ',
        conditionKey: 'clear',
      };
  }
}

// In-memory cache to prevent excessive requests during quick re-renders
const weatherCache = new Map<string, { data: WeatherData; timestamp: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache

/**
 * Fetches real-time weather from Open-Meteo for any configured location
 * Defaults to Dhaka, Bangladesh.
 */
export async function fetchCurrentWeather(
  location: WeatherLocation = DEFAULT_WEATHER_LOCATION,
  options: { forceRefresh?: boolean } = {}
): Promise<WeatherData> {
  const cacheKey = location.id;
  const now = Date.now();

  if (!options.forceRefresh) {
    const cached = weatherCache.get(cacheKey);
    if (cached && now - cached.timestamp < CACHE_TTL_MS) {
      return cached.data;
    }
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_WEATHER_API_URL || 'https://api.open-meteo.com/v1/forecast';

  const params = new URLSearchParams({
    latitude: location.latitude.toString(),
    longitude: location.longitude.toString(),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,is_day',
    timezone: location.timezone || 'Asia/Dhaka',
  });

  const url = `${baseUrl}?${params.toString()}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    // Next.js caching policy
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Weather API error: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();

  if (!json.current) {
    throw new Error('Invalid response structure from weather API');
  }

  const current = json.current;
  const isDay = current.is_day === 1;
  const weatherCode = Number(current.weather_code ?? 0);
  const { conditionTextBn, conditionKey } = interpretWeatherCode(weatherCode, isDay);

  const weatherData: WeatherData = {
    location,
    temperatureCelsius: Number(current.temperature_2m),
    apparentTemperatureCelsius: Number(current.apparent_temperature ?? current.temperature_2m),
    relativeHumidity: Number(current.relative_humidity_2m ?? 0),
    weatherCode,
    isDay,
    conditionTextBn,
    conditionKey,
    updatedAt: new Date(),
    rawTime: current.time,
  };

  weatherCache.set(cacheKey, { data: weatherData, timestamp: now });
  return weatherData;
}
