import { getCities } from "@/config";
import { RootObject } from "@/types/mayor";

export async function getMayors({ city }: { city: string }): Promise<RootObject> {
	const cityData = getCities().find((c) => c.slug === city);

	if (!cityData) {
		return Promise.reject("Cidade não encontrada");
	}

	const mayors = await fetch(cityData.url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		next: {
			revalidate: 60 * 60 * 24,
		},
	}).then((res) => res.json());

	return mayors;
}
