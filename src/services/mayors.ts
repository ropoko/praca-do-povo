"use server";

import { getCities } from "@/config";

export async function getMayors() {

	const cities = getCities();

	const promises = cities.map((city) => fetch(city.url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		cache: "force-cache",
		next: { 
			revalidate: 60 * 60 * 24,
		},
	}).then((res) => res.json()));

	const data = await Promise.all(promises);

	return data;
}
