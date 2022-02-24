class Polygon{
    constructor(array){
        this.array = array
    }
    
    get countSides(){
        return this.array.length
    }

    get perimeter(){
        let sum = 0
        for (let len of this.array){
            sum += len
        }
        return sum
    }
}

class Triangle extends Polygon{
    get isValid(){
        for(let i=0; i<this.array.length; i++){
            for(let j=i+1; j<this.array.length; j++){
                const twoSides = this.array[i]+this.array[j]
                if(twoSides<=this.perimeter-twoSides){
                    return false
                }
            }
        }
        return true
    }
}

class Square extends Polygon{
    get isValid(){
        for(let i=0; i<this.array.length; i++){
            for(let j=i+1; j<this.array.length; j++){
                if(this.array[i]!==this.array[j]){
                    return false
                }
            }
        }
        return true
    }

    get area(){
        return this.array[0]*this.array[1]
    }
}