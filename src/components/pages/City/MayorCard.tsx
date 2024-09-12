import { Candidate } from '@/types/mayor';
import { capitalizeFirstLetter } from '@/utils/formatters';
import Link from 'next/link';
import React from 'react';

type Props = {
  mayor: Candidate;
  city: string;
};

export default function MayorCard({ mayor, city }: Props) {
  const viceMayor = mayor.vices?.[0];

  return (
    <Link
      href={`/cities/${city}/mayors/${mayor.id}`}
      className="p-4  flex flex-col items-start justify-start rounded-2xl btn btn-neutral min-h-[unset] h-auto"
    >
      <p className="text-md text-white mb-2">
        {mayor.numero} - {capitalizeFirstLetter(mayor.nomeColigacao || '')}
      </p>
      <div className="flex justify-between w-full gap-4 items-center">
        <div className="flex flex-row items-end">
          <div className="flex flex-col relative z-10 -mr-2 gap-2">
            <div className="avatar relative">
              <div className="w-20 rounded-full border-2 border-[#7D848F]">
                <img src={mayor.fotoUrl || ''} alt="Foto do Candidato" />
                <div className="absolute -bottom-0 -left-2 z-20 w-9 rounded-full bg-slate-300 flex items-center justify-center aspect-square overflow-hidden">
                  <p className="text-slate-800 text-sm text-center align-middle">
                    {mayor.partido?.sigla || ''}
                  </p>
                </div>
              </div>
            </div>
            <p className="capitalize font-normal">Prefeito</p>
          </div>
          <div className="flex flex-col relative z-0 gap-2">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={viceMayor?.urlFoto || ''} alt="Foto do Vice Candidato" />
                <div className="absolute -bottom-1 -left-0 z-20 w-7 rounded-full bg-slate-300 flex items-center justify-center aspect-square overflow-hidden">
                  <p className="text-slate-800 text-xs text-center align-middle whitespace-normal break-all leading-[0.80]">
                    {viceMayor?.sg_PARTIDO || ''}
                  </p>
                </div>
              </div>
            </div>
            <p className="capitalize font-normal">Vice</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-start justify-start text-left gap-4">
          <div>
            <h6 className="text-sm  text-white capitalize">{mayor.nomeUrna?.toLowerCase()}</h6>
            <p className="text-xs font-normal">{mayor.cargo?.nome || ''}</p>
            <p className="text-xs font-normal">
              {mayor.partido?.sigla + ' - ' + mayor.partido?.nome || ''}
            </p>
          </div>
          <div>
            <h6 className="text-sm  text-white capitalize">{viceMayor?.nm_URNA?.toLowerCase()}</h6>
            <p className="text-xs font-normal">{viceMayor?.ds_CARGO || ''}</p>
            <p className="text-xs font-normal">
              {viceMayor?.sg_PARTIDO + ' - ' + viceMayor?.nm_PARTIDO || ''}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
