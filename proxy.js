function negativeIndex(arr){
    return new proxy(arr,{
        get(target,prop){
            const index = Number(prop)
            if(index < 0 ){
                return target[target.length + index]
            }
            return target [index]
        },
        set(target,prop,value){
            const index = Number(prop)
            if(index < 0){
                target[target.length + index] = value 
            }else {
                target[index] = value 
            }
            return true 
        }
    }) 
}


