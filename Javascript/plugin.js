"use strict" ;
$(document).ready(function(){
    
    /* navbar changing  */ 
    $(window).scroll( function(){
 
    if($(this).scrollTop() >$(".welcome").outerHeight()){
        $(".navbar").css({"background-color":"#fff" , "color" :"#434343"})
         $(".welcome button").css({ "color" :"#434343"}) ; 
            $(".brand").attr("src","images/brandg.png")
    }
    else{
        $(".navbar").css("background-color","transparent") ; 
        $(".welcome button").css({ "color" :"#fff"})
        $(".brand").attr("src","images/brandw.png")
    }
    }
    )
    
    /*menu clicks */ 
    
     $(".home").click(function (){
     
        $("body").animate({scrollTop:0},1000) ;
      
    });
    $(window).scroll(function(){
        if($(this).scrollTop()<=$(".projects").offset().top){
            $(".home").addClass("active");
            $(".project").removeClass("active");
        $(".contact").removeClass("active");
    
    }})
    
    $(".project").click(function (){
     
        $("body").animate({scrollTop:$(".projects").offset().top+5},1000) ;
       
    });
      $(window).scroll(function(){
        if($(this).scrollTop()>=$(".projects").offset().top-5){
            $(".project").addClass("active");
            $(".home").removeClass("active");
        $(".contact").removeClass("active");
        
    }})
    
    $(".contact").click(function (){
     
        $("body").animate({scrollTop:$(".contacts").offset().top-85},1000) ;
         
        
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>=$(".contacts").offset().top-95){
            $(".contact").addClass("active");
            $(".home").removeClass("active");
        $(".project").removeClass("active");
        
    }})
/* Type Writer */ 
    
    new TypeIt('.head', {
    strings: "Hello I'm<p> Mohamed Khaled </p>UI/UX Designer & Front End Web Developer",
    speed: 100,
    breakLines: false,
    autoStart: true,
    callback: function () {
      document.querySelector('.head ').style.display = "Front-end Web Develope";
    }
});
   
    /* on scroll */ 
/* animated progress */ 
 
})
   $(window).scroll(function(){
        if($(this).scrollTop()>=$(".projects").offset().top+150){
            
            setTimeout(function(){
  $(".html .progress-bar").css("width",$(".progress-bar").attr("aria-valuenow")+"%")   
},1500) ; 
            setTimeout(function(){
  $(".css .progress-bar").css("width",$(".css .progress-bar").attr("aria-valuenow")+"%")   
},1500)
            setTimeout(function(){
  $(".jquery .progress-bar").css("width",$(".jquery .progress-bar").attr("aria-valuenow")+"%")   
},1500)
       setTimeout(function(){
  $(".joomla .progress-bar").css("width",$(".joomla .progress-bar").attr("aria-valuenow")+"%")   
},1500)
            setTimeout(function(){
  $(".php .progress-bar").css("width",$(".php .progress-bar").attr("aria-valuenow")+"%")   
},1500)
        }
    
    })  
