//Even Odd

const findEvenOdd = (N, Arr) => 
{
    let result = [0, 0];
  for(let i = 0; i < N; i++){
    if(Arr[i] % 2 === 0){
      result[0] += Arr[i];
    }
    else{
      result[1] += Arr[i];
    }
  }
  return result;
};
 



