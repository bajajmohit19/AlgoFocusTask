app.factory('registerfactory',($http, $q, REGISTER_USER, LOGIN_USER)=>{
    console.log("Factory called");

    return {
        registerUser(obj_data){
                console.log("Inside register factory function");
                let defer = $q.defer();


                $http.post(REGISTER_USER, obj_data)
                .then((data)=>{
                        console.log("Data is", data);
                        defer.resolve(data);
                },(error)=>{
                    console.log("Error is", data);
                    defer.reject(error);
                })

                console.log("Return promise");
                return defer.promise;
        },
            loginUser(obj_data){
                var defer = $q.defer;
                $http.post(LOGIN_USER, obj_data).then((data)=>{
                    console.log("DATA IS", data);
                    defer.resolve(data);
                }, (err)=>{
                    console.log(data);
                    defer.reject(err);
                })
                return defer.promise;
            }        
    }

})