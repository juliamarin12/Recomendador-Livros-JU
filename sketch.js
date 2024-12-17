let campoIdade;
let campoAventura;
let campoDrama;
let campoInvestigação;
let campoRomance;
let campoFicçãoCientifica;
let campoDivulgaçãoCientifica;
let campoSobrenatural;
let campoFantasia;

function setup() {
    createCanvas(600, 400);
    createElement("h2", "Recomendador de filmes")
    createSpan("Sua Idade");
    campoIdade = createInput();
    campoAventura = createCheckbox("Gosta de Aventura?");
    campoDrama = createCheckbox("Gosta de Drama?");
    campoInvestigação = createCheckbox("Gosta de Investigação?");
    campoRomance = createCheckbox("Gosta de Romance?");
    campoFicçãoCientifica = createCheckbox("Gosta de Ficção Científica?");
    campoDivulgaçãoCientifica = createCheckbox("Gosta de Divulgação Científica?");
    campoSobrenatural = createCheckbox("Gosta de Sobrenatural?");
    campoFantasia = createCheckbox("Gosta de Fantasia?");
}

function draw() {
    background("rgb(250,249,249)");
    let idade = campoIdade.value();
    let gostaDeAventura = campoAventura.checked();
    let gostaDeDrama = campoDrama.checked();
    let gostaDeInvestigação = campoInvestigação.checked();
    let gostaDeRomance = campoRomance.checked();
    let gostaDeFicçãoCientifica = campoFicçãoCientifica.checked();
    let gostaDeDivulgaçãoCientifica = campoDivulgaçãoCientifica.checked();
    let gostaDeSobrenatural = campoSobrenatural.checked();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeAventura, gostaDeDrama, gostaDeInvestigação, gostaDeRomance, gostaDeFicçãoCientifica, gostaDeDivulgaçãoCientifica, gostaDeSobrenatural, gostaDeFantasia);

    fill("black");
    textAlign(CENTER, CENTER);
    textSize(30);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAventura, gostaDeDrama, gostaDeInvestigação, gostaDeRomance, gostaDeFicçãoCientifica, gostaDeDivulgaçãoCientifica, gostaDeSobrenatural, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 12) {
            if (idade >= 15) {
                if 
            }
        }
    } else {
        if (gostaDeDrama || gostaDeDivulgaçãoCientifica || gostaDeSobrenatural || gostaDeAventura == false) {
            return "Não tenho uma recomendação";
        } else {
            if (gostaDeDrama || gostaDeRomance || gostaDeDivulgaçãoCientifica || gostaDeSobrenatural || gostaDeAventura && gostaDeInvestigação && gostaDeFicçãoCientifica) {
                return "Não tenho uma recomendação";
            } else {
                if (gostaDeAventura && gostaDeInvestigação) {
                    return "O gênio do crime (João Carlos Marinho)";
                } else {
                    if (gostaDeAventura && gostaDeFicçãoCientifica) {
                        return "Viagem ao centro da Terra (Júlio Verne)";
                    } else {
                        if (gostaDeAventura) {
                            return "A ilha perdida (José Dupré)";
                        }
                    }
                }
            }
        }
    }
}
