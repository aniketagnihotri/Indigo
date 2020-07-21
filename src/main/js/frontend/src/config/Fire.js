import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBJcBF3OdXqUAbCafuUK4_q8Qfhwy5YnkU",
    authDomain: "indigoauthentication.firebaseapp.com",
    databaseURL: "https://indigoauthentication.firebaseio.com",
    projectId: "indigoauthentication",
    storageBucket: "indigoauthentication.appspot.com",
    messagingSenderId: "1056322209600",
    appId: "1:1056322209600:web:a7147131464de9244a1ca5",
    measurementId: "G-RD5LP06FLZ"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;