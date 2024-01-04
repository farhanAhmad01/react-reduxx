import { BUY_CAKE, DECREMENT, INCREMENT } from "./CakeType";


export const buyCake = () =>{
    return {
        type:BUY_CAKE
    }
}

export const increment = ()=>{
    return {
        type:INCREMENT
    }
}

export const decrement = ()=>{
    return {
        type:DECREMENT
    }
}


// export default buyCake
