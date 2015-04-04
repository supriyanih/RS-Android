angular.module('starter.controllers', ['pickadate'])


        .controller('PasienCtrl', ['$scope', '$stateParams', '$http', 'Pasien', '$state', '$ionicModal', function ($scope, $stateParams, $http, Pasien, $state, $ionicModal) {

                $scope.tampilData = function () {
                    Pasien.getAll().then(function (resp) {
                        $scope.pasien = resp.data;
                    }, function (err) {
                        console.error('ERR', err);
                    });

                };

                $scope.tampilData();
                $scope.dataPasien = {};

                // Create the login modal that we will use later
                $ionicModal.fromTemplateUrl('templates/modal-pasien.html', {
                    scope: $scope
                }).then(function (modal) {
                    $scope.modal = modal;
                });

                // Triggered in the login modal to close it
                $scope.close = function () {
                    $scope.modal.hide();
                    $scope.kosongdata();
                };

                $scope.modalPasien = function (action, pid, index) {
                    if (action === 'Tambah') {
                        $scope.modal.show();
                        $scope.action = action;
                    } else if (action === 'Edit') {
                        $scope.edit(pid, index);
                        $scope.action = action;
                    }
                };


                // Open the login modal
                $scope.edit = function (pid, index) {
                    $scope.modal.show();
                    $scope.dataPasien.pid = $scope.pasien[index]['pid'];
                    $scope.dataPasien.name_real = $scope.pasien[index]['name_real'];
                    $scope.dataPasien.address = $scope.pasien[index]['address'];
                    $scope.dataPasien.death = $scope.pasien[index]['death'];
                    $scope.dataPasien.phone = $scope.pasien[index]['phone'];
                    $scope.dataPasien.sex = $scope.pasien[index]['sex'];

                };


                $scope.save = function (action) {
                    if (action === 'Tambah') {
                        Pasien.create($scope.dataPasien).success(function (data) {
                            $scope.close();

                        });
                    }
                    else {

                        Pasien.edit($scope.dataPasien).success(function (data) {
                            $scope.close();

                        });
                    }
                };


                $scope.delete = function (pid) {
                    Pasien.delete(pid);
                    $state.go('app.pasien');

                };

                $scope.kosongdata = function () {
                    $scope.dataPasien.pid = '';
                    $scope.dataPasien.name_real = '';
                    $scope.dataPasien.address = '';
                    $scope.dataPasien.death = '';
                    $scope.dataPasien.phone = '';
                    $scope.dataPasien.sex = '';

                };
            }])

        .controller('DokterCtrl', ['$scope', '$stateParams', '$http', 'Dokter', '$state', '$ionicModal', function ($scope, $stateParams, $http, Dokter, $state, $ionicModal) {

                $scope.tampilData = function () {
                    Dokter.getAll().then(function (resp) {
                        $scope.dokter = resp.data;
                    }, function (err) {
                        console.error('ERR', err);
                    });

                };

                $scope.tampilData();
                $scope.dataDokter = {};

                // Create the login modal that we will use later
                $ionicModal.fromTemplateUrl('templates/modal-dokter.html', {
                    scope: $scope
                }).then(function (modal) {
                    $scope.modal = modal;
                });

                // Triggered in the login modal to close it
                $scope.close = function () {
                    $scope.modal.hide();
                    $scope.kosongdata();
                };

                $scope.modalDokter = function (action, did, index) {
                    if (action === 'Tambah') {
                        $scope.modal.show();
                        $scope.action = action;
                    } else if (action === 'Edit') {
                        $scope.edit(did, index);
                        $scope.action = action;
                    }
                };


                // Open the login modal
                $scope.edit = function (did, index) {
                    $scope.modal.show();
                    $scope.dataDokter.did = $scope.dokter[index]['did'];
                    $scope.dataDokter.nama = $scope.dokter[index]['nama'];
                    $scope.dataDokter.spesialis = $scope.dokter[index]['spesialis'];
                    $scope.dataDokter.alamat = $scope.dokter[index]['alamat'];
                    $scope.dataDokter.phone = $scope.dokter[index]['phone'];


                };


                $scope.save = function (action) {
                    if (action === 'Tambah') {
                        Dokter.create($scope.dataDokter).success(function (data) {
                            $scope.close();

                        });
                    }
                    else {

                        Dokter.edit($scope.dataDokter).success(function (data) {
                            $scope.close();

                        });
                    }
                };


                $scope.delete = function (pid) {
                    Dokter.delete(pid);


                };

                $scope.kosongdata = function () {
                    $scope.dataDokter.did = '';
                    $scope.dataDokter.nama = '';
                    $scope.dataDokter.spesialis = '';
                    $scope.dataDokter.alamat = '';
                    $scope.dataDokter.phone = '';


                };
            }])

        .controller('RegCtrl', ['$scope', '$stateParams', '$http', 'Reg', 'Dokter', 'Pasien', '$state', '$ionicModal', function ($scope, $stateParams, $http, Reg, Dokter, Pasien, $state, $ionicModal) {

                $scope.tampilData = function () {
                    Reg.getAll().then(function (resp) {
                        $scope.reg = resp.data;
                    }, function (err) {
                        console.error('ERR', err);
                    });

                };

                $scope.tampilDokter = function () {
                    Dokter.getAll().then(function (resp) {
                        $scope.dokter = resp.data;
                    }, function (err) {
                        console.error('ERR', err);
                    });

                };
                $scope.tampilPasien = function () {
                    Pasien.getAll().then(function (resp) {
                        $scope.pasien = resp.data;
                    }, function (err) {
                        console.error('ERR', err);
                    });

                };

                $scope.tampilData();
                $scope.tampilDokter();
                $scope.tampilPasien();

                $scope.dataReg = {};


                // Create the reg modal that we will use later
                $ionicModal.fromTemplateUrl('templates/modal-reg.html', {
                    scope: $scope
                }).then(function (modal) {
                    $scope.modal = modal;
                });

                // Triggered in the login modal to close it
                $scope.close = function () {
                    $scope.modal.hide();
                    $scope.kosongdata();
                };


                $ionicModal.fromTemplateUrl('templates/datemodal.html',
                        function (modal) {
                            $scope.datemodal = modal;
                        },
                        {
                            // Use our scope for the scope of the modal to keep it simple
                            scope: $scope,
                            // The animation we want to use for the modal entrance
                            animation: 'slide-in-up'
                        }
                );
                $scope.opendateModal = function () {
                    $scope.datemodal.show();
                };
                $scope.closedateModal = function (modal) {
                    $scope.datemodal.hide();
                    $scope.dataReg.tanggal_reg = modal;
                };
                $scope.closedate = function (modal) {
                    $scope.datemodal.hide();
                    
                };




                $scope.modalReg = function (action, pid, index) {
                    if (action === 'Tambah') {
                        $scope.modal.show();
                        $scope.action = action;
                    } else if (action === 'Edit') {
                        $scope.edit(pid, index);
                        $scope.action = action;
                    }
                };


                // Open the edit  modal
                $scope.edit = function (pid, index) {
                    $scope.modal.show();
                    $scope.dataReg.regpid = $scope.reg[index]['regpid'];
                    $scope.dataReg.tanggal_reg = $scope.reg[index]['tanggal_reg'];
                    $scope.dataReg.id_dokter = $scope.reg[index]['id_dokter'];
                    $scope.dataReg.bayar = $scope.reg[index]['bayar'];
                    $scope.dataReg.id_pasien = $scope.reg[index]['id_pasien'];
                    $scope.dataReg.selesai = $scope.reg[index]['selesai'];

                };


                $scope.save = function (action) {
                    if (action === 'Tambah') {
                        Reg.create($scope.dataReg).success(function (data) {
                            $scope.close();

                        });
                    }
                    else {

                        Reg.edit($scope.dataReg).success(function (data) {
                            $scope.close();

                        });
                    }
                };


                $scope.delete = function (pid) {
                    Reg.delete(pid);
                    $state.go('app.reg');

                };

                $scope.kosongdata = function () {
                    $scope.dataReg.regpid = '';
                    $scope.dataReg.tanggal_reg = '';
                    $scope.dataReg.id_dokter = '';
                    $scope.dataReg.bayar = '';
                    $scope.dataReg.id_pasien = '';
                    $scope.dataReg.selesai = '';

                };
            }])
        
                .controller('Home',['$state','$scope', function ($state,$scope){
                    
            }]);


