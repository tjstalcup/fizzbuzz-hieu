var number = prompt("Please enter a number between 1 and 100");

for (var i=1; i<=number; i++){
        if(i%5 === 0 && i%3 === 0){
            document.write("<p>FizzBuzz</p>");
        } 
        else if(i%3 === 0){
            document.write("<p>Fizz</p>");
        } 
        else if(i%5 === 0){
            document.write("<p>Buzz</p>");
        } 
        else {
            document.write("<p>" + i + "</p>");
        }
    }

