export const LANGUAGE_CODE = {
	vi: 'vi',
	ja: 'ja',
	en: 'en',
}
export default {
	ACCESS_TOKEN_LOCAL: 'ACCESS_TOKEN_LOCAL',
	REFRESH_TOKEN_LOCAL: 'REFRESH_TOKEN_LOCAL',
	FIREBASE_TOKEN: 'FIREBASE_TOKEN',
	IN_ACTIVE: 'Inactive',
	ACTIVE: 'Active',
	FCM_TOKEN: 'FCM_TOKEN',
	IS_COMPLETED_TUTORIAL: 'IS_COMPLETED_TUTORIAL',
	FIREBASE_MESSAGING_TOKEN: 'FIREBASE_MESSAGING_TOKEN',
	AUTH_EMAIL: 'AUTH_EMAIL',
	REASON_DELETE: 'REASON_DELETE',
	CHANGE_PHONE_NUMBER: 'CHANGE_PHONE_NUMBER',
}

export const FontFamily = {
	Manrope: 'Manrope',
	Manrope300: 'Manrope-Light',
	Manrope400: 'Manrope-Regular',
	Manrope500: 'Manrope-Medium',
	Manrope600: 'Manrope-SemiBold',
	Manrope700: 'Manrope-Bold',
	Manrope800: 'Manrope-ExtraBold',
	Manrope800Italic: 'Manrope-ExtraBoldItalic',
}

export const urlDemo =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kc_TLq5-Re1X8tZ5m9ZRgMdAjKWObY8DeA&usqp=CAU'
export const REGEX_EMAIL = /^[^\s@.][^\s@]*@[^\s@]+\.[^\s@]+$/
export const REGEX_PASSWORD =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d.#@$!%^*?&()<>+=?/_-]{10,50}$/

export const REGEX_LEAST_1_SPECIAL_CHARACTER =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/
;('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kc_TLq5-Re1X8tZ5m9ZRgMdAjKWObY8DeA&usqp=CAU')

export const REGEX_PHONE_NUMBER_JP = /^(?:\+\d{1,2}|0)\d{1,4}\d{1,4}\d{4}$/
export const REGEX_HASHTAG =
	/(^|[\s　\]|[＃#])([＃#][\wｰーぁ-ゖァ-ヺー一-龯]+(?![\wｰーぁ-ゖァ-ヺー一-龯]*[^\wｰーぁ-ゖァ-ヺー一-龯\s　\n]))/g

export const DEFAULT_NAME = 'お名前未設定'

export const UPLOAD_VIDEO_INTRO_TIMEOUT = 60 * 1000

// MENTION
export const REGEX_KEY_MENTION = /@\[(.+?)\]\[(\d+)\]/g

export const REGEX_KEY_MENTION_EXEC = /@\[(.+?)\]\[(\d+)\]/

// use to detect valid mention
// (prevent user write exist character instead select on search-modal)
export const HIDDEN_CHAR = '\u200B'
