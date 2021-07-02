window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "auto";
   document.getElementById("navbar").style.transition = "1s";
    document.getElementById("logo").style.height = "42px";
    document.getElementById("logo").style.wdith = "100px!important";

  } else {
    document.getElementById("logo").style.height = "80px";
    document.getElementById("logo").style.wdith = "140px";
   document.getElementById("navbar").style.height = "auto";
  }
}







