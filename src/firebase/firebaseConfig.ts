import firebase from '@react-native-firebase/app'
import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)

  console.log('Firebase initialized with default app.')
} else {
  console.log('Firebase already initialized.')
}
