import { use } from "react";
import { getMayors } from "../../../services/mayors";
import MayorsList from "./MayorsList";

type Props = {
	city: string;
	search: string;
}
export default function MayorsAccordion({search, city}: Props) {
	return (
		<div className="collapse collapse-arrow border-t border-b border-neutral-700 rounded-none">
			<input type="checkbox" name="my-accordion-2" defaultChecked/>
			<div className="collapse-title text-md text-white font-bold">
				Prefeitos e Vice-prefeitos
			</div>
			<div className="collapse-content">
				<MayorsList city={city} />
			</div>
		</div>
	);
}
