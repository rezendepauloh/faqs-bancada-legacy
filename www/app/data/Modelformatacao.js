define(function () {

    const json = {
        formatacao: [
            {
                "Titulo": "Formatação na bancada",
                "Conteudo": `
            <h3>Passo a passo</h3>
              <p>Como utilizamos um servidor de imagem, preparamos a máquina com o básico:</p>
              <ol>
                <li>A estação de trabalho (computador)</li>
                <li>O cabo de força</li><li>O cabo de rede</li>
                <li>O cabo do monitor (seja <samp>VGA</samp>, <samp>DisplayPort</samp> ou <samp>HDMI</samp>)</li>
              </ol>
            <p id='imagem0'></p>
            <h3>Ligando a máquina</h3>
            <p>Dependendo da estação, ao pressionar o botão de ligar, já começa a pressionar o botão que seleciona o Menu de <samp>boot</samp>. A maioria delas é o <kbd>F12</kbd>.</p>
            <!-- Colocar uma imagem com a tela do boot menu, ou... criar uma tabela com fotos de cada boot diferente, das máquinas diferentes de nosso parque -->
            <p>Escolha a opção que utiliza a rede, como <strong>"<samp>Network boot</samp>"</strong> ou algo parecido</p>
            <p>Aqui é preciso aguardar a comunicação entre a placa de rede (mostrada no <samp>endereço MAC</samp>) se comunicar com o servidor <samp>PXE</samp>, aqui poderá ocorrer dois casos:</p>
            <h3>Caso 1 - Máquina no PXE</h3>
            <p>Caso ele esteja no <samp>PXE</samp>, ele se negará a entrar no <samp>boot</samp> pela rede e escolherá outra opção de <samp>boot</samp>, conforme a imagem abaixo:</p>
            <p id='imagem1'></p>
            <p>Nesse caso, é preciso entrar no <strong><samp>SCCM</samp></strong> na sua estação de trabalho, localizar a máquina (pode ser pelo <var>patrimônio</var>, <var>último usuário logado</var> ou <var>Endereço MAC</var> da placa de rede), pressionar o botão direito do <kbd>Mouse</kbd> e selecionar a opção <kbd>Delete</kbd>.</p>
            <p id='imagem2'></p>
            <p>E confirmar a exclusão pressionando o botão <samp>Delete</samp> da janela que se abrir.</p>
            <p id='imagem3'></p>
            <h3>Caso 2 - Máquina fora do PXE (Prosseguir por aqui caso não esteja)</h3>
            <p>Depois, reinicie a máquina que iremos formatar e reincie o processo. Vai aparecer a opção de pressionar <kbd>F12</kbd> no fim, conforme a imagem abaixo.</p>
            <p id='imagem4'></p>
            <p>Na próxima opção, é só escolher a única opção e aguardar a finalização do <samp>boot</samp>.</p>
            <p id='imagem5'></p>
            <p>A partir daqui, ele começará a carregar o <var>Image Server</var>.</p>
            <p id='imagem6'></p>
            <h3>O Task Sequence Wizard</h3>
            <p>A primeira janela é a tela de autenticação. É só colocar a senha <strong>MPMS.0000</strong></p>
            <p id='imagem7'></p>
            <p>A próxima tela é a escolha do sistema operacional. Aqui é preciso analisar o seguinte:</p>
            <ol>
              <p id='imagem8'></p>
              <li>O primeiro é o Sistema Windows 10 para a <strong>PGJ</strong> e o <strong>GAECO</strong>. Caso a estação seja para algum desses prédios, selecionar esse.</li>
              <li>O segundo é o Sistema Windows 10 para as <strong>DEMAIS LOCALIDADES</strong>, ou seja, para as localidades além da PGJ e do GAECO (Interior e promotorias de Campo Grande).</li>
              <li>O terceiro é o Sistema Windows 10 para as <strong>NOTEBOOKS</strong>. Qualquer laptop pode usar essa opção.</li>
            </ol>
            <p>A próxima e última tela é o nome da estação que aparecerá posteriormente no <samp>AD</samp> e <samp>SCCM</samp>. Ela é opcional pois podemos colocá-la depois, mas geralmente já preenchemos aqui para evitar um trabalho posterior. Basta pressionar <kbd>Tab</kbd> até o botão <samp>Edit</samp> ou posicionar o ponteiro do mouse e clicar sobre ele.</p>
            <p id='imagem9'></p>
            <p>Na janela que se abrirá, basta pressionar <kbd>Tab</kbd> até o formulário <samp>Value:</samp> e digitar o nome do computador. Após digitá-lo, pressione o botão <samp>OK</samp></p>
            <p id='imagem10'></p>
            <p>Os nomes das máquinas seguem a seguinte nomenclatura: Caso seja o interior ou promotorias de Campo Grande ou ainda o GAECO, começa-se com as iniciais <samp>PJ</samp> seguida da sigla da localidade, um hífen (-) e o patrimônio da máquina sem o primeiro zero. Caso a máquina seja para a PGJ, é só colocar <samp>PGJ</samp>, o hífen (-) e o patrimônio sem o primeiro zero. A tabela a seguir mostra as siglas de todos os prédios do MP:</p>
            <h3>As siglas das promotorias</h3>
            <table id="siglas_promotorias" class="table table-striped table-bordered" style="width:100%"></table>
            <p></p>
            <p>Agora é só aguardar a máquina ficar pronta.</p>
            <h3>Vídeo da formatação</h3>
            <p>Segue vídeo com mais detalhes do processo realizado em uma HP Elitedesk 800 G5.</p>
            <p id='video0'></p>
            <h3>Alguns erros comuns</h3>
            <p>Pode ocorrer alguns erros durante a formatação. Alguns estarão listados abaixo:</p>
            <h4>Erro de Partição - Disco HDD ou SDD com problema</h4>
            <p>Quando, ao iniciar a formatação, apresentar a janela e dentro da caixa de mensagem estiver o texto <em>"Particionar Disco 0"</em>, o disco está com problema e será necessária a troca deste. A imagem abaixo apresenta essa janela.</p>
            <p id='imagem11'></p>
            <h4>Erro de Rede ou Image Server</h4>
            <p>Geralmente, quando esse erro ocorre, existe algum problema nos pontos de rede da bancada e/ou algum problema no <samp>Image Server</samp>. Quando isso ocorrer, é preciso acionar a <strong>Infraestrutura Nível 2</strong> e pedir para analisarem os nossos pontos ou o <samp>Image Server</samp>. Segue imagem do erro em questão:</p>
            <p id='imagem39'></p>`
            },
            {
                "Titulo": "Formatação remota",
                "Conteudo": `
            <h3>Passo a passo</h3>
            <p>Utilizaremos o <samp>SCCM</samp> para colocar as estações nos itens de coleção. Coleções são um grupo de máquinas que estão condicionadas a um determinado evento na rede.</p>
            <p id='imagem12'></p>
            <p>Na janela que se abrir, nas coleções a direita, você poderá selecionar a coleção '<strong>Imagem Remota</strong>' e pressionar <kbd>OK</kbd>.</p>
            <p id='imagem13'></p>`
            },
            {
                "Titulo": "Máquinas do Parque",
                "Conteudo": `
            <h3>Máquinas do Parque</h3>
            <p>Aqui estão listadas as máquinas do parque tecnológico do MP. Seus nomes, os plugues que cada uma possui, e imagens para ilustração.</p>
            <!-- https://www.w3schools.com/howto/howto_js_lightbox.asp -->
            <table id='maquinas_parque' class='table table-striped table-bordered'></table>`
            },
            {
                "Titulo": "Monitores do Parque",
                "Conteudo": "<h3>Em construção</h3>"
            }
        ]
    };

    return json;

});