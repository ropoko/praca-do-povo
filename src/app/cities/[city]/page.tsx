"use client";
import ChevronLeft from "@/components/Icons/ChevronLeft";
import SearchIcon from "@/components/Icons/Search";
import CouncilorsAccordion from "@/components/pages/City/CouncilorsAccordion";
import MayorsAccordion from "@/components/pages/City/MayorsAccordion";
import BasePage from "@/components/shared/BasePage";
import { CITIES } from "@/config";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function CityPage() {
	const params = useParams<{ city: string }>();

	const [search, setSearch] = useState("");

	const city = useMemo(
		() => CITIES.find((city) => city.slug === params.city),
		[params.city]
	);

	return (
		<BasePage>
			<main className="container mx-auto px-4 py-4">
				<div className="flex flex-col sm:flex-row  gap-6 justify-start items-start sm:justify-between sm:items-center w-full">
					<a className="btn btn-ghost relative -left-4 w-max text-white" href="/">
						<ChevronLeft />
						<span>{city?.name}</span>
					</a>
					<div className="w-full">
						<label className="input input-bordered flex items-center gap-2 w-full flex-1 sm:w-auto">
							<input
								type="text"
								className="w-full"
								placeholder="Search"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<SearchIcon />
						</label>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-6 mt-6">
					<div className="flex-[1]">
						<MayorsAccordion search={search} city={city?.slug || ''}/>
					</div>
					<div className="flex-[2]">
						<CouncilorsAccordion search={search}/>
					</div>
				</div>
			</main>
		</BasePage>
	);
}
