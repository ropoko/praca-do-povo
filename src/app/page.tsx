import Image from "next/image";
import Header from "@/components/shared/Header";
import ListCities from "@/components/pages/Home/CitiesList";
import ChevronRightIcon from "@/components/Icons/ChevronRight";
import BasePage from "@/components/shared/BasePage";

export default function HomePage() {
	return (
		<BasePage> 
			<div
				className="
							w-full
							max-h-44
							h-[25vh]
							-mb-32
							bg-[url('/panoramic-city.png')]		
							bg-center
							bg-cover					
						"
			></div>
			<main className="container mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row justify-between gap-[8vw]">
					<div className="w-full md:w-[25vw] mt-28">
						<h1 className="text-2xl font-bold">Praça do Povo</h1>
						<p className="mt-2 text-md mb-3">
							Conheça as propostas dos candidatos que estão concorrendo em seu
							Município
						</p>
						<ListCities />
						<div className="divider"></div>
						<button className="btn btn-primary w-full flex flex-row justify-between">
							<span className="whitespace-normal flex-1 text-left">
								Entenda a importância do seu voto
							</span>
							<ChevronRightIcon />
						</button>
					</div>
					<div className="flex-1 flex justify-end">
						<Image
							src="/voting-machine.svg"
							alt="Voting Machine"
							className="w-full"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</main>
		</BasePage>
	);
}
