define(
    ["../app/data/dados"],
    function (dados) {
    return {
        removeAcentosLowerCase: function (str) {
            return str.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase();
        },
        removeAcentos: function (str) {
            return str.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
        },
        criarAccordion: function (a, item, i) {

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
        
        },
        criarTabela: function (t, soCorpo, cols) {
    
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
        
        },
        initDatatable: function (t, p) {

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
                    language: dados.datatable_ptbr,
                    "pagingType": "full_numbers"
                }
            } else {
                obj = {
                    language: dados.datatable_ptbr,
                    "pagingType": "full_numbers"
                }
            }
        
            return obj;
        
        }
    };
});