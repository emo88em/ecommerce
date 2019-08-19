import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCWFv8k7-pJh3t17jD_w6LdHaO38c7sPVs',
	authDomain: 'ecommerce-clothing-57518.firebaseapp.com',
	databaseURL: 'https://ecommerce-clothing-57518.firebaseio.com',
	projectId: 'ecommerce-clothing-57518',
	storageBucket: '',
	messagingSenderId: '558167277700',
	appId: '1:558167277700:web:28ba57b42594a06f'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
