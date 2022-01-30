import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer } from './menu.style';

export type TMenuProps = {
	open: boolean;
	onClick: () => void;
};

export const Menu = ({ open, onClick }: TMenuProps) => {
	return (
		<MenuContainer open={open}>
			<Link to='/circuits' onClick={onClick}>Circuits</Link>
			<Link to='/drivers'>Drivers</Link>
			<Link to='/championships'>Championships</Link>
		</MenuContainer>
	);
};
