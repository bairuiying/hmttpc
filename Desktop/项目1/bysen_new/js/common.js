$(function(){



  function aaa (one,two){
    $(one).on("mouseenter",function(){
      $(two).show()
    })
    $(one).on("mouseout",function(){
      $(two).hide()
    })
    return false 
  }
  
  aaa(".wx_talk","#qr_prev")
  aaa(".iconby53-QR","#qr_prev")
  
  aaa(".phone_talk","#phoneAsk")
  aaa(".iconby53-iPhone","#phoneAsk")

 
})
function gotop() {
  $('.gotop').click(function(){
    $('html ,body').animate({scrollTop: 0}, 300);
        return false;
    });
}