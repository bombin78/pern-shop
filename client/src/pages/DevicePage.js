import React from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
	const device = {
		id: 1,
		name: "13 pro",
		price: 150000,
		rating: 0,
		img: "",
	};

	const descriptions = [
		{id: 1, title: 'Оперативная память', description: '8 Гб'},
		{id: 2, title: 'Камера', description: '12 Мп'},
		{id: 3, title: 'Процессор', description: 'Core i5'},
		{id: 4, title: 'Количество ядер', description: '4'},
		{id: 5, title: 'Аккумулятор', description: '5000'},
	];

	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image
						with='300'
						height='300'
						src={device.img}
					/>
				</Col>
				<Col md={4}>
					<div className='d-flex flex-column align-items-center'>
						<h2>{device.name}</h2>
						<div
							className='d-flex justify-content-center align-items-center'
							style={{
								width: '240px',
								height: '240px',
								background: `url(${bigStar}) no-repeat center center`,
								backgroundSize: 'cover',
								fontSize: '64px',
							}}
						>
							{device.rating}
						</div>
					</div>
				</Col>
				<Col md={4}>
					<Card
						className='d-flex flex-column justify-content-around align-items-center'
						style={{
							width: '300px',
							height: '300px',
							fontSize: '32px',
							border: '5px solid lightgray'
						}}
					>
						<h3>От: {device.price} руб.</h3>
						<Button variant={'outline-dark'}>
							Добавить в корзину
						</Button>
					</Card>
				</Col>
			</Row>
			<div className='d-flex flex-column m-3'>
				<h1>Характеристики</h1>
				{descriptions.map((item, idx) => 
					<Row 
						key={item.id}
						style={{
							padding: '10px',
							background: idx % 2 === 0 ? 'lightgray' : 'transparent',
						}}
					>
						{item.title}: {item.description}
					</Row>
				)}
			</div>
		</Container>
	);
};

export default DevicePage;