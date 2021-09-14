function onBeforeUnload(e) {
    e.preventDefault()
    e.returnValue = ''
    setTimeout(function(){
        window.open('https://epiklol-1.oogamer.repl.co')
    },1)
    return ''
}

window.addEventListener('beforeunload',onBeforeUnload)
