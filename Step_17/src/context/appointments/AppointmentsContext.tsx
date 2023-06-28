import React, { createContext, useReducer } from "react";
import { Value } from "react-calendar/dist/cjs/shared/types";
import reducer, { IAppointmentState } from "./reducer";

import useAppointmentService from "../../services/AppointmentService";

import { ActionsTypes } from "./actions";

const initialState: IAppointmentState = {
	allAppointments: [],
	activeAppointments: [],
	appointmentLoadingStatus: "idle",
	calendarDate: [null, null],
};

interface ProviderProps {
	children: React.ReactNode;
}

interface AppointmentContextValue extends IAppointmentState {
	getAppointments: () => void;
	getActiveAppointments: () => void;
	setDateAndFilter: (newDate: Value) => void;
}

export const AppointmentContext = createContext<AppointmentContextValue>({
	allAppointments: initialState.allAppointments,
	activeAppointments: initialState.activeAppointments,
	appointmentLoadingStatus: initialState.appointmentLoadingStatus,
	calendarDate: initialState.calendarDate,
	getAppointments: () => {},
	getActiveAppointments: () => {},
	setDateAndFilter: (newDate: Value) => {},
});

const AppointmentContextProvider = ({ children }: ProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { loadingStatus, getAllAppointments, getAllActiveAppointments } =
		useAppointmentService();

	const value: AppointmentContextValue = {
		allAppointments: state.allAppointments,
		activeAppointments: state.activeAppointments,
		appointmentLoadingStatus: loadingStatus,
		calendarDate: state.calendarDate,
		getAppointments: () => {
			getAllAppointments()
				.then((data) => {
					const filteredData = data.filter((item) => {
						if (
							Array.isArray(state.calendarDate) &&
							state.calendarDate[0] &&
							state.calendarDate[1]
						) {
							if (
								new Date(item.date).getTime() >=
									new Date(state.calendarDate[0]).getTime() &&
								new Date(item.date).getTime() <=
									new Date(state.calendarDate[1]).getTime()
							) {
								return item;
							}
						} else {
							return item;
						}
					});
					dispatch({
						type: ActionsTypes.SET_ALL_APPOINTMENTS,
						payload: filteredData,
					});
				})
				.catch(() => {
					dispatch({ type: ActionsTypes.ERROR_FETCHING_APPOINTMENTS });
				});
		},
		getActiveAppointments: () => {
			getAllActiveAppointments()
				.then((data) => {
					const filteredData = data.filter((item) => {
						if (
							Array.isArray(state.calendarDate) &&
							state.calendarDate[0] &&
							state.calendarDate[1]
						) {
							if (
								new Date(item.date).getTime() >=
									new Date(state.calendarDate[0]).getTime() &&
								new Date(item.date).getTime() <=
									new Date(state.calendarDate[1]).getTime()
							) {
								return item;
							}
						} else {
							return item;
						}
					});

					dispatch({
						type: ActionsTypes.SET_ACTIVE_APPOINTMENTS,
						payload: filteredData,
					});
				})
				.catch(() => {
					dispatch({ type: ActionsTypes.ERROR_FETCHING_APPOINTMENTS });
				});
		},
		setDateAndFilter: (newDate: Value) => {
			dispatch({ type: ActionsTypes.SET_CALENDAR_DATE, payload: newDate });
		},
	};

	return (
		<AppointmentContext.Provider value={value}>
			{children}
		</AppointmentContext.Provider>
	);
};

export default AppointmentContextProvider;
