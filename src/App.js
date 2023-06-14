import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { setUserData } from './actions/userAction.js';
import './index.css';
import AddItem from './Screens/AddItem.js';
import AdminScreen from './Screens/AdminScreen/AdminScreen';
import CartScreen from './Screens/CartScreen/CartScreen';
import EditItem from './Screens/EditItem';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Main from './Screens/Main';
// import OrderScreen from './Screens/OrderScreen/OrderScreen';
// import Orderslist from './Screens/Orderslist.js';
import ItemList from './Screens/itemList.js';
import Signup from './Screens/Signup';
import Userslist from './Screens/Userslist.js';

function App() {
	const [isAdmin, setIsAdmin] = useState(false);

	const userstate = useSelector((state) => state.setUserData);
	const user = userstate.userData;

	const dispatch = useDispatch();
	useEffect(() => {
		let token = localStorage.getItem('token');
		if (token) {
			const url =
				'http://45.12.74.190:8080/api/auth/jwt/verify';
			axios
				.get(url, {
					params: {
						token,
					},
				})
				.then((res) => {
					if (res.data.success) {
						if (res?.data?.data?.role === 'admin') {
							setIsAdmin(true);
						}
						if (res?.data?.userData) {
							dispatch(setUserData(res.data.userData));
						}
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [dispatch]);

	return (
		<Routes>
			<Route path='/signup' element={<Signup />} />
			<Route path='/login' element={<Login />} />

			{user?.role && (
				<>
					<Route path='/home' element={<Home />} />
					<Route path='/cart' element={<CartScreen />} />
					{/* <Route path='/myorders' element={<OrderScreen />} /> */}
				</>
			)}

			{isAdmin && (
				<>
					<Route path='/admin' element={<AdminScreen />} />
					<Route path='/admin/addItem' element={<AddItem />} />
					<Route path='/admin/userslist' element={<Userslist />} />
					{/* <Route path='/admin/orderslist' element={<Orderslist />} /> */}
					<Route path='/admin/itemList' element={<ItemList />} />
					<Route
						path='/admin/edititem/:itemid'
						element={<EditItem />}
					/>
				</>
			)}
			<Route path='*' element={<Main />} />
		</Routes>
	);
}

export default App;
