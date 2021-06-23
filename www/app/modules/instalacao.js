define(
    ["jquery", "../data/Modelinstalacao", "auxiliares"],
    function ($, dados, aux) {

        //const j = dados;
        //console.log(dados);
        //console.log(aux);
        
        dados.instalacao.forEach((instalacao, i) => {
            const aba = "Instalacao";
            const html = aux.criarAccordion(aba, instalacao, i);
            $(`#accordion${aba}`).append(html);
        });

    });