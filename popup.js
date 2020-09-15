let applyButton = document.getElementById('apply-darkmode');
let removeButton = document.getElementById('remove-darkmode');

applyButton.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.documentElement.style.filter = "invert(80%)";'}
        )
    })
}

removeButton.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.documentElement.style.filter = "initial";'}
        )
    })
}