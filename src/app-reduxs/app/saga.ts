import { Storage, StorageKeys } from '@app/utils/storage'
import { all, takeLatest } from 'redux-saga/effects'
import { REMOVE_TOKEN } from './actions'

function* removeToken() {
	try {
		yield Storage.delete(StorageKeys.accessToken)
		yield Storage.delete(StorageKeys.refreshToken)
	} catch (err) {
		console.log(err)
	}
}

export default function* appSaga() {
	yield all([takeLatest(REMOVE_TOKEN, removeToken)])
}
