import {loadStripe} from '@stripe/stripe-js'
let stripePromise;
const getStripe=()=> {
    if(!stripePromise){
        stripePromise=loadStripe('pk_test_51MiJGwJM8edFj1dHnL9zVa2lujgs29llSgTE9p8YqBJoURu1Pwr1ebWmOovYAaPzGo48bA7WsCJYNfYC5YRkkvgG00sg0M3i15');

    }return stripePromise

}
export default getStripe;