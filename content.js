// content.js

var links = [];
$("a").each(function() {
    //Do your work   
    links.push( this.href ); 
})

// Print
console.log("Total Links: " + links.length);
$.each(links, function(index, val) {
    console.log(val);
});

alert("Complete, Check Console Log for Links! \nTotal Links: " + links.length);