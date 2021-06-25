'use strict';
const sql = require('mssql')

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=localhost,1433;Database=database;User Id=username;Password=password;Encrypt=true')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}

connection.on('connect', function(err) {
    // If no error, then good to proceed.
    // console.log("Connected");
});

connection.connect();
angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])
    .$controller('MyFormController',['$scope',function (scope){
        scope.add = function(field){

        };
    }]);