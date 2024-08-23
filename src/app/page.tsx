import Image from "next/image";
import CandidateGrid from "@/components/CandidateGrid";
import Header from "@/components/Header";
import ListCities from "@/components/ListCities";
import ListMayors from "@/components/ListMayors";

export default function Home() {
	return (
		<>
			<Header />
			<main className="container mx-auto px-4 py-8">
				<div className="flex justify-between items-start">
					<div className="w-1/2">
						<h1 className="text-6xl font-bold">Voto</h1>
						<h1 className="text-8xl font-bold">360</h1>
						<p className="mt-4 text-lg">
							Conheça as propostas dos candidatos que estão concorrendo em seu
							Município
						</p>
						<ListCities />
						<ListMayors />

						<button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded-full">
							Entenda a importância do seu voto
						</button>
					</div>
					<div className="w-1/2">
						<CandidateGrid />
						<Image
							src="/voting-machine.png"
							alt="Voting Machine"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</main>
		</>
	);
}
