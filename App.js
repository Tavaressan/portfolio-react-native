import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';

// Contexts
import { ThemeProvider, useTheme } from './Context/ThemeContext';
import { FontProvider, useFont } from './Context/FontContext';

// Screens
import ProfileScreen from './Screens/ProfileScreen';
import Semester1Screen from './Screens/Semester1Screen';
import Semester2Screen from './Screens/Semester2Screen';
import Semester3Screen from './Screens/Semester3Screen';
import Semester4Screen from './Screens/Semester4Screen';

const Tab = createBottomTabNavigator();

function NavigationWrapper() {
  const { theme } = useTheme();
  const { getScaledFontSize } = useFont();

  return (
    <>
      <StatusBar style={theme.statusBar} backgroundColor={theme.cardBackground} translucent={false} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Perfil') {
                iconName = 'person-outline';
              } else if (route.name === '1º Sem') {
                iconName = 'code-working-outline';
              } else if (route.name === '2º Sem') {
                iconName = 'nutrition-outline';
              } else if (route.name === '3º Sem') {
                iconName = 'server-outline';
              } else if (route.name === '4º Sem') {
                iconName = 'logo-react';
              }
              return <Icon name={iconName} type="ionicon" size={getScaledFontSize(size)} color={color} />;
            },
            tabBarActiveTintColor: theme.primary,
            tabBarInactiveTintColor: theme.textSecondary,
            tabBarStyle: {
              backgroundColor: theme.cardBackground,
              borderTopColor: theme.cardBorder,
              height: 60,
              paddingBottom: 8,
              paddingTop: 8,
            },
            tabBarLabelStyle: {
              fontSize: getScaledFontSize(11),
              fontWeight: '600',
            },
            headerStyle: {
              backgroundColor: theme.cardBackground,
              borderBottomColor: theme.cardBorder,
              borderBottomWidth: 1,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              color: theme.text,
              fontSize: getScaledFontSize(18),
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          })}
        >
          <Tab.Screen name="Perfil" component={ProfileScreen} options={{ title: 'Meu Perfil' }} />
          <Tab.Screen name="1º Sem" component={Semester1Screen} options={{ title: '1º Semestre' }} />
          <Tab.Screen name="2º Sem" component={Semester2Screen} options={{ title: '2º Semestre' }} />
          <Tab.Screen name="3º Sem" component={Semester3Screen} options={{ title: '3º Semestre' }} />
          <Tab.Screen name="4º Sem" component={Semester4Screen} options={{ title: '4º Semestre' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <FontProvider>
          <NavigationWrapper />
        </FontProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
