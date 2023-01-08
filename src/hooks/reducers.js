import React, { createContext, useContext, useReducer } from "react";
import { SEARCH_NOTIFICATION, CHANGE_NOTIFICATION_STATUS } from "./constants";
import notifications from "./Components/DropdownList/fakeData";
import { changeStatus } from "./helperFunctions";

const listReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_NOTIFICATION: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case CHANGE_NOTIFICATION_STATUS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      console.error(action.payload);
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
};

export { listReducer };
