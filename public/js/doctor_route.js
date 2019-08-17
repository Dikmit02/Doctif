function fetchDoctor(done){
    $.get('/api/doctor',function(data){
        done(data)

    })
}

function addDoctor(name,qualification,yearOfExp,department){
    $.post('/api/doctor',{
        name:name,
        qualification:qualification,
        yearOfExp:yearOfExp,
        department:department
    },function(data){
        done(data)
    })
}

