//Min and Max

function arrayMin(arr) {
  
    let minimum = arr[0];
    for(let i = 0; i < arr.length; i++){
      if(minimum > arr[i]){
        minimum = arr[i];
      }
    }
    return minimum;
  }
  
  function arrayMax(arr) {
    let maximum = arr[0];
    for(let i = 0; i < arr.length; i++){
      if(maximum < arr[i]){
        maximum = arr[i];
      }
    }
    return maximum;
  }




