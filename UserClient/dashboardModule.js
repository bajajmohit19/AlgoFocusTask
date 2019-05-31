const dashboardModule = angular.module('dashboard',['userapp']);

dashboardModule.run(($http,$q)=>{
    console.log('Run Called.... ',$http, ' ',$q);
})