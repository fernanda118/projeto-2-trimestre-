const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual das seguintes fontes de energia é considerada renovável?",
        alternativas: [
            "a) Carvão mineral",
            "b) Energia solar"
        ]
    },
    {
        enunciado: "Qual das opções a seguir é uma prática sustentável para reduzir o consumo de água?",
        alternativas: [
            "a) Deixar a torneira aberta enquanto escova os dentes",
            "b) Fechar a torneira ao escovar os dentes"
        ]
    },
    {
        enunciado: "Qual dos materiais abaixo é mais sustentável para substituir sacolas plásticas?",
        alternativas: [
            "a) Plástico convencional",
            "b) Tecido reutilizável"
        ]
    },
    {
        enunciado: "Qual das alternativas contribui mais para a redução da emissão de gases de efeito estufa?",
        alternativas: [
            "a) Carros elétricos",
            ""
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];