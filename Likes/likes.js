console.log("page loaded...");

var likeCount = 3;
var post1likes = document.querySelector("#post1");

function like(){
    likeCount++;
    post1likes.innerText = likeCount + "like(s)";
}