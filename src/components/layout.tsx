import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Hamburger } from './hamburger';
import { Header } from './header';
import { Menu } from './menu';

export const Layout = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	}
	return (
		<>
			<Header />
			<Hamburger open={menuOpen} onClick={handleMenuClick}/>
			<Menu open={menuOpen} onClick={handleMenuClick}/>
			<Outlet />
		</>
	);
};
