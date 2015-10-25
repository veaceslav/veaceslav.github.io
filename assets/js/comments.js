var thispage = document.location.href;
$.getJSON('http://pooleapp.com/data/bb27bcff-6b5b-45ef-a146-8a4e3f596f4b.json', function(d) {
    $.each(d, function(key, val) {
        $.each(val, function(comm){
            if(val[comm]["path"] == savedUrl){
                console.log(JSON.stringify(val[comm]));
            }
        });

    });
        console.log(savedUrl);
});
