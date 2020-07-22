Task 2 Exercise 2 
//numeric false проте сортує не в правильному порядку(
var collator = new Intl.Collator(undefined, {numeric: false, sensitivity: 'case'});
var myArray = ['mic09ha1el', '4b5en6', 'michelle', 'be4atr3ice'];
console.log(myArray.sort(collator.compare));



Task 2 Exercise 3
//взято із stack overflow 
var dates = {
    convert:function(d) {
        return (
            d.constructor === Date ? d :
            d.constructor === Array ? new Date(d[0],d[1],d[2]) :
            d.constructor === Number ? new Date(d) :
            d.constructor === String ? new Date(d) :
            typeof d === "object" ? new Date(d.year,d.month,d.date) :
            NaN
        );
    },
    compare:function(a,b) {
        // Compare two dates (could be of any type supported by the convert
        // function above) and returns:
        //  -1 : if a < b
        //   0 : if a = b
        //   1 : if a > b
        // NaN : if a or b is an illegal date
        // NOTE: The code inside isFinite does an assignment (=).
        return (
            isFinite(a=this.convert(a).valueOf()) &&
            isFinite(b=this.convert(b).valueOf()) ?
            (a>b)-(a<b) :
            NaN
        );
    },
    inRange:function(d,start,end) {
        // Checks if date in d is between dates in start and end.
        // Returns a boolean or NaN:
        //    true  : if d is between start and end (inclusive)
        //    false : if d is before start or after end
        //    NaN   : if one or more of the dates is illegal.
        // NOTE: The code inside isFinite does an assignment (=).
       return (
            isFinite(d=this.convert(d).valueOf()) &&
            isFinite(start=this.convert(start).valueOf()) &&
            isFinite(end=this.convert(end).valueOf()) ?
            start <= d && d <= end :
            NaN
        );
    }
}



Task 2 exercise 4
// На жаль не зміг обрати метод, щоб рішення було універсальним

NumArr = [1,1,1,1,1,1,1,1,1,1,0.5,1,1,1,1,1,1,1,1,1,1,1,]
const filtNumArr = NumArr.filter(NumArr => {return NumArr !== 1});
console.log(filtNumArr);



Task 2 exercise 5 

function getDiscount(number) {
  let price = 100;
  let result;
  if (number < 5) {
    result = price - (price * 0);
  } else if( number < 10) {
    result = price - (price * 0.05);
  } else {
    result = price - (price * 0.1);
  }
  return result;
}
console.log(getDiscount(10));



Task 2 Exercise 6
//чи валідне вирішення цього завдання цим способом?
let numberOfMonth = 2;
	switch (numberOfMonth) {
 	case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    	console.log('31 days in the month');
   		break;
 	case 4:
    case 6:
    case 9:
    case 11:
    	console.log('30 days in the month');
    	break;
    case 2:
    	console.log('28 days in the month');
    	break;
}

