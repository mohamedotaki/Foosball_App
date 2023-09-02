import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';



export default function Button({name, fun}){

  return (
    <div className="d-grid gap-2 col-6 mx-auto">
  <button
  className="btn btn-primary"  type="button"
  onClick={fun}
  >{name}
  </button>
  </div>
  );



}