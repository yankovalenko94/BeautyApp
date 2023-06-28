import { useEffect } from "react";
import Header from "../header/Header";
import SchedulePage from "../../pages/schedule/SchedulePage";
// import HistoryPage from "../../pages/history/HistoryPage";
// import CancelModal from "../modal/CancelModal";
import useAppointmentService from "../../services/AppointmentService";

import { IInitialState } from "../../context/appointments/reducer";

import "./app.scss";

const initialState: IInitialState = {
	allAppointments: [],
	activeAppointments: [],
};

function App() {
	const { loadingStatus, getAllAppointments, getAllActiveAppointments } =
		useAppointmentService();

	useEffect(() => {
		getAllAppointments().then((data) => console.log(data));
	}, []);

	return (
		<main className="board">
			<Header />
			<SchedulePage />
			{/* <HistoryPage /> */}
			{/* <CancelModal /> */}
		</main>
	);
}

export default App;
