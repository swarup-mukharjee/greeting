import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let date = new Date();
date = date.getHours();
const st = {};
if (date >= 1 && date < 12) {
  date = "Good morning";
  st.color = "lightgreen";
} else if (date >= 12 && date <= 16) {
  date = "Good afternoon";
  st.color = "orange";
} else if (date > 16 && date <= 19) {
  date = "Good evening";
  st.color = "lightblue";
} else {
  date = "Good night";
  st.color = "navy";
}

const s = {
  position: "absolute",
  top: "40%",
  left: "35%",
  borderRadius: "30px",
  backgroundColor: "grey",
  width: "400px",
  paddingLeft: "10px"
};
ReactDOM.render(
  <>
    <div style={s} >
      <h1>Hello Sir, <span style={st}>{date}</span></h1>
    </div>

  </>, document.getElementById("root")
);
