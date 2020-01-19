
$(function () {
    $("#commentForm").validate();
    // $('#contact-form').validator();

    // when the form is submitted
    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) { //needed for form validation
            $(".spinner").show()
            // Stop form from submitting normally
            // e.preventDefault();
            var url = "https://sender.resultants-e.nl/sender.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    $('#successmessage').show()
                    $('#contact-form').hide( 250 )

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    // console.log("Status: " + textStatus); alert("Error: " + errorThrown);
                    $(".spinner").hide()
                    $('#errormessage').show()
                }
            }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
                // console.log("Status: " + textStatus); alert("Error: " + errorThrown);
                $('#errormessage').show()
            });
        };
        return false;
    });
});