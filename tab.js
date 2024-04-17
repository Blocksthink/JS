

//$('.tab-button').eq(2).on('click', function(){
//    $('.tab-button').removeClass('orange');
//    $('.tab-button').eq(2).addClass('orange');
//    $('.tab-content').removeClass('show');
//    $('.tab-content').eq(2).addClass('show');
//                    
//});

//복붙이 될떄마다 eq() 가 0,1,2 되게끔하기

// for (let i = 0; i < 3; i ++){
//     $('.tab-button').eq(1).on('click', function(){
//         탭열기(1)
// })
    
// }


$('.list').click(function(e){

    탭열기(e.target.dataset.id)
    
    //  탭열기(0)
    // if(e.target == document.querySelectorAll('.tab-button')[0]){
    //     탭열기(0)
    // }
    // // 지금누른게 버튼1이면 탭열기(0)
    // if(e.target == document.querySelectorAll('.tab-button')[1]){
    //     탭열기(1)
    // }
    // // 지금누른게 버튼2이면 탭열기(0)
    // if(e.target == document.querySelectorAll('.tab-button')[2]){
    //     탭열기(2)
    // }
});

function 탭열기(숫자){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}