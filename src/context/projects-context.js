import React, { createContext, useContext } from 'react';

// Context provides a way to pass down state directly to each component
// without use of props
export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
	const { projects, setProjects } = useProjects();

	return <ProjectsContext.Provider value={{ projects, setProjects }}>{children}</ProjectsContext.Provider>;
};

export const useProjectsValue = () => useContext(ProjectsContext);
