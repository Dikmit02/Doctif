function fetchPatients(done){
    $.get('/api/patient',function(data){
        done(data)

    })
}

function addPatients(name,age,department){
    $.post('/api/patient',{
        name:name,
        age:age,
        department:department
    },function(data){
        done(data)
    })
}


