
$(window).scroll(function(){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(".blind").offset().top;
    var elemBottom = elemTop + $(".blind").height();
    alert(docViewBottom + " " + docViewTop + " " + elemBottom + " " + elemTop);
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    alert("asdf");
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}