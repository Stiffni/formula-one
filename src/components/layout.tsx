import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './layout.style';
import { Hamburger } from './hamburger';
import { Header } from './header';
import { Drawer } from './drawer';
import { Page } from './page';

export const Layout = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	}
	return (
		<LayoutContainer>
			<Header />
			<Hamburger open={menuOpen} onClick={handleMenuClick}/>
			<Drawer open={menuOpen} onClick={handleMenuClick}/>
			<Page>
				<Outlet />
			</Page>
		</LayoutContainer>
	);
};
