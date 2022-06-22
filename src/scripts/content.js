document.addEventListener('DOMContentLoaded', () => {
    let submit_button = document.getElementById("submit-git-form");
    submit_button.addEventListener("click", uploadIssue);
});


async function uploadIssue() {
    let title = document.getElementById("title-git-form").value;
    let description = document.getElementById("description-git-form").value;

    let sendIssue = chrome.runtime.sendMessage(
        {
            title: title,
            description : description
        }, 
        
        function(response) {
            console.log("recieved response.");
            handleResponse(response);
        }
    )

    console.log("sendMessage()");
    await sendIssue();

}

function handleResponse(message) {
    console.log(`Message from the background script:  ${message}`);
}