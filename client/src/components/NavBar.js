import React from 'react';
import { useContext } from 'react';
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';


const NavBar = observer(() => {
	const { user } = useContext(Context);
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
						<Button variant="outline-light">
							Админ панель
						</Button>
						<Button
							className="ms-3"
							variant="outline-light"
							onClick={() => user.setIsAuth(false)}
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
							onClick={() => user.setIsAuth(true)}
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