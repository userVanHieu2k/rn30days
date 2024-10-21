import AsyncStorage from '@react-native-async-storage/async-storage'
import { getApp, getApps, initializeApp } from 'firebase/app'
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import config from './config'

const app = !getApps().length ? initializeApp(config) : getApp()
console.log('Firebase App initialized:', app.name)

export const db = getFirestore(app)
console.log('Firestore initialized:', db)

export const storage = getStorage(app)
console.log('Storage initialized:', storage)

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const auth = getAuth(app)

console.log('Auth initialized:', auth)

export const signout = async () => {
  await auth.signOut()
}

export default app
