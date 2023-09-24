import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Popup.css";

export default function ConfirmationPopup({
  message,
  trigger,
  icon,
  acceptBtName,
  results,
  setTrigger,
  type,
}) {
  function btClick(data) {
    //results(data);
    setTrigger(false);
  }
  return trigger ? (
    <div className={type === "Notif" ? "NotifOuter" : "OuterPopup"}>
      <div className={type === "Notif" ? "NotifInner" : "InnerPopup"}>
        <div className="TopPart">
          <h6 className="PopupIcon">{icon}</h6>
          <h6 className="PopupMessage">{message}</h6>
        </div>

        <button
          hidden={type === "Notif" ? "hide" : ""}
          className="btn btn-secondary PopupButton"
          onClick={() => btClick(false)}
        >
          Cancel
        </button>
        <button
          hidden={type === "Notif" ? "hide" : ""}
          className="btn btn-warning PopupButton"
          onClick={() => btClick(true)}
        >
          {acceptBtName ? acceptBtName : "Yes"}
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
