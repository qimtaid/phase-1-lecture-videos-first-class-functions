let books = ['Eloquent Javascript', 
'Javascript: The Good Parts', 
'Learn Javascript VISUALLY', 
'You don\'t know js', 
'Javascript: The Definitive Guide']
let num = [1,2,3,4]
// let str = 'cat'
// let obj  = {}
// let bool  = true

const loopThroughArray = function(array){
    for(let item of array){
        console.log(item)
    }
}
loopThroughArray(books)

function handleArray(array){
    console.log(array)
}
handleArray(num)
handleArray(books)
// handleArray(str)
// handleArray(obj)
// handleArray(bool)

function handleBooks(fun){
    let books = ['Eloquent Javascript', 
    'Javascript: The Good Parts', 
    'Learn Javascript VISUALLY',
     'You don\'t know js', 
    'Javascript: The Definitive Guide']
    
    fun(books)
 //   loopThroughArray(books)
}
//handleBooks(loopThroughArray)


const capitalizeArray = function(array){
    let newArray = []
    for(let item of array){
        newArray.push(item.toUpperCase())
    }
    console.log(newArray)
}
handleBooks(loopThroughArray)
handleBooks(capitalizeArray)
