import React from 'react';
import logo from '../../assets/img/logo.png';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
	return (
		<header className="header" data-testid="header">
			<nav>
				<div className="logo">
					<img src={logo} alt="Todoist Logo" />
				</div>
				<div className="settings">
					<ul>
						<li>+</li>
						<li>
							<FaPizzaSlice />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};
