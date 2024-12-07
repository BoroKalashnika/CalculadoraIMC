
function CalcularIMC(pes, alcada) {
    return parseFloat(pes / Math.pow(alcada, 2)).toFixed(2);
}

function CalcularIMCtxt(pes, alcada) {
    let res = CalcularIMC(pes, alcada);

    if (res < 18.5) return "Pes insuficient";
    if (res < 25) return "Normopés";
    if (res < 27) return "Sobrepés grau I";
    if (res < 30) return "Sobrepés grau II";
    if (res < 35) return "Obesitat de tipus I";
    if (res < 40) return "Obesitat de tipus II";
    if (res < 50) return "Obesitat de tipus III (mòrbida)";
    return "Obesitat de tipus IV (extrema)";
}

export {CalcularIMC, CalcularIMCtxt};