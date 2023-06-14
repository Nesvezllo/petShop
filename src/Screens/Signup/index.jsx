import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Signup = () => {
	const [data, setData] = useState({
		firstName: '',
		lastName: '',
		address: '',
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const [msg, setMsg] = useState('');

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = 'http://http://45.12.74.190:8080//api/users';
			const { data: res } = await axios.post(url, data);
			setMsg(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Уже есть аккаунт?</h1>
					<Link to='/login'>
						<button type='button' className={styles.white_btn}>
							Войти
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form
						className={styles.form_container}
						onSubmit={handleSubmit}
					>
						<h1>Создать аккаунт</h1>
						<input
							type='text'
							placeholder='Имя'
							name='firstName'
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type='text'
							placeholder='Фамилия'
							name='lastName'
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type='text'
							placeholder='Адрес'
							name='address'
							onChange={handleChange}
							value={data.address}
							required
							className={styles.input}
						/>
						<input
							type='email'
							placeholder='Email'
							name='email'
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type='password'
							placeholder='Пароль'
							name='password'
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && (
							<div className={styles.error_msg}>{error}</div>
						)}
						{msg && <div className={styles.success_msg}>{msg}</div>}
						<button type='submit' className={styles.red_btn}>
							Создать
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
