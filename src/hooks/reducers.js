import {
  SEARCH_NOTIFICATION,
  CHANGE_NOTIFICATION_STATUS,
} from "../utils/constants";

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
