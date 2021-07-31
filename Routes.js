import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { useAuth } from './src/context/AuthCtx';
import ThemeProvider from './src/context/ThemeCtx';
import Account from './src/pages/Account';
import Payback from './src/pages/Payback';
import RegForm from './src/pages/RegForm';
import Settings from './src/pages/Settings';
import Home from './src/pages/Home';
import Tables from './src/pages/Tables';
import MainLayout from './src/layouts/MainLayout';
import SuperHeader from './src/components/SuperHeader';

export default function Routes() {

	const { isAuth } = useAuth();

	const Stack = createStackNavigator();
	return (
		<ThemeProvider>
			<NavigationContainer>
				<MainLayout>
					<Stack.Navigator headerMode='float' screenOptions={{
						cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid, //Сделать, в зависимости от системы, попробовать задать inset здесь
						cardStyle: { backgroundColor: 'transparent'},
						header: () => <SuperHeader />

					}}>
						{!isAuth && <Stack.Screen name='Home' component={Home} /> ||
							<Stack.Screen name='Account' component={Account} />}
						{isAuth && <>
							<Stack.Screen name='Tables' component={Tables} />
							<Stack.Screen name='Settings' component={Settings} />
							<Stack.Screen name='Payback' component={Payback} />
							<Stack.Screen name='RegForm' component={RegForm} />
						</>}
					</Stack.Navigator>
				</MainLayout>
			</NavigationContainer>
		</ThemeProvider>
	);
}