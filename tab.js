

//$('.tab-button').eq(2).on('click', function(){
//    $('.tab-button').removeClass('orange');
//    $('.tab-button').eq(2).addClass('orange');
//    $('.tab-content').removeClass('show');
//    $('.tab-content').eq(2).addClass('show');
//                    
//});

//복붙이 될떄마다 eq() 가 0,1,2 되게끔하기

for (let i = 0; i < $('.tab-button').length; i ++){
    $('.tab-button').eq(i).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
                    
});
    
}