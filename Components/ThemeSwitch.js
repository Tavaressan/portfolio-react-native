import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../Context/ThemeContext';
import { useFont } from '../Context/FontContext';
import { Icon } from '@rneui/themed';

export const ThemeSwitch = () => {
  const { darkMode, toggleTheme, theme } = useTheme();
  const { getScaledFontSize } = useFont();

  return (
    <View style={[styles.container, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]}>
      <View style={styles.labelContainer}>
        <Icon
          name={darkMode ? 'moon-outline' : 'sunny-outline'}
          type="ionicon"
          color={darkMode ? theme.primary : '#F59E0B'}
          size={getScaledFontSize(20)}
          style={styles.icon}
        />
        <Text style={[styles.text, { color: theme.text, fontSize: getScaledFontSize(15) }]}>
          {darkMode ? 'Tema Escuro' : 'Tema Claro'}
        </Text>
      </View>
      <Switch
        value={darkMode}
        onValueChange={toggleTheme}
        trackColor={{ false: '#CBD5E1', true: '#3B82F6' }}
        thumbColor={darkMode ? '#FFFFFF' : '#FFFFFF'}
        ios_backgroundColor="#94A3B8"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontWeight: '600',
  },
});

export default ThemeSwitch;
