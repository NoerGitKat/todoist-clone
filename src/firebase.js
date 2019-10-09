import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyAnolY0tRFU78i5nsVMtEUVaKbeTMAD7ng',
	authDomain: 'todoist-clone-e3a0c.firebaseapp.com',
	databaseURL: 'https://todoist-clone-e3a0c.firebaseio.com',
	projectId: 'todoist-clone-e3a0c',
	storageBucket: 'todoist-clone-e3a0c.appspot.com',
	messagingSenderId: '520236460555',
	appId: '1:520236460555:web:6c2e3d3ace93c7d705b50e',
});

export { firebaseConfig as firebase };
