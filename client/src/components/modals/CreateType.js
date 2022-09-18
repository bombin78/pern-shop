import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createType } from '../../http/deviceApi';


const CreateType = ({show, onHide}) => {
	const [ value, setValue ] = useState('');

	const addType = async () => {
		await createType({name: value});
		setValue('');
		onHide();
	};

	return (
		<Modal
			show={show}
			size="lg"
			centered
			onHide={onHide}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить тип
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder={'Введите название типа'}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
				<Button variant='outline-success' onClick={addType}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateType;