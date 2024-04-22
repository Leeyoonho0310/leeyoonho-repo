//여러 개의 리듀서를 하나로 묶어줌
import { combineReducers } from "@redux/toolkit";
import { countReducer } from "./countReducer";
import { isLoggedinReducer } from "./isLoggedinReducer";
import countReducer from "./modules/countSlice";

// combineReducers : 여러 개의 리듀서를 하나로 묶어줌
const rootReducer = combineReducers({
  count: countReducer,
  isLoggedIn: isLoggedinReducer,
});

export default rootReducer;
