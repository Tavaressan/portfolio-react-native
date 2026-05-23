import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useTheme } from '../Context/ThemeContext';
import { useFont } from '../Context/FontContext';
import { Icon } from '@rneui/themed';

export const FontSlider = () => {
  const { theme } = useTheme();
  const { fontSize, setFontSize, getScaledFontSize } = useFont();

  return (
    <View style={[styles.container, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Icon
            name="text-outline"
            type="ionicon"
            color={theme.primary}
            size={getScaledFontSize(20)}
            style={styles.icon}
          />
          <Text style={[styles.title, { color: theme.text, fontSize: getScaledFontSize(15) }]}>
            Tamanho da Fonte
          </Text>
        </View>
        <Text style={[styles.valueText, { color: theme.primary, fontSize: getScaledFontSize(15) }]}>
          {fontSize}px
        </Text>
      </View>
      <View style={styles.sliderRow}>
        <Text style={[styles.limitLabel, { color: theme.textSecondary, fontSize: getScaledFontSize(12) }]}>A</Text>
        <Slider
          style={styles.slider}
          minimumValue={14}
          maximumValue={28}
          step={1}
          value={fontSize}
          onValueChange={setFontSize}
          minimumTrackTintColor={theme.primary}
          maximumTrackTintColor={theme.cardBorder}
          thumbTintColor={theme.primary}
        />
        <Text style={[styles.limitLabel, { color: theme.textSecondary, fontSize: getScaledFontSize(18), fontWeight: 'bold' }]}>A</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontWeight: '600',
  },
  valueText: {
    fontWeight: 'bold',
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
    height: 40,
  },
  limitLabel: {
    width: 20,
    textAlign: 'center',
  },
});

export default FontSlider;
