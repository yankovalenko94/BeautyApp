import { IAppointmentAction, ActionsTypes } from "./actions";
import {
	IAppointment,
	ActiveAppointment,
} from "../../shared/interfaces/appointment.interface";

export interface IInitialState {
	allAppointments: IAppointment[] | [];
	activeAppointments: ActiveAppointment[] | [];
}

export default function reducer(
	state: IInitialState,
	action: IAppointmentAction
) {
	switch (action.type) {
		case ActionsTypes.SET_ALL_APPOINTMENTS:
			return { ...state, allAppointments: action.payload };
		case ActionsTypes.SET_ACTIVE_APPOINTMENTS:
			return { ...state, activeAppointments: action.payload };
		default:
			return state;
	}
}
