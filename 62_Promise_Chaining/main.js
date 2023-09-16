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
    .then(() => {
      console.log("Promise1  resolved");
      console.log(request);
    })
    .then(() => {
        console.log("Promise2  resolved");
       
      })
    .catch(() => {
      console.log("Promise was rejected");
    
    });
  