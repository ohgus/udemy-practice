const tweetForm = document.querySelector("#tweetForm");
const tweets = document.querySelector("#tweets");
tweetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // const usernameInput = document.querySelectorAll("input")[0];
    // const tweetInput = document.querySelectorAll("input")[1];
    // console.log(usernameInput.value,tweetInput.value);
    // console.log("submit!!");
    const username = tweetForm.elements.username;
    const tweet = tweetForm.elements.tweet;
    addTweet(username.value,tweet.value);
    username.value = "";
    tweet.value = "";
})

const addTweet = (username,tweet) => {
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweets.append(newTweet);
}