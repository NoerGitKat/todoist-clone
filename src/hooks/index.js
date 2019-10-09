import { useState, useEffect } from 'react';
import { firebase } from './../firebase';
import moment from 'moment';

import { findCombinedTasks } from './../helpers';

// Custom hook
export const useTasks = selectedProject => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		let unsubscribe = firebase
			.firestore()
			.collection('tasks')
			.where('userId', '==', '1d4df8dd-70e4-4991-be34-6eb0c0706b4c');

		unsubscribe =
			selectedProject && !findCombinedTasks(selectedProject)
				? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
				: (selectedProject = 'TODAY')
				? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY')))
				: selectedProject === 'INBOX' || selectedProject === 0
				? (unsubscribe = unsubscribe.where('date', '==', ''))
				: unsubscribe;

		unsubscribe = unsubscribe.onSnapshot(snapshot => {
			const newTasks = snapshot.docs.map(task => ({
				id: task.id,
				...task.data(),
			}));

			// Update tasks if the deadline is in more then a week & not archived
			setTasks(
				selectedProject === 'NEXT_7'
					? newTasks.filter(
							task =>
								moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && task.archived !== true
					  )
					: newTasks.filter(task => task.archived !== true)
			);
		});
	}, [selectedProject]); // If this value changes fire this hook

	return { tasks };
};

// Custom hook
export const useProjects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		firebase
			.firestore()
			.collection('projects')
			.where('userId', '==', '1d4df8dd-70e4-4991-be34-6eb0c0706b4c')
			.orderBy('projectId')
			.get()
			.then(snapshot => {
				const allProjects = snapshot.docs.map(project => ({
					...project.data(),
					docId: project.id,
				}));

				// Check if projects changed
				if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
					setProjects(allProjects);
				}
			});
	}, [projects]);

	return { projects, setProjects };
};
