export interface IAppointment {
	id: number;
	date: string;
	name: string;
	service: string;
	phone: string;
	canceled: boolean;
}

export type ActiveAppoitment = Omit<IAppointment, "canceled">;
