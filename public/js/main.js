var app = angular.module('OtterApp', []);

app.controller('PostsController', ['$scope', '$http', function($scope, $http){

  $scope.posts = []
  $scope.update = 0;

  $scope.allPosts = function(){
    $http.get('/posts').then(function(response){
      $scope.posts = response.data.posts;
    })
  }

  $scope.updateButton = function(id){
    if ($scope.update !== id){
      $scope.update = id;
    } else {
      $scope.update = 0;
    }
  }

  $scope.createPost = function(){
    var post = {post: $scope.newPost};
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
    console.log(id);
    var post = {post: $scope.updatePost}
    console.log(post);
    $http.patch('/posts/' + id, post).then(function(res){
      $scope.allPosts();
    });
  }


  $scope.allPosts();

}]);
