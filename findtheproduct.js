//Find the Product.

const Find_Prod = (array, N) => 
{
 
     let result = 1;
  for(let i = 0; i < N; i++){
    result *= array[i];
  }
  return result;

};

