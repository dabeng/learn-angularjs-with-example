app.service('authenticationService', function () {
 this.name = '';
 this.setName = function (newName) {
 this.name = newName;
 return this.name;
 };
 });