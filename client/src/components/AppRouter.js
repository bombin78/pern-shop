import React 					from 'react';
import { useContext } 			from 'react';
import { Context } 				from '..';
import { Route, Routes, useRoutes } 			from 'react-router-dom';
import { Navigate } 			from 'react-router-dom';
import { ADMIN_ROUTE } 			from "../utils/consts";
import { BASKET_ROUTE } 		from "../utils/consts";
import { LOGIN_ROUTE } 			from "../utils/consts";
import { REGISTRATION_ROUTE } 	from "../utils/consts";
import { SHOP_ROUTE } 			from "../utils/consts";
import { DEVICE_ROUTE } 		from "../utils/consts";
import Admin 					from "../pages/Admin";
import Basket 					from "../pages/Basket";
import Auth 					from "../pages/Auth";
import Shop						from "../pages/Shop";
import DevicePage 				from "../pages/DevicePage";
import {observer} 				from "mobx-react-lite";


const AppRouter = observer(() => {
	const { user } = useContext(Context);

	const authRouters = [
		{
			path: ADMIN_ROUTE,
			element: <Admin />,
		},
		{
			path: BASKET_ROUTE,
			element: <Basket />,
		},
	];

	const publicRouters = [
		{
			path: LOGIN_ROUTE,
			element: <Auth />,
		},	{
			path: REGISTRATION_ROUTE,
			element: <Auth />,
		},
		{
			path: SHOP_ROUTE,
			element: <Shop />,
		},
		{
			path: DEVICE_ROUTE + '/:id',
			element: <DevicePage />,
		},
		{
			path: '/*',
			element: <Navigate replace to={ SHOP_ROUTE } />,
		},
	];

	return (
		<Routes>
			{ user.isAuth && authRouters.map(({ path, element }) =>
				<Route key={path} path={path} element={element} />
			)}
			{ publicRouters.map(({ path, element }) =>
				<Route key={path} path={path} element={element} />
			)}
		</Routes>
	);
});

export default AppRouter;
