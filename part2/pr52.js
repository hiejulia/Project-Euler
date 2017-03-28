(function(){
    console.log('start');
    //this is sortNumber function
    function sortNumber(a,b){
        return a-b;
    }
     function solution(){
        //chay tu 11 

        //check if i = 125874 * 2 

        //.toString cho ca 2 so, tach ra tung so 

        //den khi tim ra thi break 
        let i = 11;
        let i2;
        let iArray1 =[];
        let iArray2 = [];
        while(i>10){

            i2=i*2;
            i= i.toString().split("");
            i2= i2.toString().split("");

            //i = ['','',''];
            //now i become array of character
            for(let j=0;j<i.length;j++){
                i[j] = parseInt(i[j]);
                //now each i[j] become int 
                iArray1.push(i[j]);


            }

              for(let h=0;h<i2.length;h++){
                i2[h] = parseInt(i2[h]);
                //now each i[j] become int 
                iArray2.push(i2[h]);


            }


            //now we get isArray =[1,2,3....]
            isArray1=isArray1.sort(sortNumber);
            //now isArray is sorted
            isArray2 = isArray2.sort(sortNumber);

            //compare 2 array with underscore lib
            if( _.isEqual(isArray2,isArray1)){
                    break;
                    console.log(i);
            }
            else {
                i++;
            }
           








         

        }
    }











}())