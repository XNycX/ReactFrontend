export const checkError = (type,value) => {
    switch(type) {
        case 'email' :
            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) ) {
                
                return "Enter a valid email";
            }else{
                return "ok";
            };     
        case 'name': 

            if (! /[a-z]/gi.test(value) ) {
                return "Enter a valid name";
            }else{
                return "ok";
            };
        case 'telephone':

            if (! /[\d()+-]/g.test(value) ) {
                return "Enter a valid telephone";
            }else{
                return "ok";
            };
        default:
            return "ok";      
    }
};