describe('customers',function(){

	// Before each test load our app module
	beforeEach(angular.mock.module('app'));

	var $controller;

	
	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

	
	describe('toRadians',function(){
		it('checking toRadians function',function(){
			var $scope={};
			var $http={};
			var controller = $controller('AppCtrl',{$scope:$scope, $http:$http});
			var x = $scope.toRadians(1);
			expect(x).toBe(0.017);
		});
	});

	
	describe('getDistance',function(){
		it('checking getDistance function',function(){
			var $scope={};
			var $http={};
			var controller = $controller('AppCtrl',{$scope:$scope, $http:$http});
		
		});
	});

	
	describe('checking HTTP',function(){
		it('should demonstrate using when (200 status)', inject(function($httpBackend,$http) {

		  var $scope = {};
		  
		  $http.get('customers.txt')
		    .then(function success(response) {
		      $scope.show_table = true;
		      $scope.response = response.data.foo;		     
		    })
		    ,function error(data, status, headers, config) {
		      $scope.show_table = false;
		  };
	
		  $httpBackend
		    .when('GET', 'customers.txt')
		    .respond(200, { foo: "bar" });

		 expect($httpBackend.flush).not.toThrow();
		 expect($scope.show_table).toBe(true);
		 expect($scope.response).toEqual('bar');

		}));
	});

});
