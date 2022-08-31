import { makeAutoObservable } from 'mobx';


export default class DeviceStore {
	constructor() {
		this._types = [
			{id: 1, name: 'Холодильник'},
			{id: 2, name: 'Смартфоны'},
			{id: 3, name: 'Ноутбуки'},
			{id: 4, name: 'Телевизоры'},
		];
		this._brands = [
			{id: 1, name: 'Samsung'},
			{id: 2, name: 'Apple'},
			{id: 3, name: 'Lenovo'},
			{id: 4, name: 'Aser'},
		];
		this._devices = [
			{
				id: 1,
				name: "13 pro",
				price: 150000,
				rating: 0,
				img: "",
			},
			{
				id: 2,
				name: "13 pro",
				price: 150000,
				rating: 3,
				img: "",
			},
			{
				id: 3,
				name: "13 pro",
				price: 150000,
				rating: 5,
				img: "",
			},
			{
				id: 4,
				name: "13 pro",
				price: 150000,
				rating: 5,
				img: "",
			},
			{
				id: 5,
				name: "13 pro",
				price: 150000,
				rating: 5,
				img: "",
			},
			{
				id: 6,
				name: "13 pro",
				price: 150000,
				rating: 5,
				img: "",
			},
		];
		this._selectedType = {};
		this._selectedBrand = {};
		makeAutoObservable(this);
	}

	setTypes(types) {
		this._types = types;
	}

	setBrands(brands) {
		this._brands = brands;
	}

	setDevices(devices) {
		this._devices = devices;
	}

	setSelectedType(type) {
		this._selectedType = type;
	}

	setSelectedBrand(brand) {
		this._selectedBrand = brand;
	}

	get  types() {
		return this._types;
	}

	get brands() {
		return this._brands;
	}

	get devices() {
		return this._devices;
	}

	get selectedType() {
		return this._selectedType;
	}

	get selectedBrand() {
		return this._selectedBrand;
	}
}
