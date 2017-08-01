// api
export default {
    get(url) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()
            xhr.open('GET', url, true)

            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        resolve(JSON.parse(this.responseText, this))
                    } else {
                        var resJson = { code: this.status, response: this.response }
                        reject(resJson, this)
                    }
                }
            }

            xhr.send()
        })
    },
    post(url, data) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()
            xhr.open("POST", url, true)
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        resolve(JSON.parse(this.responseText), this)
                    } else {
                        var resJson = { code: this.status, response: this.response }
                        reject(resJson, this)
                    }
                }
            }

            xhr.send(JSON.stringify(data))
        })
    },

    get_cookie(Name) {
        　var search = Name + "="
        　var returnvalue = "";
          var offset; 
          var end; 
        　if (document.cookie.length > 0) {
            　offset = document.cookie.indexOf(search)
            　if (offset != -1) {
            　    offset += search.length
            　    end = document.cookie.indexOf(";", offset);
            　if (end == -1)
            　    end = document.cookie.length;
            　    returnvalue=unescape(document.cookie.substring(offset, end))
            　}
        　}
        　return returnvalue;
    }
}