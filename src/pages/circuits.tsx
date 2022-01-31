import { Card } from '../components/card';
import { CircuitInfo } from '../components/circuitInfo';
import { Page } from '../components/page';
import { GetCircuits } from '../hooks/getCircuits';



export const Circuits = () => {
	const {circuits, loading, error} = GetCircuits();
	return (
		<Page>
			{
				circuits && circuits.map((circuit) => {
					return (
						<Card key={circuit.circuitId}>
							<CircuitInfo
								name={circuit.circuitName}
								country={circuit.Location.country}
							/>
						</Card>
					)
				})
			}
			<div>{error && 'Uh oh! We had some trouble finding these circuits... Try again soon!'}</div>
			<div>{loading && 'loading...'}</div>
		</Page>
	);
};
