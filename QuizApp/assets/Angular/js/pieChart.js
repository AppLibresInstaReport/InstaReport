'use strict';

angular.module('mainApp.controllers')



.controller('pieChartCtrl', ['$scope', '$http', function($scope, $http) {
    var numero;
    var numero1;


    $scope.options = {
        chart: {
            type: 'pieChart',
            height: 500,
            x: function(d) {
                return d.key;
            },
            y: function(d) {
                return d.y;
            },
            showLabels: true,
            duration: 500,
            labelThreshold: 0.01,
            labelSunbeamLayout: true,
            legend: {
                margin: {
                    top: 5,
                    right: 35,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };


    $http({
        method: 'GET',
        url: 'https://dd3-siu.c9users.io/Usuarios?tipo=no'
    }).then(
        function exitoEnElGuardado(respuesta) {
            numero = respuesta.data.length;
            console.log('Guarde:' + numero);
            
            //$scope.listaUniversidades = respuesta.data;

            console.log('Entro al numero:' + numero);


            $http({
                method: 'GET',
                url: 'https://dd3-siu.c9users.io/Usuarios?tipo=registrado'
            }).then(
                function exitoEnElGuardado(respuesta) {
                    numero1 = respuesta.data.length;
                    console.log('Guarde:' + numero1);
                    //$scope.listaUniversidades = respuesta.data;

                    console.log('Entro al numero:' + numero1);

                    $scope.data = [{
                        key: "No Registrados",
                        y: numero
                    }, {
                        key: "Registrados",
                        y: numero1
                    }];


                },
                function falloEnElGuardado(error) {
                    console.log(error);
                });
        },
        function falloEnElGuardado(error) {
            console.log(error);
        });





}]);
