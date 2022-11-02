$(document).ready(function() {
    $("#design_icon").click(function() {
        $("#design").toggle();
    });

    $("#development_icon").click(function() {
        $("#development").toggle();
    });

    $("#product_management_icon").click(function() {
        $("#product_management").toggle();
    });

    // $("#work1-image").mousemove(function() {
    //     $("#work1-hover").hover();
    // });


    // $("#work1-image").mouseenter(function () {
    //     $(this).hide();
    //     $("#work1-hover").show();
    // });
 
    // $("#work1-hover").mouseleave(function () {
    //     $("#work1-image").show();
    //     $(this).hide();
    // }).mouseleave();//trigger mouseleave to hide second div in beginning 

});

// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')
// if (toastTrigger) {
//   toastTrigger.addEventListener('click', () => {
//     const toast = new bootstrap.Toast(toastLiveExample)

//     toast.show()
//   })
// }


