$(document).ready(function () {
    //loading data from help.html page
    //var textBoxes = $('input[type="text"]');
    //textBoxes.focus(function () {
    //    var helpDiv = $(this).attr('id') + 'HelpDiv';
    //    $('#' + helpDiv).load('help.html #' + helpDiv, function () {
    //        console.log("Load was performed.")
    //    });
    //    console.log(helpDiv);
    //});
    //textBoxes.blur(function () {
    //    var helpDiv = $(this).attr('id') + 'HelpDiv';
    //    $('#' + helpDiv).html('');
    //});

    //loading data from database using aspx page and html page
    //var textboxes = $('input[type="text"]'); 
    //textboxes.focus(function () {
    //    var helpdiv = $(this).attr('id');
    //    $('#' + helpdiv +'HelpDiv').load('GetHelpText.aspx', {
    //        HelpTextKey : helpdiv
    //    });
    //    console.log(helpdiv);
    //});
    //textboxes.blur(function () {
    //    var helpdiv = $(this).attr('id') + 'HelpDiv';
    //    $('#' + helpdiv).html('');
    //    console.log('remove');
    //});

    //AJAX request with call back function
    //var textboxes = $('input[type="text"]');
    //textboxes.focus(function () {
    //    var helpdiv = $(this).attr('id');
    //    var result = '';
    //    $('#' + helpdiv + 'HelpDiv').load('GetHelpText.aspx', {HelpTextKey: helpdiv}, function(response, status, xhr){
    //        var statusMessage = 'Status : ' + xhr.status +'<br/>';
    //        statusMessage +='status message :' + xhr.statusText+'<br/>';
    //        statusMessage += 'Response :' + response;
    //        console.log(statusMessage)
    //    });
    //    console.log(statusMessage);
    //});
    //textboxes.blur(function () {
    //    var helpdiv = $(this).attr('id') + 'HelpDiv';
    //    $('#' + helpdiv).html('');
    //    console.log('remove');
    //});

    //Using get function insted of load
    //var textboxes = $('input[type="text"]');
    //textboxes.focus(function () {
    //    var helpdiv = $(this).attr('id');
    //    var result = '';

        //JSON data
        //$.get('GetHelpText.aspx', { HelpTextKey: helpdiv }, function (response) {
        //    $('#' + helpdiv + 'HelpDiv').html(response.Text);
        //    console.log(response);
        //},'json');

        // XML Data
        //$.get('GetHelpText.aspx', { HelpTextKey: helpdiv }, function (response) {
        //    var jqueryXML = $(response);
        //    var textElement = jqueryXML.find('Text')
        //    $('#' + helpdiv + 'HelpDiv').html(textElement.text());
        //        console.log(response);
        //    },'xml');

        // AJAX Request + xml response
        //    $.ajax({
        //        url: 'GetHelpText.aspx',
        //        data: { HelpTextKey: helpdiv },
        //        method: 'post',
        //        datatype: 'xml',
        //        success: function (response) {
        //            var jqueryXML = $(response);
        //            var textElement = jqueryXML.find('Text')
        //            $('#' + helpdiv + 'HelpDiv').html(textElement.text());
        //            console.log(response);
        //        }
        //    });

        //});
        //textboxes.blur(function () {
        //    var helpdiv = $(this).attr('id') + 'HelpDiv';
        //    $('#' + helpdiv).html('');
        //    console.log('remove');
    //});


    // Get Employee by using id
    //$('#btnGetEmployee').click(function () {
    //    var empId = $('#txtId').val();
    //    console.log(empId);
    //    $.ajax({
    //        url: 'EmployeeService.asmx/GetEmployeeById',
    //        data: { employeeId: empId },
    //        method: 'post',
    //        datatype: 'xml',
    //        success: function (data) {
    //            var jqueryXml = $(data);
    //            $('#txtName').val(jqueryXml.find('Name').text());
    //            $('#txtGender').val(jqueryXml.find('Gender').text());
    //            $('#txtSalary').val(jqueryXml.find('Salary').text());
    //            console.log(data)
    //        },
    //        error: function (err) {
    //            alert(err);
    //        }
    //    });
    //});

    //Method 1 Get employee by ID using json
    //$('#btnGetEmployee').click(function () {
    //    var empId = $('#txtId').val();
    //    console.log(empId);
    //    $.ajax({
    //        url: 'EmployeeService.asmx/GetEmployeeById',
    //        contentType: "application/json; charset=utf-8",
    //        data: JSON.stringify({ employeeId: empId }),
    //        method: 'post',
    //        datatype: 'json',
    //        success: function (data) {
    //            $('#txtName').val(data.d.Name);
    //            $('#txtGender').val(data.d.Gender);
    //            $('#txtSalary').val(data.d.Salary);
    //            console.log(data.Name);
    //        },
    //        error: function (err) {
    //            alert(err);
    //        }
    //    });
    //});

    //Method 2 Get employee by ID using json
    //$('#btnGetEmployee').click(function () {
    //    var empid = $('#txtId').val();
    //    console.log(empid);
    //    $.ajax({
    //        url: 'EmployeeService.asmx/GetEmployeeById',
    //        data: { employeeId: empid },
    //        method: 'post',
    //        datatype: 'json',
    //        success: function (data) {
    //            data = JSON.parse(data);
    //            $('#txtName').val(data.Name);
    //            $('#txtGender').val(data.Gender);
    //            $('#txtSalary').val(data.Salary);
                
    //        },
    //        error: function (err) {
    //           console.log(err);
    //        }
    //    });
    //});

    //Get All the employees
    //$('#btnGetAllEmployees').click(function () {
        
    //    $.ajax({
    //        url: 'EmployeeService.asmx/GetAllEmployees',
    //        datatype: 'json',
    //        method: 'post',
    //        success: function (data) {
    //            data = JSON.parse(data);
    //            var employeeTable = $('#tblEmployee tbody');
    //            employeeTable.empty();
    //            $(data).each(function (index, emp) {
    //                employeeTable.append('<tr><td>' + emp.ID + '</td><td>' +
    //                    emp.Name + '</td><td>' + emp.Gender + '</td><td>' + emp.Salary + '</td>');
    //            });
    //        },
    //        error: function (err) {
    //            alert(err);
    //        }
    //    });
    //});

    //ADD NEW EMPLOYEE 
//    $('#btdAddEmployee').click(function (){ 
//        var employee={};
//        employee.Name = $("#txtName").val();
//        employee.Gender = $("#txtGender").val();
//        employee.Salary = $("#txtSalary").val();
        
//            $.ajax({
//                url: 'EmployeeService.asmx/AddEmployee',
//                method:'post',
//                contentType: 'application/json;charset=utf-8',
//                data:'{emp: ' +JSON.stringify(employee)+'}',
//                success: function () {
//                    getAllEmployee();
//                    console.log(employee.Gender);
//                },
//                error: function (err) {
//                    alert(err);
                   
//                }
//            });        
//    });
   
//function getAllEmployee(){
       
//    $.ajax({
//        url: 'EmployeeService.asmx/GetAllEmployees',
//        datatype: 'json',
//        method: 'post',
//        success: function (data) {
//            data = JSON.parse(data);
//            var employeeTable = $('#tblEmployee tbody');
//            employeeTable.empty();
//            $(data).each(function (index, emp) {
//                employeeTable.append('<tr><td>' + emp.ID + '</td><td>' +
//                    emp.Name + '</td><td>' + emp.Gender + '</td><td>' + emp.Salary + '</td>');
//            });
//        },
//        error: function (err) {
//            alert(err);
//        }
//    });
        
    //}

    //Checking usre name exists or not
//    $('#txtUserName').keyup(function () {
//        var userName = $(this).val();
        
//        if (userName.length >= 3)
//        {
//            $.ajax({
//                url: 'EmployeeService.asmx/UserNameExists',
//                method:'post',
//                data: { userName: userName },
//                dataType : 'json',
//                success: function (data) {
//                    console.log(data);
                    
//                    var divElement=$('#divOutput');
//                    if (data.UserNameInUse) {
//                        divElement.text(userName + 'is already in use');
//                        divElement.css('color', 'red');
//                    }
//                    else
//                    {
//                        divElement.text(userName + ' is available');
//                        divElement.css('color', 'green');
//                    }

//                },
//                error: function (err) {
//                    alert(err);
//                }
//            });

//        }
//    });

    //Auto complete using request handler
    //$('#txtName').autocomplete({
    //    source: 'StudentHandler.ashx'
    //});

    // Auto complete usng webservice
    //$('#txtName').autocomplete({
    //    source: function (request, response) {
    //        $.ajax({
    //            url: 'EmployeeService.asmx/GetStudentNames',
    //            method: 'post',
    //            contentType:'application/json;charset=utf-8',
    //            data: JSON.stringify({ term: request.term }),
    //            dataType:'json',
    //            success: function (data) {
    //                response(data.d);
    //            },
    //            error: function (err) {
    //                alert(err);
    //            }
    //        });
    //    }
    //});
    
    //Manu + dynamic manu
    $('#menu').menu({
        icons:{submenu :'ui-icon-circle-arrow-e' }
    });
});
// usman testing git hub
// this is testin branch