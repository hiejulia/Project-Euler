'use strict';
var fs = require('fs');//import fs 
var alpha = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26
};

function nameScore(name){
            var scoreSum  = 0;
            //name = HIEN

            var characters = name.split('');//H=... I=... E=.... N=....

            for (var i=0; i<characters.length; i++) {
                scoreSum += alpha[characters[i]];
            }

            return scoreSum;//get the score sum 

}
//read the names.txt 
fs.readFile('names.txt', 'utf8', function (err, data) {
        if (err) throw err;//throw err 

        var nameList  = data.split(',');

        for (var i=0; i<nameList.length; i++) {
        nameList[i] = nameList[i].trim().toLowerCase();
    }

    nameList.sort();//sort abc


    var result  = 0;

    for (i=0; i<nameList.length; i++) {
        result  += (i+1)*nameScore(list[i]);
    }
    return result;

    console.log(result);

});



