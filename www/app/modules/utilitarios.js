define(
    ["jquery", "../data/Modelutilitarios", "auxiliares"],
    function ($, dados, aux) {

        //const j = dados;
        //console.log(dados);
        //console.log(aux);
        
        dados.utilitarios.forEach((util, i) => {
            const aba = "Utilitarios";
            const html = aux.criarAccordion(aba, util, i);
            $(`#accordion${aba}`).append(html);
        });

    });