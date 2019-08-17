

// $(function () {

//     let inp_name = $('#name')
//     let inp_age = $('#age')
//     let inp_department = $('#department')
//     let btn_submit = $('#submit')
//     let tbl_patient = $('#patient')

//     function fetchPatients(patients) {


//         tbl_patient.empty()
//         tbl_patient.append(
//             `<tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Department</th>
//             </tr>`
//         )
//         for (patient of patients) {
//             tbl_patient.append(
//                 `<tr>
//                     <td>${patient.name}</td>
//                     <td>${patient.age}</td>
//                     <td>${patient.department}</td>
//                 </tr>`
//             )
//         }
//     }

//     $.get('/patient', function (data) {
//         console.log(data)
//         refreshPersonTable(data)
//     })

//     btn_submit.click(function () {
//         $.post('/patient',
//             {
//                 name: inp_name.val(),
//                 age: inp_age.val(),
//                 department: inp_department.val()
//             },
//             function (data) {

//                 refreshPersonTable(data)
//             }
//         )

//     })

// })













$(function () {

    let inp_name = $('#name')
    let inp_age = $('#age')
    let inp_department = $('#department')
    let btn_submit = $('#submit')
    let tbl_patient = $('#patient')

    fetchPatients(function (patients) {


        tbl_patient.empty()
        tbl_patient.append(
            `<tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    </tr>`
        )
        for (patient of patients) {
            tbl_patient.append(
                `<tr>
                            <td>${patient.name}</td>
                            <td>${patient.age}</td>
                            <td>${patient.department}</td>
                        </tr>`
            )
        }
    })

    btn_submit.click(function () {
        addPatients(
            inp_name.val(),
            inp_age.val(),
            inp_department.val(),
            function (addedPatient) {
                window.alert("Added " + addedPatient.name + " to Databse")
             })
        location.reload(true);
    })

})