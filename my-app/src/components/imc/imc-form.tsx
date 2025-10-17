'use client';

import React from 'react';

export default function ImcForm() {
    const [altura, setAltura] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [imc, setImc] = React.useState('');

    function calcularImc() {
        const alturaM = Number(altura) / 100;
        const imcCalculado = (Number(peso) / (alturaM * alturaM)).toFixed(2);
        setImc(imcCalculado);
    }
    return (
        <div>
            <div>
                <label htmlFor="peso">Peso (kg)</label>
                <input type="text" id="peso" name="peso" onChange={(e) => setPeso(e.target.value)} />
            </div>
            <div>
                <label htmlFor="altura">Altura (cm)</label>
                <input type="text" id="altura" name="altura" onChange={(e) => setAltura(e.target.value)} />
            </div>

            <button onClick={calcularImc}>Calcular</button>
            <h2>Imc: {imc}</h2>
        </div>
    );

}