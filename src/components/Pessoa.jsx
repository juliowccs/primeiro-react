import { useState } from "react"

export default function Pessoa({ nome, idade }){



    return(
        <div className="flex justify-between gap-4">
            <div className="text-lm text-white">Nome: {nome} </div>
            <div className="text-lm text-white">Idade: {idade} </div>
        </div>
    )
}