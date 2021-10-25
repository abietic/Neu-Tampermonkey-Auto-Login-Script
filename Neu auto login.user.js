// ==UserScript==
// @name         Neu auto login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto login Neu identity auth
// @author       You
// @match        https://pass.neu.edu.cn/tpass/login*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    // 本脚本用于在东北大学的统一身份验证页面进行登录
    // 需要填写用户名（学号）密码的明文，请注意个人信息安全
    document.getElementById('un').value=''; // 学号
    document.getElementById('pd').value=''; // 密码（明文，注意安全）
    login();
})();