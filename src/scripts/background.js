import { Octokit } from "@octokit/core";

async function handleIssue(request, sender, sendResponse) {
    const octokit = new Octokit({
        auth: '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'
    })
      
    const response = await octokit.request('POST /repos/{owner}/{repo}/issues', {
        owner: 'weareandrei',
        repo: 'github-add-on',
        title: request.title,
        body: request.description,
    }).catch(e => {
        console.log(e);
        return;
    });

    sendResponse({response: "Successfully uploaded an ISSUE!"})
}

chrome.runtime.onMessage.addListener(handleIssue);
