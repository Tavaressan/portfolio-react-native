import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Text, Card, Badge } from '@rneui/themed';
import { useTheme } from '../Context/ThemeContext';
import { useFont } from '../Context/FontContext';
import ThemeSwitch from '../Components/ThemeSwitch';
import FontSlider from '../Components/FontSlider';
import SocialCard from '../Components/SocialCard';

export const ProfileScreen = () => {
  const { theme } = useTheme();
  const { getScaledFontSize } = useFont();

  const FOTO_URL = 'https://github.com/Tavaressan.png';

  const interests = ["Java", "Spring", "Cloud", "Sistemas Distribuídos", "IoT"];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.profileHeader}>
        <Avatar
          rounded
          size="xlarge"
          source={{ uri: FOTO_URL }}
          containerStyle={[styles.avatar, { borderColor: theme.primary }]}
        />
        <Text style={[styles.name, { color: theme.text, fontSize: getScaledFontSize(24) }]}>
          Vitor Tavares
        </Text>
        <Text style={[styles.course, { color: theme.textSecondary, fontSize: getScaledFontSize(15) }]}>
          Desenvolvimento de Software Multiplataforma
        </Text>
      </View>

      <Card containerStyle={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder, shadowColor: theme.shadow }]}>
        <Text style={[styles.cardTitle, { color: theme.text, fontSize: getScaledFontSize(14) }]}>
          Informações Profissionais
        </Text>
        <Card.Divider color={theme.divider} />
        
        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: theme.textSecondary, fontSize: getScaledFontSize(13) }]}>
            Área Desejada
          </Text>
          <Text style={[styles.infoValue, { color: theme.text, fontSize: getScaledFontSize(15) }]}>
            Back-End
          </Text>
        </View>

        <View style={styles.interestsSection}>
          <Text style={[styles.infoLabel, { color: theme.textSecondary, fontSize: getScaledFontSize(13), marginBottom: 8 }]}>
            Interesses
          </Text>
          <View style={styles.interestsContainer}>
            {interests.map((interest, index) => (
              <Badge
                key={index}
                value={interest}
                badgeStyle={[styles.badge, { backgroundColor: theme.primary }]}
                textStyle={{ color: '#FFFFFF', fontWeight: '600', fontSize: getScaledFontSize(12) }}
              />
            ))}
          </View>
        </View>
      </Card>

      <View style={styles.settingsSection}>
        <Text style={[styles.sectionTitle, { color: theme.text, fontSize: getScaledFontSize(14) }]}>
          Ajustes do Aplicativo
        </Text>
        <ThemeSwitch />
        <FontSlider />
      </View>

      <View style={styles.socialSection}>
        <Text style={[styles.sectionTitle, { color: theme.text, fontSize: getScaledFontSize(14) }]}>
          Contatos Profissionais
        </Text>
        <SocialCard
          title="LinkedIn"
          description="Perfil profissional e networking"
          iconName="logo-linkedin"
          iconColor="#0A66C2"
          url="https://www.linkedin.com/in/vitor-tavares-500967236/"
        />
        <SocialCard
          title="GitHub"
          description="Projetos acadêmicos e repositórios"
          iconName="logo-github"
          iconColor={theme.text}
          url="https://github.com/Tavaressan"
        />
      </View>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatar: {
    marginBottom: 16,
    borderWidth: 3,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  course: {
    textAlign: 'center',
    fontWeight: '500',
  },
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
  cardTitle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  infoLabel: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoValue: {
    fontWeight: 'bold',
  },
  interestsSection: {
    marginTop: 8,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 'auto',
    borderRadius: 8,
  },
  settingsSection: {
    marginVertical: 12,
  },
  socialSection: {
    marginVertical: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

export default ProfileScreen;
