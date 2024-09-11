import { getCity } from "@/config";
import { RootObject } from "@/types/mayor";

export async function getCouncilors({ city }: { city: string }): Promise<RootObject> {
	const cityData = getCity(city);

	if (!cityData) {
		return Promise.reject("City not found");
	}

	const councilors: RootObject = await fetch(cityData.councilorsUrl, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		next: {
			revalidate: 60 * 60 * 24,
		}
	}).then((res) => res.json());

	const updatedCouncilors = await Promise.all(
		councilors.candidatos.map(async (candidate) => {
			const councilorUpdate = await fetch(`${cityData.councilorsDetailsUrl}/${candidate.id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}).then((res) => res.json());

			return { ...candidate, ...councilorUpdate };
		})
	);

	councilors.candidatos = updatedCouncilors;

	return councilors;
}
