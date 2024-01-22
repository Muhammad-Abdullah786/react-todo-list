import React from "react";

function App() {
  return (
    <center className="center-container">
      <h1>TODO App</h1>
      <div class="container text-center">
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

        <div class="row">
          <div class="col-6">buy MIlk</div>
          <div class="col-4">4-23-2232</div>
          <div class="col-2">
            <button className="btn btn-danger">Delte!</button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">do HOme worke</div>
          <div class="col-4">43-342-12312</div>
          <div class="col-2">
            <button className="btn btn-danger">Delete!</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
