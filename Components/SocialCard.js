import React from 'react';
import { StyleSheet, Linking, View } from 'react-native';
import { Card, Button, Text, Icon } from '@rneui/themed';
import { useTheme } from '../Context/ThemeContext';
import { useFont } from '../Context/FontContext';

export const SocialCard = ({ title, description, iconName, iconColor, url }) => {
  const { theme } = useTheme();
  const { getScaledFontSize } = useFont();

  const handlePress = async () => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log("Não foi possível abrir o link: " + url);
      }
    } catch (error) {
      console.error("Erro ao abrir link", error);
    }
  };

  return (
    <Card containerStyle={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder, shadowColor: theme.shadow }]}>
      <View style={styles.header}>
        <Icon
          name={iconName}
          type="ionicon"
          color={iconColor}
          size={getScaledFontSize(32)}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.text, fontSize: getScaledFontSize(18) }]}>
            {title}
          </Text>
          <Text style={[styles.description, { color: theme.textSecondary, fontSize: getScaledFontSize(14) }]}>
            {description}
          </Text>
        </View>
      </View>
      <Button
        title="Acessar Perfil"
        icon={{
          name: 'open-outline',
          type: 'ionicon',
          size: getScaledFontSize(16),
          color: '#FFFFFF',
        }}
        iconRight
        buttonStyle={[styles.button, { backgroundColor: theme.primary }]}
        titleStyle={[styles.buttonTitle, { fontSize: getScaledFontSize(14) }]}
        onPress={handlePress}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginHorizontal: 0,
    marginVertical: 8,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    lineHeight: 20,
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

export default SocialCard;
