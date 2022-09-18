import { baseUrl, authOptions, options } from '.';

export const createType = async (type) => {
	const url = baseUrl + 'api/type';

	try {
		const response = await fetch( url, {
			...authOptions,
			method: 'POST',
			body: JSON.stringify(type),
		});
		if (!response.ok) {
			throw new Error('Ответ сети был не ok.');
		}
		return await response.json();
	} catch(e) {
		console.error('Ошибка:', e.message);
	}
};

export const fetchTypes = async () => {
	const url = baseUrl + 'api/type';

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error('Ответ сети был не ok.');
		}
		return await response.json();
	} catch(e) {
		console.error('Ошибка:', e.message);
	}
};

export const createBrand = async (brand) => {
	const url = baseUrl + 'api/brand';

	try {
		const response = await fetch( url, {
			...authOptions,
			method: 'POST',
			body: JSON.stringify(brand),
		});
		if (!response.ok) {
			throw new Error('Ответ сети был не ok.');
		}
		return await response.json();
	} catch(e) {
		console.error('Ошибка:', e.message);
	}
};

export const fetchBrands = async () => {
	const url = baseUrl + 'api/brand';

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error('Ответ сети был не ok.');
		}
		return await response.json();
	} catch(e) {
		console.error('Ошибка:', e.message);
	}
};

export const createDevice = async (device) => {
	const url = baseUrl + 'api/device';

	try {
		const response = await fetch( url, {
			...authOptions,
			method: 'POST',
			body: JSON.stringify(device),
		});
		if (!response.ok) {
			throw new Error('Ответ сети был не ok.');
		}
		return await response.json();
	} catch(e) {
		console.error('Ошибка:', e.message);
	}
};

export const fetchDevices = async () => {
	const url = baseUrl + 'api/device';

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error('Ответ сети был не ok.');
		}
		return await response.json();
	} catch(e) {
		console.error('Ошибка:', e.message);
	}
};

export const fetchOneDevice = async (id) => {
	const url = baseUrl + 'api/device/' + id;

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error('Ответ сети был не ok.');
		}
		return await response.json();
	} catch(e) {
		console.error('Ошибка:', e.message);
	}
};