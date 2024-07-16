import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

const Datepicker = ({ selectedDate, onChangeDate, id }) => {
    return (
        <DatePicker
            locale={ko}
            selected={selectedDate}
            onChange={(date) => onChangeDate(date, id)}
            dateFormat={"YYYY-MM-DD"}
        />
    );
};

export default Datepicker;