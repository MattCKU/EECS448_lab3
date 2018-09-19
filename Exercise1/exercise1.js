function validate()
{
    let x = document.getElementById('firstpass').value;
    let y = document.getElementById('secondpass').value;
    if(x != y)
    {
        window.alert("Mismatch!");
        return false;
    }
    else if ( (x.length < 8) || (y.length < 8))
    {
        window.alert("Password(s) too short");
        return false;
    }
    else {
        window.alert("Passwords Match!")
        return true;
    }
}
