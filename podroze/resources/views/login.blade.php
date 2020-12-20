<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form method="post" action="/login/check">
        @csrf
        <input type="email" name="email" placeholder="enter your email"><br>
        <input type="password" name='password' placeholder="password"><br>
        <input type="submit"><br>
        <a href="/register">Create new account!</a>
    </form>
</body>
</html>