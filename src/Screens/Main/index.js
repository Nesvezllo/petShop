import {
	Box,
	Button,
	Flex,
	HStack,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import Navbar from '../../Components/Navbar/Navbar';
import './styles.module.css';

import Pets from "../../images/pets.png"

const Main = () => {
	const textLines = ['Бесплатная доставка', "Меню пиццы на любой вкус"];

	const userstate = useSelector((state) => state.setUserData);
	const user = userstate.userData;
	return (
		<>
			<Navbar />
			<Flex width='100%'>
				<VStack width='100%'>
					<HStack width='100%' backgroundColor='white'>
						<VStack width='100%' justifyContent='center'>
							<Text
								paddingBottom='20px'
								fontSize='70px'
								color='black'
								fontFamily="Montserrat"
							>
								PetShop24
							</Text>
							<Text
								textAlign='center'
								fontSize='26px'
								color='black'
								width='100%'
								fontFamily="Montserrat"
							>
								Ваш надежный помощник в уходе за питомцами
							</Text>
							{/* <div
								style={{
									fontSize: '60px',
									fontFamily: 'Montserrat',
									fontSize: "50px",
									color: 'black',
									padding: '10px',
								}}
							>
								<Typed
									strings={textLines}
									typeSpeed={80}
									loop
								/>
							</div> */}

							<Link
								to={
									user && user?.role === 'user'
										? '/home'
										: '/login'
								}
							>
								<Button
									margin="30px 0px"
									backgroundColor='black'
									color='white'
									width='300px'
									height="85px"
									_hover={{ bg: 'rgba(0, 0, 0, 0.84)' }}
									fontSize="50px"
									display="flex"
									alignItems="center"
									justifyContent="center"
									padding="0px 0px 10px 0px"
								>
									Каталог
								</Button>
							</Link>
						</VStack>

						<Image
							width='50%'
							src={Pets}
						/>
					</HStack>
					<HStack
						margin={0}
						width='100%'
						backgroundColor='#dee2e6'
						textAlign='center'
					>
					</HStack>
				</VStack>
			</Flex>
		</>

		// <Flex width='100%'>
		// 	<VStack width='100%'>
		// 		<HStack width='100%'>
		// 			<nav className={styles.navbar}>
		// 				<h1 style={{ color: 'black' }}>SAY CHEESE!</h1>
		// 				<div>
		// 					{user ? (
		// 						<button
		// 							className={styles.white_btn}
		// 							onClick={handleLogout}
		// 						>
		// 							Logout
		// 						</button>
		// 					) : (
		// 						<button
		// 							className={styles.white_btn}
		// 							onClick={() => {
		// 								navigate('/login');
		// 							}}
		// 						>
		// 							Login
		// 						</button>
		// 					)}
		// 				</div>
		// 			</nav>
		// 		</HStack>
		// 	</VStack>
		// </Flex>
	);
};

export default Main;
