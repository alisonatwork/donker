const emojiPattern = /((\p{EPres}|\p{ExtPict})(\u200d(\p{EPres}|\p{ExtPict}))*)/gu
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const replacements = []

while (node = walker.nextNode()) {
    if (!node.nodeValue || node.parentNode.nodeName === "SCRIPT" || node.parentNode.nodeName === "STYLE") {
        continue;
    }
    const html = node.nodeValue.replace(emojiPattern, '<span class="donk-emoji">$1</span>');
    if (html === node.nodeValue) {
        continue;
    }
    replacements.push({ node, html })
}

for ({ node, html } of replacements) {
    const replacementNode = document.createElement("span");
    replacementNode.innerHTML = html;
    node.parentNode.insertBefore(replacementNode, node);
    node.parentNode.removeChild(node);
    replacementNode.outerHTML = html;
}
