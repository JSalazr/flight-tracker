import { SET_SEARCH_TEXT, CLEAN_STORE, SHOW_SPINNER, SEARCH_FLIGHT_SUCCESS } from "./actionTypes";
import axios from 'axios';

export const cleanStore = () => ({ type: CLEAN_STORE });

const checkFlightNumber = (airline, flight) => {
  return airline === null || airline.lenght === 0 || flight === null || flight.lenght === 0;
}

export const showSpinner = () => ({
  type: SHOW_SPINNER,
  payload: {
    showSpinner: true
  }
});

export const setSearchText = searchText => ({
  type: SET_SEARCH_TEXT,
  payload: {
    searchText
  }
});

export const searchFlightSuccess = () => ({
  type: SEARCH_FLIGHT_SUCCESS,
  payload: {
    showSpinner: false
  }
});

export const searchFlight = async (searchText) => {
  var flight = searchText.match(/\d+/g);
  var airline =  searchText.match(/[a-zA-Z]+/g);
  if(checkFlightNumber(airline, flight)){
    return {error: "Invalid Flight Number"}
  }
  const rawFlightInfo = await axios({
    method: 'get',
    url: `https://cors-server-js.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${airline[0]}/${flight[0]}/arr/2020/1/31?appId=${process.env.APP_ID}&appKey=${process.env.APP_KEY}&utc=false`, 
  });
  if(rawFlightInfo.data.flightStatuses.length === 0){
    return {error: "Flight not found"}
  }
  const data = rawFlightInfo.data.flightStatuses[0];
  return {
    flightNumber: data.carrierFsCode + data.flightNumber,
    location: {
      origin: data.departureAirportFsCode,
      destination: data.arrivalAirportFsCode
    },
    departureDate: data.departureDate.dateLocal,
    arrivalDate: data.arrivalDate.dateLocal,
    status: data.status,
    delay: '--',
    duration: data.flightDurations.scheduledBlockMinutes,
    terminal: "--",
    baggage: "--"
  }  
} 

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
