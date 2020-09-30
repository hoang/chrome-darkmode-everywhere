let applyButton = document.getElementById('apply-darkmode');
let removeButton = document.getElementById('remove-darkmode');

applyButton.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                code: 'var newStyleElm = document.createElement("style"); newStyleElm.innerHTML = ".inverted-root {filter: invert(0.8);} .inverted-root img {filter: invert(1);}"; document.body.append(newStyleElm); document.documentElement.setAttribute("class", "inverted-root");'
            }
        )
    })
}

removeButton.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.documentElement.setAttribute("class", "");'}
        )
    })
}