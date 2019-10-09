import { combinedTasks } from './../constants';

export const findCombinedTasks = selectedProject => {
	combinedTasks.find(task => task.key === selectedProject);
};
