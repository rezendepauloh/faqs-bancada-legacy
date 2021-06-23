define(

    function (require) {
        // Load any app-specific modules
        // with a relative require call,
        // like:
        //var messages = require('./messages');

        //const teste = require('./dados');
        //console.log(teste);

        jQuery(function () {


            

            require('bootstrap');
            //require('auxiliares');
            //require('./page');
            //setTimeout(console.log("Aguarde..."), 3000); 


            require('./modules/formatacao');
            require('./modules/instalacao');
            require('./modules/administrativo');
            require('./modules/plantao');
            require('./modules/utilitarios');


            require('./modules/predios');


        });

        // Load library/vendor modules using
        // full IDs, like:
        //var print = require('print');

        //print(messages.getHello());
    });


