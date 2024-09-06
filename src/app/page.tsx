import Image from "next/image";
import ListCities from "@/components/pages/Home/CitiesList";
import ChevronRightIcon from "@/components/Icons/ChevronRight";
import BasePage from "@/components/shared/BasePage";
import Link from "next/link";

export default function HomePage() {
	return (
		<BasePage>
			<div
				className="
				w-full
				max-h-44
				h-[25vh]
				-mb-32
				bg-[url('/panoramic-view.jpg')]
				bg-[center_top_40%]
				bg-cover
			"
			></div>

			<main className="container mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row justify-between gap-[8vw]">
					<div className="flex-1 mt-28">
						<h1 className="text-2xl font-bold text-white">Praça do Povo</h1>
						<p className="mt-2 text-md mb-3">
							Conheça as propostas dos candidatos que estão concorrendo em seu
							Município
						</p>
						<ListCities />
						<div className="divider"></div>
						<Link
							href="/about"
							className="btn btn-primary w-full flex flex-row justify-between"
						>
							<span className="whitespace-normal flex-1 text-left">
								Entenda a importância do seu voto
							</span>

							<ChevronRightIcon />
						</Link>
					</div>
					<div className="w-full md:w-max flex justify-end md:max-w-[60%]">
						<Image
							src="/voting-machine.svg"
							alt="Voting Machine"
							className=" w-full md:w-auto h-auto md:h-[72vh] md:max-w-full"
							width={500}
							height={500}
							priority
						/>
					</div>
				</div>
			</main>
		</BasePage>
	);
}
