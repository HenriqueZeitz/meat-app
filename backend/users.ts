export class User{
    constructor(public email: string,
                public name: string,
                private password: string){}

    matches(another: User): boolean{
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
               another.password == this.password
    }
}

export const users: {[key: string]: User} = {
    "henrique.zeitz@operacionalsolution.com.br": new User('henrique.zeitz@operacionalsolution.com.br', 'Henrique Zeitz', 'Operacional1'),
    "douglas.rosemann@operacionalsolution.com.br": new User('douglas.rosemann@operacionalsolution.com.br', 'Douglas Rosemann', 'Operacional1'),
    "gabriel.raimondi@operacionalsolution.com.br": new User('gabriel.raimondi@operacionalsolution.com.br', 'GR', 'Operacional1'),
}