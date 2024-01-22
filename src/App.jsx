import React from "react";
import TextField from "./components/forms/inputs/TextField";
function App() {
  return (
    <center className="center-container">
      <h1>TODO App</h1>
      <div class="container text-center">
        <TextField></TextField>

        

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
