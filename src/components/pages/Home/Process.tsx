import Image from 'next/image';

export default function Process() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full mb-12">
        <Image
          src="/bridge-illustration.svg"
          alt="Bridge Illustration"
          width={1200}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8 text-center">
        <div className="flex-1">
          <p className="text-lg">A prefeitura disponibiliza as informações</p>
        </div>
        <div className="flex-1">
          <p className="text-lg">Nós as organizamos e tornamos mais legíveis</p>
        </div>
        <div className="flex-1">
          <p className="text-lg">Você fiscaliza e cobra os políticos</p>
        </div>
      </div>
    </div>
  );
}
