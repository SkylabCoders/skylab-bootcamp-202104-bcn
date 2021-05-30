var Skylaber = /** @class */ (function () {
    function Skylaber(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = '${firstname} ${middleinitial} ${lastname}';
    }
    return Skylaber;
}());
function greeter(person) {
    return "Hello " + person.firstname + " " + person.lastname;
}
;
var user = { firstname: 'hey', lastname: 'how' };
document.body.innerHTML = greeter(user);
