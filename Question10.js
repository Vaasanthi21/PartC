function counter(){
  let count=0;
  return function(){
    count=count+1;
    return count;
  };
}
const c = counter();
console.log(c());
console.log(c());
console.log(c());
