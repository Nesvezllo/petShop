import { Box, Button, Image, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
export default function Item({ pizza }) {
	const [show, setShow] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [varient, setVarient] = useState('small');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const dispatch = useDispatch();
	function addtocart() {
		dispatch(addToCart(pizza, quantity, varient));
	}

	return (
		<>
			<Box
				boxShadow='lg'
				maxW='sm'
				borderWidth='1px'
				borderRadius='lg'
				overflow='hidden'
			>
				<Text onClick={handleShow} textAlign='center' fontSize='3xl'>
					{pizza.name}
				</Text>
				<Image
					onClick={handleShow}
					src={pizza.image}
					width='200px'
					height='200px'
					marginLeft='80px'
				/>

				<Box p='6'>
					<Box display='flex' alignItems='baseline'>
						<Text fontSize='1xl' padding='5px'>
							Размер:
						</Text>
						<Select
							value={varient}
							onChange={(e) => {
								setVarient(e.target.value);
							}}
							size='sm'
							placeholder='	'
						>
							{pizza.varients.map((varient) => {
								return (
									<option key={varient} value={varient}>
										{varient}
									</option>
								);
							})}
						</Select>
						<Text fontSize='1xl' padding='5px'>
							Количество:
						</Text>
						<Select
							size='sm'
							value={quantity}
							onChange={(e) => {
								setQuantity(e.target.value);
							}}
							placeholder='Выбрать'
						>
							{[...Array(10).keys()].map((x, i) => {
								return (
									<option key={i} value={i + 1}>
										{i + 1}
									</option>
								);
							})}
						</Select>
					</Box>
					<Box padding={1}>
						<Box display='flex' alignItems='baseline'>
							<Text fontSize='20px' fontWeight='bold' width='50%'>
								Цена:{' '}
								{pizza.prices[0][varient] * quantity + ' '}
								Руб.
							</Text>

							<Button
								width='50%'
								backgroundColor='black'
								color='white'
								_hover={{ bg: 'rgba(0,0,0,0.912)' }}
								onClick={addtocart}
							>
								Добавить в козину
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{pizza.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image
						src={pizza.image}
						width='300px'
						height='300px'
						marginLeft='80px'
					/>
					<Text fontSize='1xl' textAlign='center'>
						{pizza.description}
					</Text>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose}>Закрыть</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
