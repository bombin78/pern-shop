import { makeAutoObservable } from 'mobx';


export default class DeviceStore {
	constructor() {
		this._types = [
			{id: 1, name: 'Холодильник'},
			{id: 2, name: 'Смартфоны'},
		];
		this._brands = [
			{id: 1, name: 'Холодильник'},
			{id: 2, name: 'Смартфоны'},
		];
		this._devices = [
			{
				id: 1,
				name: "13 pro",
				price: 150000,
				rating: 0,
				img: "../../server/static/7f19b472-d3ae-4cd3-87eb-8e3cadea9985.jpg",
			},
			{
				id: 2,
				name: "13 pro",
				price: 150000,
				rating: 0,
				img: "../../server/static/7f19b472-d3ae-4cd3-87eb-8e3cadea9985.jpg",
			},
			{
				id: 3,
				name: "13 pro",
				price: 150000,
				rating: 0,
				img: "../../server/static/7f19b472-d3ae-4cd3-87eb-8e3cadea9985.jpg",
			},
		];
		makeAutoObservable(this);
	}

	setTypes(types) {
		this._types = types;
	}

	setBrand(brand) {
		this._brand = brand;
	}

	setDevices(devices) {
		this._device = devices;
	}

	get  types() {
		return this._types;
	}

	get brand() {
		return this._brand;
	}

	get devices() {
		return this._devices;
	}
}
