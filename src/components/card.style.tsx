import styled from 'styled-components';

export const CardContainer = styled.div`
	height: 15rem;
	width: 20rem;
	padding: 1rem;
	margin: 2rem;
	background: ${({ theme }) => theme.primaryLight};
	border-radius: 1rem;
	transition: all .2s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`
