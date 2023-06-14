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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPizzaById, updatePizza } from '../actions/itemActions';
import AdminScreen from './AdminScreen/AdminScreen';
export default function Editpizza() {
	const { itemid } = useParams();
	const dispatch = useDispatch();
	const updatepizzastate = useSelector((state) => state.updatePizza);
	const getpizzabyidstate = useSelector((state) => state.getPizzaById);
	const { pizza, error, loading } = getpizzabyidstate;
	const { updatesuccess, updateloading, updateerror } = updatepizzastate;
	useEffect(() => {
		if (pizza) {
			if (pizza._id === itemid) {
				setName(pizza.name);
				setSmallPrice(pizza.prices[0]['small']);
				setMediumPrice(pizza.prices[0]['medium']);
				setLargePrice(pizza.prices[0]['large']);
				setDescription(pizza.description);
				setImage(pizza.image);
				setCategory(pizza.category);
			} else {
				dispatch(getPizzaById(itemid));
			}
		} else {
			dispatch(getPizzaById(itemid));
		}
	}, [dispatch, pizza, itemid]);

	function formHandler(e) {
		e.preventDefault();
		const updatedPizza = {
			_id: itemid,
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
		dispatch(updatePizza(updatedPizza));
		// dispatch(addPizza(pizza));
	}

	const [name, setName] = useState('');
	const [smallPrice, setSmallPrice] = useState();
	const [largePrice, setLargePrice] = useState();
	const [mediumPrice, setMediumPrice] = useState();
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const [category, setCategory] = useState('');

	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Добавьте новый товар
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

			{updateloading && (
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

			{updateerror && (
				<Alert status='error'>
					<AlertIcon />
					Ошибка, попробуйте ещё раз!
				</Alert>
			)}

			{updatesuccess && (
				<Alert
					width='50%'
					margin='auto'
					alignItems='center'
					justifyContent='center'
					status='success'
				>
					<AlertIcon />
					Товар успешно добавлен
				</Alert>
			)}
			<FormControl width='50%' margin='auto' marginBottom={3} isRequired>
				<FormLabel mt={2} htmlFor='name'>
					Название
				</FormLabel>
				<Input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					placeholder='Имя'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Маленький размер цена:
				</FormLabel>
				<Input
					value={smallPrice}
					onChange={(e) => {
						setSmallPrice(e.target.value);
					}}
					placeholder='Цена'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Средний размер цена:{' '}
				</FormLabel>
				<Input
					value={mediumPrice}
					onChange={(e) => {
						setMediumPrice(e.target.value);
					}}
					placeholder='Цена'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Большой размер цена:
				</FormLabel>
				<Input
					value={largePrice}
					onChange={(e) => {
						setLargePrice(e.target.value);
					}}
					placeholder='Цена'
				/>
				<FormLabel mt={2} htmlFor='description'>
					Description
				</FormLabel>
				<Input
					value={description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					placeholder='Описание'
				/>
				<FormLabel mt={2} htmlFor='category'>
					Категория
				</FormLabel>
				<Input
					value={category}
					onChange={(e) => {
						setCategory(e.target.value);
					}}
					placeholder='Категория'
				/>
				<FormLabel mt={2} htmlFor='image'>
					Ссылка на фото
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
					backgroundColor='#b33030'
					width='200px'
					type='submit'
					color='white'
					onClick={formHandler}
				>
					{' '}
					Добавить{' '}
				</Button>
			</FormControl>
		</>
	);
}
