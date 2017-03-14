const weatherReducer = (state = "default", action) => {
	if (action.type === "GET_WEATHER_TODAY")
		return "Sunny";
	else 
		return "Unable to detect!";
}

export default weatherReducer;