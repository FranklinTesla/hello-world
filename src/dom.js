export let Dom = {
    updateNode: (elem, newVal) => {
        let nodeValue = elem.textContent;
        if (nodeValue === newVal) {
            return elem;
        }
        // 属性节点
        if (elem.nodeType === 2) {
            let name = elem.name === 'class'? 'className': elem.name;
            elem.ownerElement[name] = newVal;
        }
        // 文本节点
        if (elem.nodeType === 3) {
            let textNode = document.createTextNode(newVal);
            elem.parentNode.replaceChild(textNode, elem);
            // 注意elem引用的改变
            elem = textNode;
        }
        return elem;
    }
};