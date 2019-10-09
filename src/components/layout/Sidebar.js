import React from 'react';
import { FaChevronDown, FaInbox, FaRegCalendar, FaRegCalendarAlt } from 'react-icons/fa';

const sidebarItems = [
	{ icon: <FaInbox />, text: 'Inbox' },
	{ icon: <FaRegCalendar />, text: 'Today' },
	{ icon: <FaRegCalendarAlt />, text: 'Next 7 days' },
];

export const Sidebar = () => {
	return (
		<div data-testid="sidebar">
			<ul className="sidebar_generic">
				{sidebarItems.map((item, i) => (
					<li key={i}>
						<span>{item.icon}</span>
						<span>{item.text}</span>
					</li>
				))}
			</ul>
			<div className="sidebar__middle">
				<span>
					<FaChevronDown />
				</span>
				<h2>Projects</h2>
			</div>
			<ul className="sidebar__projects">Projects will be here!</ul>
			Add a Project Component here!
		</div>
	);
};
