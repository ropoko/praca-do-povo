import { Candidato } from '@/types/mayor'
import React from 'react'

type Props = {
    mayor: Candidato
}
export default function MayorCard({mayor}: Props) {

  
  return (
    <div className='p-4  flex flex-row rounded-md'>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={mayor.fotoUrl || ''} alt='Foto do Candidato' />
        </div>
      </div>
      <h1>
        {mayor.nomeUrna}
      </h1>
    </div>
  )
}
