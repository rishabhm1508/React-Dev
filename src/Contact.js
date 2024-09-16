import React from "react";
import ContactClassBased from "./Contact-ClassBased";

const Contact = () => {
  return (
    // <div>
    //   Contact Us.
    //   <ContactClassBased name={"First"} />
    //   <ContactClassBased name={"Second"} />
    // </div>
    <div className="">
      <h1 className="p-2 font-bold text-lg"> Contact page</h1>

      <input
        type="text"
        className="p-2 m-2 border-black rounded-lg"
        placeholder="Enter name"
      />

      <input
        type="text"
        className="p-2 m-2 border-black rounded-lg"
        placeholder="Enter password"
      />

      <button className="bg-white text-blue-700 font-bold ml-2 p-2 border-blue-700 border-2 rounded-lg hover:bg-blue-700 hover:text-white ">
        Submit
      </button>
    </div>
  );
};

export default Contact;
