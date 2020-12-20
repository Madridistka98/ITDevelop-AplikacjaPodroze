<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
<body>
<form method="post" action="/register/check">
        @csrf
        <input type="email" name="email" placeholder="enter your email"><br>
        <input type='text' name='name' placeholder='enter your name'><br>
        <input type="text" name='surname' placehplder='enter your surname'><br>
        <input type="password" name='password' placeholder="password"><br>
        <input type="submit">
    </form>
</body>
</html>