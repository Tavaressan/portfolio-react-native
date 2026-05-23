import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { useTheme } from '../Context/ThemeContext';
import { useFont } from '../Context/FontContext';

export const SemesterHeader = ({ semester, title, objective }) => {
  const { theme } = useTheme();
  const { getScaledFontSize } = useFont();

  return (
    <View style={[styles.container, { backgroundColor: theme.primary, shadowColor: theme.shadow }]}>
      <View style={styles.headerRow}>
        <View style={styles.badge}>
          <Text style={[styles.badgeText, { fontSize: getScaledFontSize(12) }]}>
            {semester}º SEMESTRE
          </Text>
        </View>
        <Icon name="school-outline" type="ionicon" color="#FFFFFF" size={getScaledFontSize(22)} />
      </View>
      
      <Text style={[styles.title, { fontSize: getScaledFontSize(24) }]}>
        {title}
      </Text>
      
      <Text style={[styles.objective, { fontSize: getScaledFontSize(14) }]}>
        {objective}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  objective: {
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: 20,
    fontWeight: '500',
  },
});

export default SemesterHeader;
