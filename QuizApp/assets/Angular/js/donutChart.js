'use strict';

angular.module('mainApp.controllers')


.controller('donutChartCtrl', ['$scope', '$http', function($scope, $http) {

    var numero;
    var numero1;
    var numero2;
    var numero3;

    $scope.options = {
        chart: {
            type: 'pieChart',
            height: 450,
            donut: true,
            x: function(d) {
                return d.key;
            },
            y: function(d) {
                return d.y;
            },
            showLabels: true,

            pie: {
                startAngle: function(d) {
                    return d.startAngle / 2 - Math.PI / 2
                },
                endAngle: function(d) {
                    return d.endAngle / 2 - Math.PI / 2
                }
            },
            duration: 500,
            legend: {
                margin: {
                    top: 5,
                    right: 140,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };




    $http({
        method: 'GET',
        url: 'https://dd3-siu.c9users.io/Pruebas?materia=Programaci%C3%B3n'
    }).then(
        function exitoEnElGuardado(respuesta) {
            numero = respuesta.data.length;
            console.log('Guarde:' + numero);
            //$scope.listaUniversidades = respuesta.data;

            console.log('Entro al numero:' + numero);


            $http({
                method: 'GET',
                url: 'https://dd3-siu.c9users.io/Pruebas?materia=Calidad%20de%20Software'
            }).then(
                function exitoEnElGuardado(respuesta) {
                    numero1 = respuesta.data.length;
                    console.log('Guarde:' + numero1);
                    //$scope.listaUniversidades = respuesta.data;

                    console.log('Entro al numero:' + numero1);

                    $http({
                        method: 'GET',
                        url: 'https://dd3-siu.c9users.io/Pruebas?materia=Aplicaciones%20Web'
                    }).then(
                        function exitoEnElGuardado(respuesta) {
                            numero2 = respuesta.data.length;
                            console.log('Guarde:' + numero2);
                            $http({
                                method: 'GET',
                                url: 'https://dd3-siu.c9users.io/Pruebas?materia=Desarrollo%20de%20Software'
                            }).then(
                                function exitoEnElGuardado(respuesta) {
                                    numero3 = respuesta.data.length;
                                    console.log('Guarde:' + numero3);
                                    $scope.data = [{
                                        key: "Programación",
                                        y: numero
                                    }, {
                                        key: "Calidad de Software",
                                        y: numero1
                                    }, {
                                        key: "Aplicaciones Web",
                                        y: numero2
                                    }, {
                                        key: "Desarrollo de Software",
                                        y: numero3
                                    }];

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
        },
        function falloEnElGuardado(error) {
            console.log(error);
        });



}]);