function titleUpdate() {

     document.removeEventListener('DOMNodeInserted', titleUpdate);
     document.removeEventListener('DOMContentLoaded', titleUpdate);

     var x = document.createElement("INPUT");
     x.setAttribute("type", "range");
     x.setAttribute("min", "0.1");
     x.setAttribute("max", "3");
     x.setAttribute("step", "0.2");
     x.addEventListener('input', function(evt) {
          document.getElementsByTagName("video")[0].playbackRate = this.value;
          console.log(this.value);
     });
     document.getElementById("placeholder-player").appendChild(x);

     chrome.runtime.sendMessage('enable_page_action', function () {});
}

// event listeners
document.addEventListener('DOMNodeInserted', titleUpdate);
document.addEventListener('DOMContentLoaded', titleUpdate);
