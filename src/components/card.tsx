import { CardContainer } from './card.style';

type TCardProps = {
	name: string,
	country: string
}
export const Card = ({name, country}: TCardProps) => {
	return (
		<CardContainer>
			<h3>{name}</h3>
			<h3>{country}</h3>
		</CardContainer>
	)
}
