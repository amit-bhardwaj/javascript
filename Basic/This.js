/**
 * point to window object
 */

 console.log(this);


 /**
  * Point to john object
  */

  var john = {
      name: "Amit",
      age: 23,
      temp: function (){
          console.log(this)
      }
  }

  john.temp();

  /**
   * copy/borrow function
   */

alex.temp = john.temp;
// temp will be copied in new object also
alex.temp();

