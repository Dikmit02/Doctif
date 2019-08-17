$(function () {
    let name = $('#name')
    let qualification = $('#qualification')
    let yearOfExp = $('#yearOfExp')
    let department = $('#department')
    let submitbtn = $('#submit')
    let tbl_doctor = $('#doctors')



    fetchDoctor(function (doctors) {
        tbl_doctor.empty()
        tbl_doctor.append(
            
            `<tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>YearOfExp</th>
            <th>Department</th>

        </tr>`
            
        )
        for(doctor of doctors){
            tbl_doctor.append(
                `<tr>
                <td>${doctor.name}</td>
                <td>${doctor.qualification}</td>
                <td>${doctor.yearOfExp}</td>
                <td>${doctor.department}</td>
            </tr>`
            )
        }

    })
    submitbtn.click(function(){
        addDoctor(
            name.val(),
            qualification.val(),
            yearOfExp.val(),
            department.val(),
            function(addedDoctor){
                window.alert("Added "+addedDoctor.name+" to the database")
            }
        )
        location.reload(true);
    })
})