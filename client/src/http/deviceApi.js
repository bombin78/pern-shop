import { 
	baseUrl,
	authFormOptions,
	authJSONOptions,
	JSONOptions,
} from '.';


export const createType = async (type) => {
	const url = baseUrl + 'api/type';

	try {
		const response = await fetch( url, {
			...authJSONOptions,
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
		const response = await fetch(url, JSONOptions);
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
			...authJSONOptions,
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
		const response = await fetch(url, JSONOptions);
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
			...authFormOptions,
			method: 'POST',
			// device - это объект FormData
			body: device,
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
		const response = await fetch(url, JSONOptions);
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
		const response = await fetch(url, JSONOptions);
		if (!response.ok) {
			throw new Error('Ответ сети был не ok.');
		}
		return await response.json();
	} catch(e) {
		console.error('Ошибка:', e.message);
	}
};