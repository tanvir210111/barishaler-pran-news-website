"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Calendar,
  Clock,
  Sun,
  Moon,
  CloudSun,
  CloudMoon,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
  RefreshCw,
  ChevronDown,
  AlertCircle,
  MapPin,
} from "lucide-react";
import {
  getBengaliGregorianDate,
  getBanglaAcademyDate,
  getEnglishDate,
  getBangladeshClockSnapshot,
  toBengaliNumerals,
} from "@/lib/bangladeshTime";
import {
  BANGLADESH_LOCATIONS,
  DEFAULT_WEATHER_LOCATION,
  fetchCurrentWeather,
} from "@/services/weatherService";
import { WeatherData, WeatherLocation, WeatherFetchStatus } from "@/types/weather";
import SocialMediaIcons from "@/components/common/SocialMediaIcons";

export default function TopUtilityBar() {
  const [mounted, setMounted] = useState(false);

  // 1. Date & Clock state
  const [clockSnapshot, setClockSnapshot] = useState(() => getBangladeshClockSnapshot());
  const [bengaliDate, setBengaliDate] = useState(() => getBengaliGregorianDate());
  const [banglaSanDate, setBanglaSanDate] = useState(() => getBanglaAcademyDate());
  const [englishDate, setEnglishDate] = useState(() => getEnglishDate());
  const currentDateKeyRef = useRef(clockSnapshot.dateKey);

  // 2. Weather state
  const [selectedLocation, setSelectedLocation] = useState<WeatherLocation>(DEFAULT_WEATHER_LOCATION);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [weatherStatus, setWeatherStatus] = useState<WeatherFetchStatus>("loading");
  const [isRefreshingWeather, setIsRefreshingWeather] = useState(false);
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const locationMenuRef = useRef<HTMLDivElement>(null);

  // Hydration safety: set mounted state on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. Real-Time Clock & Midnight rollover interval
  useEffect(() => {
    const tick = () => {
      const snapshot = getBangladeshClockSnapshot();
      setClockSnapshot(snapshot);

      // Midnight detector: if Bangladesh date key changes (e.g. 2026-10-18 -> 2026-10-19), update all dates
      if (snapshot.dateKey !== currentDateKeyRef.current) {
        currentDateKeyRef.current = snapshot.dateKey;
        const now = new Date();
        setBengaliDate(getBengaliGregorianDate(now));
        setBanglaSanDate(getBanglaAcademyDate(now));
        setEnglishDate(getEnglishDate(now));
      }
    };

    tick();
    const clockInterval = setInterval(tick, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  // 4. Fetch Weather Data
  const loadWeather = useCallback(
    async (location: WeatherLocation, forceRefresh = false) => {
      if (forceRefresh) {
        setIsRefreshingWeather(true);
      } else {
        setWeatherStatus("loading");
      }

      try {
        const data = await fetchCurrentWeather(location, { forceRefresh });
        setWeatherData(data);
        setWeatherStatus("success");
      } catch (error) {
        console.error("Failed to fetch weather from Open-Meteo:", error);
        setWeatherStatus("error");
      } finally {
        setIsRefreshingWeather(false);
      }
    },
    []
  );

  // Initial weather load & periodic refresh every 10 minutes (600,000 ms)
  useEffect(() => {
    loadWeather(selectedLocation);

    const WEATHER_REFRESH_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes
    const weatherInterval = setInterval(() => {
      loadWeather(selectedLocation, true);
    }, WEATHER_REFRESH_INTERVAL_MS);

    return () => clearInterval(weatherInterval);
  }, [selectedLocation, loadWeather]);

  // Close location dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (locationMenuRef.current && !locationMenuRef.current.contains(e.target as Node)) {
        setIsLocationMenuOpen(false);
      }
    }
    if (isLocationMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLocationMenuOpen]);

  // Weather Icon Component
  const renderWeatherIcon = (data: WeatherData) => {
    const { conditionKey, isDay } = data;
    const iconClass = "w-3.5 h-3.5 shrink-0";

    switch (conditionKey) {
      case "clear":
        return isDay ? (
          <Sun className={`${iconClass} text-amber-500`} />
        ) : (
          <Moon className={`${iconClass} text-indigo-400`} />
        );
      case "partlyCloudy":
        return isDay ? (
          <CloudSun className={`${iconClass} text-amber-500`} />
        ) : (
          <CloudMoon className={`${iconClass} text-indigo-300`} />
        );
      case "overcast":
        return <Cloud className={`${iconClass} text-slate-400`} />;
      case "fog":
        return <CloudFog className={`${iconClass} text-slate-400`} />;
      case "drizzle":
        return <CloudDrizzle className={`${iconClass} text-sky-400`} />;
      case "rain":
        return <CloudRain className={`${iconClass} text-blue-500`} />;
      case "heavyRain":
        return <CloudRain className={`${iconClass} text-blue-700`} />;
      case "snow":
        return <CloudSnow className={`${iconClass} text-sky-300`} />;
      case "thunderstorm":
        return <CloudLightning className={`${iconClass} text-amber-600`} />;
      default:
        return <Sun className={`${iconClass} text-amber-500`} />;
    }
  };

  // Format last updated time for tooltip/subtext in Bengali
  const formatWeatherUpdatedTime = (date: Date) => {
    return new Intl.DateTimeFormat("bn-BD", {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  return (
    <div className="flex flex-col items-start md:items-end gap-1.5 pt-2 md:pt-0 border-t md:border-t-0 border-[#E2E8F0]">
      {/* Row 1: Real-time Bangladesh Dates & Live Clock */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#64748B]">
        {/* Bengali Gregorian Date & Bangla San */}
        <div className="flex items-center gap-1.5 text-[#1E293B] font-medium">
          <Calendar className="w-3.5 h-3.5 text-[#123B5D] shrink-0" aria-hidden="true" />
          <span>{bengaliDate}</span>
          <span className="text-[#CBD5E1]">|</span>
          <span className="text-[#475569]">{banglaSanDate}</span>
        </div>

        <span className="text-[#CBD5E1]">|</span>

        {/* Live Bangladesh Standard Time Clock (BST / UTC+6) */}
        <div
          className="flex items-center gap-1.5 font-medium text-[#087A43] bg-[#F8FAFC] px-2 py-0.5 rounded-sm border border-[#E2E8F0]"
          title="বাংলাদেশ মান সময় (BST/UTC+6)"
        >
          <Clock className="w-3.5 h-3.5 text-[#087A43] shrink-0" aria-hidden="true" />
          <span className="font-semibold tracking-wide">
            {mounted ? clockSnapshot.fullDisplay : "বাংলাদেশ সময়"}
          </span>
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
            aria-label="লাইভ সময়"
            title="লাইভ আপডেট হচ্ছে"
          />
        </div>

        {/* English Date (Displayed on md+ screens) */}
        <span className="hidden md:inline text-[#CBD5E1]">|</span>
        <span className="hidden md:inline text-[#64748B] font-medium">
          {englishDate}
        </span>
      </div>

      {/* Row 2: Real-time Weather Widget & Social Media Links */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
        {/* Real Weather API Widget */}
        <div className="relative" ref={locationMenuRef}>
          {weatherStatus === "loading" && !weatherData && (
            <div className="flex items-center gap-1.5 bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-1 rounded-full text-[#64748B] animate-pulse">
              <div className="w-3.5 h-3.5 rounded-full bg-slate-200" />
              <span className="text-[11px]">আবহাওয়া লোড হচ্ছে...</span>
            </div>
          )}

          {weatherStatus === "error" && !weatherData && (
            <div className="flex items-center gap-1.5 bg-amber-50/80 border border-amber-200 px-2 py-1 rounded-full text-amber-800 text-[11px]">
              <AlertCircle className="w-3 h-3 text-amber-600 shrink-0" />
              <span>আবহাওয়া অনুপলব্ধ</span>
              <button
                onClick={() => loadWeather(selectedLocation, true)}
                className="underline hover:text-amber-900 cursor-pointer ml-0.5 text-[10px]"
                title="পুনরায় চেষ্টা করুন"
              >
                পুনরায়
              </button>
            </div>
          )}

          {weatherData && (
            <div
              className="flex items-center gap-1.5 bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-1 rounded-full text-[#1E293B] shadow-2xs hover:border-[#CBD5E1] transition-all"
              title={`সর্বশেষ আপডেট: ${formatWeatherUpdatedTime(weatherData.updatedAt)} | অনুভূত: ${toBengaliNumerals(Math.round(weatherData.apparentTemperatureCelsius))}° সে. | আর্দ্রতা: ${toBengaliNumerals(weatherData.relativeHumidity)}%`}
            >
              {/* Weather Icon */}
              {renderWeatherIcon(weatherData)}

              {/* City name with dropdown toggle */}
              <button
                type="button"
                onClick={() => setIsLocationMenuOpen((prev) => !prev)}
                className="inline-flex items-center gap-0.5 font-semibold text-[#123B5D] hover:text-[#087A43] transition-colors cursor-pointer"
                aria-expanded={isLocationMenuOpen}
                aria-haspopup="listbox"
                title="অন্যান্য বিভাগীয় শহরের আবহাওয়া দেখুন"
              >
                <span>{weatherData.location.nameBn}</span>
                <ChevronDown className="w-3 h-3 text-[#64748B]" />
              </button>

              {/* Actual Real-Time Temperature in Celsius */}
              <span className="font-bold text-[#087A43]">
                {toBengaliNumerals(Math.round(weatherData.temperatureCelsius))}° সে.
              </span>

              {/* Weather Condition Text in Bengali */}
              <span className="hidden sm:inline text-[11px] text-[#64748B] font-medium border-l border-[#E2E8F0] pl-1.5">
                {weatherData.conditionTextBn}
              </span>

              {/* Manual Refresh Button */}
              <button
                type="button"
                onClick={() => loadWeather(selectedLocation, true)}
                disabled={isRefreshingWeather}
                className="p-0.5 text-[#94A3B8] hover:text-[#123B5D] transition-colors cursor-pointer disabled:opacity-50"
                aria-label="আবহাওয়া তথ্য রিফ্রেশ করুন"
                title={`সর্বশেষ আপডেট: ${formatWeatherUpdatedTime(weatherData.updatedAt)} (রিফ্রেশ করতে ক্লিক করুন)`}
              >
                <RefreshCw
                  className={`w-3 h-3 ${isRefreshingWeather ? "animate-spin text-[#087A43]" : ""}`}
                />
              </button>
            </div>
          )}

          {/* City Selector Dropdown Menu */}
          {isLocationMenuOpen && (
            <div
              role="listbox"
              aria-label="বিভাগ নির্বাচন করুন"
              className="absolute right-0 mt-1 w-44 bg-white rounded-md shadow-lg border border-[#E2E8F0] py-1 z-50 animate-in fade-in zoom-in-95 duration-100"
            >
              <div className="px-3 py-1 text-[11px] font-semibold text-[#94A3B8] border-b border-[#F1F5F9] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#123B5D]" />
                <span>শহর নির্বাচন করুন</span>
              </div>
              <div className="max-h-56 overflow-y-auto py-0.5">
                {BANGLADESH_LOCATIONS.map((loc) => {
                  const isSelected = loc.id === selectedLocation.id;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setIsLocationMenuOpen(false);
                        loadWeather(loc, true);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[#EAF5EE] text-[#087A43] font-semibold"
                          : "text-[#334155] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <span>{loc.nameBn}</span>
                      <span className="text-[10px] text-[#94A3B8]">{loc.nameEn}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 10 Social Media Icons (Inspired by Daily Amardesh list, visual placeholders, non-clickable) */}
        <div className="border-l border-[#E2E8F0] pl-2 sm:pl-2.5">
          <SocialMediaIcons variant="header" />
        </div>
      </div>
    </div>
  );
}
