let moreParagraphs = document.getElementById("moreParagraphs");
console.log(moreParagraphs)

// Representation of childNodes


console.log(moreParagraphs.childNodes[0])   // text node 
console.log(moreParagraphs.childNodes[1])   // first child
console.log(moreParagraphs.childNodes[2])   // text node
console.log(moreParagraphs.childNodes[3])   // second child
console.log(moreParagraphs.childNodes[4])   // text node
console.log(moreParagraphs.childNodes[5])   // third child
console.log(moreParagraphs.childNodes[6])   // text node

// Note:
//     When index of childNodes is Even, there is always #text node
//     When index of childNodes is Odd, there is always Element node

// getting first and last siblings

console.log(moreParagraphs.childNodes[3].nextSibling.nextSibling)
console.log(moreParagraphs.childNodes[3].previousSibling.previousSibling)

// getting parent

console.log(moreParagraphs.childNodes[3].parentNode)

// // getting child

console.log(moreParagraphs.firstChild.nextSibling)
console.log(moreParagraphs.lastChild.previousSibling)


// Node Type and Node Name
console.log(moreParagraphs.nodeName)
console.log(moreParagraphs.nodeType)

// Getting All attributes of an element

var list = moreParagraphs.lastChild.previousSibling.attributes;
console.log("Attributes of image tag", list)


// Creating Element

var newParagraph = document.createElement("p");
var newTxt = document.createTextNode("Hello New one!"); 

newParagraph.appendChild(newTxt); 


newParagraph.setAttribute("class", "regular");
newParagraph.style.color = "red"
moreParagraphs.appendChild(newParagraph);
console.log(moreParagraphs)


// Deleting Element

moreParagraphs.removeChild(moreParagraphs.childNodes[5])








