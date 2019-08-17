window.onload = function(){
    $('.btn').click(function (event) {

       
        event.preventDefault();
            
        const cc=$(event.target).text().toLowerCase()
        location.href = cc;
        
        
    })
}