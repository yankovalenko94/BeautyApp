function Spinner() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={{
				margin: "0 auto",
				background: "rgba(241, 242, 243, 0)",
				display: "block",
			}}
			width="200px"
			height="200px"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<rect x="17.5" y="30" width="15" height="40" fill="#f3ab9b">
				<animate
					attributeName="y"
					repeatCount="indefinite"
					dur="1.4492753623188404s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="18;30;30"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-0.2898550724637681s"
				></animate>
				<animate
					attributeName="height"
					repeatCount="indefinite"
					dur="1.4492753623188404s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="64;40;40"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-0.2898550724637681s"
				></animate>
			</rect>
			<rect x="42.5" y="30" width="15" height="40" fill="#c1c1c1">
				<animate
					attributeName="y"
					repeatCount="indefinite"
					dur="1.4492753623188404s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="20.999999999999996;30;30"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-0.14492753623188406s"
				></animate>
				<animate
					attributeName="height"
					repeatCount="indefinite"
					dur="1.4492753623188404s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="58.00000000000001;40;40"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-0.14492753623188406s"
				></animate>
			</rect>
			<rect x="67.5" y="30" width="15" height="40" fill="#ea0000">
				<animate
					attributeName="y"
					repeatCount="indefinite"
					dur="1.4492753623188404s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="20.999999999999996;30;30"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
				></animate>
				<animate
					attributeName="height"
					repeatCount="indefinite"
					dur="1.4492753623188404s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="58.00000000000001;40;40"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
				></animate>
			</rect>
		</svg>
	);
}

export default Spinner;
