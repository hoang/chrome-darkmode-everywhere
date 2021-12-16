chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {

        chrome.scripting.executeScript({
            target: { tabId, allFrames: true },
            func: () => {
                let orgBg = document.body.style.background || "empty";
                document.body.style.background = "#fff";
                document.documentElement.style.filter = "invert(80%)";
                var style = document.createElement("style"); 
                style.setAttribute("id", "hoangtv-darkmode-style");
                style.setAttribute("hoangtv-orgBg", orgBg);
                style.innerHTML = "img {filter: invert(1);}"; 
                document.body.append(style);
            }
        })

    }
})
