"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xmlhttprequest_1 = require("xmlhttprequest");
const ajax_1 = require("rxjs/ajax");
const hostConfig_1 = require("./hostConfig");
function createXHR() {
    return new xmlhttprequest_1.XMLHttpRequest();
}
class AjaxHelper {
    constructor(url, method) {
        this.ajax$ = ajax_1.ajax({
            createXHR,
            url: url,
            crossDomain: true,
            withCredentials: false,
            method: method
        });
    }
}
function AjaxRequestBuilder(path, method = "GET") {
    return new AjaxHelper(`${hostConfig_1.default}/${path}`, method).ajax$;
}
exports.AjaxRequestBuilder = AjaxRequestBuilder;
//# sourceMappingURL=ajaxHelper.js.map