import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { useAuth } from './src/context/AuthCtx';
import ThemeProvider from './src/context/ThemeCtx';
import Account from './src/screens/Account';
import Payback from './src/screens/Payback';
import RegForm from './src/screens/RegForm';
import Settings from './src/screens/Settings';
import Home from './src/screens/Home';
import Tables from './src/screens/Tables';
import MainLayout from './src/layouts/MainLayout';
import SuperHeader from './src/components/SuperHeader';
import Policy from './src/screens/Policy';

export default function Screens() {

	const { isAuth } = useAuth();
	enableScreens();
	const Stack = createStackNavigator();
	
	return (
		<ThemeProvider>
			<NavigationContainer>
				<MainLayout>
					<Stack.Navigator headerMode='float' screenOptions={{
						cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
						cardStyle: { backgroundColor: 'transparent'},
						header: () => <SuperHeader />
					}}>
						<Stack.Screen name='Home' component={Home} />
						<Stack.Screen name='Policy' component={Policy} />
						{isAuth && <>
							<Stack.Screen name='Account' component={Account} />
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