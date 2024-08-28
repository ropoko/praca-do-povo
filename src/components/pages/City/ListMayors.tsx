import { use } from "react";
import { getMayors } from "../../../services/mayors";

export default function ListMayors() {
	const mayors = use(getMayors());

	console.log({ mayors });

	return (
		<div>
			<h1>List Mayors</h1>
			{/* {mayors?.candidatos.map((mayor: any) => (
				<div key={mayor.id}>
					<h2>{mayor.nome}</h2>
					<p>{mayor.numero}</p>
				</div>
			))} */}
		</div>
	);
}
