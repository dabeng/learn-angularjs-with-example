app.factory('authenticationFactory', function () {
  var authent = {};
  authent.name = '';
  authent.setName = function (newName) {
    authent.name = newName;
  };
 return authent;
 });