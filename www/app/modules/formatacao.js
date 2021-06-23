define(
    ["jquery", "../data/Modelformatacao", "auxiliares"],
    function ($, dados, aux) {


        


        setTimeout(console.log("Aguarde..."), 10000);
        console.log("Inicio formatacao");
        //const j = dados;
        //console.log(dados);
        //console.log(aux);
        //const aba = "Formatacao";
        //let html = "";

        dados.formatacao.forEach((formatacao, i) => {
            const aba = "Formatacao";
            const html = aux.criarAccordion(aba, formatacao, i);
            //html += aux.criarAccordion(aba, formatacao, i);
            $(`#accordion${aba}`).append(html);
        });

        console.log("Fim formatacao");

        //return $(`#accordion${aba}`).append(html);

    });