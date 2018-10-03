import React from "react";
import "./Puppy.css";

const Puppy = props => (

    <div className="card" onClick={()=>props.puppyClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>

);

export default Puppy;