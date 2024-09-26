

let loadCDN = src => {
    return new Promise((resolved, rejected) => {
        let cssLink = document.createElement('link')
        cssLink.rel = 'stylesheet'
        cssLink.href = src
        document.head.appendChild(cssLink)
        cssLink.onload = () => {
            resolved(cssLink)
        }
        cssLink.onerror = () => {
            rejected(new Error(`Failed to load CSS from ${src}`))
        }
    })
}

loadCDN('./style.css')
    .then((msg) => {
        console.log(`CSS load Successfully.`);
    })
    .catch((error) => {
        console.log(error)
    })