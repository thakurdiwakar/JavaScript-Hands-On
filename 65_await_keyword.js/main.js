function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function example() {
    console.log("Start");
    await delay(2000); // Pause execution for 2 seconds
    console.log("After 2 seconds");
    await delay(1000); // Pause execution for 1 second
    console.log("After 1 second");
    console.log("End");
  }
  
  example();
  