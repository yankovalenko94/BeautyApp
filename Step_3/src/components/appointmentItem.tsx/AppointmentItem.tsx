import "./appointmentItem.scss";

function AppointmentItem() {
	return (
		<div className="appointment">
			<div className="appointment__info">
				<span className="appointment__date">Date: DD/MM/YYYY HH:mm</span>
				<span className="appointment__name">Name: Alex Smith</span>
				<span className="appointment__service">Service: Manicure</span>
				<span className="appointment__phone">Phone: +1 948 945 344</span>
			</div>
			<div className="appointment__time">
				<span>Time left:</span>
				<span className="appointment__timer">HH:mm</span>
			</div>
			<button className="appointment__cancel">Cancel</button>
			{/* <div className="appointment__canceled">Canceled</div> */}
		</div>
	);
}

export default AppointmentItem;
