
const nameEntry=document.getElementById("nameInput");
const button=document.getElementById("predictBtn")
const message=document.getElementById("nameMessage")
const gResult=document.getElementById("genderResult")
const aResult=document.getElementById("ageResult")
const nResult=document.getElementById("nationalityResult")


//user must enter name and click button
button.addEventListener("click",()=>{
    const name=nameEntry.value; 
    //if they do not enter name, display error message
    if (name==""){
        message.style.display = "block";
        message.innerHTML=("Name entry required");
        message.style.color = "red";
    }
    else{ //if they entered a name
        message.style.display = "none"; //do not display the p element for error message
        //fetch the gender
        fetch(`https://api.genderize.io?name=${name}`)
        //get the response and parse if no error
            .then((response)=>{
                if (!response.ok){
                    throw new Error("Error!");
                }
                else{
                    return response.json(); //parse the response
                }
    })
    //display response on site (happens if data is already parsed)
            .then((display)=>{
                gResult.innerHTML=`Gender: ${display.gender}`;
            })
            .catch((error)=>{
                gResult.innerHTML="Error fetching data";

            });

            //fetch the age
            fetch(`https://api.agify.io?name=${name}`)
            //get the response and parse if no error
                .then((response)=>{
                    if (!response.ok){
                        throw new Error("Error!");
                    }
                    else{
                        return response.json(); //parse the response
                    }
        })
        //display response on site (happens if data is already parsed)
                .then((display)=>{
                    aResult.innerHTML=`Age: ${display.age}`;
                })
                .catch((error)=>{
                    aResult.innerHTML="Error fetching data";
    
                });
    }
});