function ajaxCaller(i_url,func){
    $.ajax({
        url : i_url,
        method : "GET"
    }).done(function(data){
        //console.log("ajaxCaller done : " + JSON.stringify(data));
        func(data);
    }).fail(function(data){
        console.log("ajaxCaller fail : " + JSON.stringify(data));
    });
}