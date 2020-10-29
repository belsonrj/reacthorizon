import { combineReducers } from "redux";
//import uuid from "uuid";
 
const rootReducer = combineReducers({
  artists: artistsReducer,
  venues: venuesReducer
});
 
export default rootReducer;
 
function artistsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_ARTIST":
      return [...state, action.artist];
 
    case "REMOVE_ARTIST":
      idx = state.findIndex(artist => artist.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
    default:
      return state;
  }
}
 
function venuesReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_VENUE":
      return [...state, action.venue];
 
    case "REMOVE_VENUE":
      idx = state.findIndex(venue => venue.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
    default:
      return state;
  }
}