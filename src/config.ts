const BASE_URL = 'https://divulgacandcontas.tse.jus.br';

const API_URLS = {
	MAYORS_BARRA: `${BASE_URL}/divulga/rest/v1/candidatura/listar/2024/62057/2045202024/11/candidatos`,
	MAYORS_IGARACU: `${BASE_URL}/divulga/rest/v1/candidatura/listar/2024/65013/2045202024/11/candidatos`,
	MAYOR_BARRA_BY_ID: `${BASE_URL}/divulga/rest/v1/candidatura/buscar/2024/62057/2045202024/candidato`,
	MAYOR_IGARACU_BY_ID: `${BASE_URL}/divulga/rest/v1/candidatura/buscar/2024/65013/2045202024/candidato`,
	VICE_MAYORS_BARRA: `${BASE_URL}/divulga/rest/v1/candidatura/listar/2024/62057/2045202024/12/candidatos`,
	VICE_MAYORS_IGARACU: `${BASE_URL}/divulga/rest/v1/candidatura/listar/2024/65013/2045202024/12/candidatos`,
	VICE_MAYOR_BARRA_BY_ID: `${BASE_URL}/divulga/rest/v1/candidatura/buscar/2024/62057/2045202024/candidato`,
	VICE_MAYOR_IGARACU_BY_ID: `${BASE_URL}/divulga/rest/v1/candidatura/buscar/2024/65013/2045202024/candidato`,
	COUNCILORS_BARRA: `${BASE_URL}/divulga/rest/v1/candidatura/listar/2024/62057/2045202024/13/candidatos`,
	COUNCILORS_IGARACU: `${BASE_URL}/divulga/rest/v1/candidatura/listar/2024/65013/2045202024/13/candidatos`,
	COUNCILORS_BARRA_BY_ID: `${BASE_URL}/divulga/rest/v1/candidatura/buscar/2024/62057/2045202024/candidato`,
	COUNCILORS_IGARACU_BY_ID: `${BASE_URL}/divulga/rest/v1/candidatura/buscar/2024/65013/2045202024/candidato`
}

export const CITIES = [
	{
		name: 'Barra Bonita',
		slug: 'barra-bonita',
		mayorsUrl: API_URLS.MAYORS_BARRA,
		mayorDetailsUrl: API_URLS.MAYOR_BARRA_BY_ID,
		viceMayorsUrl: API_URLS.VICE_MAYORS_BARRA,
		viceMayorDetailsUrl: API_URLS.VICE_MAYOR_BARRA_BY_ID,
		councilorsUrl: API_URLS.COUNCILORS_BARRA,
		councilorsDetailsUrl: API_URLS.COUNCILORS_BARRA_BY_ID
	},
	{
		name: 'Igaraçu do Tietê',
		slug: 'igaracu-do-tiete',
		mayorsUrl: API_URLS.MAYORS_IGARACU,
		mayorDetailsUrl: API_URLS.MAYOR_IGARACU_BY_ID,
		viceMayorsUrl: API_URLS.VICE_MAYORS_IGARACU,
		viceMayorDetailsUrl: API_URLS.VICE_MAYOR_IGARACU_BY_ID,
		councilorsUrl: API_URLS.COUNCILORS_IGARACU,
		councilorsDetailsUrl: API_URLS.COUNCILORS_IGARACU_BY_ID
	}
];

export const getCity = (slug: string) => {
	return CITIES.find((city) => city.slug === slug);
}
