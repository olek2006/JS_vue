let attempts = 0;
while (attempts < 3) {
    let pinCode = +prompt('Введіть ПІН код: ');
    if (pinCode === 2026) {
        alert("Доступ дозволено")
        break;
    }
    else {
        attempts += 1;
        if (attempts === 3){
            alert("Доступ заблоковано");
        }
        else{
            alert(`ПІН код неправильний, ${3 - attempts} спроб лишилось`)
        }
    }
}