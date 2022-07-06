function Unique_Shirts (arr,N) {
    let result = {};
      let count = 0;
      for(let i = 0; i < N; i++){
        if(result[arr[i]]){
          result[arr[i]] += 1;
        }
        else{
          result[arr[i]] = 1;
        }
      }
      let resultValues = Object.values(result);
      for(let j = 0; j < resultValues.length; j++){
        if(resultValues[j] === 1){
          count += 1;
        }
      }
      return count;
   
  }
  
  