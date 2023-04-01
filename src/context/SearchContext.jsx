import { useReducer } from "react";

import { createContext } from "react";

const INITIAL_STATE = {
  destination: undefined,
  date: [],
  searchOption: {
    adult: undefined,
    childern: undefined,
    rooms: undefined,
  },
};

export const SearchContext = createContext();

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        destination: state.destination,
        date: state.date,
        searchOption: state.searchOption,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
