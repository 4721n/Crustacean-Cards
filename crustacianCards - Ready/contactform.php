
<?php 
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST["question"];

    $mailTo = "contact@crustacean.cards";
    $headers = "From: ".$email." via CrustaceanCards";
    $txt = "You have a message from ".$name.".\n\n".$question;

    mail($mailTo,$headers,$txt);
    header("Location: index.html?mailsend#contact-id");

}

