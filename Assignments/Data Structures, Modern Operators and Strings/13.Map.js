"use strict";
//13.1
const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);

console.log(bookMap);

//13.2
bookMap.set("pages", 464);
console.log(bookMap);

//13.3
console.log(`"${bookMap.get("title")} by ${bookMap.get("author")}"`);

//13.4

console.log(bookMap.size);

//13.5

bookMap.has("author") && console.log("The author of the book is known");
