function hasCycle(head) {

  let nestedObjs = []
  function detectCircularReference(obj){
    
    if(obj && typeof obj === 'object'){
      if(nestedObjs.indexOf(obj) !== -1)
      return true
    }

    nestedObjs.push(obj)
    for(let key in obj){
      if(obj.hasOwnProperty(key) && detectCircularReference(obj[key]))
        return true
    }

    return false
  }

  return detectCircularReference(head)
}

let SinglyLinkedListNode = {
  SinglyLinkedListNode: 1,
  next: {
    SinglyLinkedListNode: -1,
    next: null
  }
}


let SinglyLinkedListNode2

SinglyLinkedListNode2 = {
  SinglyLinkedListNode: 1,
  next: {
    SinglyLinkedListNode: -1,
    next: {
      SinglyLinkedListNode: 8,
      next: null
    }
  }
}
SinglyLinkedListNode2.next.next.next = SinglyLinkedListNode2

console.log(hasCycle(SinglyLinkedListNode2))
// console.log(SinglyLinkedListNode2.next)