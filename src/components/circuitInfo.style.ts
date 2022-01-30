import styled from 'styled-components';

export const StyledCircuitInfo = styled.div`
	color: ${({ theme }) => theme.primaryDark};
	height: 100%;
	padding: 2.5rem;
	border: .3rem solid  ${({ theme }) => theme.primaryAccent};
	border-radius: 1rem;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
	align-content: space-between;
	h4 {
		text-transform: uppercase;
	}
`
