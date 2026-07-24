const weatherButton = document.querySelector("#weather-button");
const locationSelect = document.querySelector("#weather-location");

const locations = {
  china: {
    name: "베이징",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  seoul: {
    name: "서울",
    latitude: 37.5665,
    longitude: 126.9780,
  },
};

const getWeatherCondition = (code) => {
  if (code === 0) return "맑음 ☀️";
  if (code <= 2) return "대체로 맑음 🌤️";
  if (code === 3) return "흐림 ☁️";
  if (code === 45 || code === 48) return "안개 🌫️";
  if (code >= 51 && code <= 67) return "비 🌧️";
  if (code >= 71 && code <= 77) return "눈 🌨️";
  if (code >= 80 && code <= 82) return "소나기 🌦️";
  if (code >= 95) return "천둥·번개 ⛈️";

  return "알 수 없음";
};

weatherButton?.addEventListener("click", async () => {
  const selectedLocation = locationSelect.value;
  const location = locations[selectedLocation];

  if (!location) {
    alert("지역을 선택해주세요.");
    return;
  }

  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${location.latitude}` +
    `&longitude=${location.longitude}` +
    `&current=temperature_2m,relative_humidity_2m,weather_code` +
    `&timezone=auto`;

  try {
    weatherButton.disabled = true;
    weatherButton.textContent = "날씨 확인 중...";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }

    const data = await response.json();
    const current = data.current;
    const condition = getWeatherCondition(current.weather_code);

    alert(
      `${location.name} 현재 날씨\n` +
      `${condition}\n` +
      `온도: ${current.temperature_2m}°C\n` +
      `습도: ${current.relative_humidity_2m}%`
    );
  } catch (error) {
    console.error(error);
    alert("날씨 정보를 가져오지 못했습니다.");
  } finally {
    weatherButton.disabled = false;
    weatherButton.textContent = "날씨 정보 확인하기";
  }
});