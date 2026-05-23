import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '../Context/ThemeContext';
import { projects } from '../Data/projects';
import SemesterHeader from '../Components/SemesterHeader';
import ProjectCard from '../Components/ProjectCard';

export const Semester4Screen = () => {
  const { theme } = useTheme();
  const project = projects.find(p => p.semester === 4);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <SemesterHeader
        semester={4}
        title="Project LDW"
        objective={project?.objective || "Desenvolvimento de Soluções Mobile"}
      />
      {project && <ProjectCard project={project} />}
      <View style={{ height: 24 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export default Semester4Screen;
