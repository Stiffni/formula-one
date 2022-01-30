import { HamburgerContainer } from './hamburger.style';

type THamburgerProps = {
	onClick?: () => void;
	open: boolean;
};

export const Hamburger = ({
	open = false,
	onClick
}: THamburgerProps) => {
	return (
		<HamburgerContainer onClick={onClick} open={open}>
			<div />
			<div />
			<div />
		</HamburgerContainer>
	);
};
