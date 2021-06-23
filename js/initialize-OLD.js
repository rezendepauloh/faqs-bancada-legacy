$(document).ready(function () {

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

    //------------
    //Formatacao
    //------------
    for (var i = 0; i < json.formatacao.length; i++) {

        var html = "<div class='card' aria-label='" + json.formatacao[i].Titulo + "'>";
        html += "<div class='card-header' id='heading" + i + "Formatacao'>";
        html += "<h2 class='mb-0'>";
        html += "<button class='btn btn-link btn-block text-left' type='button' data-toggle='collapse' data-target='#collapse" + i + "Formatacao' aria-expanded='true' aria-controls='collapse" + i + "Formatacao'>";
        html += json.formatacao[i].Titulo;
        html += "</button>";
        html += "</h2>";
        html += "</div>";

        html += "<div id='collapse" + i + "Formatacao' class='collapse' aria-labelledby='heading" + i + "Formatacao' data-parent='#accordionFormatacao'>";
        html += "<div class='card-body'>";
        html += json.formatacao[i].Conteudo;
        html += "</div>";
        html += "</div>";
        html += "</div>";

        $('#accordionFormatacao').append(html);

    }

    //------------
    //Administrativo
    //------------
    for (var i = 0; i < json.administrativo.length; i++) {

        var html = "<div class='card' aria-label='" + json.administrativo[i].Titulo + "'>";
        html += "<div class='card-header' id='heading" + i + "Administrativo'>";
        html += "<h2 class='mb-0'>";
        html += "<button class='btn btn-link btn-block text-left' type='button' data-toggle='collapse' data-target='#collapse" + i + "Administrativo' aria-expanded='true' aria-controls='collapse" + i + "Administrativo'>";
        html += json.administrativo[i].Titulo;
        html += "</button>";
        html += "</h2>";
        html += "</div>";

        html += "<div id='collapse" + i + "Administrativo' class='collapse' aria-labelledby='heading" + i + "Administrativo' data-parent='#accordionAdministrativo'>";
        html += "<div class='card-body'>";
        html += json.administrativo[i].Conteudo;
        html += "</div>";
        html += "</div>";
        html += "</div>";

        $('#accordionAdministrativo').append(html);
    }

    //------------
    //Plantão
    //------------
    for (var i = 0; i < json.plantao.length; i++) {

        var html = "<div class='card' aria-label='" + json.plantao[i].Titulo + "'>";
        html += "<div class='card-header' id='heading" + i + "Plantao'>";
        html += "<h2 class='mb-0'>";
        html += "<button class='btn btn-link btn-block text-left' type='button' data-toggle='collapse' data-target='#collapse" + i + "Plantao' aria-expanded='true' aria-controls='collapse" + i + "Plantao'>";
        html += json.plantao[i].Titulo;
        html += "</button>";
        html += "</h2>";
        html += "</div>";

        html += "<div id='collapse" + i + "Plantao' class='collapse' aria-labelledby='heading" + i + "Plantao' data-parent='#accordionPlantao'>";
        html += "<div class='card-body'>";
        html += json.plantao[i].Conteudo;
        html += "</div>";
        html += "</div>";
        html += "</div>";

        $('#accordionPlantao').append(html);
    }

    //------------
    //Utilitários
    //------------
    for (var i = 0; i < json.utilitarios.length; i++) {

        var html = "<div class='card' aria-label='" + json.utilitarios[i].Titulo + "'>";
        html += "<div class='card-header' id='heading" + i + "Utilitarios'>";
        html += "<h2 class='mb-0'>";
        html += "<button class='btn btn-link btn-block text-left' type='button' data-toggle='collapse' data-target='#collapse" + i + "Utilitarios' aria-expanded='true' aria-controls='collapse" + i + "Utilitarios'>";
        html += json.utilitarios[i].Titulo;
        html += "</button>";
        html += "</h2>";
        html += "</div>";

        html += "<div id='collapse" + i + "Utilitarios' class='collapse' aria-labelledby='heading" + i + "Utilitarios' data-parent='#accordionUtilitarios'>";
        html += "<div class='card-body'>";
        html += json.utilitarios[i].Conteudo;
        html += "</div>";
        html += "</div>";
        html += "</div>";

        $('#accordionUtilitarios').append(html);
    }

    //------------
    //Prédios
    //------------
    var html = "<table id='predios_tabela' class='table table-striped table-bordered' style='width:100%'>";
    html += "<thead class='thead-dark'>";
    html += "<tr>";
    html += "<th scope='col'>Prédio</th>";
    html += "<th scope='col'>Sigla</th>";
    html += "<th scope='col'>Servidor</th>";
    html += "<th scope='col'>Firewall</th>";
    html += "<th scope='col'>Banda Oi</th>";
    html += "<th scope='col'>Banda Claro</th>";
    html += "<th scope='col'>Telefone</th>";
    html += "<th scope='col'>Dados</th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody></tbody>";
    html += "<tfoot>";
    html += "<tr>";
    html += "<th scope='col'>Prédio</th>";
    html += "<th scope='col'>Sigla</th>";
    html += "<th scope='col'>Servidor</th>";
    html += "<th scope='col'>Firewall</th>";
    html += "<th scope='col'>Banda Oi</th>";
    html += "<th scope='col'>Banda Claro</th>";
    html += "<th scope='col'>Telefone</th>";
    html += "<th scope='col'>Dados</th>";
    html += "</tr>";
    html += "</tfoot>";
    html += "</table>";
    $('#predios').append(html);

    for (var i = 0; i < json.predios.length; i++) {



        var html = "<tr>";
        html += "<td>" + json.predios[i].Predio + "</td>";
        html += "<td>" + json.predios[i].Sigla + "</td>";
        html += "<td>" + json.predios[i].Servidor + "</td>";
        html += "<td>" + json.predios[i].Firewall + "</td>";
        html += "<td>" + json.predios[i].BandaOi + "</td>";
        html += "<td>" + json.predios[i].BandaClaro + "</td>";
        html += "<td>" + json.predios[i].Telefone + "</td>";
        html += "<td>";

        html += "<div class='btn-group btn-group-toggle' data-toggle='buttons'>";
        html += "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#ModalPredio" + i + "'>";
        html += "Monitoramento";
        html += "</button>";
        html += "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#ModalMapa" + i + "'>";
        html += "Mapas";
        html += "</button>";
        html += "</div>";

        html += "</td>";
        html += "</tr>";

        $('#predios_tabela tbody').append(html);

        //Modal monitoramento
        var modal = "<div class='modal fade' id='ModalPredio" + i + "' tabindex='-1' aria-labelledby='ModalLabelPredio" + i + "' aria-hidden='true'>";
        modal += "<div class='modal-dialog modal-xl'>";
        modal += "<div class='modal-content'>";
        modal += "<div class='modal-header'>";
        modal += "<h5 class='modal-title' id='ModalLabelPredio" + i + "'>Monitoramento do Prédio de " + json.predios[i].Predio + "</h5>";
        modal += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
        modal += "<span aria-hidden='true'>&times;</span>";
        modal += "</button>";
        modal += "</div>";
        modal += "<div class='modal-body'>";

        modal += "<table class='table table-striped table-bordered' style='width:100%'>";

        if (json.predios[i].MonitoramentoServidor != "") {

            modal += "<tr>";
            modal += "<th scope='col'>Servidor</th>";
            modal += "<td><a href='" + json.predios[i].MonitoramentoServidor + "' target='_blank'>" + json.predios[i].Servidor + "</a></td>";
            modal += "</tr>";

        }

        if (json.predios[i].MonitoramentoFirewall != "") {

            modal += "<tr>";
            modal += "<th scope='col'>Firewall</th>";
            modal += "<td><a href='" + json.predios[i].MonitoramentoFirewall + "' target='_blank'>" + json.predios[i].Firewall + "</a></td>";
            modal += "</tr>";

        }

        if (json.predios[i].MonitoramentoCircuitoOi != "") {

            modal += "<tr>";
            modal += "<th scope='col'>Circuito Oi</th>";
            modal += "<td><a href='" + json.predios[i].MonitoramentoCircuitoOi + "' target='_blank'>" + json.predios[i].CircuitoOi + "</a></td>";
            modal += "</tr>";

        }

        if (json.predios[i].MonitoramentoCircuitoClaro != "") {

            modal += "<tr>";
            modal += "<th scope='col'>Circuito Claro</th>";
            modal += "<td><a href='" + json.predios[i].MonitoramentoCircuitoClaro + "' target='_blank'>" + json.predios[i].CircuitoClaro + "</a></td>";
            modal += "</tr>";

        }

        if (json.predios[i].MonitoramentoSwitch != "") {

            modal += "<tr>";
            modal += "<th scope='col'>Switch</th>";
            modal += "<td><a href='" + json.predios[i].MonitoramentoSwitch + "' target='_blank'>" + json.predios[i].Switch + "</a></td>";
            modal += "</tr>";

        }

        modal += "</table>";

        modal += "</div>";
        modal += "<div class='modal-footer'>";
        modal += "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>";
        modal += "</div>";
        modal += "</div>";
        modal += "</div>";
        modal += "</div>";

        //Modal Mapa
        modal += "<div class='modal fade' id='ModalMapa" + i + "' tabindex='-1' aria-labelledby='ModalLabelMapa" + i + "' aria-hidden='true'>";
        modal += "<div class='modal-dialog modal-xl'>";
        modal += "<div class='modal-content'>";
        modal += "<div class='modal-header'>";
        modal += "<h5 class='modal-title' id='ModalLabelMapa" + i + "'>Mapa do Prédio de " + json.predios[i].Predio + "</h5>";
        modal += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
        modal += "<span aria-hidden='true'>&times;</span>";
        modal += "</button>";
        modal += "</div>";
        modal += "<div class='modal-body'>";

        for (var j = 0; j <= json.predios[i].Andares; j++) {
            modal += "<div id='mapaPredio" + i + "Andar" + j + "' style='border: 1px black solid; width: 100%; height: 500px;'></div> <br />";
        }

        modal += "</div>";
        modal += "<div class='modal-footer'>";
        modal += "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>";
        modal += "</div>";
        modal += "</div>";
        modal += "</div>";
        modal += "</div>";

        $('#predios').append(modal);


        //------------
        //Mapas
        //------------
        //https://leafletjs.com/
        for (var j = 0; j <= json.predios[i].Andares; j++) {

            //var tituloImagem = remover_acentos_espaco(json.predios[i].Predio);

            var andar = "";
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
            var data = [];
            var tamanhoImagem = [];
            switch (json.predios[i].Predio) {
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

            var map = L.map("mapaPredio" + i + "Andar" + j, {
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

            var bounds = [[0, 0], tamanhoImagem]; //Esses numeros sao yx, fazer eles serem pegos do json

            //var image = L.imageOverlay("img/" + tituloImagem + ".png", bounds).addTo(map);
            var image = L.imageOverlay("img/mapa/" + json.predios[i].Imagem + "-" + j + ".png", bounds).addTo(map);

            map.fitBounds(bounds);

            map.setView([2380, 1332], -2); //LatLng(1332, 2380)

            //Função para os pop ups balões dos indicadores do mapa
            function onEachFeature(feature, layer) {
                var popupContent = "<p>" + feature.properties.ala + " - " + feature.properties.sala + "</p>";

                //var popupContent = "<p>I <strong>started</strong> out as a GeoJSON " +
                //    feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

                if (feature.properties && feature.properties.popupContent) {
                    popupContent += "<p>" + feature.properties.popupContent + "</p>";
                }

                layer.bindPopup(popupContent);
            }

            var featuresLayer = new L.geoJSON(data, {
                filter: function (feature, layer) {
                    return feature.properties.show_on_map;
                },
                onEachFeature: onEachFeature,

                attribution: '&copy; ' + json.predios[i].Predio + ' - ' + andar

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

            var searchControl = new L.Control.Search({
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

    console.log(json.mapa_pgj_principal_inferior);

    $('#predios_tabela').DataTable();

    //http://www.dbins.com.br/dica/remover-acentos-e-caracteres-especiais-com-javascript
    function remover_acentos_espaco(str) {

        return str.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase();

    }

    //Mapas
    /*for (var i = 0; i < json.predios.length; i++) {

        //var tituloImagem = "";
        //tituloImagem = json.predios[i].Predio.replace(/ /g, "-").replace(/[^a-zA-Zs]/g, "").toLowerCase();
        var tituloImagem = remover_acentos_espaco(json.predios[i].Predio);
        //tituloImagem = retira_acentos(tituloImagem);

        console.log(tituloImagem);
        
        //Mapas
        var map = L.map("mapaPredio" + i, {
            crs: L.CRS.Simple,
            center: [39.73, -104.99],
            zoom: 13,
            minZoom: -2
        });

        var bounds = [[0, 0], [3309, 4678]];
        //var image = L.imageOverlay("img/" + tituloImagem + ".png", bounds).addTo(map);
        var image = L.imageOverlay("img/mapa/" + tituloImagem + "0.png", bounds).addTo(map);

        map.fitBounds(bounds);

        //Função para os pop ups balões dos indicadores do mapa
        function onEachFeature(feature, layer) {
            var popupContent = "<p>I <strong>started</strong> out as a GeoJSON " +
                feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

            if (feature.properties && feature.properties.popupContent) {
                popupContent += feature.properties.popupContent;
            }

            layer.bindPopup(popupContent);
        }

        //pgj_mapa_inferior
        L.geoJSON(json.pgj_mapa_inferior, {
            filter: function (feature, layer) {
                return feature.properties.show_on_map;
            },
            onEachFeature: onEachFeature,
            attribution: '&copy; ' + json.predios[i].Predio
        }).addTo(map);

    }*/

    //------------
    //Telefones
    //------------
    var html = "<table id='telefones' class='table table-striped table-bordered' style='width:100%'>";
    html += "<thead class='thead-dark'>";
    html += "<tr>";
    html += "<th scope='col'>Nome</th>";
    html += "<th scope='col'>Lotação</th>";
    html += "<th scope='col'>Telefone</th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody></tbody>";
    html += "</tbody>";
    html += "<tfoot>";
    html += "<tr>";
    html += "<th scope='col'>Nome</th>";
    html += "<th scope='col'>Lotação</th>";
    html += "<th scope='col'>Telefone</th>";
    html += "</tr>";
    html += "</tfoot>";
    html += "</table>";
    $('#contato').append(html);

    for (var i = 0; i < json.telefones.length; i++) {
        var html = "<tr>";
        html += "<td>" + json.telefones[i].Nome + "</td>";
        html += "<td>" + json.telefones[i].Lotacao + "</td>";
        html += "<td>" + json.telefones[i].Telefone + "</td>";
        html += "</tr>";
        $('#telefones tbody').append(html);
    }

    $('#telefones').DataTable();

    //------------
    //Siglas Promotorias
    //------------
    var html = "<thead class='thead-dark'>";
    html += "<tr>";
    html += "<th scope='col'>Localidade</th>";
    html += "<th scope='col'>Sigla</th>";
    html += "<th scope='col'>Rede</th>";
    html += "<th scope='col'>Telefone</th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody> </tbody>";
    html += "<tfoot>";
    html += "<tr>";
    html += "<th scope='col'>Localidade</th>";
    html += "<th scope='col'>Sigla</th>";
    html += "<th scope='col'>Rede</th>";
    html += "<th scope='col'>Telefone</th>";
    html += "</tr>";
    html += "</tfoot>";
    $('#siglas_promotorias').append(html);

    for (var i = 0; i < json.predios.length; i++) {
        var html = "<tr>";
        html += "<td>" + json.predios[i].Predio + "</td>";
        html += "<td>" + json.predios[i].Sigla + "</td>";
        html += "<td>" + json.predios[i].OldLAN + "</td>";
        html += "<td>" + json.predios[i].Telefone + "</td>";
        html += "</tr>";

        $('#siglas_promotorias tbody').append(html);

    }

    $('#siglas_promotorias').DataTable();

    //------------
    //Maquinas do Parque
    //------------
    var html = "<thead class='thead-dark'>";
    html += "<tr>";
    html += "<th>Nome Máquina</th>";
    html += "<th>PC ou Laptop</th>";
    html += "<th>Plugues</th>";
    html += "<th>Imagens</th>";
    html += "</tr>";
    html += "</thead><tbody></tbody><tfoot>";
    html += "<tr>";
    html += "<th>Nome Máquina</th>";
    html += "<th>PC ou Laptop</th>";
    html += "<th>Plugues</th>";
    html += "<th>Imagens</th>";
    html += "</tr></tfoot>";
    $('#maquinas_parque').append(html);

    for (var i = 0; i < json.maquinas_parque.length; i++) {
        var html = "<tr>";
        html += "<td>" + json.maquinas_parque[i].NomeMaquina + "</td>";
        html += "<td>" + json.maquinas_parque[i].PCouLaptop + "</td>";

        html += "<td>";
        for (var j = 0; j < json.maquinas_parque[i].Plugues.length; j++) {

            if (json.maquinas_parque[i].Plugues[j].includes("VGA")) {
                html += "<button type='button' class='btn btn-primary'>" + json.maquinas_parque[i].Plugues[j] + "</button> ";
            }
            if (json.maquinas_parque[i].Plugues[j].includes("Serial")) {
                html += "<button type='button' class='btn btn-success'>" + json.maquinas_parque[i].Plugues[j] + "</button> ";
            }
            if (json.maquinas_parque[i].Plugues[j].includes("Display Port")) {
                html += "<button type='button' class='btn btn-dark'>" + json.maquinas_parque[i].Plugues[j] + "</button> ";
            }
            if (json.maquinas_parque[i].Plugues[j].includes("USB 3.0")) {
                html += "<button type='button' class='btn btn-secondary'>" + json.maquinas_parque[i].Plugues[j] + "</button> ";
            }
            if (json.maquinas_parque[i].Plugues[j].includes("USB 2.0")) {
                html += "<button type='button' class='btn btn-info'>" + json.maquinas_parque[i].Plugues[j] + "</button> ";
            }
            if (json.maquinas_parque[i].Plugues[j].includes("Entradas PS/2")) {
                html += "<button type='button' class='btn btn-warning'>" + json.maquinas_parque[i].Plugues[j] + "</button> ";
            }
            if (json.maquinas_parque[i].Plugues[j].includes("HDMI")) {
                html += "<button type='button' class='btn btn-light'>" + json.maquinas_parque[i].Plugues[j] + "</button> ";
            }

        }
        html += "</td>";

        html += "<td>";
        html += "<div class='row' id='galleryMaquinas" + i + "' data-toggle='modal' data-target='#ModalMaquinas" + i + "'>";

        if (json.maquinas_parque[i].PCouLaptop == "Computador") {

            html += "<div class='col-12 col-sm-6 col-lg-3'><a class='w-100' data-target='#carouselMaquinas" + i + "' data-slide-to='0'>Frente</a>";
            html += "</div>";
            html += "<div class='col-12 col-sm-6 col-lg-3'><a class='w-100' data-target='#carouselMaquinas" + i + "' data-slide-to='1'>Trás</a>";
            html += "</div>";

        } else {

            html += "<div class='col-12 col-sm-6 col-lg-3'><a class='w-100' data-target='#carouselMaquinas" + i + "' data-slide-to='0'>Fechado</a>";
            html += "</div>";
            html += "<div class='col-12 col-sm-6 col-lg-3'><a class='w-100' data-target='#carouselMaquinas" + i + "' data-slide-to='1'>Aberto</a>";
            html += "</div>";
            html += "<div class='col-12 col-sm-6 col-lg-3'><a class='w-100' data-target='#carouselMaquinas" + i + "' data-slide-to='2'>Trás</a>";
            html += "</div>";
            html += "<div class='col-12 col-sm-6 col-lg-3'><a class='w-100' data-target='#carouselMaquinas" + i + "' data-slide-to='3'>Direita</a>";
            html += "</div>";
            html += "<div class='col-12 col-sm-6 col-lg-3'><a class='w-100' data-target='#carouselMaquinas" + i + "' data-slide-to='4'>Esquerda</a>";
            html += "</div>";

        }

        html += "</div>";

        html += "<div class='modal fade' id='ModalMaquinas" + i + "' tabindex='-1' role='dialog' aria-hidden='true'>";
        html += "<div class='modal-dialog' role='document'>";
        html += "<div class='modal-content'>";
        html += "<div class='modal-header'>";
        html += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
        html += "<span aria-hidden='true'>×</span>";
        html += "</button>";
        html += "</div>";
        html += "<div class='modal-body'>";
        html += "<div id='carouselMaquinas" + i + "' class='carousel slide' data-ride='carousel'>";
        html += "<div class='carousel-inner'>";

        for (var j = 0; j < json.maquinas_parque[i].Imagens.length; j++) {

            // aqui que talvez precise entrar no outro loop
            if (j == 0) {
                html += "<div class='carousel-item active'>";
            } else {
                html += "<div class='carousel-item'>";
            }
            html += "<img class='d-block w-100'	src='" + json.maquinas_parque[i].Imagens[j] + "'>";
            html += "</div>";

        }

        html += "</div>";
        html += "<a class='carousel-control-prev' href='#carouselMaquinas" + i + "' role='button' data-slide='prev'>";
        html += "<span class='carousel-control-prev-icon' aria-hidden='true'></span>";
        html += "<span class='sr-only'>Previous</span>";
        html += "</a>";
        html += "<a class='carousel-control-next' href='#carouselMaquinas" + i + "' role='button' data-slide='next'>";
        html += "<span class='carousel-control-next-icon' aria-hidden='true'></span>";
        html += "<span class='sr-only'>Next</span>";
        html += "</a>";
        html += "</div>";
        html += "</div>";
        html += "<div class='modal-footer'>";
        html += "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";

        html += "</td>";

        html += "</tr>";
        $('#maquinas_parque tbody').append(html);
    }

    $('#maquinas_parque').DataTable();

    //------------
    //Localidades
    //------------
    var html = "<table id='promotorias_tabela' class='table table-striped table-bordered' style='width:100%'>";
    html += "<thead class='thead-dark'>";
    html += "<tr>";
    html += "<th scope='col'>ID</th>";
    html += "<th scope='col'>Localidade</th>";
    html += "<th scope='col'>Sigla</th>";
    html += "<th scope='col'>Cidade</th>";
    html += "<th scope='col'>Local</th>";
    html += "<th scope='col'>Titular</th>";
    html += "<th scope='col'>Telefone</th>";
    html += "<th scope='col'>Email</th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody>";
    html += "</tbody>";
    html += "<tfoot>";
    html += "<tr>";
    html += "<th scope='col'>ID</th>";
    html += "<th scope='col'>Localidade</th>";
    html += "<th scope='col'>Sigla</th>";
    html += "<th scope='col'>Cidade</th>";
    html += "<th scope='col'>Local</th>";
    html += "<th scope='col'>Titular</th>";
    html += "<th scope='col'>Telefone</th>";
    html += "<th scope='col'>Email</th>";
    html += "</tr>";
    html += "</tfoot>";
    html += "</table>";
    $('#promotorias').append(html);

    //Função Flat os childrens da arvore para criar uma tabela
    //https://stackoverflow.com/questions/58908893/flatten-array-of-objects-with-nested-children
    function myFlat(a, prefix = '') {
        return a.reduce(function (flattened, { id, name, type, cidade, local, titular, telefone, email, description, children }) {

            var hierarquia = prefix + " > " + name;

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

    var arvoreTabela = myFlat(json.arvore);
    //console.log(arvoreTabela.length);

    for (var i = 0; i < arvoreTabela.length; i++) {

        if (arvoreTabela[i].type != "Unidades Lógicas (Unidades sem estrutura física e sem lotação de pessoas)") {
            
            var html = "<tr data-child-telefone='";
            html += "<table class=\"table table-striped table-bordered\">";

            for (var j = 0; j < arvoreTabela[i].telefone.length; j++) {

                html += "<tr>";
                html += "<td>Telefone " + (j + 1) + "</td>";
                html += "<td>" + arvoreTabela[i].telefone[j] + "</td>";
                html += "</tr>";

            }

            html += "</table>' data-child-email='";
            html += "<table class=\"table table-striped table-bordered\">";

            for (var j = 0; j < arvoreTabela[i].email.length; j++) {

                html += "<tr>";
                html += "<td>Email " + (j + 1) + "</td>";
                html += "<td>" + arvoreTabela[i].email[j] + "</td>";
                html += "</tr>";

            }

            html += "</table>'>";

            html += "<td>" + arvoreTabela[i].id + "</td>";
            html += "<td>" + arvoreTabela[i].description + "</td>";
            html += "<td>" + arvoreTabela[i].name + "</td>";
            html += "<td>" + arvoreTabela[i].cidade + "</td>";
            html += "<td>" + arvoreTabela[i].local + "</td>"; 
            html += "<td>" + arvoreTabela[i].titular + "</td>";
            html += "<td class='details-control promotoria-telefone'></td>";
            html += "<td class='details-control promotoria-email'></td>";
            html += "</tr>";
            $('#promotorias_tabela tbody').append(html);

        }


    }

    $('#promotorias_tabela').DataTable();

    //Toggle value on Datatable
    //https://datatables.net/forums/discussion/23116/child-row-example-without-ajax
    function format(value) {
        return '<div>' + value + '</div>';
    }

    // Add event listener for opening and closing details
    $('#promotorias_tabela').on('click', 'td.promotoria-telefone', function () {
        var tr = $(this).closest('tr');
        var row = $('#promotorias_tabela').DataTable().row(tr);

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
    $('#promotorias_tabela').on('click', 'td.promotoria-email', function () {
        var tr = $(this).closest('tr');
        var row = $('#promotorias_tabela').DataTable().row(tr);

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

    //------------
    //Impressoras
    //------------
    var html = "<table id='impressoras_tabela' class='table table-striped table-bordered' style='width:100%'>";
    html += "<thead class='thead-dark'>";
    html += "<tr>";
    html += "<th scope='col'>Impressora</th>";
    html += "<th scope='col'>Setor</th>";
    html += "<th scope='col'>Prédio</th>";
    html += "<th scope='col'>Print-Server</th>";
    html += "<th scope='col'>IP Impressora</th>";
    html += "<th scope='col'>Modelo</th>";
    html += "<th scope='col'>Observação</th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody>";
    html += "</tbody>";
    html += "<tfoot>";
    html += "<tr>";
    html += "<th scope='col'>Impressora</th>";
    html += "<th scope='col'>Setor</th>";
    html += "<th scope='col'>Prédio</th>";
    html += "<th scope='col'>Print-Server</th>";
    html += "<th scope='col'>IP Impressora</th>";
    html += "<th scope='col'>Modelo</th>";
    html += "<th scope='col'>Observação</th>";
    html += "</tr>";
    html += "</tfoot>";
    html += "</table>";
    $('#impressoras').append(html);

    for (var i = 0; i < json.impressoras.length; i++) {
        var html = "<tr>";
        html += "<td>" + json.impressoras[i].Impressora + "</td>";
        html += "<td>" + json.impressoras[i].Setor + "</td>";
        html += "<td>" + json.impressoras[i].Predio + "</td>";
        html += "<td>" + json.impressoras[i].PrintServer + "</td>";
        html += "<td><a href='http://" + json.impressoras[i].IPImpressora + "/' target='_blank'>" + json.impressoras[i].IPImpressora + "</a></td>";
        html += "<td>" + json.impressoras[i].Modelo + "</td>";
        html += "<td>" + json.impressoras[i].Observacao + "</td>";
        html += "</tr>";
        $('#impressoras_tabela tbody').append(html);
    }

    $('#impressoras_tabela').DataTable();

    //------------
    //Padronização das Tags do OTRS
    //------------
    var html = "<thead class='thead-dark'>";
    html += "<tr>";
    html += "<th scope='col'>TAG</th>";
    html += "<th scope='col'>Descrição</th>";
    html += "<th scope='col'>Exemplo</th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody>";
    html += "</tbody>";
    html += "<tfoot>";
    html += "<tr>";
    html += "<th scope='col'>TAG</th>";
    html += "<th scope='col'>Descrição</th>";
    html += "<th scope='col'>Exemplo</th>";
    html += "</tr>";
    html += "</tfoot>";
    $('#padronizacao_tags').append(html);

    for (var i = 0; i < json.padronizacao_tags.length; i++) {
        var html = "<tr>";
        html += "<td><strong>" + json.padronizacao_tags[i].TAG + "</strong></td>";
        html += "<td>" + json.padronizacao_tags[i].Descricao + "</td>";
        html += "<td><strong>" + json.padronizacao_tags[i].Exemplo + "</strong></td>";
        html += "</tr>";
        $('#padronizacao_tags tbody').append(html);
    }

    $('#padronizacao_tags').DataTable();

    //------------
    //Imagens
    //------------
    for (var i = 0; i < json.imagens.length; i++) {

        var idimagem = 'imagem' + i;
        var idpegado = $('#' + idimagem);

        var html = "<picture>";
        html += "<source srcset='" + json.imagens[i].Source + " type='image/svg+xml'>";
        html += "<img src='" + json.imagens[i].Source + "' class='img-fluid img-thumbnail' ";
        html += "width='" + json.imagens[i].Tamanho + "' ";
        html += "title='" + json.imagens[i].TituloAlt + "' alt='" + json.imagens[i].TituloAlt + "'>";
        html += "</picture>";

        $(idpegado).append(html);

    }

    //------------
    //Videos
    //------------
    for (var i = 0; i < json.videos.length; i++) {

        var idvideo = 'video' + i;
        var idpegado = $('#' + idvideo);

        var html = "<video ";
        html += "width='" + json.videos[i].Altura + "' ";
        html += "height='" + json.videos[i].Largura + "' controls>";

        html += "<source src='" + json.videos[i].Source + "' ";
        html += "type='" + json.videos[i].Tipo + "'>";
        html += "Your browser does not support the video tag.";
        html += "</video>";

        $(idpegado).append(html);

    }

    //------------
    //Consulta
    //------------
    //falta uma consulta pra saber se já tem o item, pra ele não carregar ele de novo!
    //https://stackoverflow.com/questions/16068047/jquery-duplicate-div-into-another-div
    //https://stackoverflow.com/questions/23944253/how-to-select-all-elements-with-particular-aria-value-using-jquery

    $('#busca-tab').hide();
    $('#filtro-nome').keypress(function (event) {

        var busca = $(this).val().toLowerCase();
        //var atualTab = $('#myTab').find('a.nav-link.active').attr('id'); //pega o id do elemento

        if (busca !== '') {

            if (event.which == 13) {

                var corresponde = false;
                var saida = Array();
                var quantidade = 0;
                var $button = null;

                var resultado = $('#myTabContent').find('.card');
                var resultadoTxt = resultado.find('button:first').toArray().map(function (i) { return i.innerText });

                var itensNaBusca = $('#saidaTxt').find('.card').find('button:first').toArray().map(function (i) { return i.innerText });
                //$('#saidaTxt').find('div.card-header').attr('id'); //aqui pega todos os ids que já tem no #saidaTxt

                //console.log(resultado);
                //console.log(resultadoTxt);
                //console.log(resultado[0]);
                //console.log(resultadoTxt[0]);
                //console.log(itensNaBusca);

                for (var i = 0; i < resultado.length; i++) {

                    //console.log(itensNaBusca[i]);
                    //console.log(resultadoTxt[i]);

                    if (itensNaBusca[i] != resultadoTxt[i]) {

                        //console.log("Entrou aqui");

                        corresponde = resultadoTxt[i].toLowerCase().indexOf(busca) >= 0;
                        if (corresponde) {

                            $button = $(resultado[i]).clone();
                            saida.push($button);
                            quantidade += 1;

                        }

                    }
                }

                //Mudar os ids da busca
                //for (var i = 0; i < saida.length; i++) {

                //saida[i].find('.card-header').attr("id", "newId");

                //}

                //var itensNobutton = saida[0].find('.card-header').toArray().map(function (i) { return i });

                //console.log(saida);
                //console.log($button);
                //console.log($button.length);
                //console.log(itensNobutton);

                //Adicionar novo id
                //$("#myElement").attr("id", "newId");

                $('#busca-tab').show();
                $('#busca-tab').click();

                if (quantidade > 0) {

                    $('#saidaTxt').text('');
                    $('#quantidade').html(quantidade + ' resultados!<br><br>');
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

    //------------
    //Organograma
    //------------
    //Ver esse: https://www.cssscript.com/visualize-hierarchical-tree-d3-mitch/

    // create a new empty object
    var orgObj = {};

    // copy array elements to th object
    for (var i = 0; i < json.arvore.length; i++) {
        orgObj[i] = json.arvore[i];
    }

    // print object
    //console.log(orgObj);
    //console.log(orgObj[0]);

    var treePlugin = new d3.mitchTree.boxedTree()
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

    //------------
    //Organograma - Árvore
    //------------
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

    //------------
    //Organograma - Tabela
    //------------
    console.log(arvoreTabela);

    var html = "<thead class='thead-dark'>";
    html += "<tr>";
    html += "<th scope='col'>ID</th>";
    html += "<th scope='col'>Sigla</th>";
    html += "<th scope='col'>Hierarquia</th>";
    html += "<th scope='col'>Setor</th>";
    html += "<th scope='col'>Tipo</th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody>";
    html += "</tbody>";
    html += "<tfoot>";
    html += "<tr>";
    html += "<th scope='col'>ID</th>";
    html += "<th scope='col'>Sigla</th>";
    html += "<th scope='col'>Hierarquia</th>";
    html += "<th scope='col'>Setor</th>";
    html += "<th scope='col'>Tipo</th>";
    html += "</tr>";
    html += "</tfoot>";
    $('#tabela_organograma').append(html);

    for (var i = 0; i < arvoreTabela.length; i++) {
        var html = "<tr>";
        html += "<td>" + arvoreTabela[i].id + "</td>";
        html += "<td>" + arvoreTabela[i].name + "</td>";
        html += "<td>" + arvoreTabela[i].hierarquia + "</td>";
        html += "<td>" + arvoreTabela[i].description + "</td>";
        html += "<td>" + arvoreTabela[i].type + "</td>";
        html += "</tr>";
        $('#tabela_organograma tbody').append(html);
    }

    $('#tabela_organograma').DataTable();

    //------------
    //Mapas
    //------------
    /*var map = L.map("map", {
        crs: L.CRS.Simple,
        center: [39.73, -104.99],
        zoom: 13,
        minZoom: -2
    });

    var bounds = [[0, 0], [3309, 4678]];
    var image = L.imageOverlay("img/pgj-principal-terreo.png", bounds).addTo(map);

    map.fitBounds(bounds);

    //Função para os pop ups balões dos indicadores do mapa
    function onEachFeature(feature, layer) {
        var popupContent = "<p>I <strong>started</strong> out as a GeoJSON " +
            feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

        if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
        }

        layer.bindPopup(popupContent);
    }

    //pgj_mapa_inferior
    L.geoJSON(json.pgj_mapa_inferior, {
        filter: function (feature, layer) {
            return feature.properties.show_on_map;
        },
        onEachFeature: onEachFeature,
        attribution: '&copy; PGJ - Piso Inferior'
    }).addTo(map);*/

    //L.geoJSON(json.pgj_mapa_inferior).addTo(map);
    /*L.geoJSON(json.pgj_mapa_inferior, {
        style: function (feature) {
            return {color: feature.properties.color};
        }
    }).bindPopup(function (layer) {
        return layer.feature.properties.description;
    }).addTo(map);*/

    /*L.geoJSON([bicycleRental, campus], {

        style: function (feature) {
            return feature.properties && feature.properties.style;
        },

        onEachFeature: onEachFeature,

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 8,
                fillColor: "#ff7800",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        }
    }).addTo(map);*/









    //------------
    //Checkbox
    //------------
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-purple',
        radioClass: 'iradio_square-purple',
        //increaseArea: '20%' // optional
    });

    //------------
    //Link dos cabeçalhos
    //------------
    anchors.add('h3');

    //------------
    //Table of Contents dinamic
    //------------
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

    $("#promotorias-tab").click(function () {
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

});