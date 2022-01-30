import styled from 'styled-components';

export const CardContainer = styled.div`
	width: 20rem;
	background: ${({ theme }) => theme.primaryLight};
	color: ${({ theme }) => theme.primaryDark};
	border-radius: 2px;
	h3 {
		width: 100%;
	}
`
