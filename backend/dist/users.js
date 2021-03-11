"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        // console.log()
        // if (another != undefined){
        //     console.log('V Another defined')
        // } else {
        //     console.log('X Another defined')
        // }
        // if (another.email == this.email){
        //     console.log('V Email')
        // } else {
        //     console.log('X Email')
        // }
        // if (another.password == this.password){
        //     console.log('V Password')
        // } else {
        //     console.log('X Password')
        // }
        // console.log()
        return another != undefined &&
            another.email == this.email &&
            another.password == this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "henrique.zeitz@operacionalsolution.com.br": new User('henrique.zeitz@operacionalsolution.com.br', 'Henrique Zeitz', 'Operacional1'),
    "douglas.rosemann@operacionalsolution.com.br": new User('douglas.rosemann@operacionalsolution.com.br', 'Douglas Rosemann', 'Operacional1'),
    "gabriel.raimondi@operacionalsolution.com.br": new User('gabriel.raimondi@operacionalsolution.com.br', 'GR', 'Operacional1')
};
