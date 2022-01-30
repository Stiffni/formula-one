import { StyledCircuitInfo } from './circuitInfo.style'

type TCircuitInfoProps = {
	name: string,
	country: string
}

export const CircuitInfo = ({name, country}: TCircuitInfoProps) => {
	return (
		<StyledCircuitInfo>
			<h3>{name}</h3>
			<h4>{country}</h4>
		</StyledCircuitInfo>
	)
}
