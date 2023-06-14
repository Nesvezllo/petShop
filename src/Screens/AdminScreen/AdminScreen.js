import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminScreen() {
	function handleLogout() {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		window.location.replace('/');
	}
	return (
		<>
			<VStack width='100%'>
				<Text textAlign='center' m={5} fontSize='3xl' fontWeight='bold'>
					Админ панель
				</Text>

				<Button
					textAlign='center'
					width='15%'
					backgroundColor='rgba(0,0,0,0.912)'
					color='white'
					onClick={handleLogout}
				>
					Выйти
				</Button>
			</VStack>

			<Box width='75%' margin='auto'>
				<VStack>
					<HStack
						width='100%'
						spacing={5}
						backgroundColor='rgba(0,0,0,0.912)'
						justifyContent='center'
						color='white'
						padding={4}
						fontSize='20px'
						fontWeight='semibold'
						m={5}
					>
						<Link to='/admin/userslist'>
							<Text
								color='white'
								fontSize='1xl'
								fontWeight='semibold'
							>
								Список пользователей
							</Text>
						</Link>
						{/* <Link to='/admin/orderslist'>
							<Text
								color='white'
								fontSize='1xl'
								fontWeight='semibold'
							>
								Список заказов
							</Text>
						</Link> */}
						<Link to='/admin/itemList'>
							<Text
								color='white'
								fontSize='1xl'
								fontWeight='semibold'
							>
								Список товаров
							</Text>
						</Link>
						<Link to='/admin/addItem'>
							<Text
								color='white'
								fontSize='1xl'
								fontWeight='semibold'
							>
								Добавить товар
							</Text>
						</Link>
					</HStack>
				</VStack>
			</Box>
		</>
	);
}
