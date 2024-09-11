import BasePage from "@/components/shared/BasePage";
import { getCouncilors } from "@/services/councilors";

export default async function CouncilorPage({
	params,
}: {
	params: { city: string; councilor: string };
}) {
	const councilors = await getCouncilors({ city: params.city });

	const councilor = councilors.candidatos.find(
		(councilor: any) => councilor.id === parseInt(params.councilor)
	)!;

	return (
		<BasePage>
			<main className="container mx-auto px-4 py-4">
				<h1>{councilor.nomeCompleto}</h1>
			</main>
		</BasePage>
	);
}
