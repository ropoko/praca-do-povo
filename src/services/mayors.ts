"use server";

import { getCities } from "@/config";

export async function getMayors() {

	const cities = getCities();

	const promises = cities.map((city) => fetch(city.url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		cache: "force-cache"
	}).then((res) => res.json()));

	const data = await Promise.all(promises);

	console.log('hey irs me', data);

	// updateStore(data);

	// Update the store
	// useStore.getState().setData(data);

	return data;
}
