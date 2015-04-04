angular.module('starter.services',[])
 .factory('Pasien',['$http',function($http){
    return {
        getAll:function(){
            return $http.get('http://yann-sariasih.wc.lt/index.php/pasien',{
                
            });
        },
        get:function(id){
            return $http.get('http://yann-sariasih.wc.lt/index.php/getbyid/'+id,{
                
            });
        },
        create:function(data){
            return $http.post('http://yann-sariasih.wc.lt/index.php/tambah',data,{
                headers:{
                    
                    'Content-Type':'application/json'
                }
            });
        },
        edit:function(data){
            return $http.post('hhttp://yann-sariasih.wc.lt/index.php/pasien/update',data);
        },
        delete:function(id){
            return $http.delete('http://yann-sariasih.wc.lt/index.php/pasien/hapus/'+id);
        }
    };
}])
.factory('Reg',['$http',function($http){
    return {
        getAll:function(){
            return $http.get('http://yann-sariasih.wc.lt/index.php/reg',{
                
            });
        },
        get:function(id){
            return $http.get('http://yann-sariasih.wc.lt/index.php/reg/getbyid/'+id,{
                
            });
        },
        create:function(data){
            return $http.post('http://yann-sariasih.wc.lt/index.php/reg/tambah',data,{
                headers:{
                    
                    'Content-Type':'application/json'
                }
            });
        },
        edit:function(data){
            return $http.post('http://yann-sariasih.wc.lt/index.php/reg/update',data);
        },
        delete:function(id){
            return $http.delete('http://yann-sariasih.wc.lt/index.php/reg/hapus/'+id);
        }
    };
}])
.factory('Dokter',['$http',function($http){
    return {
        getAll:function(){
            return $http.get('http://yann-sariasih.wc.lt/index.php/dokter',{
                
            });
        },
        get:function(id){
            return $http.get('http://yann-sariasih.wc.lt/index.php/dokter/getbyid/'+id,{
                
            });
        },
        create:function(data){
            return $http.post('http://yann-sariasih.wc.lt/index.php/dokter/tambah',data,{
                headers:{
                    
                    'Content-Type':'application/json'
                }
            });
        },
        edit:function(data){
            return $http.post('http://yann-sariasih.wc.lt/index.php/dokter/update',data);
        },
        delete:function(id){
            return $http.delete('http://yann-sariasih.wc.lt/index.php/dokter/hapus/'+id);
        }
    };
}]);