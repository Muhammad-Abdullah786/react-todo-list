import React from "react";

function TextField() {
  return (
    <div class="row">
      <div class="col-6">
        <input type="text" placeholder="Enter TODO Here!" id="" />
      </div>
      <div class="col-4">
        <input type="date" id="" />
      </div>
      <div class="col-2">
        <button className="btn btn-success">Add!</button>
      </div>
    </div>
  );
}

export default TextField;
