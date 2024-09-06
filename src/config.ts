const BASE_URL = 'https://divulgacandcontas.tse.jus.br';

const API_URLS = {
	MAYORS_BARRA: `${BASE_URL}/divulga/rest/v1/candidatura/listar/2024/62057/2045202024/11/candidatos`,
	MAYORS_IGARACU: `${BASE_URL}/divulga/rest/v1/candidatura/listar/2024/65013/2045202024/11/candidatos`,
	MAYOR_BY_ID: `${BASE_URL}/divulga/rest/v1/candidatura/listar/2024/65013/2045202024/11/candidatos/`
}

export const CITIES = [
	{
		name: 'Barra Bonita',
		slug: 'barra-bonita',
		url: API_URLS.MAYORS_BARRA
	},
	{
		name: 'Igaraçu do Tietê',
		slug: 'igaracu-do-tiete',
		url: API_URLS.MAYORS_IGARACU
	}
];

export const getCities = () => {
	return CITIES.map((city) => ({ slug: city.slug, url: city.url }));
}
