import { Button, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Pizza as PizzaIcon } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPizzas } from '../../actions/itemActions';
import Item from '../item/Item.js';
import './styles.css';
export default function PizzaDisplay() {
	const dispatch = useDispatch();

	const pizzastate = useSelector((state) => state.getAllPizzas);

	const { pizzas, error, loading } = pizzastate;

	useEffect(() => {
		dispatch(getAllPizzas());
	}, [dispatch]);
	return (
		<Flex
			display='flex'
			flexDirection={'column'}
			alignItems='center'
			justifyContent='center'
			width='full'
		>
			{loading ? (
				<h1>Loading</h1>
			) : error ? (
				<h1>Something went wrong</h1>
			) : (
				<>
					<SimpleGrid
						columns={[1, 1, 2, 3]}
						width='full'
						margin={5}
						alignItems={'center'}
						justifyContent={'center'}
						spacing={[5, 5, 10, 10]}
					>
						{pizzas.map((pizza) => {
							return (
								<Flex
									width={'full'}
									alignItems={'center'}
									justifyContent='center'
								>
									<Item key={pizza._id} pizza={pizza} />
								</Flex>
							);
						})}
					</SimpleGrid>
				</>
			)}
		</Flex>
	);
}
