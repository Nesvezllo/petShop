import {
	Alert,
	AlertIcon,
	Spinner,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { Pencil, Trash } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePizza, getAllPizzas } from '../actions/itemActions';
import AdminScreen from './AdminScreen/AdminScreen';

export default function ItemList() {
	const dispatch = useDispatch();

	const pizzastate = useSelector((state) => state.getAllPizzas);

	const { pizzas, error, loading } = pizzastate;

	useEffect(() => {
		dispatch(getAllPizzas());
	}, [dispatch]);
	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Список товаров
			</Text>
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
					Ошибка, попробуйте еще раз!
				</Alert>
			)}
			<TableContainer width='75%' margin='auto'>
				<Table variant='striped' colorScheme='gray' borderWidth='2px'>
					<TableCaption>Список товаров</TableCaption>
					<Thead>
						<Tr>
							<Th>Название</Th>
							<Th isNumeric='false'>Цена</Th>
							<Th>Категория</Th>
						</Tr>
					</Thead>
					<Tbody>
						{pizzas &&
							pizzas.map((pizza) => {
								return (
									<Tr>
										<Td>{pizza.name}</Td>
										<Td isNumeric='false'>
											small: {pizza.prices[0]['small']}
											<br />
											medium : {pizza.prices[0]['medium']}
											<br />
											large: {pizza.prices[0]['large']}
										</Td>
										<Td>{pizza.category}</Td>
										<Td>
											<Trash
												onClick={() => {
													dispatch(
														deletePizza(pizza._id),
													);
												}}
												size={22}
												color='#bc2037'
											/>
											<Link
												to={`/admin/edititem/${pizza._id}`}
											>
												<Pencil
													size={22}
													color='#19e672'
												/>
											</Link>
										</Td>
									</Tr>
								);
							})}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
}
