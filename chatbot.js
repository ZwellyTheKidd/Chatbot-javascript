
function talk() {
    var know = {
        "hello": "Hi there &#128540",
        "who are you": "Hello, Alice here",
        "how are you": "Good :)",
        "what can I do for you": "Please give us a follow & like.",
        "your followers": "I have my family of 5000 members, I don't have followers, have a supportive family",
        "ok": "Thank you so much",
        "bye": "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value.toLowerCase(); // Convert user input to lowercase
    document.getElementById('chatLog').innerHTML = user + "<br>";

    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
    }
}













