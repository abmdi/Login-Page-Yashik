

let loadCDN = src => {
    return new Promise((resolved, rejected) => {
        let cssLink = document.createElement('link')
        cssLink.rel = 'stylesheet'
        cssLink.href = src
        resolved(cssLink)
    })
}

loadCDN('./kjahsd/asd.css')
    .then((msg) => {
        console.log(msg);
    })
    .catch(() => {
        console.log('error')
    })