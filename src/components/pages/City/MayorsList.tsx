import { getMayors } from "@/services/mayors";
import React, { use } from "react";
import MayorCard from "./MayorCard";

type Props = {
	city: string;
};
export default function MayorsList({ city }: Props) {
	const mayors = use(getMayors({ city }));

	return (
		<div className="w-full">
			{mayors.candidatos.map((c) => (
				<MayorCard key={c.id} mayor={c} />
			))}
		</div>
	);
}
