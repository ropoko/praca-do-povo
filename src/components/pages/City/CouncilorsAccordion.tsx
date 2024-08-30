
type Props = {
	search: string;
}
export default function CouncilorsAccordion({search}: Props) {
	return (
		<div className="collapse collapse-arrow border-t border-b border-neutral-700 rounded-none">
			<input type="checkbox" name="my-accordion-2" defaultChecked/>
			<div className="collapse-title text-md text-white font-bold">
				Vereadores
			</div>
			<div className="collapse-content">
				<p>hello</p>
			</div>
		</div>
	);
}
