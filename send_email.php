<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $message = $_POST['Message'];

    // Set up email content
    $to = 'kcqkoo@gmail.com';
    $subject = 'Contact Form Submission';
    $headers = "From: $email\r\nReply-To: $email\r\n";
    $message_body = "Name: $name\nEmail: $email\n\n$message";

    // Send the email
    $mail_sent = mail($to, $subject, $message_body, $headers);

    if ($mail_sent) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send the email. Please try again later.";
    }
}
?>