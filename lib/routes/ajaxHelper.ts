import { XMLHttpRequest } from 'xmlhttprequest'
import { ajax } from 'rxjs/ajax';
import HOST from './hostConfig';

function createXHR() {
    return new XMLHttpRequest();
}

class AjaxHelper {
    public ajax$: any;

    constructor(url, method) {
        this.ajax$ = ajax({
            createXHR, // <--- here
            url: url,
            crossDomain: true,
            withCredentials: false,
            method: method
        });
    }
}

export function AjaxRequestBuilder(path, method = "GET") {
    return new AjaxHelper(`${HOST}/${path}`, method).ajax$
}