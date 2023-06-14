// import {
// 	Alert,
// 	AlertIcon,
// 	Button,
// 	Spinner,
// 	Table,
// 	TableCaption,
// 	TableContainer,
// 	Tbody,
// 	Td,
// 	Text,
// 	Th,
// 	Thead,
// 	Tr,
// } from '@chakra-ui/react';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deliverOrder, getAllOrders } from '../actions/orderAction';
// import AdminScreen from './AdminScreen/AdminScreen';

// export default function Orderslist() {
// 	const dispatch = useDispatch();
// 	useEffect(() => {
// 		dispatch(getAllOrders());
// 	}, [dispatch]);
// 	const orderstate = useSelector((state) => state.getAllOrders);

// 	const { orders, error, loading } = orderstate;

// 	return (
// 		<>
// 			<AdminScreen />
// 			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
// 				Список заказов
// 			</Text>
// 			{loading && (
// 				<Spinner
// 					thickness='4px'
// 					speed='0.65s'
// 					emptyColor='gray.200'
// 					color='blue.500'
// 					size='xl'
// 				/>
// 			)}

// 			{error && (
// 				<Alert status='error'>
// 					<AlertIcon />
// 					Ошибка, попробуйте еще раз!
// 				</Alert>
// 			)}

// 			<TableContainer width='75%' margin='auto'>
// 				<Table variant='striped' colorScheme='gray' borderWidth='2px'>
// 					<TableCaption>Список заказов</TableCaption>
// 					<Thead>
// 						<Tr>
// 							<Th>Id Заказа</Th>
// 							<Th>Email</Th>
// 							<Th>Id пользователя</Th>
// 							<Th>Количество</Th>
// 							<Th>Дата</Th>
// 							<Th>Статус</Th>
// 						</Tr>
// 					</Thead>
// 					<Tbody>
// 						{orders.map((order) => (
// 							<Tr key={order._id}>
// 								<Td>{order._id}</Td>
// 								<Td>{order.email}</Td>
// 								<Td>{order.userid}</Td>
// 								<Td>{order.orderAmount}</Td>
// 								<Td>{order.createdAt.substring(0, 10)}</Td>
// 								<Td>
// 									{order.isDelivered ? (
// 										<Text
// 											fontWeight={'semibold'}
// 											color='green.500'
// 										>
// 											Доставлено
// 										</Text>
// 									) : (
// 										<Button
// 											backgroundColor='#b33030'
// 											color='white'
// 											onClick={() => {
// 												dispatch(
// 													deliverOrder(order._id),
// 												);
// 											}}
// 										>
// 											В доставке
// 										</Button>
// 									)}
// 								</Td>
// 							</Tr>
// 						))}
// 					</Tbody>
// 				</Table>
// 			</TableContainer>
// 		</>
// 	);
// }
