import "./header.scss";

function Header() {
	return (
		<header className="header">
			<a href="/" className="logo">
				Beauty
				<br />
				Admin
			</a>
			<nav>
				<ul className="header__list">
					<li className="header__link header__link_active">
						<a href="/">Schedule</a>
					</li>
					<li className="header__link">
						<a href="/">History</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
