export enum HttpCode {
	OK = 200,
	CREATED = 201,
	ACCEPTED = 202,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	UNPROCESSABLE_ENTITY = 422,
	INTERNAL_SERVER_ERROR = 500,
}

export enum Gender {
	Female = 1,
	Male = 2,
}

export enum Status {
	Inactive,
	Active,
}

export enum NotiType {
	PUSH_NOTI = 'pushnoti',
	BOX_NOTI = 'boxnoti',
}
