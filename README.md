# Promises, Generators and Async/Await

  - #### Promises
      - The promises are objects reponsible for modeling asynchronous behavior, allowing their treatment in an easier and more direct way;
      - To create a promise, just instantiate it, executing the resolve function in case of success, being handled by then;
      - In case of failurethe reject function must be executed,being handled by means of catch;
      - It's possible to centralize the handling of a promise by chaining its returns;
      - We can execute several promises at the same time, returning after all succeed using Promise.all;
      - We can also execute several promises at the same time, returning after the first succeeds using Promise.race, or if there is an error, it returns this one;
      - We can also execute several promises at the same time, returning after the first one succeeds using Promise.any, just returning the first one successfully;
  - #### Generators
  
