import { useRef, useState, useCallback } from 'react';
import { Card } from '../components/card';
import { CircuitInfo } from '../components/circuitInfo';
import { Page } from '../components/page';
import { Message } from '../components/message';
import { useCircuits } from '../hooks/useCircuits';

export const Circuits = () => {
	const [pageNumber, setPageNumber] = useState(0);
	const {circuits, hasMore, loading, error} = useCircuits(pageNumber);
	const observer = useRef<IntersectionObserver | null>(null);

	const lastCircuitRef = useCallback((node: HTMLDivElement) => {
		if(loading) { return }
		if(observer.current) {
			observer.current.disconnect();
		}
		observer.current = new IntersectionObserver((entries) => {
			if(entries[0].isIntersecting && hasMore) {
				setPageNumber(prevPageNumber => prevPageNumber + 1);
			}
		});
		if(node) {
			observer.current.observe(node);
		}
	}, [loading, hasMore]);

	return (
		<Page>
			{
				circuits && circuits.map((circuit, index) => {
					if(index + 1 === circuits.length) { //last circuit
						return (
							<Card key={circuit.circuitId} ref={lastCircuitRef}>
								<CircuitInfo
									name={circuit.circuitName}
									country={circuit.Location.country}
								/>
							</Card>
						)
					}
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
			{loading &&
				<Message>loading...</Message>}
			{error &&
				<Message>Uh oh! We had some trouble finding these circuits... Try again soon!</Message>}
		</Page>
	);
};
