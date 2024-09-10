import ChevronLeft from "@/components/Icons/ChevronLeft";
import SearchIcon from "@/components/Icons/Search";
import CouncilorsAccordion from "@/components/pages/City/CouncilorsAccordion";
import BasePage from "@/components/shared/BasePage";
import { CITIES } from "@/config";

import dynamic from "next/dynamic";

const MayorsList = dynamic(() => import("@/components/pages/City/MayorsList"), {
	loading: () => <p>Carregando...</p>,
});

export default function CityPage({ params }: { params: { city: string } }) {
	const city = CITIES.find((c) => c.slug === params.city);

	return (
		<BasePage>
			<main className="container mx-auto px-4 py-4">
				<div className="flex flex-col sm:flex-row  gap-6 justify-start items-start sm:justify-between sm:items-center w-full">
					<a
						className="btn btn-ghost relative -left-4 w-max text-white"
						href="/"
					>
						<ChevronLeft />
						<span>{city?.name}</span>
					</a>
					<div className="w-full">
						<label className="input input-bordered flex items-center gap-2 w-full flex-1 sm:w-auto">
							<input type="text" className="w-full" placeholder="Search" />
							<SearchIcon />
						</label>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-6 mt-6">
					<div className="flex-[1]">
						<MayorsList city={params.city} />
					</div>
					<div className="flex-[2]">
						<CouncilorsAccordion search={""} />
					</div>
				</div>
			</main>
		</BasePage>
	);
}
