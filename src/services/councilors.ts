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

	// const updatedMayors = await Promise.all(
	// 	mayors.candidatos.map(async (candidate) => {
	// 		const mayorUpdate = await fetch(`${cityData.mayorUrl}/${candidate.id}`, {
	// 			method: "GET",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			next: {
	// 				revalidate: 60 * 60 * 24,
	// 			}
	// 		}).then((res) => res.json());

	// 		return { ...candidate, ...mayorUpdate };
	// 	})
	// );

	// mayors.candidatos = updatedMayors;

	return councilors;
}
