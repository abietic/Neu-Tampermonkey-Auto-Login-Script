// ==UserScript==
// @name         Neu auto forward
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto forward to identity auth page from ipgw pages
// @author       You
// @match        http://202.118.1.87/srun_portal_*
// @match        http://ipgw.neu.edu.cn/srun_portal_*
// @match        https://ipgw.neu.edu.cn/srun_portal_*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    // 通常在接入东北大学校园网时会自动跳转到登陆校园网的页面
    // 本脚本在这个网站的上寻找使用统一身份认证的连接网络按钮，并将进行点击跳转
    // var button = document.querySelector("a[class='btn btn-outline-dark btn-block']"); //这种寻找方法不好
    var button = document.getElementById('login-sso'); //这种寻找方法不好
    button.focus();
    button.click();
    // window.location.href = 'https://pass.neu.edu.cn/tpass/login?service=https%3A%2F%2Fipgw.neu.edu.cn%2Fsrun_cas.php%3Fac_id%3D15' // 直接跳转到统一身份认证界面连接网络（结果现在不用这个网址了，拉跨）
})();
