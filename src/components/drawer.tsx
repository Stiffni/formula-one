import { Link } from 'react-router-dom';
import { DrawerContainer } from './drawer.style';

export type TMenuProps = {
	open: boolean;
	onClick: () => void;
};

export const Drawer = ({ open, onClick }: TMenuProps) => {
	return (
		<DrawerContainer open={open}>
			<Link to='/circuits' onClick={onClick}>Circuits</Link>
			<Link to='/drivers'>Drivers</Link>
			<Link to='/championships'>Championships</Link>
		</DrawerContainer>
	);
};
