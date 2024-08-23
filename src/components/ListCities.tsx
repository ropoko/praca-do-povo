import { useState, useEffect } from "react";

export default function ListCities() {
  const [cities, setCities] = useState([]);

  return (
    <div>
      <button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded-full">
        Entenda a importância do seu voto
      </button>
    </div>
  );
}
