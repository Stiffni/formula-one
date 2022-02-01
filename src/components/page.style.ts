import styled from 'styled-components';

export const PageContainer = styled.div`
	padding: 6rem 2rem 5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media (min-width: ${({ theme }) => theme.desktopMin}) {
		padding: 10rem 8rem;
	}
`
