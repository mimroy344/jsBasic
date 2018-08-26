// movieRating - 'pg' 'r' 'g'
var movieRating = 'g';
var yourAge = 14;
var result;
// if('pg'==movieRating && yourAge>13){
//     result = 'you can watch this movie';
// }else if('r'==movieRating && yourAge>17){
//     result = 'you can  watch this movie';
// }else if('g'==movieRating){
//     result = 'you can watch this movie';
// }else{
//     result = 'you cant watch this movie';
// }


if(('pg'==movieRating&&yourAge>13)||('r'==movieRating&&yourAge>17)||('g'==movieRating)){
    result = 'you can watch this movie';
}else{
    result = 'you cant watch this movie';
}
console.log(result);
