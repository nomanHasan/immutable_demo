import { Set, Seq, List, Map } from 'immutable';


const emptyList = List()
// List []

const plainArray = [1, 2, 3, 4]
const listFromPlainArray = List(plainArray)
// List [ 1, 2, 3, 4 ]

const plainSet = Set([1, 2, 3, 4])
const listFromPlainSet = List(plainSet)
// List [ 1, 2, 3, 4 ]

const arrayIterator = plainArray[Symbol.iterator]()
const listFromCollectionArray = List(arrayIterator)
// List [ 1, 2, 3, 4 ]

console.log(listFromCollectionArray);


console.log(Map({
    a: 1,
    b: 2
}));


const nestedList = List([
    {
        childList: List([
            {
                childList: List([
                    {
                        childList: List([
                            {
                                childList: List([
                                    {
                                        childList: List([
                                            
                                        ])
                                    }
                                ])
                            }
                        ])
                    }
                ])
            }
        ])
    }
])

console.log(nestedList);