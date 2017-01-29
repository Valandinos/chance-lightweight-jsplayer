<!DOCTYPE html>
<html>
  <head>
    <title>Login Page</title>
  </head>
  <body>
    <h1>An authorization is required to access this page ! Please enter the password.</h1>
    <form action="<?php $_SERVER["PHP_SELF"];?>" method="post">
      Password: <input type="password" name="pass"><br>
      <input type="submit">
    </form>
  </body>
</html>
<?php
$original_pwd_hash = '$2y$10$OcXmfQU.hqIQgtKbjSVJUeCEEsrMhRip2y/w0m4630FU00SzuUKJW';
if ($_SERVER["REQUEST_METHOD"] == "POST"){
  $mdp_check = password_verify($_POST["pass"], $original_pwd_hash);
  if ($mdp_check == "true") {
    setcookie("logging", "logged", time()+15811200);
    header("Location: player.php");
    exit();
  }
  else {
    echo "Wrong password, try again !";
    exit();
  }
}
?>
