import { Mayor } from '@/types/mayor'
import React from 'react'

type Props = {
    mayor: Mayor
}
export default function MayorCard({mayor}: Props) {
  return (
    <div className='p-4 bg-neutral-400'>MayorCard</div>
  )
}
