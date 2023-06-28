import { useContext, useEffect } from "react";

import AppointmentItem from "../appointmentItem.tsx/AppointmentItem";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";

function AppointmentList() {
	const { allAppointments, getAppointments } = useContext(AppointmentContext);

	useEffect(() => {
		getAppointments();
	}, []);

	return (
		<>
			{allAppointments[0] ? allAppointments[0].name : null}
			<AppointmentItem />
			<AppointmentItem />
			<AppointmentItem />
			<AppointmentItem />
		</>
	);
}

export default AppointmentList;
