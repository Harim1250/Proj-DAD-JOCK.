 const btnEl = document.getElementById("btn")
 const jockEl = document.getElementById("joke")
 const apikey = "5yDi8qrmAW1uKLWetf+9xA==XC8zZyb1AoRMCWkJ"

//   formatting to call a API
 const options = { 
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
 };

 const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit= 1"

 async function getJock(){
//    in fetching section the address of the veriable is passed 
    const response =  await fetch(apiURL,options)
// json  converts the iprl information into the read file.

    const data =  await response.json()

    jockEl.innerText = data[0].joke;
}

 btnEl.addEventListener("click",getJock)




