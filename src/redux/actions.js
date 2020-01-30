import { SET_SEARCH_TEXT, SEARCH_FLIGHT, CLEAN_STORE } from "./actionTypes";
import axios from 'axios';

export const cleanStore = () => ({ type: CLEAN_STORE });

export const setSearchText = searchText => ({
  type: SET_SEARCH_TEXT,
  payload: {
    searchText
  }
});

export const searchFlight = searchText => {
  // axios.get('https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/FR/147/arr/2020/1/28', {
  //   value: "FR147"
  // }).then(response => {
  //   console.log(response.data);
  // });
  const flightInformation = {
    flightNumber: searchText,
    location: {
      origin: 'LAX',
      destination: 'SAP'
    },
    date: '2020/28/01',
    arrivalTime: "10:30am",
    delay: 0,
    terminal: "G2",
    baggage: "13",
    duration: "15 hours",
    status: "ON TIME"
  }
  return {
    type: SEARCH_FLIGHT,
    payload: { flightInformation }
  };
} 

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
