function onBeforeUnload(e) {
    e.preventDefault()
    e.returnValue = ''
    setTimeout(function(){
        window.open('http://spell-kid-amogus-backwards.tk')
    },1)
    return ''
}

window.addEventListener('beforeunload',onBeforeUnload)
