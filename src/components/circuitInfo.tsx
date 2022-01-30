import { StyledCircuitInfo } from './circuitInfo.style'
import { ReactComponent as Pin } from '../assets/pin.svg';
import { theme } from '../theme';

type TCircuitInfoProps = {
	name: string,
	country: string
}

export const CircuitInfo = ({name, country}: TCircuitInfoProps) => {
	return (
		<StyledCircuitInfo>
			<div><h3>{name}</h3></div>
			<div>
				<Pin width={'1.5rem'} height={'100%'} fill={theme.primaryDark} style={{display: 'inline-block'}} />
				<h4 style={{display: 'inline-block', verticalAlign: 'bottom', paddingLeft:'0.5rem'}}>{country}</h4>
			</div>
		</StyledCircuitInfo>
	)
}
