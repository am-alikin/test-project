import { useEffect, useState } from 'react';

function useData() {
	const [items, setItems] = useState<any[]>([]);
	const [isFetched, setIsFetched] = useState(false)

	useEffect(() => {
		function fetchItems() {
			fetch(`${process.env.API_URL}/items`)
				.then(res => res.json())
				.then(data => {
					setItems(data)
					setIsFetched(true)
				})
				.catch(err => {
					console.error('Failed to fetch items', err);
				})
		}

		fetchItems();
		var interval = setInterval(fetchItems, 10000);
		return () => {
			clearInterval(interval)
		}
	}, []);

	return { items, isFetched };
}

export default useData;
