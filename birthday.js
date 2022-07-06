//Birthday Game


function Birthday_Game(arr,D ,M) {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < M; i++){
      sum += arr[i];
    }
    if(sum === D){
      count++;
    }
    for(let i = M; i < arr.length; i++){
      sum += arr[i];
      sum -= arr[i - M];
      if(sum === D){
      count++;
    }
    }
    return count;
  }



