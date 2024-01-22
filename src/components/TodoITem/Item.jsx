import React from "react";

function Item() {
  let name = "";
  let date = "";

  return (
    <div class="row">
      <div class="col-6">{name}</div>
      <div class="col-4">{date}</div>
      <div class="col-2">
        <button className="btn btn-danger">Delte!</button>
      </div>
    </div>
  );
}

export default Item;
