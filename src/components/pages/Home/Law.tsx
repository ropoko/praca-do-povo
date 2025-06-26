export default function Law() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-primary text-primary-content p-8 rounded-lg relative">
          <div className="absolute -left-4 -top-4 text-6xl">"</div>
          <p className="text-lg relative z-10">
            A Lei nº 12.527/2011 regulamenta o direito constitucional de acesso às informações
            públicas. Essa norma entrou em vigor em 16 de maio de 2012 e criou mecanismos que
            possibilitam a qualquer pessoa, física ou jurídica, sem necessidade de apresentar
            motivo, o recebimento de informações públicas dos órgãos e entidades.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Todas as prefeituras do Brasil são obrigadas por lei a manter um Portal da
            Transparência!
          </h2>
          <p className="text-lg">
            No entanto, embora esses portais sejam fundamentais para promover a transparência,
            muitas vezes as informações são apresentadas de forma complexa ou de difícil acesso,
            dificultando o uso pleno por parte da população. Foi pensando nisso que criamos a{' '}
            <span className="font-bold text-primary">Cidadão+</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
