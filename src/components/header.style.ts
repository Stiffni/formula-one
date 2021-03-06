import styled from 'styled-components';

export const HeaderContainer = styled.header`
	position: absolute;
	width: 42px;
	height: 42px;
	margin: 0;
	left: 2rem;
	top: 1.5rem;
	z-index: 5;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}

	h1 {
		margin: 0;
		font-style: italic;
	}

	a {
		color: ${({ theme }) => theme.primaryLight};
		text-decoration: none;
		transition: all 0.3s ease-in-out;

		&:hover {
			color: ${({ theme }) => theme.primaryAccent};
		}
	}
`
