import React, { useEffect, useState } from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import bigStar from '../assets/bigStar.png';
import { fetchOneDevice } from '../http/deviceApi';

const DevicePage = () => {
	const [ device, setDevice ] = useState({info: []});
	const { id } = useParams();

	useEffect(() => {
		fetchOneDevice(id).then((data) => setDevice(data));
	}, []);

	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image
						with='300'
						height='300'
						src={process.env.REACT_APP_API_URL + device.img}
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
				{device.info.map((item, idx) => 
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