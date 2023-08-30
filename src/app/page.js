'use client'

import Pessoa from '@/components/Pessoa'
import { useState } from 'react'

export default function Home() {
const [verify, setVerify] = useState(true)

function trocaEstados() {
  setVerify(!verify)
}

return (
  <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900 p-24">
    <h1 className='text-3xl antialiased text-purple-600 font-bold border border-purple-300 border-double rounded-2xl px-12 py-6 transition hover:scale-110'>Next.js</h1>
    <div className='flex flex-row gap-2 '>
      <div className='flex flex-col justify-center'>
        {verify && <Pessoa nome='João' idade='12'/>}
        <button onClick={trocaEstados} className='bg-purple-600 border border-purple-300 text-white rounded-md px-2 py-1'>Trocar</button>
      </div>
      <div  className='flex flex-col justify-center'>
        {verify && <Pessoa nome='André' idade='15'/>}
        <button onClick={trocaEstados} className='bg-purple-600 border border-purple-300 text-white rounded-md px-2 py-1'>Trocar</button>
      </div>
      <div className='flex flex-col justify-center'>
        {verify && <Pessoa nome='Letícia' idade='14'/>}
        <button onClick={trocaEstados} className='bg-purple-600 border border-purple-300 text-white rounded-md px-2 py-1'>Trocar</button>
      </div>
      <div className='flex flex-col justify-center'>
        {verify && <Pessoa nome='Andressa' idade='19'/>}
        <button onClick={trocaEstados} className='bg-purple-600 border border-purple-300 text-white rounded-md px-2 py-1'>Trocar</button>
      </div>
    </div>
    <h4 className='text-2xl text-purple-400 font-thin'>Codework</h4>
  </main>
)
}
