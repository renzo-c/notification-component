import { createContext, useContext, useReducer } from "react";
import { listReducer } from "./reducers";
import notifications from "../Components/Notifications/fakeData";
import { changeStatus } from "../utils/helperFunctions";
import {
  SEARCH_NOTIFICATION,
  CHANGE_NOTIFICATION_STATUS,
} from "../utils/constants";

const initialState = {
  notifications: [...notifications],
  originalList: [...notifications],
};

const NotificationContext = createContext;

const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const value = [state, dispatch];

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationContext provider"
    );
  }

  return context;
};

const onFilterNotifications = (dispatch, originalList, searchTerm) => {
  let filteredNotifications;
  if ((searchTerm = "")) {
    filteredNotifications = originalList;
  } else {
    filteredNotifications = originalList.filter(
      (n) => n.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
  }
  try {
    dispatch({
      type: SEARCH_NOTIFICATION,
      payload: { notifications: filteredNotifications },
    });
  } catch (error) {
    dispatch({ type: "Failed on filtering notifications", payload: error });
  }
};

// TO_DO: update logic when database integrated
const onChangeStatus = (
  dispatch,
  id,
  notifications,
  originalList,
  newStatus
) => {
  // TO_DO: remove newOriginal list when database integrated
  const newOriginalList = changeStatus(originalList, id, newStatus);
  const newNotifications = changeStatus(notifications, id, newStatus);

  try {
    dispatch({
      type: CHANGE_NOTIFICATION_STATUS,
      payload: {
        originalList: newOriginalList,
        notifications: newNotifications,
      },
    });
  } catch (error) {
    dispatch({ type: "Failed on updating notifications status", error });
  }
};

return {
  NotificationProvider,
  useNotification,
  onFilterNotifications,
  onChangeStatus,
};
