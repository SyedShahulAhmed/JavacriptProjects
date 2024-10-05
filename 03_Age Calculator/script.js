const date = document.querySelector('#userdate')
const datecal = document.querySelector('#result')
const agevalue = document.querySelector('.age')
datecal.addEventListener('click', checking)
function checking() {
    const dateval = date.value
    if (dateval === '') {
        alert("Enter Valid date")
    }
    else {
        const ageval = userage(dateval)
        agevalue.innerHTML = `Your are ${ageval} years Old`
    }
}
const userage = (dateval) => {
    const currentDate = new Date();
    const birthdayDate = new Date(dateval);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }
    return age;
}