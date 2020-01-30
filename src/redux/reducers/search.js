import { SET_SEARCH_TEXT, SEARCH_FLIGHT, CLEAN_STORE } from "../actionTypes";

const initialState = {
  searchText: "",
  flightInformation: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TEXT: {
      const { searchText } = action.payload;
      return {
        ...state,
        searchText: searchText,
      };
    }
    case SEARCH_FLIGHT: {
      const { flightInformation } = action.payload;
      return {
        ...state,
        flightInformation: { ...flightInformation },
      };
    }
    case CLEAN_STORE: {
      return {
        searchText: "",
        flightInformation: {},
      };
    }
    default:
      return state;
  }
}
