import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Welcome, Login, LoginAdmin, DashboardAdmin, Register, History, PasswordReset, Logout,Home, Profile, EditProfile, Calendar, RequestScreen, CalendarAdmin, ProfileAdmin, EditProfileAdmin, AddReport, Help, Dashboard, LoginCompany, Plan, RegisterCompany, ProfileCompany, EditProfileCompany, PaymentMethod, InvoiceHistory, MembersAdmin, MembersCompany, MembersCompanyStyles} from "./src/screens";
import { setupNotificationListeners, sendLocalNotification } from './src/services/pushNotificationService';


const Stack = createNativeStackNavigator();

export default function App() {
  const notificationListener = useRef();

  useEffect(() => {
    // Configurar listeners de notificaciones
    const listeners = setupNotificationListeners(
      // Cuando se recibe una notificación mientras la app está abierta
      (notification) => {
        console.log('📱 Nueva notificación recibida:', notification.request.content);
      },
      // Cuando el usuario toca una notificación
      (response) => {
        console.log('👆 Usuario tocó la notificación:', response.notification.request.content);
        // Aquí puedes navegar a una pantalla específica según el tipo de notificación
      }
    );

    notificationListener.current = listeners;

    // Limpiar listeners cuando el componente se desmonte
    return () => {
      if (notificationListener.current) {
        notificationListener.current.remove();
      }
    };
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom', // Esta animación es más suave tanto al avanzar como al retroceder
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoginAdmin" component={LoginAdmin} />
          <Stack.Screen name="DashboardAdmin" component={DashboardAdmin} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="PasswordReset" component={PasswordReset} />
          <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false }}/>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Calendar" component={Calendar} />
          <Stack.Screen name="RequestScreen" component={RequestScreen} />
          <Stack.Screen name="CalendarAdmin" component={CalendarAdmin} />
          <Stack.Screen name="ProfileAdmin" component={ProfileAdmin} />
          <Stack.Screen name="EditProfileAdmin" component={EditProfileAdmin} />
          <Stack.Screen name="AddReport" component={AddReport} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="LoginCompany" component={LoginCompany} />
          <Stack.Screen name="Plan" component={Plan} />
          <Stack.Screen name="RegisterCompany" component={RegisterCompany} />
          <Stack.Screen name="ProfileCompany" component={ProfileCompany} />
          <Stack.Screen name="EditProfileCompany" component={EditProfileCompany} />
          <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
          <Stack.Screen name="InvoiceHistory" component={InvoiceHistory} />
          <Stack.Screen name="MembersAdmin" component={MembersAdmin} />
          <Stack.Screen name="MembersCompany" component={MembersCompany} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

