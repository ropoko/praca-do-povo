import Image from 'next/image';

export default function Mission() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-lg">
            Este projeto vai além de apenas compilar dados públicos: queremos tornar essas
            informações simples, acessíveis e organizadas, para que você, cidadão de Barra Bonita e
            Igaraçu do Tietê, tenha uma ferramenta poderosa para acompanhar de perto a administração
            da cidade. Aqui, você encontra tudo de forma clara e prática, para que possa fiscalizar
            e cobrar melhorias com base em dados confiáveis.
          </p>
          <p className="text-2xl">
            Queremos ser a <span className="text-primary">ponte</span> entre você e as informações
            da prefeitura
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/search-illustration.svg"
            alt="Search Illustration"
            width={500}
            height={400}
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
