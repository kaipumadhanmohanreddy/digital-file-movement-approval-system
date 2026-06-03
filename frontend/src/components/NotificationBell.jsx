import {
  Bell,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import API from "../api/axios";

const NotificationBell = () => {
  /*
    State
  */

  const [
    notifications,
    setNotifications,
  ] = useState([]);

  const [open, setOpen] =
    useState(false);

  /*
    Fetch Notifications
  */

  useEffect(() => {
    const fetchNotifications =
      async () => {
        try {
          const res =
            await API.get(
              "/notifications"
            );

          setNotifications(
            res.data
              .notifications
          );
        } catch (error) {
          console.log(error);
        }
      };

    fetchNotifications();
  }, []);

  /*
    Unread Count
  */

  const unread =
    notifications.filter(
      (n) => !n.isRead
    ).length;

  return (
    <div className="relative">
      {/* Bell */}

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          relative
          p-2
          rounded-full
          hover:bg-slate-100
          dark:hover:bg-slate-700
          transition-all
        "
      >
        <Bell size={22} />

        {unread > 0 && (
          <span
            className="
              absolute
              -top-1
              -right-1
              bg-red-500
              text-white
              text-xs
              w-5 h-5
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            {unread}
          </span>
        )}
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            right-0
            mt-2
            w-80
            bg-white
            dark:bg-slate-800
            border
            border-slate-200
            dark:border-slate-700
            rounded-2xl
            shadow-xl
            z-50
            overflow-hidden
          "
        >
          <div className="p-4 border-b dark:border-slate-700">
            <h2 className="font-semibold dark:text-white">
              Notifications
            </h2>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length >
            0 ? (
              notifications.map(
                (
                  notification
                ) => (
                  <div
                    key={
                      notification._id
                    }
                    className="
                      p-4
                      border-b
                      dark:border-slate-700
                      hover:bg-slate-50
                      dark:hover:bg-slate-700
                    "
                  >
                    <p className="text-sm dark:text-white">
                      {
                        notification.message
                      }
                    </p>
                  </div>
                )
              )
            ) : (
              <div className="p-4 text-center text-slate-500">
                No notifications
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;