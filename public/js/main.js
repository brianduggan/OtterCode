var app = angular.module('OtterApp', []);

app.controller('PostsController', ['$scope', '$http', function($scope, $http){

  $scope.posts = []
  $scope.changePost = {}
  $scope.update = 0;

  $scope.allPosts = function(){
    $http.get('/posts').then(function(response){
      $scope.posts = response.data.posts;
    })
  }

  $scope.updateButton = function(id, post){

    $scope.changePost = angular.copy(post);

    if ($scope.update !== id){
      $scope.update = id;
    } else {
      $scope.update = 0;
    }
  }

  $scope.createPost = function(){
    var post = {post: $scope.newPost};
    console.log(post);
    $http.post('/posts', post).then(function(res){
      $scope.allPosts();
    });
  }

  $scope.deletePost = function(id){
    console.log(id);
    $http.delete('/posts/' + id).then(function(res){
      $scope.allPosts();
    })
  }

  $scope.updatePost = function(id){
    console.log(post);
    var post = {post: $scope.changePost};
    console.log($scope.changePost);
    $http.patch('/posts/' + id, post).then(function(res){
      console.log(res);
      $scope.allPosts();
    });
  }


  $scope.allPosts();

}]);
