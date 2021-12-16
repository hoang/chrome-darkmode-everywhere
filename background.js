chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {

        chrome.scripting.executeScript({
            target: { tabId, allFrames: true },
            func: () => {
                document.body.style.background = "#fff";
                document.documentElement.style.filter = "invert(80%)";
                var style = document.createElement("style"); 
                style.setAttribute("id", "hoangtv-darkmode-style");
                style.innerHTML = "img {filter: invert(1);}"; 
                document.body.append(style);
            }
        })

    }
})
