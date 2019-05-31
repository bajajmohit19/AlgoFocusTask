app.controller('registeruser',($scope, registerfactory,$window)=>{
        console.log("Controller called");
       

        $scope.user = {};
        $scope.inputData = ()=>{
            console.log("Userid is", $scope.user.userid,"and Password is", $scope.user.password);

            let promise = registerfactory.registerUser($scope.user);

            promise.then(data=>{
                console.log("PR data is", data);
                $scope.data = data
            },err=>{
                console.log("PR error is",err)
                $scope.err = err;
            })

        }

        $scope.doLogin=()=>{
                console.log("Userid is", $scope.user.userid, "and pwd is ", $scope.user.password);
                const promise = userFactory.loginUser($scope.user);
                promise.then(data=>{
                    if(data.data.status == 'S'){
                        $window.location.href = './dashboard.html'
                    }
                    else if(data.data.status == 'F'){
                        $scope.data = data;
                        
                        
                    }
                    console.log("PR data is", data);
                
                },err=>{
                    console.log("Err is", err);
                    $scope.err = err;
                })
        }
    })

    

        

        

//         console.log("Promise rec in controller");

//         promise.then(data=>{
//             $scope.obj_data = data.obj_data['firstname', 'lastname', 'password'];
//         },error=>{
//             console.log(error);
//             $scope.error = error;
//         })

//         console.log("Controller End");
// })


// $scope.inputData = (firstname, lastname,password)=>{
        //         var obj_data = {
        //             firstname : firstname,
        //             lastname: lastname,
        //             password : password
        //         }
        // }
