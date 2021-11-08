//Exercise #1 - fetch(), async/await, .json()
//function expression, innerHTML, for...of loop, createElement(), append()

const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`); 
    const data = await usersRequest.json(); 
    // console.log(usersRequest); 
    // console.log(data); 
    const userResults = data.results; 
    // console.log(userResults); 
    displayUsers(userResults);
};

getData(); 

const displayUsers = function(userResults) {
randomFolks.innerHTML = ""; //empty the randomFolks contents to make sure I don't duplicate any DOM elements
for (const user of userResults) {
    const country = user.location.country; 
    const name = user.name.first;
    const imageURL = user.picture.medium;
    const userDiv = document.createElement("div"); 
    userDiv.innerHTML=`<h3>${name}</h3><p>${country}</p><img src=${imageURL} alt="User avatar" />`;
    randomFolks.append(userDiv); 
}
};


// Exercise #2: async functions, fetch, template literals, change event

const dropDown = document.querySelector(".num-users"); 
dropDown.classList.remove("hide"); 

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value; 
    getData(numUsers); 
});