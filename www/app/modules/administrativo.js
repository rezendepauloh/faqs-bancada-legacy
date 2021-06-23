define(
    ["jquery", "../data/Modeladministrativo", "auxiliares"],
    function ($, dados, aux) {

        //const j = dados;
        //console.log(dados);
        //console.log(aux);
        //const aba = "Formatacao";
        //const html = "";
        
        dados.administrativo.forEach((adm, i) => {
            const aba = "Administrativo";
            const html = aux.criarAccordion(aba, adm, i);
            $(`#accordion${aba}`).append(html);
        });

    });