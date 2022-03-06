import * as React from 'react';
import DatePicker from "react-datepicker";


export const Example = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};