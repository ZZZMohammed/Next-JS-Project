
export default class UnluckyNumber extends Error{

    constructor(message = 'unlucky Number') {
        super(message) ;
        this.name = "UnluckyNumber" ;
    }
}