import { Alert, AlertIcon, Button, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../../actions/orderAction';

export default function Checkout({ subtotal }) {
	const orderstate = useSelector((state) => state.placeOrder);
	const { loading, error, success } = orderstate;
	const dispatch = useDispatch();
	useEffect(() => {
		if (success) {
			localStorage.removeItem('cartItems');
		} else {
			return;
		}
	}, [success]);

	return (
		<>
			{loading && (
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				/>
			)}

			{error && (
				<Alert status='error'>
					<AlertIcon />
					Ошибка, попробуйте ещё раз!
				</Alert>
			)}

			{success && (
				<Alert status='success'>
					<AlertIcon />
					Оплата прошла успешно, ожидайте ваш заказ!
				</Alert>
			)}

			<Button
				backgroundColor='black'
				color='white'
				width='100%'
				onClick={() => {
					dispatch(placeOrder(subtotal));
				}}
			>
				ОПЛАТИТЬ
			</Button>
		</>
	);
}
