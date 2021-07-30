
export const styles = {
	container: {
		 width: '100%',
		 display: 'flex',
		 flexDirection: 'column',
		 alignItems: 'center',
		 justifyContent: 'flex-start',
		 paddingVertical: 32,
		 },
	waiter: {
		 width: '100%',
		 marginBottom: 10,
		 display: 'flex',
		 flexDirection: 'column',
		 alignItems: 'center'
	},
	avatar: {
		 container: {
			  width: 120,
			  height: 120,
		 },
		 overlay: {
			  borderRadius: 100
		 }
	},
	name: {
		 color: '#fff',
		 fontSize: 20,
		 fontWeight: 'bold',
		 marginVertical: 5
	},
	motto: {
		 color: '#fff',
		 fontSize: 15,
		 width: '80%',
		 textAlign: 'center',
		 marginVertical: 5
	},
	form: {
		 width: '100%',
		 backgroundColor: '#192021',
		 borderRadius: 8,
		 paddingHorizontal: 16,
		 paddingVertical: 32,
		 display: 'flex',
		 flexDirection: 'column',
		 alignItems: 'center'
	},
	input: {
		 inputContainer: {
			  borderColor: '#78bbe1',
			  borderBottomWidth: 2,
			  marginVertical: 6
		 },
		 label: {
			  color: '#fff'
		 },
		 input: {
			  color: '#fff'
		 }
	},
	button: {
		 button: {
			  borderRadius: 12,
		 },
		 title: {
			  fontSize: 14,
			  fontWeight: 'bold',
			  color: '#000',
			  textTransform: 'uppercase',
			  paddingHorizontal: 32,
			  paddingVertical: 6
		 },
		 disabled: {
			  title: {
					color: '#000'
			  }
		 }
	}
};