import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceApi';


const CreateDevice = observer(({show, onHide}) => {
	const {device} = useContext(Context);
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [file, setFile] = useState(null);
	const [info, setInfo] = useState([]);

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data));
		fetchBrands().then(data => device.setBrands(data));
	}, []);

	const addInfo = () => {
		setInfo([...info, {title: '', description: '', number: Date.now()}])
	}

	const removeInfo = (number) => {
		setInfo(info.filter((item) => item.number !== number));
	}

	const changeInfo = (key, value, number) => {
		setInfo(info.map((item) => item.number === number 
			? {...item, [key]: value}
			: item
		));
	};

	const selectFile = (e) => {
		setFile(e.target.files[0]);
	};

	const addDevice = async () => {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('price', `${price}`);
		formData.append('img', file);
		formData.append('brandId', device.selectedBrand.id);
		formData.append('typeId', device.selectedType.id);
		formData.append('info', JSON.stringify(info));
		await createDevice(formData);
		onHide();
	}

	return (
		<Modal
			show={show}
			size="lg"
			centered
			onHide={onHide}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить устройство
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>
							{ device.selectedType.name || "Выберите тип" }
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type =>
								<Dropdown.Item 
									key={type.id}
									onClick={() => device.setSelectedType(type)}
								>
									{type.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>
							{ device.selectedBrand.name || "Выберите брэнд" }
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand =>
								<Dropdown.Item
									key={brand.id}
									onClick={() => device.setSelectedBrand(brand)}
								>
									{brand.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='mt-3'
						placeholder='Введите название устройства'
					/>
					<Form.Control
						value={price}
						onChange={(e) => setPrice(Number(e.target.value))}
						className='mt-3'
						placeholder='Введите стоимость устройства'
						type='number'
					/>
					<Form.Control
						className='mt-3'
						type='file'
						onChange={selectFile}
					/>
					<hr />
					<Button
						variant='outline-dark'
						onClick={addInfo}
					>
						Добавить новое свойство
					</Button>
					{info.map((item) =>
						<Row 
							className='mt-3'
							key={item.number}
						>
							<Col md={4}>
								<Form.Control
									value={item.title}
									onChange={(e) => changeInfo(
										'title', 
										e.target.value,
										item.number,
									)}
									placeholder='Введите название свойства'
								/>
							</Col>
							<Col md={4}>
								<Form.Control
									value={item.description}
									onChange={(e) => changeInfo(
										'description', 
										e.target.value,
										item.number,
									)}
									placeholder='Введите описание свойства'
								/>
							</Col>
							<Col md={4}>
								<Button 
									variant={'outline-danger'}
									onClick={() => removeInfo(item.number)}
								>
									Удалить
								</Button>
							</Col>
						</Row>
					)}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
				<Button variant='outline-success' onClick={addDevice}>Добавить </Button>
			</Modal.Footer>
		</Modal>
	);
});

export default CreateDevice;