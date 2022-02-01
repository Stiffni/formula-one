import React from 'react';
import Fade from 'react-reveal/Fade';
import { CardContainer } from './card.style';

type TCardProps = {
	children: React.ReactNode
}
export const Card = React.forwardRef<HTMLDivElement, TCardProps>(({children}, ref) => {
	return (
		<div ref={ref}>
			<Fade bottom>
				<CardContainer>
					{children}
				</CardContainer>
			</Fade>
		</div>
	)
});
