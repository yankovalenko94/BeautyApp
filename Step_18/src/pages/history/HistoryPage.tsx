import Calendar from "../../components/calendar/Calendar";
import HistoryList from "../../components/historyList/HistoryList";
import "./historyPage.scss";

function HistoryPage() {
	return (
		<section className="history">
			<div className="history__controls">
				<Calendar />
			</div>
			<div className="history__list">
				<HistoryList />
			</div>
		</section>
	);
}

export default HistoryPage;
