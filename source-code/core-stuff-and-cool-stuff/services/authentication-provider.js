app.provider('authentication', function () {
 var privateName = '';
 this.setName = function (newName) {
   privateName = newName;
 };
 this.$get = function () {
 return {
   name: privateName
 };
 };
});