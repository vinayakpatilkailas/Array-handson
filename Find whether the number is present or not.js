//Find whether the number is present or not


const Find_Num = (array,N,M) => 
{
   for(let i = 0; i < N; i++){
    if(M === array[i]){
      return 'YES';
    }
  }
  return 'NO';
};
 
