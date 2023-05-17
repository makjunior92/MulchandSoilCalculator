$(function () {
    var amountObj = {},
        attachmentsCount = 0;

    $('#fileupload').fileupload({
        dataType: 'json',
        autoUpload: false,
        acceptedFileType: /(\.|\/)(gif|jpe?g|png)$/i,
        maxFileSize: 2000000,
        maxNumberOfFiles: 1,
        add: function (e, data) {
            
            $.each(data.files, function (index, file) {
                if (!/(\.|\/)(gif|jpe?g|png)$/i.test(file.type)) {
                    file.error = 'Invalid file type.';
                    alert('Invalid file type(s). Only gif, jpeg and png files allowed.')
                    data.abort();
                } else {
                    $('<li>').text(file.name).appendTo('#fileList');
                    var jqXHR = data.submit()
                    jqXHR.done(function( data, textStatus, jqXHR ) {
                        $.each(data.files, function (index, file) {
                            $('<input type="hidden" name="file_'+ attachmentsCount++ +'">').val(file.url).appendTo('#fileListHidden');
                        });
                    });
                }
                
            });

            //Save pics to the server
            /*$.getJSON('server/', function (result) {
                data.formData = result;
                var jqXHR = data.submit()
                jqXHR.done(function( data, textStatus, jqXHR ) {
                    $.each(data.files, function (index, file) {
                        $('<input type="hidden" name="file_'+ attachmentsCount++ +'">').val(file.url).appendTo('#fileListHidden');
                    });
                });
            });*/

            
        }
    });

    $("#submitButton").on('click', function () {
        //Submit the form
        $.ajax({
            type: 'POST',
            url: 'server/sendmail.php',
            data: $('#cctv-form').serializeArray(),
            success: function (res) {
                console.log('Successful.');
                console.log(res);
            },
            error: function (err) {
                console.log('An error occurred.');
                console.log(err);
            },
        });
    });


    function updateAmount() {
    
        var amount = 0;
        console.log('=======================');
        Object.keys(amountObj).forEach(function(key) {
            console.log(key, amountObj[key]);
            amount+=amountObj[key];
        });
        console.log('=======================');
        
        $("#calculatedAmount").html(amount);
    };

    //Email field
    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    document.querySelector("input[name=emailfield]").addEventListener("change", function () {
        if(!validateEmail(this.value)) {
            $(this.parentNode).addClass('has-error');
            document.querySelector("#emailfield-help").style.display = 'block';
            console.log('not valid email')
        } else {
            $(this.parentNode).removeClass('has-error')
            document.querySelector("#emailfield-help").style.display = 'none';
            console.log('valid email')
        }
    })


    $("select[name=locationtype]").on("change", function() {
        amountObj[this.name] = +this.value;
        updateAmount();
    });

    $("#inOutDoor").on("click", 'button', function (event) {
        $( "#inOutDoor" ).find('button').each(function( index ) {
            $( this ).removeClass('active')
        });
        $( this ).addClass('active')

        switch (this.id) {
            case 'indoorButton':
                amountObj['inOutDoor'] = 20;
                break;
            case 'outdoorButton':
                amountObj['inOutDoor'] = 10;
                break;
            case 'bothButton':
                amountObj['inOutDoor'] = 30;
                break;
            default:
                break;
        }
        document.querySelector("input[name=inoutdoor]").value = this.textContent || this.innerText;
        updateAmount();
    });
    
    $("select[name=cameras]").on( "change", function() {
        amountObj[this.name] = +this.value;
        updateAmount();
    });

    $("select[name=camerasquality]").on( "change", function() {
        amountObj[this.name] = +this.value;
        updateAmount();
    });
    
    $("select[name=daysofrec]").on( "change", function() {
        amountObj[this.name] = +this.value;
        updateAmount();
    });


    $("#monitorSelected").on("click", 'input', function (event) {
        switch (this.value) {
            case 'yes':
                $("#monitorSizeBlock").show();
                $("#mountedBlock").show();
                break;
            case 'no':
                amountObj['monitorsize'] = 0;
                $("select[name=monitorsize] option[value='0']").prop('selected', 'true');
                amountObj['mountedon'] = 0;
                $("select[name=mountedon] option[value='0']").prop('selected', 'true');
                $("#monitorSizeBlock").hide();
                $("#mountedBlock").hide();
                updateAmount();
                break;
            default:
                break;
        }
    });

    $("select[name=monitorsize]").on( "change", function() {
        amountObj[this.name] = +this.value;
        updateAmount();
    });

    $("select[name=mountedon]").on( "change", function() {
        amountObj[this.name] = +this.value;
        updateAmount();
    });

    $("#inetConnection").on("click", 'input', function (event) {
        switch (this.value) {
            case 'no':
                $("#planToHaveConnectionBlock").show();
                $("#inetTypeBlock").hide();
                break;
            case 'yes':
                $("#planToHaveConnectionBlock").hide();
                $("#inetTypeBlock").show();
                break;
            default:
                break;
        }
    });
    
    $("select[name=installationdate]").on( "change", function() {
        amountObj[this.name] = +this.value;
        updateAmount();
    });

});