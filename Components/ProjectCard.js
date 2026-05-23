import React from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { Card, Button, Text, Badge, Icon } from '@rneui/themed';
import { useTheme } from '../Context/ThemeContext';
import { useFont } from '../Context/FontContext';

export const ProjectCard = ({ project }) => {
  const { theme, darkMode } = useTheme();
  const { getScaledFontSize } = useFont();

  const handleOpenLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error("Erro ao abrir link", error);
    }
  };

  const hasDeploy = !!project.deploy;
  const isInProgress = project.status === "Em desenvolvimento";

  return (
    <Card containerStyle={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder, shadowColor: theme.shadow }]}>
      {project.image ? (
        <View style={styles.imageContainer}>
          <Card.Image 
            source={project.image} 
            style={styles.image} 
            resizeMode="cover"
          />
          {isInProgress && (
            <Badge
              value="Projeto em andamento"
              status="warning"
              containerStyle={styles.badgeContainer}
              badgeStyle={styles.badgeStyle}
              textStyle={[styles.badgeText, { fontSize: getScaledFontSize(11) }]}
            />
          )}
        </View>
      ) : (
        <View style={[styles.placeholderContainer, { backgroundColor: theme.primary + '15', borderColor: theme.cardBorder }]}>
          <Icon
            name={project.iconName || 'code-working-outline'}
            type="ionicon"
            color={theme.primary}
            size={getScaledFontSize(48)}
          />
          {isInProgress && (
            <Badge
              value="Projeto em andamento"
              status="warning"
              containerStyle={styles.badgeContainer}
              badgeStyle={styles.badgeStyle}
              textStyle={[styles.badgeText, { fontSize: getScaledFontSize(11) }]}
            />
          )}
        </View>
      )}

      <Text style={[styles.title, { color: theme.text, fontSize: getScaledFontSize(20) }]}>
        {project.title}
      </Text>
      
      <Card.Divider color={theme.divider} style={styles.divider} />

      <Text style={[styles.description, { color: theme.textSecondary, fontSize: getScaledFontSize(14), lineHeight: getScaledFontSize(20) }]}>
        {project.description}
      </Text>

      {project.partners && (
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text, fontSize: getScaledFontSize(12) }]}>
            Equipe Parceira
          </Text>
          <View style={styles.partnersContainer}>
            <Icon name="people-outline" type="ionicon" size={getScaledFontSize(16)} color={theme.textSecondary} style={{ marginRight: 6 }} />
            <Text style={[styles.partnersText, { color: theme.textSecondary, fontSize: getScaledFontSize(13) }]}>
              {project.partners}
            </Text>
          </View>
        </View>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text, fontSize: getScaledFontSize(12) }]}>
            Tecnologias Utilizadas
          </Text>
          <View style={styles.techContainer}>
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                value={tech}
                badgeStyle={[styles.techBadge, { backgroundColor: darkMode ? '#334155' : '#E2E8F0' }]}
                textStyle={[styles.techBadgeText, { color: theme.text, fontSize: getScaledFontSize(11) }]}
              />
            ))}
          </View>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Button
          title="GitHub"
          icon={{
            name: 'logo-github',
            type: 'ionicon',
            size: getScaledFontSize(16),
            color: '#FFFFFF',
          }}
          buttonStyle={[styles.button, { backgroundColor: darkMode ? '#2E3A4E' : '#374151' }]}
          titleStyle={[styles.buttonTitle, { fontSize: getScaledFontSize(14) }]}
          containerStyle={[styles.buttonWrapper, hasDeploy && { marginRight: 8 }]}
          onPress={() => handleOpenLink(project.github)}
        />
        
        {hasDeploy && (
          <Button
            title="Deploy / Site"
            icon={{
              name: 'earth-outline',
              type: 'ionicon',
              size: getScaledFontSize(16),
              color: '#FFFFFF',
            }}
            buttonStyle={[styles.button, { backgroundColor: theme.primary }]}
            titleStyle={[styles.buttonTitle, { fontSize: getScaledFontSize(14) }]}
            containerStyle={styles.buttonWrapper}
            onPress={() => handleOpenLink(project.deploy)}
          />
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginHorizontal: 0,
    marginVertical: 12,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  placeholderContainer: {
    position: 'relative',
    height: 160,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  image: {
    height: 160,
    borderRadius: 12,
  },
  badgeContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  badgeStyle: {
    paddingHorizontal: 10,
    height: 26,
    borderRadius: 13,
    borderWidth: 0,
  },
  badgeText: {
    fontWeight: 'bold',
    color: '#111111',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  divider: {
    marginVertical: 10,
  },
  description: {
    marginBottom: 14,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  partnersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  partnersText: {
    fontWeight: '500',
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  techBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    height: 'auto',
    borderRadius: 6,
    borderWidth: 0,
  },
  techBadgeText: {
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  buttonWrapper: {
    flex: 1,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
  },
  buttonTitle: {
    fontWeight: '600',
    marginLeft: 6,
  },
});

export default ProjectCard;
