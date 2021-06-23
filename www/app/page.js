define(
    ["jquery", "auxiliares"],
    function ($, aux) {

        //const aux = require('auxiliares');
        //console.log(aux);
        console.log("Inicio page");
        //console.log(form);
        //require(['../app/modules/formatacao']);


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
                <a class="nav-link active" id="${aux.removeAcentosLowerCase(v)}-tab" data-toggle="tab" href="#${aux.removeAcentosLowerCase(v)}" role="tab" aria-controls="${aux.removeAcentosLowerCase(v)}" aria-selected="true">
                    ${v}
                </a>
            </li>`;
            } else {
                html += `
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="${aux.removeAcentosLowerCase(v)}-tab" data-toggle="tab" href="#${aux.removeAcentosLowerCase(v)}" role="tab" aria-controls="${aux.removeAcentosLowerCase(v)}" aria-selected="false">
                    ${v}
                </a>
            </li>`;
            }

            //console.log(i, v, aux.aux.removeAcentosLowerCase(v), aux.removeAcentos(v));
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
			<div class="tab-pane fade show active" id="${aux.removeAcentosLowerCase(v)}" role="tabpanel" aria-labelledby="${aux.removeAcentosLowerCase(v)}-tab">
			
                <div class="accordion" id="accordion${aux.removeAcentos(v)}"></div>
				<div id="pagination-container"></div>

				<!-- Pesquisar por scroll sidebar sidebar scroll bootstrap ou scrollspy -->
				<!-- Ver esse também: https://pagination.js.org/index.html -->

            </div>
            <!-- ./${v} -->`;
            } else {

                if (v == 'Instalação' || v == 'Administrativo' || v == 'Plantão' || v == 'Utilitários') {
                    html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${aux.removeAcentosLowerCase(v)}" role="tabpanel" aria-labelledby="${aux.removeAcentosLowerCase(v)}-tab">
                    <div class="accordion" id="accordion${aux.removeAcentos(v)}"></div>
                </div>
                <!-- ./${v} -->`;
                }
                if (v == 'Prédios') {
                    html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${aux.removeAcentosLowerCase(v)}" role="tabpanel" aria-labelledby="${aux.removeAcentosLowerCase(v)}-tab">
                    
                </div>
                <!-- ./${v} -->`;
                }

                if (v == 'Organograma') {
                    html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${aux.removeAcentosLowerCase(v)}" role="tabpanel" aria-labelledby="${aux.removeAcentosLowerCase(v)}-tab">
                    
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
                <div class="tab-pane fade" id="${aux.removeAcentosLowerCase(v)}" role="tabpanel" aria-labelledby="${aux.removeAcentosLowerCase(v)}-tab">
                    
                </div>
                <!-- ./${v} -->`;
                }

                if (v == 'Impressoras') {
                    html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${aux.removeAcentosLowerCase(v)}" role="tabpanel" aria-labelledby="${aux.removeAcentosLowerCase(v)}-tab">
                    
                </div>
                <!-- ./${v} -->`;
                }

                if (v == 'Contato') {
                    html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${aux.removeAcentosLowerCase(v)}" role="tabpanel" aria-labelledby="${aux.removeAcentosLowerCase(v)}-tab">
                    
                </div>
                <!-- ./${v} -->`;
                }

                if (v == 'Busca') {
                    html += `
                <!-- ${v} -->
                <div class="tab-pane fade" id="${aux.removeAcentosLowerCase(v)}" role="tabpanel" aria-labelledby="${aux.removeAcentosLowerCase(v)}-tab">
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

    console.log("Fim page");

        return $('body').prepend(html);


    });