var fs = require('file-system');
var lineReader = require('line-reader');


lineReader.eachLine('test.jpg', function (line, last) {
    if (line.length >= 4) {
        let words = line.split(" ")
        for (let i = 0; i < words.length; i++) {
            if (words[i].length >= 4) {
                let counter = 0
                let result = "";
                while (counter <= words[i].length) {
                    if (words[i].charCodeAt(counter) >= 21 && words[i].charCodeAt(counter) <= 126) {
                        result += words[i].charAt(counter)
                    }
                    counter++;
                }
                if (result.length >= 4) {
                    console.log(result)
                }
            }
        }
    }
});