define(function () {

    const json = {
        instalacao: [
            {
                "Titulo": "Instalação do Velti",
                "Conteudo": `
            <h3>Introdução</h3>
            <p>O “Navegador Velti” permite a execução dos sistemas <u>vwponto</u> e/ou <u>vwacesso</u>. Este programa foi desenvolvido exclusivamente para permitir o acesso a esses sistemas. Este programa é um navegador web simplificado o qual permite aos usuários acessarem os sistemas <u>vwponto</u> e/ou <u>vwacesso</u>, ambos desenvolvidos utilizando a tecnologia Flash da Adobe em sua camada de apresentação (front-end).</p> 
            <p><strong>Importante</strong>. O “Navegador Velti” deve ser instalado em todas as máquinas dos usuários que acessam os sistemas vwponto e/ou vwacesso.</p> 
            <h3>Pré-Requisitos</h3>
            <p>Os pré-requisitos para executar o programa <strong>“NavegadorVelti.exe”</strong> são:</p> 
            <ul>
              <li>Sistema Operacional Windows 7 ou superior (x86 / x64)</li>
              <li>Microsoft Framework .NET 4.5.2 ou superior</li>
              <li>Adobe Flash Player</li>
              <li>Visual C++ Redistributable Package (x86 / x64)</li>
            </ul>
            <p>Os instaladores dos pré-requisitos citados acima podem ser baixados pelos seguintes links:</p>
            <p><a href='http://www.velti.com.br/downloads/navegadorvelti/Framework_.NET_Runtime_4.5.2_EN.exe' target='_blank'>MS Framework .NET 4.5.2 (x86 / x64)</a></p>
            <p><a href='http://www.velti.com.br/downloads/navegadorvelti/flashplayer_Install.exe' target='_blank'>Adobe Flash Player (x86 / x64)</a></p>
            <p><a href="http://www.velti.com.br/downloads/navegadorvelti/Visual_C++_Redistributable_Packages_x64.exe"target="_blank">Visual C++ Redistributable Package (x64)</a></p>
            <p><a href=" http://www.velti.com.br/downloads/navegadorvelti/Visual_C++_Redistributable_Packages_x86.exe"target="_blank">Visual C++ Redistributable Package (x86)</a></p>
            <p><strong>Importante.</strong> Realize a instalação dos pré-requisitos utilizando um usuário Administrador da máquina.</p>
            <h3>Instalação</h3>
            <p>O programa <samp>“Navegador Velti”</samp> possui um instalador para facilitar a instalação no computador. Para iniciar a instalação execute o arquivo <samp>“NavegadorVelti_xAA_Install.exe”</samp> e siga os passos do instalador conforme mostrado nas imagens abaixo.</p>
            <p><strong>Obs.</strong> “AA” corresponde a arquitetura da máquina onde o Navegador será instalado: 32 bits (x86) ou 64 bits (x64).</p>
            <p>O arquivo <samp>“NavegadorVelti_x64_Install.exe”</samp> para máquinas de 64 bits pode ser baixado a partir do link:</p>
            <p><a href="http://www.velti.com.br/downloads/navegadorvelti/NavegadorVelti_x64_Install.exe" target="_blank">http://www.velti.com.br/downloads/navegadorvelti/NavegadorVelti_x64_Install.exe</a></p>
            <p>O arquivo <samp>“NavegadorVelti_x86_Install.exe”</samp> para máquinas de 32 bits pode ser baixado a partir do link:</p>
            <p><a href="http://www.velti.com.br/downloads/navegadorvelti/NavegadorVelti_x86_Install.exe" target="_blank">http://www.velti.com.br/downloads/navegadorvelti/NavegadorVelti_x86_Install.exe</a></p>
            <p><strong>Nota.</strong> O instalador solicita permissão de Administrador para ser executado.</p>
            <p id="imagem40"></p>
            <p>Mantenha todas as opções mostradas na imagem 1 selecionadas para que o instalador crie o atalho para acesso ao programa Navegador Velti tanto na área de trabalho do Windows quanto dentro do menu Iniciar.</p>
            <p>Clique no botão <kbd>Próximo</kbd>.</p>
            <p id="imagem41"></p>
            <p>Escolha o diretório de destino para a instalação do programa Navegador Velti. Por padrão o programa será instalado no diretório <strong>C:\\Velti\\NavegadorVelti\\</strong>.</p>
            <p>Clique no botão <kbd>Instalar</kbd>.</p>
            <p id="imagem42"></p>
            <p>Ao finalizar o processo de instalação do programa Navegador Velti, basta clicar no botão <kbd>Fechar</kbd>.</p>
            <p>Para abrir o Navegador Velti basta clicar no link <samp>“NavegadorVelti”</samp> criado na área de trabalho do Windows.</p>
            <p>Nota. Caso ocorra algum erro ao executar (abrir) o arquivo <samp>“Navegador Velti”</samp>, verifique se os pré-requisitos foram instalados na máquina, lembrando que este programa roda apenas em sistemas operacionais Windows (x64).</p>
            <h3>Configuração</h3>
            <p>Ao executar pela primeira vez o programa <samp>“Navegador Velti”</samp> será mostrado a janela <samp>“Configuração Inicial”</samp> para que o usuário possa informar o endereço (site / url) de acesso ao <u>vwponto</u> e/ou <u>vwacesso</u>, além de poder definir o sistema padrão a ser aberto pelo navegador para os casos onde os dois sistemas serão utilizados a partir deste programa. Ainda nesta janela o usuário deverá informar o endereço (url) do serviço de licença * (próxima imagem).</p>
            <p id="imagem43"></p>
            <p><strong>Obs.</strong> Os endereços presentes na imagem acima são meramente ilustrativos.</p>
            <p><strong>*</strong> Para entender o que é e como funciona o serviço de licença leia a sessão <samp>“Serviço de Licença”</samp> deste documento.</p>
            <p><strong>Nota.</strong> Informe sempre o endereço completo de acesso aos sistemas, inclusive o <samp>http://</samp> ou <samp>https://</samp>.</p>
            <p>Ao clicar no botão <kbd>Abrir</kbd> a tela principal do <samp>“Navegador Velti”</samp> é aberta carregando o sistema selecionado como padrão (próxima imagem).</p>
            <p><strong>Obs.</strong> A opção <samp>“Padrão”</samp> só é habilitada nos casos em que o navegador será utilizado para acesso a ambos os sistemas.</p>
            <p id="imagem44"></p>
            <p>O <samp>“Navegador Velti”</samp> possui um menu <kbd>Arquivo</kbd> localizado no lado direito superior da janela principal que permite ao usuário realizar algumas ações, entre elas:</p>
            <ol>
            <li>Alternar entre os sistemas <u>vwponto</u> e <u>vwacesso</u></li>
            <li>Trocar o sistema padrão a ser aberto ao iniciar o <samp>“Navegador Velti”</samp></li>
            <li>Realizar a limpeza do cache do <samp>“Navegador Velti”</samp> e recarregar o sistema aberto</li>
            <li>Acessar a tela de Configuração</li>
            <li>Acessar a tela de Licença</li>
            <li>Sair</li>
            </ol>
            <p>Na imagem abaixo podemos visualizar as opções disponíveis no menu <kbd>Arquivo</kbd>.</p>
            <p id="imagem45"></p>
            <p><strong>Nota.</strong> As opções de menu para alternar entre os sistemas <u>vwponto</u> e <u>vwacesso</u>, além da opção de trocar o sistema padrão só aparecem para os casos em que o usuário informa o endereço de acesso de ambos os sistemas.</p>
            <h3>Sobre o Adobe Flash Player</h3>
            <p>Ao abrir o <samp>“Navegador Velti”</samp> caso apareça a mensagem mostrada na imagem abaixo, será necessário instalar o plugin do Flash para que o sistema <u>vwponto</u> e/ou <u>vwacesso</u> possa ser carregado. Este plugin é um dos pré-requisitos para o funcionamento do programa.</p>
            <p id="imagem46"></p>
            <p>Para instalar o Plugin do Flash execute o arquivo <samp>“flashplayer_Install.exe”</samp> (Imagem abaixo)</p>
            <p><strong>Obs.</strong> Feche o <samp>“Navegador Velti”</samp> antes de realizar a instalação do Flash.</p>
            <p id="imagem47"></p>
            <p>Ao abrir a tela inicial do Instalador do Flash aceite os termos do contrato de licença e clique no botão <kbd>Instalar</kbd> (imagem abaixo).</p>
            <p id="imagem48"></p>
            <p>Ao finalizar a instalação do Flash marque a opção “Nunca verificar atualizações (não recomendado)” e clique no botão <kbd>Concluído</kbd> (imagem abaixo).</p>
            <p id="imagem49"></p>
            <p>A instalação do Plugin do Flash aparecerá no Windows (Programas e Recursos) conforme mostra a imagem abaixo.</p>
            <p id="imagem50"></p>
            <p>Pronto!!! O <samp>“Navegador Velti”</samp> está pronto para ser utilizado para acesso ao <u>vwponto</u> e/ou <u>vwacesso</u>.</p>
            <h3>Serviço de Licença</h3>
            <p>Para que o programa <samp>“Navegador Velti”</samp> possa ser utilizado é necessário aplicar um arquivo de licença o qual fica armazenado no servidor. Este servidor pode ser o mesmo do <u>vwponto</u> e/ou <u>vwacesso</u>, por exemplo.</p>
            <p><strong>Importante.</strong> O <samp>“Navegador Velti”</samp> <strong><u>não precisa</u></strong> ser instalado no servidor e sim apenas a aplicação <samp>“navegadorvelti.war”</samp> e o arquivo de licença (<samp>“licenca_navegadorvelti.lic”</samp>).</p>
            <p>O controle e validação do arquivo de licença é feito por uma aplicação Java (arquivo <samp>“navegadorvelti.war”</samp>) a qual deve ser colocada para rodar no Tomcat (pasta /webapps/).</p>
            <p>Pré-Requisitos para rodar a aplicação <samp>“navegadorvelti.war”</samp>:</p>
            <ol>
            <li>Java 7 ou superior</li>
            <li>Tomcat 7 ou superior</li>
            </ol>
            <p>O arquivo <samp>“navegadorvelti.war”</samp> pode ser baixado a partir do link:</p>
            <p><a href="http://www.velti.com.br/downloads/navegadorvelti/navegadorvelti.war" target="_blank">http://www.velti.com.br/downloads/navegadorvelti/navegadorvelti.war</a></p>
            <p><strong>Importante.</strong> O arquivo <samp>“navegadorvelti.war”</samp> foi implementado para rodar no Tomcat 7 ou superior e com Java 7 ou superior. O arquivo <samp>“navegadorvelti.war”</samp> pode ser colocado no mesmo tomcat onde encontra-se o <u>vwponto</u> e/ou <u>vwacesso</u> no cliente.</p>
            <p>O arquivo de licença para validação do Navegador Velti é gerado pelo vwlicenca. A geração deste arquivo é realizada pela equipe comercial da Velti.</p>
            <p><strong>Nota.</strong> Para maiores informações verifique o documento <samp>“Navegador Velti – Gerando o arquivo de Licença”</samp>.</p>
            <p>O arquivo de licença gerado (.lic) deve ter, obrigatoriamente, o nome <samp>“licenca_navegadorvelti.lic”</samp>. Este arquivo <samp>“licenca_navegadorvelti.lic”</samp> deve ser copiado para a seguinte pasta:</p>
            <ol>
            <li>Se o servidor onde está rodando o tomcat for Windows: C:\\Velti\\conf\\ ou D:\\Velti\\conf\\</li>
            <li>Se o servidor onde está rodando o tomcat for Linux: /usr/share/velti/conf/</li>
            </ol>
            <p><strong>Nota.</strong> Caso o arquivo .lic recebido contenha outro nome, basta renomeá-lo para <samp>“licenca_navegadorvelti.lic”</samp> antes de copiá-lo para o diretório ../conf/</p>
            <p><strong>Importante.</strong> A aplicação <samp>“navegadorvelti.war”</samp> gera um arquivo de log chamado <samp>“navegadorvelti.log”</samp> dentro da pasta "../conf/". Em caso de problemas na validação da licença este arquivo de log pode ajudar na identificação da causa.</p>
            <p><strong>Dica.</strong> Para verificar qual a versão do serviço de licença (<samp>navegadorvelti.war</samp>) instalado, basta, após executar pelo menos uma vez o Navegador Velti, abrir o arquivo de log <samp>“navegadorvelti.log”</samp>. A primeira linha deste arquivo traz a versão do serviço de licença que está rodando no servidor.</p>`
            },
            {
                "Titulo": "Teste",
                "Conteudo": "ss"
            }
        ]
    };

    return json;

});