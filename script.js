document.getElementById('notification').style.visibility = 'hidden'
document.getElementById('globeicon').style.visibility = 'hidden'

function getBrowserInfo() {
            // Get the user-agent string
            let userAgentString = 
                navigator.userAgent;
          
            // Detect Chrome
            let chromeAgent = 
                userAgentString.indexOf("Chrome") > -1;
          
            // Detect Internet Explorer
            let explorerAgent = 
                userAgentString.indexOf("MSIE") > -1 || 
                userAgentString.indexOf("rv:") > -1;
          
            // Detect Firefox
            let firefoxAgent = 
                userAgentString.indexOf("Firefox") > -1;
          
            // Detect Safari
            let safariAgent = 
                userAgentString.indexOf("Safari") > -1;
                  
            // Discard Safari since it also matches Chrome
            if ((chromeAgent) && (safariAgent)) 
                safariAgent = false;
          
            // Detect Opera
            let operaAgent = 
                userAgentString.indexOf("OP") > -1;

            let edgeAgent = 
                userAgentString.indexOf("Edge") > -1 || userAgentString.indexOf("Edg") > -1
                  
            // Discard Chrome since it also matches Opera     
            if ((chromeAgent) && (operaAgent)) 
                chromeAgent = false;

            if ((chromeAgent) && (edgeAgent)) 
                chromeAgent = false;
          
            if (chromeAgent == true){
              return 'Chrome'
            }
            if (edgeAgent == true){
              return 'Edge'
            }
            if (firefoxAgent == true){
              return 'Firefox'
            }
            if (safariAgent == true){
              return 'Safari'
            }
            if (explorerAgent == true){
              return 'Explorer'
            }
            if (operaAgent == true){
              return 'Opera'
            }
}

var video = document.createElement('video');
if (getBrowserInfo() == 'Chrome' || getBrowserInfo() == 'Opera' || getBrowserInfo() == 'Firefox'){
  video.muted = true
}
video.id = 'vid'
video.setAttribute('src','Video.mp4')
video.setAttribute('autoplay',true)
document.getElementById('body').appendChild(video)

document.getElementById('close').addEventListener('click',function(){
  document.getElementById('notification').style.visibility = 'hidden'
  document.getElementById('globeicon').style.visibility = 'hidden'
  document.getElementById('title').innerHTML = 'Title'
  document.getElementById('message').innerHTML = 'Message'
})

function fakealert(title,msg){
  document.getElementById('title').innerHTML = title
  document.getElementById('message').innerHTML = msg
  if (getBrowserInfo() == 'Chrome' || getBrowserInfo() == 'Opera'){
    document.getElementById('close').style.border = 'thin solid #4285f4';
    document.getElementById('title').style.font = '14px system-ui'
    document.getElementById('notification').style.backgroundColor = '#292a2d'
    document.getElementById('close').style.color = '#23252a'
    document.getElementById('close').style.backgroundColor = '#8ab4f8'
  }
  if (getBrowserInfo() == 'Firefox'){
    document.getElementById('notification').style.top = '55%'
    document.getElementById('close').style.backgroundColor = '00ddff'
    document.getElementById('notification').style.backgroundColor = '#42414d'
    document.getElementById('title').style.left = '25px'
    document.getElementById('globeicon').style.visibility = 'visible'
    document.getElementById('title').style.fontFamily = 'sans-serif'
    document.getElementById('title').style.fontSize = '12px'
    document.getElementById('close').style.color = '#2b2a33'
  }
  if (getBrowserInfo() == 'Safari'){
    return
  }
  document.getElementById('notification').style.visibility = 'visible'
}

setInterval(function(){
  video.play()
},0)

document.getElementById('body').addEventListener('click',function(){
  setInterval(function(){
    video.volume = 1
    video.muted = false
  },0)
})

setTimeout(function(){
  var Text = document.createElement('p')
  Text.innerHTML = 'Try to pause this video. (You cannot possibly pause this video.)'
  document.getElementById('body').appendChild(Text)
  setTimeout(function(){
    fakealert('Kid Amogus says','HAHAHAH GET RICKROLLED KID NOOB XD LOL')
  },750)
},3750)
