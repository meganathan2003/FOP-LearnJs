/*  
1. What is object?
 Example if you take you aadhar card it has so money details there
 like that in progam if we have to store multiple data we have to create a sperate varibale and give value
 let name = "dinesh"


 */

// let name = "dinesh";
// let DOB = 21 - 10 - 2003;
// let gender = "Male"

// lwe we have create object
let mydetails = {
    // consider two Key: "value"
    name: "Meganathan",
    isAlive: true,
    Dob: 21 - 10 - 2003,
    Gender: "Male",
    // object inside the anthoer object 
    siblings :{
        sister : "Subha"
    }
} // This is object

// how we can use it one we use Dot notation and Bracket notaiton

console.log(mydetails.siblings.sister);




