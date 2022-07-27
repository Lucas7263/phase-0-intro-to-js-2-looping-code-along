// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
    }
    return gifts;
}

wrapGifts(gifts);




let messages = [];

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        
       messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
       
       debugger;
         }
         return messages;
}
    
writeCards(messages);

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
       
        console.log(countDown--);
    };

}

