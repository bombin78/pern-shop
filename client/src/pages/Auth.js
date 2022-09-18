import { Container, Card, Form, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import {login, registration} from "../http/userApi";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } 	from "../utils/consts";
import {observer} 				from "mobx-react-lite";
import { Context } from '..';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Auth = observer(() => {
	const {user} = useContext(Context);
	const location = useLocation();
	const navigate = useNavigate();
	const isLogin = location.pathname === LOGIN_ROUTE;
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const click = async() => {
		try {
			let data;
			if (isLogin) {
				console.log('isLogin', isLogin);
				data = await login(email, password);
			} else {
				data = await registration(email, password);
			}
			user.setUser(data);
			user.setIsAuth(true);
			navigate(SHOP_ROUTE);
		} catch(e) {
			alert(e.response.data.message)
		}

	};

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{width: 600}} className="p-5">
				<h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
				<Form className="d-flex flex-column">
					<Form.Control
						className="mt-3"
						placeholder="Введите ваш e-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<Form.Control
						className="mt-3"
						placeholder="Введите ваш пароль"
						value={password}
						onChange={e => setPassword(e.target.value)}
						type='password'
					/>
					<div className='d-flex justify-content-between mt-3'>
						{isLogin
							? <div>
								Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
							</div>
							: <div>
								Есть аккаунта? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
							</div>
						}
						<Button
							variant={"outline-success"}
							onClick={click}
						>
							{isLogin ? 'Войти' : 'Регистрация'}
						</Button>
					</div>
					
				</Form>
			</Card>
		</Container>
	);
});

export default Auth;