import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "../header/Header";
import SchedulePage from "../../pages/schedule/SchedulePage";
import AppointmentContextProvider from "../../context/appointments/AppointmentsContext";
import HistoryPage from "../../pages/history/HistoryPage";
import PageNotFound from "../../pages/404/404";

import "./app.scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <PageNotFound />,
		children: [
			{
				path: "/",
				element: <SchedulePage />,
			},
			{
				path: "/schedule",
				element: <SchedulePage />,
			},
			{
				path: "/history",
				element: <HistoryPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

function Root() {
	return (
		<main className="board">
			<Header />
			<AppointmentContextProvider>
				<Outlet />
			</AppointmentContextProvider>
		</main>
	);
}

export default App;
