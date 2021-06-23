define(
    ["jquery", "../data/Modelplantao", "auxiliares"],
    function ($, dados, aux) {

        //const j = dados;
        //console.log(dados);
        //console.log(aux);
        
        dados.plantao.forEach((plantao, i) => {
            const aba = "Plantao";
            const html = aux.criarAccordion(aba, plantao, i);
            $(`#accordion${aba}`).append(html);
        });

    });