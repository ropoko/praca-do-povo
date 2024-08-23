import Link from "next/link";
import { CITIES } from "../config";

export default function ListCities() {
	return (
		<div>
			{CITIES.map((city) => (
				<Link
					href={`/${city.slug}`}
					className="block mt-4 bg-white text-gray-900 px-4 py-2 rounded"
				>
					{city.name}
				</Link>
			))}
		</div>
	);
}
