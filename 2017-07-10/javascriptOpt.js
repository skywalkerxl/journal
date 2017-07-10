/**
 * Created by Administrator on 2017/7/10.
 */
/*
 * Author:刘敏
 * CreateDate:2014-04-14
 * Email:liuminahcn@sina.com
 * Website:http://www.linhik.com/
 * Fun:JS操作
 * Version:1.0.1
 *
 * 历史版本
 * V1.0.1
 * 2015-4-12
 * 新增获取URL参数的函数
 *
 * V1.0.0
 * 2014-04-14
 * 设置Cookie，设置带过期时间的Cookie，获取Cookie，删除Cookie，string.trim()方法，获取InnerText，JS对象深复制
 */

//增加cookie
//a：cookie名称，b：cookie值
function setCookie(a, b) {
    if (null != b && void 0 != b && "" != b) {
        var c = escape(b.trim());
        document.cookie = a.trim() + "=" + c + ";path=/";
    } else {
        document.cookie = a.trim() + "=" + ";path=/";
    }
}

//增加cookie
//a：cookie名称，b：cookie值，c：cookie过期的天数
function setCookieWithExpires(a, b, c) {
    var e = new Date();
    e.setDate(e.getDate() + parseInt(c));

    if (null != b && void 0 != b && "" != b) {
        var d = escape(b.trim());
        document.cookie = a.trim() + "=" + d + "; expires=" + e.toGMTString() + ";path=/";
    } else {
        document.cookie = a.trim() + "=" + "; expires=" + e.toGMTString() + ";path=/";
    }
}

//删除cookie
//a：cookie名称
function delCookie(a) {
    var b = (new Date(0)).toGMTString();
    document.cookie = a + "=;expires=" + b+";path=/";
}

//获取cookie
//a：cookie名称
function getCookie(a) {
    var d;
    var b = document.cookie;
    var c = b.split(";");
    for (e = 0; e < c.length; e++) {
        var f = c[e].split("=");
        if (a == f[0].toString().trim()) {
            d = f[1];
            break;
        }
    } if (void 0 == d || null == d) {
        return "";
    }
    else {
        var g = unescape(d.trim());
        return g;
    }
}

//JavaScript中string类型变量的trim方法实现
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "")
}

//Html中Dom操作的获取Html内部文本的方法getHtmlNodeText方法实现
//部分浏览器可以直接通过innerText获取
function getHtmlNodeText(e) {
    if (e.innerText) {
        return e.innerText;
    }
    else {
        var t = "";
        e = e.childNodes || e;
        for (var i = 0; i < e.length; i++) {
            if (e[i].nodeType == 3) {
                t += e[i].nodeValue;
            }
            else {
                t += getHtmlNodeText(e[i].childNodes);
            }
        }
        return t;
    }
};

//JS对象的深度复制
function copy(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copyobj = new Date();
        copyobj.setTime(obj.getTime());
        return copyobj;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copyobj = [];
        var i;
        var len;
        for (i = 0, len = obj.length; i < len; ++i) {
            copyobj[i] = copy(obj[i]);
        }
        return copyobj;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copyobj = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copyobj[attr] = copy(obj[attr]);
        }
        return copyobj;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

//获取URL中的参数
function getURLParam(name) {
    var url = document.URL;
    var para = "";
    if (url.lastIndexOf("?") > 0) {
        para = url.substring(url.lastIndexOf("?") + 1, url.length);
        var arr = para.split("&");
        para = "";
        for (var i = 0; i < arr.length; i++) {
            var data = arr[i].split("=");
            if (name == data[0].toString().trim()) {
                return unescape(data[1].toString().trim());
            }
        }
    }
    return "";
}