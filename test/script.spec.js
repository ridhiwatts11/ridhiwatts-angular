describe('myListController', function(){
  var $controller, $scope;

  beforeEach(module('myList'));

  beforeEach(inject(function(_$controller_, $injector){
    $controller = _$controller_;
    $scope = $injector.get('$rootScope').$new();

    $controller('myListController', {
      $scope: $scope
    });
  }));

  //for checking that the todo task item is initializing with the default value
  it('should initialize with the default todo task item', function(){
    expect($scope.items.length).toBe(1);
    expect($scope.items[0]).toBe('Learn AngularJS');
  });

  //for checking that the new item is added everytime to the list
  it('should add a new item to the list', function() {
    
    $scope.newItem = 'New Task';
    $scope.pushItem();
    expect($scope.items.length).toBe(2);
    expect($scope.items[1]).toBe('New Task');
  });

  //checks that the todo app does not add emty item to the list
  it('should not add any empty item to the list', function() {
    $scope.newItem = '';
    $scope.pushItem();
    expect($scope.items.length).toBe(1);
  });

  //checks that when we click on delete button it must delete the item successfully
  it('should remove the item from the list', function(){
    $scope.deleteItem(0);
    expect($scope.items.length).toBe(0);
  });

  //this one checks that the input field clears after the item is added to the list
  it('should clear the newItem add input after adding', function(){
    $scope.newItem = 'New Task';
    $scope.pushItem();
    expect($scope.newItem).toBe('');
  });
});