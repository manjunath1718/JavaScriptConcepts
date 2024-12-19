console.log("feedback js loaded");

//html form to access

const feedbackForm=document.getElementById("feedback_form");
// const formHeading=document.getElementById("form_heading");
const formHeading=document.querySelector("#form_heading");
const clearButton=document.getElementById("clear_button");
const feedbackItemContainer = document.getElementById(
    "feedback_item_container"
);


function loadFeedbacks() {
    //getting data form localstorage and parsing to array
  
    // Retrieve data from localStorage and parse it 
    
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || []; 
     // Ensure feedbacks is an array 
        if (!Array.isArray(feedbacks))  { 
            feedbacks = []; 
        } 
      // Clear existing feedback items 
      feedbackItemContainer.innerHTML = ""; 
      // Reverse feedbacks array 
       feedbacks.reverse();
  
    feedbacks.forEach((item) => {
      const feedItem = `  <div
              class="list_item mt-2 p-5 flex flex-col gap-3 bg-gray-700 rounded-lg"
            >
              <div class="flex justify-between">
                <h1 class="font-bold text-3xl">${item.name}</h1>
                <h1 class="text-gray-400 text-2xl">${item.email}</h1>
              </div>
              <p>
              ${item.message}
              </p>
              <div class='flex justify-between'>
  
              <h1 class="text-2xl text-gray-400">Rating : ${item.rating}</h1>
              <div>
                  <button onclick="deleteFeedback('${item.email}')"  class="px-3 py-2 bg-red-600 text-sm hover:bg-red-400 rounded">Delete</button>
              </div>
              </div>
            </div>`;
  
      feedbackItemContainer.innerHTML =
        feedbackItemContainer.innerHTML + feedItem;
    });
  }
  // <button onclick="deleteFeedback('${item.email}')" class="px-3 py-2 bg-red-600 text-sm hover:bg-red-400 rounded">Delete</button>
            
  loadFeedbacks();

//save data to localstorage
function saveToLocalStorage(feedback) { 
   // Get data from local storage and parse it as an array 
   let feedbacks = localStorage.getItem("feedbacks"); 
   // Check if feedbacks is not null or undefined and parse it to an array 
   feedbacks = feedbacks ? JSON.parse(feedbacks) : []; 
   // Ensure feedbacks is an array 
   if (!Array.isArray(feedbacks)) { 
    feedbacks = []; 
    } // Add the new feedback to the array 
    feedbacks.push(feedback); 
    // Save the updated array back to local storage 
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks)); 
    console.log("Feedback saved");
    feedbackForm.reset(); 
    loadFeedbacks();
 }
  
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rating = document.getElementById("rating").value;
    const message = document.getElementById("message").value;
    const feedbackObject = { name, email, rating, message };
    saveToLocalStorage(feedbackObject);
  });

//DOM -->document object module
clearButton.addEventListener("click",() => {
    console.log("clearButton clicked");
    formHeading.innerHTML="submit your feedback";
    formHeading.style.color='red'
    formHeading.style.backgroundColor="yellow"
    formHeading.classList.remove("text-2xl");
    formHeading.classList.add("text-4xl");
    formHeading.classList.add("bg-red-500!important");

});

function deleteFeedback(id) {
  // alert("deleteting " + id);
console.log("deleting");

  const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  console.log(feedbacks);

  //remove the feeback of given id.

  const newFeedbackList = feedbacks.filter((item) => {
    return item.email != id;
  });

  console.log(newFeedbackList);
  //updaate new list to localstorage
  localStorage.setItem("feedbacks", JSON.stringify(newFeedbackList));

  // load the new feedbacks from local storage to ui
  loadFeedbacks();
}
   




