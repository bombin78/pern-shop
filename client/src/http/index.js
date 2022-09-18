export const baseUrl = process.env.REACT_APP_API_URL;

const defaultOptions = {
	// mode: 'cors', // режим для запроса: cors, no-cors или same-origin.
	cache: 'no-cache', // режим кеширования запроса: default, no-store,
	// reload, no-cache, force-cache или only-if-cached.
	// credentials: 'include', // Отправка запроса с учётными данными или без:
	// 'omit' - учётные данные не будут передаваться с запросом;
	// 'same-origin' - передает учетные данные, если вызывающий скрипт принадлежит источнику.
	// 'include' - чтобы браузеры могли отправлять запрос с учётными данными 
	// (даже для cross-origin запросов);
	redirect: 'follow', // Является ли результат запроса перенаправлением:
	// 'follow' - автоматически переадресовывать;
	// 'error' - прерывать перенаправление ошибкой;
	// 'manual' - управлять перенаправлениями вручную.
	referrerPolicy: 'no-referrer-when-downgrade', // Браузер не будет отправлять значение
	// referer при переходе с HTTPS на HTTP, но отправит полную ссылку при переходе с HTTP
	// куда-то еще или с HTTPS на HTTPS. 
	// Возможные значения: no-referrer, no-referrer-when-downgrade, origin,
	// origin-when-cross-origin, unsafe-url.
}

export const authOptions = {
	...defaultOptions,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	},
}
export const options = {
	...defaultOptions,
	headers: {
		'Content-Type': 'application/json',
	},
}