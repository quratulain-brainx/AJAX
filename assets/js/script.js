
//Load Method
//Syntax: $(selector).load(URL,data,callback);
$(document).ready(function(){
    $('.loadMethod').click(function () {
       $('p').load('https://httpbin.org/get',
           function (responseTxt, statusTxt, xhr) {
           if(statusTxt === 'success') {
               alert('Load Method: Data fetched Successfully!!! Yayyyy');
           }
           else if(statusTxt === 'failure'){
               alert("Error: " + xhr.status + ": " + xhr.statusText);
           }
       });
    });
});

//Get Method
//Syntax: $.get(url, [data],[callback]);
$(document).ready(function () {
    $('.getMethod').click(function () {
        $.get('https://httpbin.org/get',
            function (responseTxt, statusTxt, xhr) {
                if(statusTxt === 'success') {
                    console.log(responseTxt);
                    alert('Get method : Data fetched Successfully!!! Yayyyy');
                    $('p').text(responseTxt['headers']['Accept']);
                }
                else if(statusTxt === 'failure'){
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
                }
            });
    });
});

//Post Method
//Syntax: $.post(url,[data],[callback],[type]);
$(document).ready(function () {
    $('.postMethod').click(function () {
        $.post('https://httpbin.org/post',
            {name: 'Qurat', Greeting: 'Hello' },
            function(data,statusTxt){
            alert("Post Method Data: " + data + "\nStatus: " + statusTxt);
            $('p').text(data);
            debugger
        });
    });
});

//Post Method with Form Serialize
$(document).ready(function () {
    $('.formSubmit').click(function () {
        $.post('https://httpbin.org/post', $('form').serialize(), function(data,statusTxt){
            alert("Post Method Data: " + data + "\nStatus: " + statusTxt);
            $('p').text(data);
            debugger
        });
    });
});
