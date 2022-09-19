import jwtDecode 		from 'jwt-decode';
import {
	baseUrl,
	authJSONOptions,
	JSONOptions,
} 						from '.';


export const registration = async (email, password) => {
	const url = baseUrl + 'api/user/registration';
	try {
		const response = await fetch( url, {
			...JSONOptions,
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
				role: 'ADMIN',
			}),
		});
		if (!response.ok) {
			throw new Error('Ответ сети был не ok.');
		}
		const data = await response.json();
		localStorage.setItem('token', data.token);
		return jwtDecode(data.token);
	} catch(e) {
		console.error('Ошибка:', e.message);
	}
};

export const login = async (email, password) => {
	const url = baseUrl + 'api/user/login';
	try {
		const response = await fetch( url, {
			...JSONOptions,
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
		});
		if (!response.ok) {
			throw new Error('Ответ сети был не ok.');
		}
		const data = await response.json();
		localStorage.setItem('token', data.token);
		return jwtDecode(data.token);
	} catch(e) {
		console.error('Ошибка:', e.message);
	}
};

export const check = async () => {
	const url = baseUrl + 'api/user/auth/';
	try {
		const response = await fetch( url, authJSONOptions);
		if (!response.ok) {
			throw new Error('Ответ сети был не ok.');
		}
		const data = await response.json();
		localStorage.setItem('token', data.token);
		return jwtDecode(data.token);
	} catch(e) {
		console.error('Ошибка:', e.message);
	}
};
