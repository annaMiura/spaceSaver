import React from "react";
import Cell from "./Cell.jsx";
import moment from "moment";
import { HourCell } from './styles.jsx';

function HourDisplay(props) {
  let hours = [];

  let bgColor = '#66A182';
  hours.push([bgColor, '--'])
  for (var i = 0; i <= props.duration; i++) {
    let hour = moment(props.startTime);
    hours.push([bgColor, hour.format("h:mm A")]);
    props.startTime.add(15, "minutes");
  }

  return (
    <HourCell>
      {hours.map((item, index) => {
        return <Cell key={index} color={item[0]} text={item[1]} align={'center'} booked={null} />;
      })}
    </HourCell>
  );
}

export default HourDisplay;