import { SET_SEARCH_TEXT, CLEAN_STORE, SHOW_SPINNER, SEARCH_FLIGHT_SUCCESS } from "../actionTypes";

const initialState = {
  searchText: "",
  showSpinner: false
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
    case SEARCH_FLIGHT_SUCCESS: {
      const { showSpinner } = action.payload;
      return {
        ...state,
        showSpinner
      };
    }
    case SHOW_SPINNER: {
      const { showSpinner } = action.payload;
      return {
        ...state,
        showSpinner
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
