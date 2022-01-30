import styled from 'styled-components';

export const SemiRoundButton = styled.button`
	padding: 1rem;
	background: ${({ theme }) => theme.primaryAccent};
	color: ${({ theme }) => theme.primaryDark};
	border: 0.1rem solid ${({ theme }) => theme.primaryLight};
	border-radius: 2rem;
	font-family: inherit;
	font-size: 1rem;
	font-weight: 700;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.primaryDark};
		color: ${({ theme }) => theme.primaryAccent};
		border: 0.1rem solid ${({ theme }) => theme.primaryAccent};
	}
`
