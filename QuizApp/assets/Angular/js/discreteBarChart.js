'use strict';

angular.module('mainApp.controllers')


.controller('discreteBarChartCtrl', ['$scope', '$http', function($scope, $http) {

    var numero;
    var numero1;
    var numero2;

    $scope.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin: {
                top: 20,
                right: 20,
                bottom: 50,
                left: 55
            },
            x: function(d) {
                return d.label;
            },
            y: function(d) {
                return d.value;
            },
            showValues: true,
            valueFormat: function(d) {
                return d3.format(',.4f')(d);
            },
            duration: 500,
            xAxis: {
                axisLabel: 'X Axis'
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: -10
            }
        }
    };



    $http({
        method: 'GET',
        url: 'https://dd3-siu.c9users.io/Pruebas?nombre=PruebaTeorica'
    }).then(
        function exitoEnElGuardado(respuesta) {
            numero = respuesta.data.length;
            console.log('Guarde:' + numero);
            //$scope.listaUniversidades = respuesta.data;

            console.log('Entro al numero:' + numero);


            $http({
                method: 'GET',
                url: 'https://dd3-siu.c9users.io/Pruebas?nombre=PruebaPractica'
            }).then(
                function exitoEnElGuardado(respuesta) {
                    numero1 = respuesta.data.length;
                    console.log('Guarde:' + numero1);
                    //$scope.listaUniversidades = respuesta.data;

                    console.log('Entro al numero:' + numero1);

                    $http({
                        method: 'GET',
                        url: 'https://dd3-siu.c9users.io/Pruebas?nombre=PruebaMixta'
                    }).then(
                        function exitoEnElGuardado(respuesta) {
                            numero2 = respuesta.data.length;
                            console.log('Guarde:' + numero2);
                            $scope.data = [{
                                key: "Cumulative Return",
                                values: [{
                                    "label": "Prueba Teorica",
                                    "value": numero
                                }, {
                                    "label": "Prueba Practica",
                                    "value": numero1
                                }, {
                                    "label": "Prueba Mixta",
                                    "value": numero2
                                }]
                            }]


                        },
                        function falloEnElGuardado(error) {
                            console.log(error);
                        });


                },
                function falloEnElGuardado(error) {
                    console.log(error);
                });
        },
        function falloEnElGuardado(error) {
            console.log(error);
        });




}]);
