import axios from 'axios';

export const getAllPizzas = () => async (dispatch) => {
	dispatch({ type: 'GET_PIZZAS_REQUEST' });

	try {
		const response = await axios.get(
			'http://http://45.12.74.190:8080/api/pizzas/getallpizzas',
		);
		// console.log(response);
		dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_PIZZAS_FAILED', payload: error });
	}
};

export const addPizza = (pizza) => async (dispatch) => {
	dispatch({ type: 'ADD_PIZZA_REQUEST' });
	try {
		const response = await axios.post(
			'http://http://45.12.74.190:8080/api/pizzas/addItem',
			{ pizza: pizza },
		);
		console.log(response);
		dispatch({ type: 'ADD_PIZZA_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'ADD_PIZZA_FAILED', payload: error });
	}
};

export const getPizzaById = (itemid) => async (dispatch) => {
	dispatch({ type: 'GET_PIZZA_BY_ID_REQUEST' });
	try {
		const response = await axios.post(
			'http://http://45.12.74.190:8080/api/pizzas/getpizzabyid',
			{ itemid: itemid },
		);
		console.log(response);
		dispatch({ type: 'GET_PIZZA_BY_ID_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_PIZZA_BY_ID_FAILED', payload: error });
	}
};

export const updatePizza = (updatedPizza) => async (dispatch) => {
	dispatch({ type: 'UPDATE_PIZZA_REQUEST' });
	try {
		const response = await axios.post(
			'http://http://45.12.74.190:8080/api/pizzas/updatepizza',
			{ updatedPizza: updatedPizza },
		);
		console.log(response);
		dispatch({ type: 'UPDATE_PIZZA_SUCCESS' });
		window.location.href = '/admin/pizzaslist';
	} catch (error) {
		dispatch({ type: 'UPDATE_PIZZA_FAILED', payload: error });
	}
};

export const deletePizza = (itemid) => async (dispatch) => {
	dispatch({ type: 'DELETE_PIZZA_REQUEST' });
	try {
		const response = await axios.post(
			'http://http://45.12.74.190:8080/api/pizzas/deletepizza',
			{ itemid: itemid },
		);
		console.log(response);
		alert('Pizza deleted successfully');
		dispatch({ type: 'DELETE_PIZZA_SUCCESS' });
		window.location.reload();
	} catch (error) {
		dispatch({ type: 'DELETE_PIZZA_FAILED', payload: error });
	}
};
