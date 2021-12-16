let applyButton = document.getElementById('apply-darkmode');
let removeButton = document.getElementById('remove-darkmode');

applyButton.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id, allFrames: true },
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
    })
}

removeButton.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id, allFrames: true },
            func: () => {
                document.documentElement.style.filter = "initial";
                let styleElm = document.getElementById("hoangtv-darkmode-style");
                let orgBg = styleElm.getAttribute("hoangtv-orgBg");
                if (orgBg != "empty")
                    document.body.style.background = orgBg;
                else
                    document.body.style.background = null;
                styleElm.remove();
            }
        })
    })
}
