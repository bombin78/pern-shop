import React from 'react';
import { useContext } from 'react';
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';


const NavBar = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();

	const logOut = () => {
		user.setUser({});
		user.setIsAuth(false);
	};

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink 
					style={{color: "white"}} 
					to={SHOP_ROUTE}
				>
					PERNSHOP
				</NavLink>
				{user.isAuth 
					? <Nav 
						style={{color: "white"}}
						className="ml-auto"
					>
						<Button
							variant="outline-light"
							onClick={() => navigate(ADMIN_ROUTE)}
						>
							Админ панель
						</Button>
						<Button
							className="ms-3"
							variant="outline-light"
							onClick={() => logOut()}
						>
							Выйти
						</Button>
					</Nav>
					: <Nav 
						style={{color: "white"}}
						className="ml-auto"
					>
						<Button 
							variant="outline-light"
							onClick={() => navigate(LOGIN_ROUTE)}
						>
							Авторизация
						</Button>
					</Nav>
				}
			</Container>
		</Navbar>
	);
});

export default NavBar;