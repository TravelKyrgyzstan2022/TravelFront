import React from "react";
import notf from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <div className={notf.container}>
        <h2 className={notf.txt}>Not Found Page</h2>
      </div>
    </>
  );
};

export default NotFound;
