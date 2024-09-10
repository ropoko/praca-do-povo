import BasePage from "@/components/shared/BasePage";
import { getMayors } from "@/services/mayors";

export default async function MayorPage({
	params,
}: {
	params: { city: string; mayor: string };
}) {
	const mayors = await getMayors({ city: params.city });

	const mayor = mayors.candidatos.find(
		(mayor: any) => mayor.id === parseInt(params.mayor)
	)!;

	return (
		<BasePage>
			<main className="container mx-auto px-4 py-4">
				<h1>{mayor.nomeCompleto}</h1>
			</main>
		</BasePage>
	);
}
