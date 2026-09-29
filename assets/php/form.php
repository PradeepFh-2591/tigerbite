<?php
// Include the PHPMailer class
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

function url(){
  return sprintf(
    "%s://%s",
    isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
    $_SERVER['SERVER_NAME']
  );
}

try {
    if($_POST) {
        
        $mail = new PHPMailer(true);

        // Server settings
        $mail->SMTPDebug = SMTP::DEBUG_OFF;
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'officialtigerbite@gmail.com';
        $mail->Password   = 'qgmpbkdugewhfvpj';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;
    
        // Recipients
        $mail->setFrom('officialtigerbite@gmail.com', 'Tiger Bite');
        $mail->addAddress('jstnkiruba@gmail.com', 'kiruba');
        $mail->addAddress('franchise@tigerbite.co.uk', 'Tiger Bite Franchise');
    
        // Content
        $mail->isHTML(true);
        
        $fullname = trim(stripslashes($_POST['fullname']));
        $age = trim(stripslashes($_POST['age']));
        $email = trim(stripslashes($_POST['email']));
        $location = trim(stripslashes($_POST['location']));
        $investment = trim(stripslashes($_POST['investment']));
        $experience = trim(stripslashes($_POST['experience']));
        $subject = "New Enquiry Raised!";
    
        $message = "";
        if ($subject == '') { $subject = "Enquiry"; }
    
        // Set Message
        $message .= "Email from: " . $fullname . "<br />";
        $message .= "Age: " . $age . "<br />";
        $message .= "Email Address: " . $email . "<br />";
        $message .= "Location: " . $location . "<br />";
        $message .= "Investment Available: " . $investment . "<br />";
        $message .= "Food Sector Experience: " . $experience . "<br />";
        // $message .= "comments: <br />";
        // $message .= nl2br($comments);
        $message .= "<br /> ----- <br /> This email was sent from your site " . url() . " franchise form. <br />";
   
        $mail->Subject = $subject;
        $mail->Body    = $message;
        $mail->AltBody = "Tiger Bite Franchise Form";
    
        // Send the email
        
        $mail->send();
        
        if ($mail) { 
            header("Location:https://foodhub-webteam.com/franchise/pages/tiger-bite/franchise.html");
            die();
        }

    }
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
