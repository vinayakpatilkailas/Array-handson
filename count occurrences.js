//Count Occurrences


const findCount = (N, K, Arr) => 
{
    
  let result = 0;
  for(let i = 0; i < N; i++){
    if(K === Arr[i]){
      result += 1;
    }
  }
  return result;
};
 
