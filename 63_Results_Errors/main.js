function saveToDb(data) {
    return new Promise((resolve, reject) => {
      let internetSpeed = Math.floor(Math.random() * 10) + 1;
      if (internetSpeed > 4) {
        resolve("success: data was saved");
      } else {
        reject("failure: weak connection");
      }
    });
  }
  
  // then and catch methods
  
  let request = saveToDb("Save DataBase");
  
  // console.log(request);
  
  request
    .then((result) => {
      console.log("Promise1  resolved");
      console.log(result);
    })
    .then(() => {
        console.log("Promise2  resolved");
       
      })
    .catch((error) => {
      console.log("Promise was rejected");
      console.log(error);
    
    });
  