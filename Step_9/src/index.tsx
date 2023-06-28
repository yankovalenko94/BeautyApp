import ReactDOM from "react-dom/client";
import App from "./components/app/App";

import "./style/style.scss";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(<App />);
