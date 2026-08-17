<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST["firstName"]);
    $lastName = htmlspecialchars($_POST["lastName"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $location = htmlspecialchars($_POST["location"]);
    $approxDate = htmlspecialchars($_POST["approxDate"]);
    $eventType = htmlspecialchars($_POST["eventType"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "info@eventswithechoes.com";
    $subject = "New Event Request from $firstName $lastName";
    $headers = "From: Echoes Events <info@eventswithechoes.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8";

    $body = "You have received a new message from your website:\n\n";
    $body .= "Name: $firstName $lastName\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Location: $location\n";
    $body .= "Approximate Date: $approxDate\n";
    $body .= "Event Type: $eventType\n\n";
    $body .= "Message: $message\n";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "Message sent successfully!";
    } else {
        http_response_code(500);
        echo "Failed to send message.";
    }
}
?>