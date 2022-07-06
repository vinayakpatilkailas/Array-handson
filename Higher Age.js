//Higher AGE


const highAge = (N, Arr) => 
{
    let result = [];
  for(let i = 0; i < N; i++){
      if(Arr[i] >= 18){
        result.push(Arr[i]);
      } 
    }
  return result;
};
 

