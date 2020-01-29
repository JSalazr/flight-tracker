import { SET_SEARCH_TEXT, SEARCH_FLIGHT } from "../actionTypes";

export const setSearchText = searchText => ({
  type: SET_SEARCH_TEXT,
  payload: {
    searchText
  }
});

export const searchFlight = searchText => {
  const flightInformation = {
    flightNumber: searchText,
    location: {
      origin: 'LAX',
      destination: 'SAP',
      distance: '1000km'
    },
    date: '2020/28/01',
    arrivalTime: "10:30am",
    delay: 0,
    terminal: "G2",
    baggage: "13"
  }
  return {
    type: SEARCH_FLIGHT,
    payload: { flightInformation }
  };
} 

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
