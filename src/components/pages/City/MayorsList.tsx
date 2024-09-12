import { getMayors } from '@/services/mayors';
import React from 'react';
import MayorCard from './MayorCard';

type Props = {
  city: string;
};

export default async function MayorsList({ city }: Props) {
  const mayors = await getMayors({ city });

  return (
    <div className="collapse collapse-arrow border-t border-b border-neutral-700 rounded-none">
      <input type="checkbox" name="my-accordion-2" defaultChecked />
      <div className="collapse-title text-md text-white font-bold">
        <h2>Prefeitos e Vice-prefeitos</h2>
      </div>
      <div className="collapse-content">
        <div className="w-full flex flex-col gap-3">
          {mayors.candidatos.map((candidate: any) => (
            <MayorCard key={candidate.id} mayor={candidate} city={city} />
          ))}
        </div>
      </div>
    </div>
  );
}
