import { Calendar as LibCalendar } from "react-calendar";
import { useContext, useEffect } from "react";

import { AppointmentContext } from "../../context/appointments/AppointmentsContext";

import "react-calendar/dist/Calendar.css";
import "./calendar.scss";

function Calendar() {
	const { calendarDate, setDateAndFilter } = useContext(AppointmentContext);

	useEffect(() => {
		setDateAndFilter([null, null]);
	}, []);

	return (
		<div className="calendar">
			<LibCalendar
				value={calendarDate}
				onChange={(value) => {
					setDateAndFilter(value);
				}}
				selectRange
			/>
			<button
				disabled={
					Array.isArray(calendarDate) && calendarDate[0] && calendarDate[1]
						? false
						: true
				}
				onClick={() => setDateAndFilter([null, null])}
				className="calendar__reset"
			>
				Reset filters
			</button>
		</div>
	);
}

export default Calendar;
