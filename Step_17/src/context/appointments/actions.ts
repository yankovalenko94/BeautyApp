import {
	IAppointment,
	ActiveAppointment,
} from "../../shared/interfaces/appointment.interface";

import { LooseValue } from "react-calendar/dist/cjs/shared/types";

export enum ActionsTypes {
	SET_ACTIVE_APPOINTMENTS = "SET_ACTIVE_APPOINTMENTS",
	SET_ALL_APPOINTMENTS = "SET_ALL_APPOINTMENTS",
	FETCHING_APPOINTMENTS = "FETCHING_APPOINTMENTS",
	ERROR_FETCHING_APPOINTMENTS = "ERROR_FETCHING_APPOINTMENTS",
	SET_CALENDAR_DATE = "SET_CALENDAR_DATE",
}

export type AppointmentAction =
	| {
			type: ActionsTypes.SET_ACTIVE_APPOINTMENTS;
			payload: ActiveAppointment[];
	  }
	| {
			type: ActionsTypes.SET_ALL_APPOINTMENTS;
			payload: IAppointment[];
	  }
	| {
			type: ActionsTypes.FETCHING_APPOINTMENTS;
	  }
	| {
			type: ActionsTypes.ERROR_FETCHING_APPOINTMENTS;
	  }
	| {
			type: ActionsTypes.SET_CALENDAR_DATE;
			payload: LooseValue;
	  };
