chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^http/.test(current_tab_info.url)){
            chrome.tabs.insertCSS(null, {file: './style.css'});
            chrome.tabs.insertCSS(null, {file: './icon.css'});
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () =>{
                console.log('i injected')
            })
        }
    })
});

