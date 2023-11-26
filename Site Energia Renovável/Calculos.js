function calcularEnergiaPlacaSolar(areaPlaca, radiacaoSolar, eficiencia) {
    // Área da placa em metros quadrados
    // Radiação solar em watts por metro quadrado
    // Eficiência da placa em decimal (por exemplo, 0.15 para 15%)
  
    // Calcula a energia em watt-hora
    const energia = areaPlaca * radiacaoSolar * eficiencia;
  
    return energia;
}

function calcularEnergiaTurbinaEolica(velocidadeVento, areaVarrida, eficiencia) {
    // Densidade do ar ao nível do mar (em kg/m³)
    const densidadeAr = 1.225;
  
    // Cálculo da energia em watts
    const energia = 0.5 * densidadeAr * areaVarrida * Math.pow(velocidadeVento, 3) * eficiencia;
  
    return energia;
  }
  