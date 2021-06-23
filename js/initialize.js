//import initHeader from './initpage';

/*!
 * Initialize FAQs - Bancada
 * Version 0.0.21
 * Author: Paulo Rezende
 * Language: PT-BR
 * Date: 14/06/2021
 * 
*/

/*! ******************
 * 01 - Page HTML
 *********************
*/
function initPage() {

    const nameOfProject = "FAQs - Bancada";
    const modulos = ['Formatação', 'Instalação', 'Administrativo', 'Plantão', 'Utilitários', 'Prédios', 'Organograma', 'Localidades', 'Impressoras', 'Contato', 'Busca'];

    let html = `
    <!-- header -->
	<div class="container-fluid">
        <header class="blog-header py-3">

			<div class="row">

                <div class="col-sm-9">
                    <h1>${nameOfProject}</h1>
                </div>

                <div class="col-sm-3">
					<input class="form-control" id="filtro-nome" placeholder="Pesquise todo o site e pressione <ENTER>">
				</div>

            </div>

            <ul class="nav nav-tabs" id="myTab">
                
    `;

    for (const [i, v] of modulos.entries()) {
        
        if (i == 0) {
            html += `
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="${remover_acentos_espaco(v)}-tab" data-toggle="tab" href="#${remover_acentos_espaco(v)}" role="tab" aria-controls="${remover_acentos_espaco(v)}" aria-selected="true">
                    ${v}
                </a>
            </li>`;
        } else {
            html += `
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="${remover_acentos_espaco(v)}-tab" data-toggle="tab" href="#${remover_acentos_espaco(v)}" role="tab" aria-controls="${remover_acentos_espaco(v)}" aria-selected="false">
                    ${v}
                </a>
            </li>`;
        }
        
        //console.log(i, v, remover_acentos_espaco(v), remover_acentos(v));
    }

    html += `
    </ul>
    </header>
    </div>
    <!-- ./header -->
    <!-- main -->
    <main role="main" class="container-fluid">
        <div class="row">
            <div class="col-sm-10" id="dinamic-content">

            <!-- Conteudo -->
            <div class="tab-content" id="myTabContent">
    `;

    for (const [i, v] of modulos.entries()) {

        if (i == 0) {
            html += `
            <!-- ${v} -->
			<div class="tab-pane fade show active" id="${remover_acentos_espaco(v)}" role="tabpanel" aria-labelledby="${remover_acentos_espaco(v)}-tab">
			
                <div class="accordion" id="accordion${remover_acentos(v)}"></div>
				<div id="pagination-container"></div>

				<!-- Pesquisar por scroll sidebar sidebar scroll bootstrap ou scrollspy -->
				<!-- Ver esse também: https://pagination.js.org/index.html -->

            </div>
            <!-- ./${v} -->`;
        } else {
            
            if (v == 'Instalação' || v == 'Administrativo' || v == 'Plantão' || v == 'Utilitários') {
                html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${remover_acentos_espaco(v)}" role="tabpanel" aria-labelledby="${remover_acentos_espaco(v)}-tab">
                    <div class="accordion" id="accordion${remover_acentos(v)}"></div>
                </div>
                <!-- ./${v} -->`;
            }
            if (v == 'Prédios') {
                html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${remover_acentos_espaco(v)}" role="tabpanel" aria-labelledby="${remover_acentos_espaco(v)}-tab">
                    
                </div>
                <!-- ./${v} -->`;
            }

            if (v == 'Organograma') {
                html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${remover_acentos_espaco(v)}" role="tabpanel" aria-labelledby="${remover_acentos_espaco(v)}-tab">
                    
                    <div class="row">
                        <div class="col-sm-3">

                            <div id="tree2"></div>

                        </div>
                        <div class="col-sm-9">

                            <div id="tree" style="border: 1px black solid; width: 100%; height: 700px;"></div>

                        </div>
                    </div>

                    <br />

                    <div class="row">
                        <div class="col-sm-12">

                            <table id='tabela_organograma' class='table table-striped table-bordered' style='width:100%'></table>

                        </div>
                    </div>

                    <br />

                </div>
                <!-- ./${v} -->`;
            }

            if (v == 'Localidades') {
                html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${remover_acentos_espaco(v)}" role="tabpanel" aria-labelledby="${remover_acentos_espaco(v)}-tab">
                    
                </div>
                <!-- ./${v} -->`;
            }

            if (v == 'Impressoras') {
                html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${remover_acentos_espaco(v)}" role="tabpanel" aria-labelledby="${remover_acentos_espaco(v)}-tab">
                    
                </div>
                <!-- ./${v} -->`;
            }

            if (v == 'Contato') {
                html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${remover_acentos_espaco(v)}" role="tabpanel" aria-labelledby="${remover_acentos_espaco(v)}-tab">
                    
                </div>
                <!-- ./${v} -->`;
            }

            if (v == 'Busca') {
                html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${remover_acentos_espaco(v)}" role="tabpanel" aria-labelledby="${remover_acentos_espaco(v)}-tab">
                    <strong id="quantidade"></strong>
                    <div class="accordion" id="saidaTxt">Nenhum resultado...</div>
                </div>
                <!-- ./${v} -->`;
            }
            
        }

    }

    html += `
    </div>
    <!-- ./Conteudo -->

			</div>

			<!-- sidebar, which will move to the top on a small screen -->
			<div class="col-sm-2" id="sidebar-dinamic-content">
				<nav id="toc" data-toggle="toc" class="sticky-top"></nav>
			</div>

		</div>

	</main>
    <!-- ./main -->
    
    <!-- footer -->
	<footer class="container-fluid footer">
		<p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
				href="https://twitter.com/mdo">@mdo</a>.</p>

		<p>Página desenvolvida por: <strong>Paulo Henrique Gonçalves Rezende</strong></p>
	</footer> <!-- ./footer -->`;

    $('body').prepend(html);

}

/*! ******************
 * 02 - Formatação
 *********************
*/
function Criacaoformatacao() {

    json.formatacao.forEach((formatacao, i) => {
        const aba = "Formatacao";
        const html = criarAccordion(aba, formatacao, i);
        $(`#accordion${aba}`).append(html);
    });

}

/*! ******************
 * 03 - Instalação
 *********************
*/
function Criacaoinstalacao() {

    json.instalacao.forEach((instalacao, i) => {
        const aba = "Instalacao";
        const html = criarAccordion(aba, instalacao, i);
        $(`#accordion${aba}`).append(html);
    });

}

/*! ******************
 * 04 - Administrativo
 *********************
*/
function Criacaoadministrativo() {

    json.administrativo.forEach((adm, i) => {
        const aba = "Administrativo";
        const html = criarAccordion(aba, adm, i);
        $(`#accordion${aba}`).append(html);
    });

}

/*! ******************
 * 05 - Plantão
 *********************
*/
function Criacaoplantao() {

    json.plantao.forEach((plantao, i) => {
        const aba = "Plantao";
        const html = criarAccordion(aba, plantao, i);
        $(`#accordion${aba}`).append(html);
    });

}

/*! ******************
 * 06 - Utilitários
 *********************
*/
function Criacaoutilitarios() {

    json.utilitarios.forEach((util, i) => {
        const aba = "Utilitarios";
        const html = criarAccordion(aba, util, i);
        $(`#accordion${aba}`).append(html);
    });

}

/*! ******************
 * 07 - Prédios
 *********************
*/
function Criacaopredios() {

    const tabela = "predios_tabela";
    const pesquisa = false;
    const soCorpoTabela = false;
    const colunas = ['Prédio', 'Sigla', 'Servidor', 'Firewall', 'Banda Oi', 'Banda Claro', 'Telefone', 'Dados'];
    const html = criarTabela(tabela, soCorpoTabela, colunas);
    
    $('#predios').append(html);

    json.predios.forEach((predio, i) => {
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
        Criacaomapas(predio, i);
    });

    console.log(json.mapa_pgj_principal_inferior);

    const dataTableInit = initDatatable(tabela, pesquisa);
    $(`#${tabela}`).DataTable(dataTableInit);

}

/*! ******************
 * 08 - Mapas
 *********************
*/
function Criacaomapas(predio, i) {

    //https://leafletjs.com/
    for (let j = 0; j <= predio.Andares; j++) {

        //var tituloImagem = remover_acentos_espaco(json.predios[i].Predio);

        let andar = "";
        switch (j) {
            case 0:
                andar = "Térreo";
                break;
            case 1:
                andar = "1ª andar";
                break;
            case 2:
                andar = "2ª andar";
                break;
            case 3:
                andar = "3ª andar";
                break;
            case 4:
                andar = "4ª andar";
                break;
            default:
                andar = "";
        }

        //Antes de usar o geoJSON, fazer um case para pegar qual usar, parece que cada prédio
        //precisará do seu JSON
        let data = [];
        let tamanhoImagem = [];
        switch (predio.Predio) {
            case "Campo Grande - PGJ Principal":
                if (j == 0) {
                    data = json.mapa_pgj_principal_inferior;
                    tamanhoImagem = [3309, 4678];
                } else {
                    tamanhoImagem = [3309, 4678];
                }
                break;
            default:
                data = [];
                tamanhoImagem = [];
        }

        //console.log(tituloImagem);

        let map = L.map(`mapaPredio${i}Andar${j}`, {
            crs: L.CRS.Simple,
            //center: [1000, 1000],
            //center: new L.latLng([1576, 2276]), //LatLng(1576, 2276)
            zoom: 5,
            minZoom: -3,
            maxZoom: 5,
            tileSize: 512,
            zoomOffset: -1,
            fullscreenControl: true
        });

        let bounds = [[0, 0], tamanhoImagem]; //Esses numeros sao yx, fazer eles serem pegos do json

        //var image = L.imageOverlay("img/" + tituloImagem + ".png", bounds).addTo(map);
        //L.imageOverlay("img/mapa/" + predio.Imagem + "-" + j + ".png", bounds).addTo(map);
        L.imageOverlay(`img/mapa/${predio.Imagem}-${j}.png`, bounds).addTo(map);

        map.fitBounds(bounds);

        map.setView([2380, 1332], -2); //LatLng(1332, 2380)

        //Função para os pop ups balões dos indicadores do mapa
        function onEachFeature(feature, layer) {
            let popupContent = `<p>${feature.properties.ala} - ${feature.properties.sala}</p>`;

            //var popupContent = "<p>I <strong>started</strong> out as a GeoJSON " +
            //    feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

            if (feature.properties && feature.properties.popupContent) {
                popupContent += `<p>${feature.properties.popupContent}</p>`;
            }

            layer.bindPopup(popupContent);
        }

        const featuresLayer = new L.geoJSON(data, {
            filter: function (feature, layer) {
                return feature.properties.show_on_map;
            },
            onEachFeature: onEachFeature,

            attribution: `&copy; ${predio.Predio} - ${andar}`

        });

        map.addLayer(featuresLayer);

        //Forçar a centralização no ponto clicado...
        featuresLayer.on("click", function (event) {
            // Assuming the clicked feature is a shape, not a point marker.
            //map.fitBounds(event.layer.getBounds());
            //console.log(event.latlng);
            //map.setView( event.latlng, -2);
            //map.fitBounds(featuresLayer.getBounds());
        });

        const searchControl = new L.Control.Search({
            layer: featuresLayer,
            propertyName: 'name',
            marker: false,
            //moveToLocation: function (latlng, title, map) {
            //    map.fitBounds( latlng.layer.getBounds() );
            //    var zoom = map.getBoundsZoom(latlng.layer.getBounds());
            //    map.setView(latlng, zoom); // access the zoom
            //}
        });

        searchControl.on('search:locationfound', function (e) {

            //console.log('search:locationfound', );
            //map.removeLayer(this._markerSearch)
            //e.layer.setStyle({ fillColor: '#3f0', color: '#0f0' });

            if (e.layer._popup)
                e.layer.openPopup();

        }).on('search:collapsed', function (e) {

            featuresLayer.eachLayer(function (layer) {	//restore feature color
                featuresLayer.resetStyle(layer);
            });
        });

        map.addControl(searchControl);  //inizialize search control




        //var popup = L.popup();

        function onMapClick(e) {
            //popup
            //    .setLatLng(e.latlng)
            //    .setContent("You clicked in " + e.latlng.toString())
            //    .openOn(map);

            //var latlng = e.latlng;

            console.log(e.latlng.toString());
            //console.log(latlng);
        }

        map.on('click', onMapClick);

        /*
        function markerFunction(id) {
            for (var i in markers) {
              var markerID = markers[i].options.title;
              var position = markers[i].getLatLng();
              if (markerID == id) {
                  map.setView(position, 15);
                markers[i].openPopup();
              };
            }
          }
          
          $("a").click(function() {
            markerFunction($(this)[0].id);
          });*/

    }

}

/*! ******************
 * 09 - Telefones
 *********************
*/
function Criacaotelefones() {

    const tabela = "telefones";
    const pesquisa = false;
    const soCorpoTabela = false;
    const colunas = ['Nome', 'Lotação', 'Telefone'];
    const html = criarTabela(tabela, soCorpoTabela, colunas);

    $('#contato').append(html);

    json.telefones.forEach((telefone) => {
        let html = `
        <tr>
            <td>${telefone.Nome}</td>
            <td>${telefone.Lotacao}</td>
            <td>${telefone.Telefone}</td>
        </tr>`;
        $(`#${tabela} tbody`).append(html);
    });

    const dataTableInit = initDatatable(tabela, pesquisa);
    $(`#${tabela}`).DataTable(dataTableInit);

}

/*! ************************
 * 10 - Siglas Promotorias
 ***************************
*/
function Criacaosiglaspromotorias() {

    const tabela = "siglas_promotorias";
    const pesquisa = false;
    const soCorpoTabela = true;
    const colunas = ['Localidade', 'Sigla', 'Rede', 'Telefone'];
    const html = criarTabela(tabela, soCorpoTabela, colunas);

    $(`#${tabela}`).append(html);

    json.predios.forEach((predio) => {
        let html = `
        <tr>
            <td>${predio.Predio}</td>
            <td>${predio.Sigla}</td>
            <td>${predio.OldLAN}</td>
            <td>${predio.Telefone}</td>
        </tr>`;

        $(`#${tabela} tbody`).append(html);
    });

    const dataTableInit = initDatatable(tabela, pesquisa);
    $(`#${tabela}`).DataTable(dataTableInit);

}

/*! ************************
 * 11 - Maquinas do Parque
 ***************************
*/
function Criacaomaquinasparque() {

    const tabela = "maquinas_parque";
    const pesquisa = false;
    const soCorpoTabela = true;
    const colunas = ['Nome Máquina', 'PC ou Laptop', 'Plugues', 'Imagens'];
    const html = criarTabela(tabela, soCorpoTabela, colunas);
    
    $(`#${tabela}`).append(html);

    json.maquinas_parque.forEach((maquina, i) => {
        let html = `
        <tr>
            <td>${maquina.NomeMaquina}</td>
            <td>${maquina.PCouLaptop}</td>
            <td>`;

        maquina.Plugues.forEach((plugue) => {
            if (plugue.includes("VGA"))
                html += `<button type="button" class="btn btn-primary">${plugue}</button>`;
            if (plugue.includes("Serial"))
                html += `<button type="button" class="btn btn-success">${plugue}</button>`;
            if (plugue.includes("Display Port"))
                html += `<button type="button" class="btn btn-dark">${plugue}</button>`;
            if (plugue.includes("USB 3.0"))
                html += `<button type="button" class="btn btn-secondary">${plugue}</button>`;
            if (plugue.includes("USB 2.0"))
                html += `<button type="button" class="btn btn-info">${plugue}</button>`;
            if (plugue.includes("Entradas PS/2"))
                html += `<button type="button" class="btn btn-warning">${plugue}</button>`;
            if (plugue.includes("HDMI"))
                html += `<button type="button" class="btn btn-light">${plugue}</button>`;
        });

        html += `
        </td>
        <td>
            <div class="row" id="galleryMaquinas${i}" data-toggle="modal" data-target="#ModalMaquinas${i}">`;

        if (maquina.PCouLaptop == "Computador") {

            html += `
            <div class="col-12 col-sm-6 col-lg-3">
                <a class="w-100" data-target="#carouselMaquinas${i}" data-slide-to="0">Frente</a>
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
                <a class="w-100" data-target="#carouselMaquinas${i}" data-slide-to="1">Trás</a>
            </div>`;

        } else {

            html += `
            <div class="col-12 col-sm-6 col-lg-3">
                <a class="w-100" data-target="#carouselMaquinas${i}" data-slide-to="0">Fechado</a>
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
                <a class="w-100" data-target="#carouselMaquinas${i}" data-slide-to="1">Aberto</a>
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
                <a class="w-100" data-target="#carouselMaquinas${i}" data-slide-to="2">Trás</a>
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
                <a class="w-100" data-target="#carouselMaquinas${i}" data-slide-to="3">Direita</a>
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
                <a class="w-100" data-target="#carouselMaquinas${i}" data-slide-to="4">Esquerda</a>
            </div>`;

        }

        html += `
        </div>
        <div class="modal fade" id="ModalMaquinas${i}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="carouselMaquinas${i}" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">`;

        maquina.Imagens.forEach((imagem, j) => {
            // aqui que talvez precise entrar no outro loop
            if (j == 0) {
                html += `<div class="carousel-item active">`;
            } else {
                html += `<div class="carousel-item">`;
            }
            html += `<img class="d-block w-100" src="${imagem}"></div>`;
        });

        html += `
        </div>
            <a class="carousel-control-prev" href="#carouselMaquinas${i}" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselMaquinas${i}" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        </div>
        </div>
        </div>
        </td>
        </tr>`;
        $(`#${tabela} tbody`).append(html);
    });

    const dataTableInit = initDatatable(tabela, pesquisa);
    $(`#${tabela}`).DataTable(dataTableInit);

}

/*! ************************
 * 12 - Localidades
 ***************************
*/
function Criacaolocalidades(arvoreTabela) {

    const tabela = "localidades_tabela";
    const pesquisa = true;
    const soCorpoTabela = false;
    const colunas = ['Localidade', 'Sigla', 'Hierarquia', 'Cidade', 'Local', 'Titular', 'Telefone', 'Email'];
    const html = criarTabela(tabela, soCorpoTabela, colunas);

    $('#localidades').append(html);

    //Filtro da arvore
    //const arvoreFilter = arvoreTabela.filter(x => x.type != "Unidades Lógicas (Unidades sem estrutura física e sem lotação de pessoas)" && x.local.includes("?") == false && (x.telefone[0] != "" || x.email[0] != ""));
    const arvoreFilter = arvoreTabela.filter(x => x.type != "Unidades Lógicas (Unidades sem estrutura física e sem lotação de pessoas)");

    arvoreFilter.forEach((local) => {
        let html = `<tr data-child-telefone="<table class='table table-striped table-bordered'>`;

        local.telefone.forEach((telefone, j) => {
            html += `<tr><td>Telefone ${(j + 1)}</td><td>${telefone}</td></tr>`;
        });

        html += `</table>" data-child-email="<table class='table table-striped table-bordered'>`;

        local.email.forEach((email, j) => {
            html += `<tr><td>Email ${(j + 1)}</td><td>${email}</td></tr>`;
        });

        html += `
        </table>">
            <td>${local.description}</td>
            <td>${local.name}</td>
            <td>${local.hierarquia}</td>
            <td>${local.cidade}</td>
            <td>${local.local}</td>
            <td>${local.titular}</td>
            <td class="details-control promotoria-telefone"></td>
            <td class="details-control promotoria-email"></td>
        </tr>`;

        $(`#${tabela} tbody`).append(html);
    });

    const dataTableInit = initDatatable(tabela, pesquisa);
    $(`#${tabela}`).DataTable(dataTableInit);

    // Add event listener for opening and closing details
    $(`#${tabela}`).on('click', 'td.promotoria-telefone', function () {
        var tr = $(this).closest('tr');
        var row = $(`#${tabela}`).DataTable().row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(tr.data('child-telefone'))).show();
            tr.addClass('shown');
        }
    });

    // Add event listener for opening and closing details
    $(`#${tabela}`).on('click', 'td.promotoria-email', function () {
        var tr = $(this).closest('tr');
        var row = $(`#${tabela}`).DataTable().row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(tr.data('child-email'))).show();
            tr.addClass('shown');
        }
    });

}

/*! ************************
 * 13 - Impressoras
 ***************************
*/
function Criacaoimpressoras() {

    const tabela = "impressoras_tabela";
    const pesquisa = false;
    const soCorpoTabela = false;
    const colunas = ['Impressora', 'Setor', 'Prédio', 'Print-Server', 'IP Impressora', 'Modelo', 'Observação'];
    const html = criarTabela(tabela, soCorpoTabela, colunas);

    $('#impressoras').append(html);

    json.impressoras.forEach((impressora) => {
        let html = `
        <tr>
            <td>${impressora.Impressora}</td>
            <td>${impressora.Setor}</td>
            <td>${impressora.Predio}</td>
            <td>${impressora.PrintServer}</td>
            <td><a href="http://${impressora.IPImpressora}/" target="_blank">${impressora.IPImpressora}</a></td>
            <td>${impressora.Modelo}</td>
            <td>${impressora.Observacao}</td>
        </tr>`;

        $(`#${tabela} tbody`).append(html);
    });

    const dataTableInit = initDatatable(tabela, pesquisa);
    $(`#${tabela}`).DataTable(dataTableInit);

}

/*! ***************************
 * 14 - Padronização Tags OTRS
 ******************************
*/
function Criacaopadronizacaotagsotrs() {

    const tabela = "padronizacao_tags";
    const pesquisa = false;
    const soCorpoTabela = true;
    const colunas = ['TAG', 'Descrição', 'Exemplo'];
    const html = criarTabela(tabela, soCorpoTabela, colunas);

    $(`#${tabela}`).append(html);

    json.padronizacao_tags.forEach((tags) => {
        let html = `
        <tr>
            <td><strong>${tags.TAG}</strong></td>
            <td>${tags.Descricao}</td>
            <td><strong>${tags.Exemplo}</strong></td>
        </tr>`;

        $(`#${tabela} tbody`).append(html);
    });

    const dataTableInit = initDatatable(tabela, pesquisa);
    $(`#${tabela}`).DataTable(dataTableInit);

}

/*! ***************************
 * 15 - Imagens
 ******************************
*/
function Criacaoimagens() {

    json.imagens.forEach((imagem) => {
        let html = `
        <picture>
            <source srcset="${imagem.Source}" type="image/svg+xml">
                <img src="${imagem.Source}" class="img-fluid img-thumbnail" width="${imagem.Tamanho}" title="${imagem.TituloAlt}" alt="${imagem.TituloAlt}">
        </picture>`;

        $(`#imagem${imagem.ID}`).append(html);
    });

}

/*! ***************************
 * 16 - Videos
 ******************************
*/
function Criacaovideos() {

    json.videos.forEach((video) => {
        let html = `
        <video width=${video.Altura}" height="${video.Largura}" controls>
            <source src="${video.Source}" type="${video.Tipo}">
            Your browser does not support the video tag.
        </video>`;

        $(`#video${video.ID}`).append(html);
    });

}

/*! ***************************
 * 17 - Consulta
 ******************************
*/
function Criacaoconsulta() {

    //falta uma consulta pra saber se já tem o item, pra ele não carregar ele de novo!
    //https://stackoverflow.com/questions/16068047/jquery-duplicate-div-into-another-div
    //https://stackoverflow.com/questions/23944253/how-to-select-all-elements-with-particular-aria-value-using-jquery

    $('#busca-tab').hide();
    $('#filtro-nome').keypress(function (event) {

        const busca = $(this).val().toLowerCase();
        //var atualTab = $('#myTab').find('a.nav-link.active').attr('id'); //pega o id do elemento

        if (busca !== '') {

            if (event.which == 13) {

                let corresponde = false;
                let saida = Array();
                let quantidade = 0;
                let $button = null;

                const resultado = $('#myTabContent').find('.card');
                const resultadoTxt = resultado.find('button:first').toArray().map(function (i) { return i.innerText });

                const idsAccordion = resultado.toArray().map(function (i) { return i.id });
                const idsNaBusca = $('#saidaTxt').find('div.card').toArray().map(function (i) { return i.id });

                //https://www.guj.com.br/t/como-posso-verificar-se-elementos-de-um-array-esta-contido-em-outro-array-com-jquery/369640/2
                jQuery.fn.extend({
                    contains: function (value) {
                        var r = Array();
                        $.each(this, function (k, v) {
                            if (value.indexOf(v) >= 0) {
                                r.push(v);
                            }
                        });
                        return r;
                    }
                });

                $v = $(idsNaBusca).contains(idsAccordion);

                //$("#saidaTxt").empty();
                //$('#saidaTxt').remove();
                //$('#busca').append('<div class="accordion" id="saidaTxt">Nenhum resultado...</div>');

                if ($v.length > 0) {

                    return console.log("Já existe essa consulta");
                    //$('#saidaTxt').text('');
                    //$('#saidaTxt').html('');
                    //$("#saidaTxt").empty();
                    //$('#saidaTxt').remove();
                    //$('#busca').append('<div class="accordion" id="saidaTxt">Nenhum resultado...</div>');

                }

                for (var i = 0; i < resultado.length; i++) {

                    corresponde = resultadoTxt[i].toLowerCase().indexOf(busca) >= 0;
                    if (corresponde) {

                        $button = $(resultado[i]).clone();
                        saida.push($button);
                        quantidade += 1;

                    }
                }

                $('#busca-tab').show();
                $('#busca-tab').click();

                if (quantidade > 0) {

                    $('#saidaTxt').text('');
                    $('#quantidade').html(`${quantidade} resultados!<br><br>`);
                    for (var ind in saida) {

                        $('#saidaTxt').append(saida[ind]);

                    }

                } else {

                    $('#quantidade').html('');
                    $('#saidaTxt').text('Nenhum resultado...');

                }

            }

        } else {

            $('#busca-tab').hide();
            $('#quantidade').html('');
            $('#saidaTxt').text('Nenhum resultado...');
            $('#formatacao-tab').click();

        }

    });

}

/*! ***************************
 * 18 - Organograma Plugin
 ******************************
*/
function Criacaoorganogramaplugin() {

    //Ver esse: https://www.cssscript.com/visualize-hierarchical-tree-d3-mitch/

    // create a new empty object
    let orgObj = {};

    // copy array elements to th object
    for (var i = 0; i < json.arvore.length; i++) {
        orgObj[i] = json.arvore[i];
    }

    // print object
    //console.log(orgObj);
    //console.log(orgObj[0]);

    const treePlugin = new d3.mitchTree.boxedTree()
        //.setIsFlatData(true)
        .setData(orgObj[0])
        .setAllowFocus(false)
        .setMinScale(0.6)
        .setAllowNodeCentering(true)
        .setElement(document.getElementById("tree"))
        .setIdAccessor(function (data) {
            return data.id;
        })
        .setChildrenAccessor(function (data) {
            return data.children;
        })
        .setBodyDisplayTextAccessor(function (data) {
            return data.description;
        })
        .setTitleDisplayTextAccessor(function (data) {
            return data.name;
        })
        .on("nodeClick", function (event) {
            //console.log('The event object:')
            //console.log(event);
            //console.log(event.data.id);
            //console.log(event.data.name);
            //console.log("Click event was triggered!");

            //Ao clicar, copia a sigla (name)
            copyToClipboard(event.data.name);

            // Note for 'collapse' or 'expand' event type
            // to trigger, you'll need to disable focus mode.
            // You can do this by passing in false for the
            // allowFocus setting.
            if (event.type == 'focus')
                console.log("Node is being focused");
            else if (event.type == 'collapse')
                console.log("Node is collapsing");
            else if (event.type == 'expand')
                console.log("Node is expanding");
            // You use the below line to cancel the
            // focus/expand/collapse event
            //   event.preventDefault();
        })
        //.setOrientation('topToBottom')
        .getNodeSettings()
        .setSizingMode('nodesize')
        .setVerticalSpacing(30)
        .setHorizontalSpacing(30)
        .back()
        .initialize();

    // Expand all nodes
    /*var nodes = treePlugin.getNodes();
    nodes.forEach(function (node, index, arr) {
        treePlugin.expand(node);
    });
    treePlugin.update(treePlugin.getRoot());*/

    //Zoom
    treePlugin.getZoomListener().scaleTo(treePlugin.getSvg(), 0.5);

    //Função para copiar para o Clipboard
    //https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
    function copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        // to avoid breaking orgain page when copying more words
        // cant copy when adding below this code
        // dummy.style.display = 'none'
        document.body.appendChild(dummy);
        //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

}

/*! ***************************
 * 19 - Organograma Árvore
 ******************************
*/
function Criacaoorganogramaarvore() {

    //https://www.cssscript.com/tree-view-checkboxes/
    let tree = new Tree('#tree2', {
        data: json.arvore,
        closeDepth: 2,
        loaded: function () {
            //this.values = ['0-0-0', '0-1-1'];
            //console.log(this.selectedNodes)
            //console.log(this.values)
            //this.disables = ['0-0-0', '0-0-1', '0-0-2']
        },
        onChange: function () {
            //console.log(this.values);

            console.log(this);
            console.log(this.selectedNodes.length);
            console.log(this.selectedNodes[this.selectedNodes.length - 1]);
        }
    });

}

/*! ***************************
 * 20 - Organograma Tabela
 ******************************
*/
function Criacaoorganogramatabela(arvoreTabela) {

    console.log(arvoreTabela);

    const tabela = "tabela_organograma";
    const pesquisa = true;
    const soCorpoTabela = true;
    const colunas = ['ID', 'Sigla', 'Hierarquia', 'Setor', 'Tipo'];
    const html = criarTabela(tabela, soCorpoTabela, colunas);

    $(`#${tabela}`).append(html);

    arvoreTabela.forEach((arvore) => {
        let html = `
        <tr>
            <td>${arvore.id}</td>
            <td>${arvore.name}</td>
            <td>${arvore.hierarquia}</td>
            <td>${arvore.description}</td>
            <td>${arvore.type}</td>
        </tr>`;

        $(`#${tabela} tbody`).append(html);
    });

    const dataTableInit = initDatatable(tabela, pesquisa);
    $(`#${tabela}`).DataTable(dataTableInit);

}

/*! ***************************
 * 21 - Checkbox
 ******************************
*/
function Criacaocheckbox() {

    $('input').iCheck({
        checkboxClass: 'icheckbox_square-purple',
        radioClass: 'iradio_square-purple',
        //increaseArea: '20%' // optional
    });

}

/*! ***************************
 * 22 - Links dos cabeçalhos
 ******************************
*/
function Criacaolinkcabecalho() {

    anchors.add('h3');

}
/*! ******************************
 * 23 - Table of Contents dinamic
 *********************************
*/
function Criacaotableofcontents() {

    //https://afeld.github.io/bootstrap-toc/
    Toc.init({

        // The element that the navigation will be created in
        $nav: $('#toc'),

        // The element where the search for headings will be limited to
        $scope: $('#accordionFormatacao')

    });

    $("#formatacao-tab").click(function () {

        $('#toc').remove();
        $('#sidebar-dinamic-content').append('<nav id="toc" data-toggle="toc" class="sticky-top"></nav>');
        Toc.init({
            $nav: $('#toc'),
            $scope: $('#accordionFormatacao')
        });

        $('#toc').show();
        $('#dinamic-content').removeClass('col-sm-12').addClass('col-sm-10');
    });

    $("#instalacao-tab").click(function () {

        $('#toc').remove();
        $('#sidebar-dinamic-content').append('<nav id="toc" data-toggle="toc" class="sticky-top"></nav>');
        Toc.init({
            $nav: $('#toc'),
            $scope: $('#accordionInstalacao')
        });

        $('#toc').show();
        $('#dinamic-content').removeClass('col-sm-12').addClass('col-sm-10');
    });

    $("#administrativo-tab").click(function () {

        $('#toc').remove();
        $('#sidebar-dinamic-content').append('<nav id="toc" data-toggle="toc" class="sticky-top"></nav>');
        Toc.init({
            $nav: $('#toc'),
            $scope: $('#accordionAdministrativo')
        });

        $('#toc').show();
        $('#dinamic-content').removeClass('col-sm-12').addClass('col-sm-10');
    });

    $("#plantao-tab").click(function () {

        $('#toc').remove();
        $('#sidebar-dinamic-content').append('<nav id="toc" data-toggle="toc" class="sticky-top"></nav>');
        Toc.init({
            $nav: $('#toc'),
            $scope: $('#accordionPlantao')
        });

        $('#toc').show();
        $('#dinamic-content').removeClass('col-sm-12').addClass('col-sm-10');
    });

    $("#utilitarios-tab").click(function () {

        $('#toc').remove();
        $('#sidebar-dinamic-content').append('<nav id="toc" data-toggle="toc" class="sticky-top"></nav>');
        Toc.init({
            $nav: $('#toc'),
            $scope: $('#accordionUtilitarios')
        });

        $('#toc').show();
        $('#dinamic-content').removeClass('col-sm-12').addClass('col-sm-10');
    });

    $("#predios-tab").click(function () {
        $('#toc').hide();
        $('#dinamic-content').removeClass('col-sm-10').addClass('col-sm-12');
    });

    $("#organograma-tab").click(function () {
        $('#toc').hide();
        $('#dinamic-content').removeClass('col-sm-10').addClass('col-sm-12');
    });

    $("#localidades-tab").click(function () {
        $('#toc').hide();
        $('#dinamic-content').removeClass('col-sm-10').addClass('col-sm-12');
    });

    $("#impressoras-tab").click(function () {
        $('#toc').hide();
        $('#dinamic-content').removeClass('col-sm-10').addClass('col-sm-12');
    });

    $("#contato-tab").click(function () {
        $('#toc').hide();
        $('#dinamic-content').removeClass('col-sm-10').addClass('col-sm-12');
    });

    $("#busca-tab").click(function () {
        $('#toc').hide();
        $('#dinamic-content').removeClass('col-sm-10').addClass('col-sm-12');
    });

}

/*! ************************
 * 24 - Funções utilitárias
 ***************************
*/

//http://www.dbins.com.br/dica/remover-acentos-e-caracteres-especiais-com-javascript
function remover_acentos_espaco(str) {

    return str.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase();

}

//http://www.dbins.com.br/dica/remover-acentos-e-caracteres-especiais-com-javascript
function remover_acentos(str) {

    return str.normalize("NFD").replace(/[^a-zA-Zs]/g, "");

}

//Função Flat os childrens da arvore para criar uma tabela
//https://stackoverflow.com/questions/58908893/flatten-array-of-objects-with-nested-children
function myFlat(a, prefix = '') {
    return a.reduce(function (flattened, { id, name, type, cidade, local, titular, telefone, email, description, children }) {

        var hierarquia = `${prefix} > ${name}`;

        if (hierarquia.includes(" > MPMS")) {
            var inicio = hierarquia.substr(3, 7);
            var fim = hierarquia.substr(7);

            hierarquia = inicio + fim;
        }

        return flattened
            .concat([{ id, hierarquia, name, type, cidade, local, titular, telefone, email, description }])
            .concat(children ? myFlat(children, hierarquia) : []);
    }, []);
}

//Toggle value on Datatable
//https://datatables.net/forums/discussion/23116/child-row-example-without-ajax
function format(value) {
    return `<div>${value}</div>`;
}

//Incialização dos DataTables (o objeto que adiciona funcionalidades)
function initDatatable(t, p) {

    let obj = {};

    if (p == true) {

        //https://datatables.net/examples/api/multi_filter.html
        $(`#${t} tfoot th`).each(function () {
            const title = $(this).text();
            $(this).html(`<input type="text" placeholder="Pesquise ${title}" />`);
        });

        obj = {
            initComplete: function () {
                // Apply the search
                this.api().columns().every(function () {
                    var that = this;

                    $('input', this.footer()).on('keyup change clear', function () {
                        if (that.search() !== this.value) {
                            that
                                .search(this.value)
                                .draw();
                        }
                    });
                });
            },
            language: json.datatable_ptbr,
            "pagingType": "full_numbers"
        }
    } else {
        obj = {
            language: json.datatable_ptbr,
            "pagingType": "full_numbers"
        }
    }

    return obj;

}

//Inicialização das tables
function criarTabela(t, soCorpo, cols) {
    
    let html = "";

    if (soCorpo == false) {
        html = `
        <table id="${t}" class="table table-striped table-bordered" style="width:100%">
            <thead class="thead-dark">
                <tr>`;
        for (col of cols) {

            html += `
                    <th scope="col">${col}</th>`;

        }

        html += `
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>`;
        for (col of cols) {

            html += `
                    <th scope="col">${col}</th>`;

        }
        html += `
                </tr>
            </tfoot>
        </table>`;
    } else {
        html = `
        <thead class="thead-dark">
            <tr>`;
        for (col of cols) {

            html += `
                    <th scope="col">${col}</th>`;

        }
            html += `
            </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>`;
            for (col of cols) {

                html += `
                        <th scope="col">${col}</th>`;
    
            }
            html += `
                </tr>
            </tfoot>
        </table>`;
    }

    return html;

}

//Inicialização dos Accordions
function criarAccordion(a, item, i) {

    const html = `
    <div class="card" id="card${i + a}" aria-label="${item.Titulo}">
        <div class="card-header" id="heading${i + a}">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${i + a}" aria-expanded="true" aria-controls="collapse${i + a}">
                    ${item.Titulo}
                </button>
            </h2>
        </div>
        <div id="collapse${i + a}" class="collapse" aria-labelledby="heading${i + a}" data-parent="#accordion${a}">
            <div class="card-body">
                ${item.Conteudo}
            </div>
        </div>
    </div>`;

    return html;

}

$(document).ready(function () {

    //import initHeader from 'initpage';
    
    //https://www.convertjson.com/html-table-to-json.htm

    //Remove break lines and spaces
    //https://www.textfixer.com/tools/remove-line-breaks.php

    //Requisições AJAX
    //https://medium.com/@matt.vicent/como-fazer-um-blog-simples-com-javascript-e-requisi%C3%A7%C3%A3o-ajax-4f164921ae20#b071
    //https://github.com/axios/axios

    //Computadores
    //Celso/Zamber: pgj-54388
    //Luiz: pgj-58160
    //Heron: pgj-58278
    // Oliver: PGJ-54509

    var arvoreTabela = myFlat(json.arvore);
    //console.log(arvoreTabela.length);

    initPage();
    Criacaoformatacao();
    Criacaoinstalacao();
    Criacaoadministrativo();
    Criacaoplantao();
    Criacaoutilitarios();
    Criacaopredios();
    Criacaotelefones();
    Criacaosiglaspromotorias();
    Criacaomaquinasparque();
    Criacaolocalidades(arvoreTabela);
    Criacaoimpressoras();
    Criacaopadronizacaotagsotrs();
    Criacaoimagens();
    Criacaovideos();
    Criacaoconsulta();
    Criacaoorganogramaplugin();
    Criacaoorganogramaarvore();
    Criacaoorganogramatabela(arvoreTabela);
    Criacaocheckbox();
    Criacaolinkcabecalho();
    Criacaotableofcontents();

});