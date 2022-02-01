import { StyledCircuitInfo, StyledPin } from './circuitInfo.style'

type TCircuitInfoProps = {
	name: string,
	country: string
}

export const CircuitInfo = ({name, country}: TCircuitInfoProps) => {
	return (
		<StyledCircuitInfo>
			<div><h2>{name}</h2></div>
			<div>
				<StyledPin/>
				<h3>{country}</h3>
			</div>
		</StyledCircuitInfo>
	)
}
