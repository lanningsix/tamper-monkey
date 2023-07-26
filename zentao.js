// ==UserScript==
// @name         zentao
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        zentao.tangees.com/*
// @grant        GM_xmlhttpRequest
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tangees.com
// ==/UserScript==

(function () {

    const btn = document.createElement('button');
    btn.innerHTML = '启用input';
    btn.style.width = '100px';
    btn.style.height = '40px';
    btn.style.position = 'fixed';
    btn.style.bottom = '60px';
    btn.style.right = '20px';
    btn.style.zIndex = '999999';
    document.body.appendChild(btn);

    window.onload = () => {
        console.log('onload');
        document.getElementById('finishedDate')?.removeAttribute('disabled');
    };

    btn.onclick = () => {
        document.getElementById('finishedDate')?.removeAttribute('disabled');
        // var formData = new FormData();
        // formData.append('whatsapp_id', 8615768651563);
        // formData.append('message', '{"body":"我是最新消息"}');
        // formData.append('message_type', 'text');
        // GM_xmlhttpRequest({
        //     method: "POST",
        //     url: "https://sales-export-dev.tangees.com/cgi/foreign-trade/api/wa/chat/send",
        //     data: formData,
        //     onload: function (response) {
        //         console.log(JSON.parse(response?.response));
        //     }
        // });
    };
    // Your code here...
}());
