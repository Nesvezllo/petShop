import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Login = () => {
	const [data, setData] = useState({ email: '', password: '' });
	const [error, setError] = useState('');

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = 'http://localhost:8080/api/auth';
			const res = await axios.post(url, data);
			localStorage.setItem('token', res?.data?.data);
			if (res?.data?.user?.role === 'admin') {
				window.location.href = '/admin';
			} else {
				window.location.href = '/';
			}
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
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form
						className={styles.form_container}
						onSubmit={handleSubmit}
					>
						<h1>Войдите в аккаунт</h1>
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
						<button type='submit' className={styles.red_btn}>
							Войти
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>Впервые тут?</h1>
					<Link to='/signup'>
						<button type='button' className={styles.white_btn}>
							Регистриция
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
