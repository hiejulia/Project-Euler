
(function(){

    'use strict';

    var date = new Date();
    var count = 0;

    //
    for(var i =1901;i<=2000;i++){
        for(var j =0;j<=11;j++){
            date.setFullYear(i,j,1);
            if(date.getDay() == 0){
                count++;
                console.log(count);
            }
        }
        //setFullYear

    }

})();