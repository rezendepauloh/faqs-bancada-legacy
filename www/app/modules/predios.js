define(
    ["jquery", "../data/Modelpredios", "auxiliares", "dataTable", "bootstrap"],
    function ($, dados, aux, ...datatable) {

        console.log("Inicio predios");

        console.log(datatable);

        const tabela = "predios_tabela";
        const pesquisa = false;
        const soCorpoTabela = false;
        const colunas = ['Prédio', 'Sigla', 'Servidor', 'Firewall', 'Banda Oi', 'Banda Claro', 'Telefone', 'Dados'];
        const html = aux.criarTabela(tabela, soCorpoTabela, colunas);

        $('#predios').append(html);

        dados.predios.forEach((predio, i) => {
            let html = `
                <tr>
                    <td>${predio.Predio}</td>
                    <td>${predio.Sigla}</td>
                    <td>${predio.Servidor}</td>
                    <td>${predio.Firewall}</td>
                    <td>${predio.BandaOi}</td>
                    <td>${predio.BandaClaro}</td>
                    <td>${predio.Telefone}</td>
                    <td>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalPredio${i}">
                                Monitoramento
                            </button>
                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#ModalMapa${i}">
                                Mapas
                            </button>
                        </div>
                    </td>
                </tr>`;

            $(`#${tabela} tbody`).append(html);

            //Modal monitoramento
            let modal = `
                <div class="modal fade" id="ModalPredio${i}" tabindex="-1" aria-labelledby="ModalLabelPredio${i}" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="ModalLabelPredio${i}">
                                    Monitoramento do Prédio de ${predio.Predio}
                                </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
        
                                <table class="table table-striped table-bordered" style="width:100%">`;

            if (predio.MonitoramentoServidor != "") {

                modal += `
                    <tr>
                        <th scope="col">Servidor</th>
                        <td><a href="${predio.MonitoramentoServidor}" target="_blank">${predio.Servidor}</a></td>
                    </tr>`;

            }

            if (predio.MonitoramentoFirewall != "") {

                modal += `
                    <tr>
                        <th scope="col">Firewall</th>
                        <td><a href="${predio.MonitoramentoFirewall}" target="_blank">${predio.Firewall}</a></td>
                    </tr>`;

            }

            if (predio.MonitoramentoCircuitoOi != "") {

                modal += `
                    <tr>
                        <th scope="col">Circuito Oi</th>
                        <td><a href="${predio.MonitoramentoCircuitoOi}" target="_blank">${predio.CircuitoOi}</a></td>
                    </tr>`;

            }

            if (predio.MonitoramentoCircuitoClaro != "") {

                modal += `
                    <tr>
                        <th scope="col">Circuito Claro</th>
                        <td><a href="${predio.MonitoramentoCircuitoClaro}" target="_blank">${predio.CircuitoClaro}</a></td>
                    </tr>`;

            }

            if (predio.MonitoramentoSwitch != "") {

                modal += `
                    <tr>
                        <th scope="col">Switch</th>
                        <td><a href="${predio.MonitoramentoSwitch}" target="_blank">${predio.Switch}</a></td>
                    </tr>`;

            }

            modal += `
                </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>`;

            //Modal Mapa
            modal += `
                <div class="modal fade" id="ModalMapa${i}" tabindex="-1" aria-labelledby="ModalLabelMapa${i}" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="ModalLabelMapa${i}">
                                    Mapa do Prédio de ${predio.Predio}
                                </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div class="modal-body">`;

            for (let j = 0; j <= predio.Andares; j++) {
                modal += `<div id="mapaPredio${i}Andar${j}" style="border: 1px black solid; width: 100%; height: 500px;"></div> <br />`;
            }

            modal += `
                </div>";
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
                </div>`;

            $('#predios').append(modal);

            //Mapas
            //Criacaomapas(predio, i);
        });

        //console.log(json.mapa_pgj_principal_inferior);

        const dataTableInit = aux.initDatatable(tabela, pesquisa);
        
        console.log("Fim predios");
        
        return $(`#${tabela}`).DataTable(dataTableInit);

    });