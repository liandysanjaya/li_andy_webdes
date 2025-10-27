function bt() {
    var abc = document.getElementById('a')
    document.getElementById('b').innerHTML = ''
    if (abc.innerHTML == "ABC") {
        abc.innerHTML = 'DEF'
        alert('Ok')
    }
    else {
        abc.innerHTML = 'ABC'
    }
    
}

function co() {
    var abc = document.getElementById('b')
    let ab = confirm('Yang mana?')
    if (ab) {
        abc.innerHTML = "Yes"
    }
    else {
        abc.innerHTML = 'No'
    }
}
    