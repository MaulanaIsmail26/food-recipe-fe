import React from "react";

function maintenance() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="/asset/maintenance.svg" width="300px"></img>
        </div>
        <h1>PAGE MAINTENANCE</h1>
      </div>
    </div>
  );
}

export default maintenance;
