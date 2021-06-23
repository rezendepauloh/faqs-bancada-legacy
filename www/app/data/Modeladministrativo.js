define(function () {

    const json = {

        administrativo: [
            {
                "Titulo": "Abertura de chamado no OTRS ao Transporte para envio de material",
                "Conteudo": `
            <h3>Abertura do novo chamado</h3>
            <p>Clique no ícone do Telefone no OTRS para abertura de novo chamado.</p>
            <p id='imagem14'></p>
            <h3>Campo 'Tipo'</h3>
            <p>O campo <samp>Tipo:</samp> é para ser preenchido com <var>SEAD</var>.</p>
            <p id='imagem15'></p>
            <h3>Campo 'Cliente'</h3>
            <p>O campo <samp>Usuário cliente:</samp> é para ser colocado o <var>manutencao</var>, o segundo da imagem abaixo.</p>
            <p id='imagem16'></p>
            <h3>O campo 'Fila'</h3>
            <p>O campo <samp>Para a fila:</samp> pode colocar a fila <var>Transporte</var>, que fica abaixo de <var>Secretaria-Geral</var> e <var>SEAD</var>.</p>
            <p id='imagem17'></p>
            <h3>O Campo 'Serviço'</h3>
            <p>O campo <samp>Serviço:</samp>, que agora está habilitado, devemos colocar: <em>'Solicitação de Transporte da STI'</em>.</p>
            <p id='imagem18'></p>
            <h3>O Campo 'Acordo nível de serviço'</h3>
            <p>O campo <samp>Acordo nível de serviço:</samp> é habilitado e depende do serviço que será feito, como o documento não é criado se esse campo não for preenchido e, é só clicar nele e selecionar a única opção.</p>
            <p id='imagem19'></p>
            <h3>O campo 'Assunto'</h3>
            <p>O campo <samp>Assunto:</samp> podemos colocar o Assunto do conteúdo, geralmente colocamos a <var>tag</var> [TRANSPORTE] seguido para onde será transportado.</p>
            <p id='imagem20'></p>
            <h3>O campo 'Texto'</h3>
            <p>O campo <samp>Texto:</samp> é para ser preenchido com os detalhes do pedido. Como é o transporte, podemos colocar o que será transportado, para onde e que horas o transporte será feito.</p>
            <p id='imagem21'></p>
            <h3>Finalização</h3>
            <p>Depois, clique no botão <kbd>Criar</kbd>, lá embaixo e o chamado estará criado.</p>
            <p id='imagem22'></p>
            <p>Após, a página é redirecionada para o chamado criado, já com seu número, conforme a imagem abaixo.</p>
            <p id='imagem23'></p>`
            },
            {
                "Titulo": "Gmail da Bancada",
                "Conteudo": `
            <h3>Dados do Gmail</h3>
            <p>O Gmail da bancada, para adição ao celular funcional, é esse:</p>
            <ul>
              <li>Email: <strong>bancadampms@gmail.com</strong></li>
              <li>Senha: <strong>MPMS.0000</strong></li>
            </ul>`
            },
            {
                "Titulo": "Processo de Viagem - Diária",
                "Conteudo": `
            <h3>Pedido de diária</h3>
            <p>Sempre que uma demanda de viagem aparecer, é necessário fazer o pedido de diária para ajuda de custo. Para isso, basta entrar no Portal de Serviços, em Solicitações, Diárias. Nessa página, basta clicar no botão <samp>Solicitar</samp>.</p>
            <p id='imagem29'></p>
            <h3>Solicitação da diária de viagem</h3>
            <p>No primeiro campo, <samp>Dados Servidor</samp>, não há nada para preencher, basta clicar no botão <kbd>Próximo</kbd> embaixo.</p>
            <p id='imagem30'></p>
            <p>Na próxima página, <samp>Diárias</samp>, basta clicar no botão <kbd>Inserir</kbd>.</p>
            <p id='imagem31'></p>
            <p>Nessa página, serão preenchidas vários formulários. Os primeiros são Origem e Destino, que é a origem (normalmente <strong>Campo Grande</strong>) e o destino, que é para onde será feita a viagem. Clicando na lupa ao lado, irá abrir um menu modal onde poderá selecionar a cidade com mais facilidade, tanto em Origem quanto Destino. Preenchendo esses campos, o <em>textarea</em> abaixo irá ser preenchido automaticamente.</p>
            <p id='imagem32'></p>
            <p>Mais abaixo, teremos os campos <samp>Partida: *</samp> e <samp>Retorno: *</samp> onde serão preenchidos a data e hora de partida e retorno respectivamente. Após sua inserção, o campo <samp>Quantidade de Diárias</samp> será preenchido automaticamente. Mais embaixo temos o textarea <samp>Motivo da Viagem: *</samp>, e aqui podemos preencher com os detalhes da viagem, bem como os chamados que serão atendidos.</p>
            <p id='imagem33'></p>
            <p>O Meio de Transporte possuirá alguns seletores dropdown que, a medida que você for escolhendo, ele abrirá novos Selects. Geralmente viajamos com veículo oficial e acompanhado de um colega terceirizado e o motorista, a imagem abaixo ilustra um modelo a ser preenchido. Depois disso, basta clicar em <kbd>Salvar</kbd>.</p>
            <p id='imagem34'></p>
            <h3>Finalização do pedido de diária</h3>
            <p>Agora teremos as Solicitações preenchidas, basta clicar em <kbd>Próximo</kbd>.</p>
            <p id='imagem35'></p>
            <p>Nesse último campo, é um resumo do pedido, basta pressionar <kbd>Próximo</kbd>.</p>
            <p id='imagem36'></p>
            <p>E finalizamos o pedido de diária. Agora ele fará o trâmite padrão de aprovação da chefia e outros.</p>
            <p id='imagem37'></p>
            <p>Segue o vídeo abaixo mostrando o processo de pedido de diária:</p>
            <p id='video2'></p>
            <h3>Pedido de diárias dos colegas da Orbenk</h3>
            <p>Geralmente um colega da Orbenk viaja conosco. O pedido de diária deles é feito por nós. Para isso, fazemos o seguinte:</p>
            <p>Mandamos um email para a Kelli (<a href='mailto:kellioliveira@mpms.mp.br'>kellioliveira@mpms.mp.br</a>), com cópia para Heron (<a href='mailto:heronsilva@mpms.mp.br'>heronsilva@mpms.mp.br</a>), Myrian (<a href='mailto:myriansilva@mpms.mp.br'>myriansilva@mpms.mp.br</a>) e Diego (<a href='mailto:diegoferreira@mpms.mp.br'>diegoferreira@mpms.mp.br</a>).</p>
            <p>O título geralmente é: <strong>Diária do Terceirizado Orbenk Celso Ocampos Duarte - Nova Andradina</strong></p>
            <p>O modelo do corpo geralmente é esse:</p>
            <blockquote class='blockquote'>
              <p class='mb-0'>Boa tarde Kelli.</p>
              <p class='mb-0'>Venho através deste para solicitar as diárias do Terceirizado <strong>Celso Ocampos Duarte</strong> referente aos dias <strong>24 e 25</strong> de <strong>Maio</strong>, onde será realizado mudanças no layout e adições de estações de trabalho na promotoria de <strong>Nova Andradina</strong>, conforme os chamados <strong>#46214896, #46219393 e #46218588</strong>.</p>
              <p class='mb-0'>Partida: <strong>24/05 - 08h00</strong>.</p>
              <p class='mb-0'>Retorno: <strong>25/05 - 19:00</strong>.</p>
            </blockquote>
            <p id='imagem38'></p>`
            },
            {
                "Titulo": "Processo de Viagem - Prestação de contas",
                "Conteudo": `
            <h3>Prestação de contas</h3>
            <p>Após a realização das atividades da viagem e retorno, é preciso realizar o procedimento de Prestação de contas da viagem, ou seja, relatar tudo o que fora executado nela afim de registros.</p>
            <p>Vamos detalhar o passo a passo de como proceder na realização dessa atividade.</p>
            <h3>Clicando no botão de 3 riscos</h3>
            <p>Na página de <samp>Solicitações de diárias Servidor</samp> (conforme imagem abaixo), basta clicar no botão com os 3 riscos, no processo de sua viagem.</p>
            <p id='imagem24'></p>
            <p>Clicando nele, aparecerá um menu suspenso com várias informações, basta escolher a opção <samp>Prestação de contas</samp>, normalmente a última opção. Caso essa opção não esteja aparecendo, é sinal que o processo ainda não voltou para você poder realizar essa tarefa, nesse caso é só aguardar.</p>
            <p id='imagem25'></p>
            <h3>Solicitações/Períodos</h3>
            <p>A página é bem simples, na página que foi redirecionada, podemos clicar no ícone de lápis, onde está o título <samp>Solicitações/Períodos</samp>, ao lado da Data da Partida.</p>
            <p id='imagem26'></p>
            <p>Aqui, basta rolar para baixo e ver o campo <samp>Serviços Executados</samp> e preencher com o que foi executado na viagem. Geralmente preenchemos com os dados de patrimônio instalados e retirados, ou "auxílio de mudança conforme chamado X". O campo <samp>Placa do veículo</samp> e <samp>Observações</samp> são opcionais. Após as adições, clique no botão <kbd>Salvar</kbd> logo abaixo.</p>
            <p id='imagem27'></p>
            <h3>Finalização da prestação de contas</h3>
            <p>A página será redirecionada novamente para o <samp>Solicitações/Períodos</samp>, que agora se encontrará verde.</p>
            <p id='imagem28'></p>
            <p>Agora basta clicar no botão <kbd>Confirmar</kbd> que o processo estará finalizado.</p>
            <p>Segue abaixo um vídeo de como proceder na prestação de contas, no Portal de Serviços:</p>
            <p id='video1'></p>
            <h3>Prestação de contas dos colegas da Orbenk</h3>
            <p>Em construção</p>`
            },
            {
                "Titulo": "Padronização de TAGS do OTRS",
                "Conteudo": `
            <p>Para fins de organização e estruturação de dados dentro do <samp>OTRS</samp>, pensamos em desenvolver um formato de dados que facilita o acesso ao chamado e, ao mesmo tempo, facilite a sua consulta para posterior análise e trabalho com os dados do banco do <samp>OTRS</samp>. Para isso, pensamos, em todo título de chamado, atribuí-lo a uma <kbd>TAG</kbd> entre colchetes para identificação da localidade onde será atendida. Segue uma lista dessa padronização:</p>
            <table id='padronizacao_tags' class='table table-striped table-bordered' style='width:100%'></table>
            <p>As <kbd>TAGS</kbd> também podem ser combinadas, ou seja, em um chamado de viagem, podemos colocar, por exemplo: <strong>[PJ NAVIRAÍ] [VIAGEM] [10 e 11/03]</strong>.</p>`
            },
            {
                "Titulo": "Guia de Remessa",
                "Conteudo": `
            <p>Segue o Guia de remessa que é utilizado para envio de equipamentos ao DMP. Geralmente é encaminhado com duas cópias, uma para a devolução a nós e outra fica com o destinatário.</p>
            <p><a href='download/guia-de-remessa.docx' download>Baixe aqui</a></p>
            <h3>Formato do documento</h3>
            <p>Ele é um documento de texto que possui alguns campos:</p>
            <ol>
              <li><strong>Remetente:</strong> Geralmente é STI/Manutenção;</li>
              <li><strong>Data da emissão:</strong> A data que os equipamentos e o documento serão enviados;</li>
              <li><strong>Itens enviados:</strong> Os patrimônios que estão sendo encaminhados;</li>
              <li><strong>Destinatário:</strong> Para quem está se enviando, geralmente é ao Departamento de Material e Patrimônio (DMP);</li>
              <li><strong>Recebido por:</strong> Campo do destinatário, ele irá preencher com seu nome, a data e sua assinatura.</li>
            </ol>`
            }
        ]
    };

    return json;

});