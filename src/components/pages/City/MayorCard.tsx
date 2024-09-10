import { Candidate } from "@/types/mayor";
import Link from "next/link";
import React from "react";

type Props = {
	mayor: Candidate;
	city: string;
};

export default function MayorCard({ mayor, city }: Props) {
	return (
		<div className="p-4  flex flex-row rounded-md">
			<div className="avatar">
				<div className="w-24 rounded-full">
					<Link href={`/cities/${city}/mayors/${mayor.id}`}>
						<img src={mayor.fotoUrl || ""} alt="Foto do Candidato" />
					</Link>
				</div>
			</div>
			<h1>{mayor.nomeUrna}</h1>
		</div>
	);
}
