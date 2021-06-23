define(function () {

    const json = {
        utilitarios: [
            {
                "Titulo": "CheckList de viagem",
                "Conteudo": `
            <form id='form-checklist-viagem'>
              <div class='row'>
                <div class='col-sm-2'>
                  <span style='font-size: 1.25rem;'>Cabos</span>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='cabos-rede'> Cabos de rede        
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='cabos-forca'> Cabos de força
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='cabos-vga'> Cabos VGA
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='cabos-dvi'> Cabos DVI
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='cabos-hdmi'> Cabos HDMI
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='cabos-display-port'> Cabos Display Port
                    </label>
                  </div>
                </div>
                <div class='col-sm-2'>
                  <span style='font-size: 1.25rem;'>Adaptadores</span>
                  <div class='form-group'>
                  <label>
                    <input type='checkbox' name='display-port-vga'> Display Port > VGA
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='display-port-hdmi'> Display Port > HDMI
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='dvi-hdmi'> DVI > HDMI
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='tomada-novo-antigo'> Tomada Padrão novo para antigo
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='tomada-antigo-novo'> Tomada Padrão antigo para novo
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='filtro-de-linha'> Fltro de linha
                    </label>
                  </div>
                </div>
                <div class='col-sm-2'>
                  <span style='font-size: 1.25rem;'>Backup</span>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='doca'> Doca
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='hd-externo'> HD Externo
                    </label>
                  </div>
                </div>
                <div class='col-sm-2'>
                  <span style='font-size: 1.25rem;'>Equipamentos</span>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='computadores'> Computadores
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='monitores'> Monitores
                    </label>
                  </div>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='hubs'> Hubs
                    </label>
                  </div>
                </div>
                <div class='col-sm-2'>
                  <span style='font-size: 1.25rem;'>Outros</span>
                  <div class='form-group'>
                    <label>
                      <input type='checkbox' name='organizador-cabos'> Organizador de Cabos
                    </label>
                  </div>
                </div>
              </div>
            </form>`
            },
            {
                "Titulo": "CheckList de pós viagem",
                "Conteudo": "Em construção"
            }
        ]
    };

    return json;

});