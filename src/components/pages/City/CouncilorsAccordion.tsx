import { getCouncilors } from "@/services/councilors";
import Link from "next/link";

type Props = {
	city: string;
	search: string;
};

export default async function CouncilorsAccordion({ city, search }: Props) {
	const councilors = await getCouncilors({ city });

	const councilorsGroupedByParty = councilors.candidatos.reduce(
		(acc, councilor) => {
			const party = councilor.partido?.sigla || "Sem Partido";
			if (!acc[party]) {
				acc[party] = [];
			}
			acc[party].push(councilor);
			return acc;
		},
		{} as Record<string, typeof councilors.candidatos>
	);

	return (
		<div className="collapse collapse-arrow border-t border-b border-neutral-700 rounded-none">
			<input type="checkbox" name="my-accordion-2" defaultChecked />
			<div className="collapse-title text-md text-white font-bold">
				<h2>Vereadores</h2>
			</div>
			<div className="collapse-content">
				{Object.entries(councilorsGroupedByParty).map(([party, councilors]) => (
					<div key={party}>
						<h1 className="text-orange-500 text-lg font-bold">{party}</h1>
						{councilors.map((councilor) => (
							<div key={councilor.id}>
								<Link href={`/cities/${city}/councilors/${councilor.id}`}>
									{councilor.nomeUrna}
								</Link>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
