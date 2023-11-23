import  Axios  from "axios";

// URL to make the GET request
const url = 'https://jsonplaceholder.typicode.com/albums';
 

// below the code for fetch the url
fetch(url)
.then(res =>{
   if(res.status == 400){
    throw new Error('Something error in network');
   }
   else if(res.status == 404){
    throw new Error("Given URL link is wrong");
   }
   else{
    return res.json();
   }
})
.then(data =>{
    console.log("DATA",data);
})
.catch(error =>{
    console.log("There was a problem while fetching",error);
})

// Below the code for Axios
/**
 * axios is simplfy the fetch api
 */
Axios.get(url)
.then(res =>{
    return res.data;
})
.then(data =>{
    console.log(data);
})


// Below the code post the data
const postData = {
    albumId: 1,
    id: 1,
    title: 'Dinesh albums',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952'
  };

Axios.put(url, postData)
.then(response  =>{
    console.log("put res" ,response.data);
})
.catch(error => {
    // Handle errors
    console.error('PUT Error:', error);
  });


  