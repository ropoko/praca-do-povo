import { getCity } from "@/config";
import { RootObject } from "@/types/mayor";

export async function getMayors({ city }: { city: string }): Promise<RootObject> {
	const cityData = getCity(city);

	if (!cityData) return Promise.reject("City not found");

	const mayors: RootObject = await fetch(cityData.mayorsUrl, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		next: {
			revalidate: 60 * 60 * 24,
		}
	}).then((res) => res.json());

	const viceMayors: RootObject = await fetch(cityData.viceMayorsUrl, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		next: {
			revalidate: 60 * 60 * 24,
		}
	}).then((res) => res.json());

	const updateViceMayors = await Promise.all(
		viceMayors.candidatos.map(async (candidate) => {
			const viceMayorUpdate = await fetch(`${cityData.viceMayorDetailsUrl}/${candidate.id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				next: {
					revalidate: 60 * 60 * 24,
				}
			}).then((res) => res.json());

			return { ...candidate, ...viceMayorUpdate };
		})
	);

	const updatedMayors = await Promise.all(
		mayors.candidatos.map(async (candidate) => {
			const mayorUpdate = await fetch(`${cityData.mayorDetailsUrl}/${candidate.id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				next: {
					revalidate: 60 * 60 * 24,
				}
			}).then((res) => res.json());

			const viceMayor = updateViceMayors.find(vice => vice.nm_URNA === mayorUpdate.vices[0].nm_URNA);

			return { ...candidate, ...mayorUpdate, viceMayor };
		})
	);

	mayors.candidatos = updatedMayors;

	return mayors;
}
