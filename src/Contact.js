import React from "react";
import ContactClassBased from "./Contact-ClassBased";

const Contact = () => {
  return (
    <div>
      Contact Us.
      <ContactClassBased name={"First"} />
      <ContactClassBased name={"Second"} />
    </div>
  );
};

export default Contact;
