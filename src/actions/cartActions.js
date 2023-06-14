export const addToCart = (Item, quantity, varient) => (dispatch, getState) => {
	console.log('Added2');
	var cartItem;
	if (Item?.name === 'Make your Own Item') {
		cartItem = {
			name: Item?.name,
			_id: Item?._id,
			image: Item?.image,
			description: Item?.description,
			varient: varient,
			quantity: quantity,
			prices: Item?.prices,
			price: Item?.prices,
		};
	} else {
		cartItem = {
			name: Item?.name,
			_id: Item?._id,
			image: Item?.image,
			description: Item?.description,
			varient: varient,
			quantity: Number(quantity),
			prices: Item?.prices,
			price: Item?.prices[0][varient] * quantity,
		};
	}
	console.log(cartItem);
	if (cartItem.quantity > 10) {
		alert('You cannot add more than 10 quantities');
	} else {
		if (cartItem.quantity <= 0) {
			dispatch({
				type: 'DELETE_FROM_CART',
				payload: Item,
			});
		} else {
			dispatch({ type: 'ADD_TO_CART', payload: cartItem });
			const cartItems = getState().cart.cartItems;
			localStorage.setItem('cartItems', JSON.stringify(cartItems));
		}
	}
};

export const deleteFromCart = (Item) => (dispatch, getState) => {
	dispatch({ type: 'DELETE_FROM_CART', payload: Item });
	const cartItems = getState().cart.cartItems;
	localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
