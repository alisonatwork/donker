const toggle = 'document.body.classList.toggle("donk");'

async function donk() {
    await browser.tabs.executeScript({ code: toggle });
}

browser.messageDisplayScripts.register({
    css: [{ file: "display.css" }],
    js: [{ code: toggle }, { file: "preprocess.js" }],
});

browser.browserAction.onClicked.addListener(donk);
