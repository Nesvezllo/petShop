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
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../actions/userAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Userslist() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);
	const userstate = useSelector((state) => state.getAllUsers);

	const { users, error, loading } = userstate;

	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Список пользователей
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
					<Thead>
						<Tr>
							<Th>Имя</Th>
							<Th>Email</Th>
							<Th>id</Th>
							<Th>Адрес</Th>
						</Tr>
					</Thead>
					<Tbody>
						{users.map((user) => (
							<Tr key={user._id}>
								<Td>
									{user.firstName} {user.lastName}
								</Td>
								<Td>{user.email}</Td>
								<Td>{user._id}</Td>
								<Td>{user.address}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
}
