/*!
 * Initialize Page FAQs - Bancada
 * Version 0.0.1
 * Author: Paulo Rezende
 * Language: PT-BR
 * Date: 14/06/2021
 * 
*/

function initHeader() {

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
        
        console.log(i, v);
    }

    html += `
    </ul>
    </header>
    </div>
    <!-- ./header -->`;

}

//http://www.dbins.com.br/dica/remover-acentos-e-caracteres-especiais-com-javascript
function remover_acentos_espaco(str) {

    return str.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase();

}

export default initHeader();