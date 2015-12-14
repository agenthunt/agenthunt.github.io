function toggleReadMoreContent(id, btn){
    if($('#' + id).hasClass('less')) {
        $('#' + id).removeClass('less');
        $('#' + id).addClass('more');
        $(btn).html('Less...');
    } else {
        $('#' + id).removeClass('more');
        $('#' + id).addClass('less');
        $(btn).html('More...');
    }
}