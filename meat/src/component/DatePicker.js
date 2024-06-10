import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = () => {
    const [inputDate, setInputDate] = useState(new Date());
    return (
        <DatePicker
            dateFormat={"yyyy-MM-dd"}
            selected={inputDate}
            onChange={date => setInputDate(inputDate)} />
    );
};

export default Datepicker;