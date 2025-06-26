import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Quem fiscaliza a gestão da nossa cidade?
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Que tal ser você?</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Aqui, você encontra informações detalhadas sobre os empregados da prefeitura,
              salários, licitações e muito mais!
            </p>
            <p className="text-lg">
              Tudo com o intuito de fomentar a transparência e permitir que todos os cidadãos possam
              acompanhar e fiscalizar a gestão pública da nossa cidade
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <Image
            src="/logo_horizontal_dark.svg"
            alt="Cidadão+ Logo"
            width={400}
            height={200}
            className="w-full max-w-md"
          />
          <div className="flex gap-4">
            <Link href="/barra-bonita" className="btn btn-primary">
              Barra Bonita
            </Link>
            <Link href="/igaracu-do-tiete" className="btn btn-primary">
              Igaraçu do Tietê
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
