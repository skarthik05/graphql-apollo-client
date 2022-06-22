import React from "react";
import { Popup } from "semantic-ui-react";

function MyPopup({ content, children }) {
  return (
    <Popup
      inverted
      key={content.username}
      header={content.username}
      content={content.body ? content.body : content}
      trigger={children}
    />
  );
}

export default MyPopup;
