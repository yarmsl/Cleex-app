import React, {useState} from 'react'
import { KeyboardAvoidingView, Platform, Text, View} from "react-native";
import AvatarPlaceholder from '../components/AvatarPlaceholder';
import { Avatar, Input, Icon, Button, CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { vertical } from '../UI/topka/gradients';
import { styles } from '../UI/topka/Payback_StyleSheet';
import { addRubbleMark, DismissKeyboard, onlyDigits } from '../lib/services';

const Payback = ({navigation}) => {
	const [waiter, setWaiter] = useState({
		name: 'Имя официанта',
		photo: null,
		sum: '1200',
		todaySum: '329'
	});
	const minSum = '200';
	const rate = '20';

	const [inputSum, setInputSum] = useState(addRubbleMark(waiter.sum));
	const [errorMes, setErrorMes] = useState('');

	const blurInputSum = () => {
		let sum = +inputSum 
		if (sum > +waiter.sum) {
			sum = waiter.sum;
			setErrorMes(`Вам доступна сумма ${waiter.sum} ₽`);
		} else if (sum < minSum) {
			sum = minSum;
			setErrorMes(`Миниммальная сумма ${minSum} ₽`);
		} else {
			setErrorMes('');
		}
		setInputSum(addRubbleMark(String(sum)));
	};

	const [checked, setChecked] = useState(true);

	return (
		<DismissKeyboard>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "position" : "height"}
				keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
				style={styles.container}
			>
				<View style={styles.waiter} >
					<Avatar
						containerStyle={styles.avatarContainer}
						overlayContainerStyle={styles.avatarOverlay}
						// source={waiter.photo ? { uri: waiter.photo } : null}
						renderPlaceholderContent={<AvatarPlaceholder name={waiter.name} size={'large'} />}
					/>
					<Text style={styles.name}>{waiter.name}</Text>
					<View style={styles.sum}>
						<Text style={styles.primeColorText}>{`${waiter.sum} ₽`}</Text>
						{waiter?.todaySum ? <Text style={styles.primeColorText}>{` +${waiter.todaySum} ₽ за сегодня`}</Text> : null}
					</View>
				</View>
				<View style={styles.bottomBlock}>
					
					<Input 
						onBlur={() => blurInputSum()}
						onFocus={() => setInputSum(onlyDigits(inputSum))}
						value={inputSum}
						onChangeText={(text) => setInputSum(String(+onlyDigits(text)))}
						inputContainerStyle={styles.inputSumContainer}
						inputStyle={styles.inputSum}
						keyboardType='numeric'
						errorMessage={errorMes}
						maxLength={4}
					/>
					
					<Text style={[styles.lightColorText, styles.info]}>{`${minSum} ₽ - минимальная сумма для вывода средств`}</Text>
					<Text style={[styles.lightColorText, styles.info]}>{`${rate} ₽ - комиссия с одного вывода средств`}</Text>
					<Button 
						title='Выпустить карту'
						icon={<Icon style={styles.buttonIcon} type='antdesign' name='creditcard' />}
						iconPosition='right'
						onPress={() => console.log('pressed')}
						containerStyle={styles.buttonContainer}
						titleStyle={styles.buttonTitle}
						ViewComponent={LinearGradient}
						linearGradientProps={vertical.grey}
					/>
					<View style={styles.policies}>
						<CheckBox 
							
							containerStyle={styles.checkBoxContainer}
							checkedColor='#78bbe1'
							checked={checked}
							onPress={() => setChecked(p => !p)}
						/>
						<View style={styles.policiesBox}>
							<Text style={styles.lightColorText}>Я согласен с условиями </Text>
							<Text 
								style={styles.primeColorText}
								onPress={() => navigation.navigate('Policy', {policy: 'TermOfUse'})}
							>
								Пользовательского соглашения
							</Text>
							<Text style={styles.lightColorText}> и </Text>
							<Text 
								style={styles.primeColorText}
								onPress={() => navigation.navigate('Policy', {policy: 'PersonalData'})}
							>
								Политикой обработки персональных данных
							</Text>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</DismissKeyboard>
	)
}

export default Payback;