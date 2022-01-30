import styled from 'styled-components';

export const SemiRoundButton = styled.button`
	padding: 1rem;
	background: ${({ theme }) => theme.primaryAccent};
	color: ${({ theme }) => theme.primaryDark};
	border: 0.1rem solid #FFFFFF;
	border-radius: 2rem;
	font-family: inherit;
	font-size: 1rem;
	font-weight: 700;
`
