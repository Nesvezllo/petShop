import {
	Alert,
	AlertIcon,
	Button,
	FormControl,
	FormLabel,
	Input,
	Spinner,
	Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../actions/itemActions';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Addpizza() {
	const [name, setName] = useState('');
	const [smallPrice, setSmallPrice] = useState();
	const [largePrice, setLargePrice] = useState();
	const [mediumPrice, setMediumPrice] = useState();
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const [category, setCategory] = useState('');
	const dispatch = useDispatch();
	const addpizzastate = useSelector((state) => state.addPizza);

	const { success, error, loading } = addpizzastate;

	function formHandler(e) {
		e.preventDefault();
		const pizza = {
			name: name,
			image: image,
			description: description,
			category: category,
			prices: {
				"small": Number(smallPrice),
				"medium": Number(mediumPrice),
				"large": Number(largePrice),
			},
		};
		console.log(pizza);
		dispatch(addPizza(pizza));
	}
	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Добавить товар
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
					Ошибка, попробуйте ещё раз!
				</Alert>
			)}

			{success && (
				<Alert
					width='50%'
					margin='auto'
					alignItems='center'
					justifyContent='center'
					status='success'
					textAlign='center'
				>
					<AlertIcon />
					Новый товар добавлен
				</Alert>
			)}

			<FormControl width='50%' margin='auto' marginBottom={3} isRequired>
				<FormLabel mt={2} htmlFor='name'>
					Название товара
				</FormLabel>
				<Input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					placeholder='Название'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Маленькай размер цена:
				</FormLabel>
				<Input
					value={smallPrice}
					onChange={(e) => {
						setSmallPrice(e.target.value);
					}}
					placeholder=' Укажите цену'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Средний размер цена:{' '}
				</FormLabel>
				<Input
					value={mediumPrice}
					onChange={(e) => {
						setMediumPrice(e.target.value);
					}}
					placeholder='Укажите цену'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Большой размер цена:
				</FormLabel>
				<Input
					value={largePrice}
					onChange={(e) => {
						setLargePrice(e.target.value);
					}}
					placeholder='Укажите цену'
				/>
				<FormLabel mt={2} htmlFor='description'>
					Описание:
				</FormLabel>
				<Input
					value={description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					placeholder='Описание'
				/>
				<FormLabel mt={2} htmlFor='category'>
					Категория:
				</FormLabel>
				<Input
					value={category}
					onChange={(e) => {
						setCategory(e.target.value);
					}}
					placeholder='Категория'
				/>
				<FormLabel mt={2} htmlFor='image'>
					Ссылка на фото:
				</FormLabel>
				<Input
					value={image}
					onChange={(e) => {
						setImage(e.target.value);
					}}
					placeholder='Ссылка'
				/>
				<Button
					margin={2}
					backgroundColor='black'
					width='200px'
					type='submit'
					color='white'
					onClick={formHandler}
				>
					{' '}
					Добавить Товар{' '}
				</Button>
			</FormControl>
		</>
	);
}
