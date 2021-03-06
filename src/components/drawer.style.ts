import styled from 'styled-components';

type TDrawerProps = {
	open: boolean;
};

export const DrawerContainer = styled.nav<TDrawerProps>`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background: ${({ theme }) => theme.primaryLight};
	height: 100vh;
	width: 100%;
	text-align: left;
	padding: 5rem 2rem;
	right: 0;
	z-index: 5;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

	@media (min-width: ${({ theme }) => theme.tabletMin}) {
		width: 30rem;
	}

	a {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: ${({ theme }) => theme.primaryDark};
		text-decoration: underline 0.15em rgba(255, 255, 255, 0);
		transition: text-decoration-color 400ms;

		&:hover {
			text-decoration-color: ${({ theme }) => theme.primaryDark};
		}
	}
`;
