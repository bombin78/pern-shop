import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import Pagination from '../components/Pagination';
import TypeBar from '../components/TypeBar';
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApi";


const Shop = observer(() => {
	const { device } = useContext(Context);
	const defaultDeviceParams = {
		page: 1,
		limit: 5,
	};

	useEffect(() => {
		fetchTypes().then((data) => device.setTypes(data));
		fetchBrands().then((data) => device.setBrands(data));
		fetchDevices(defaultDeviceParams).then((data) => {
			device.setDevices(data.rows);
			device.setTotalCount(data.count);
		});
	}, []);

	useEffect(() => {
		fetchDevices({
			typeId: device.selectedType.id,
			brandId: device.selectedBrand.id,
			page: device.page,
			limit: 5,
		}).then((data) => {
			device.setDevices(data.rows);
			device.setTotalCount(data.count);
		});
	}, [device.page, device.selectedType, device.selectedBrand]);

	return (
		<Container>
			<Row className='mt-2'>
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar />
					<DeviceList />
					<Pagination />
				</Col>
			</Row>
		</Container>
	);
});

export default Shop;