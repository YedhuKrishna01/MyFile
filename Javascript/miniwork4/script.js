document.getElementById('signup-button').addEventListener('click', function() {
    const fname = document.getElementById('firstname').value;
    const lname = document.getElementById('lastname').value;
    const em = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirm-password').value;

    if (fname === '' || lname === '' || em === '' || pass === '' || confirmPass === '') {
        alert('All fields are required');
    } else if (pass !== confirmPass) {
        alert('Passwords do not match');
    } else {
        alert('Form submitted successfully');
        document.getElementById('registration-form').reset();

        localStorage.setItem('firstname', fname);
        localStorage.setItem('lastname', lname);
        localStorage.setItem('email', em);

        const obj1 = new Datas(fname, lname, em, pass, confirmPass);
        obj1.getinfo();
    }
});

document.getElementById('firstname').value = localStorage.getItem('firstname');
document.getElementById('lastname').value = localStorage.getItem('lastname');
document.getElementById('email').value = localStorage.getItem('email');

function submitHandler(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    if (data.get('firstname') === '') {
        document.getElementById('firstname').style.border = '4px solid red';
    } else {
        document.getElementById('firstname').style.border = '4px solid green';
    }
}

function changeHandler(event) {
    localStorage.setItem(event.target.name, event.target.value);
}

class Datas {
    constructor(fname, lname, em, pass, confirmPass) {
        this.firstname = fname;
        this.lastname = lname;
        this.email = em;
        this.password = pass;
        this.re_enter = confirmPass;
    }

    getinfo() {
        console.log(`Hello ${this.firstname} ${this.lastname}, the password of your email id ${this.email} is changed to ${this.password}`);
    }

    inarrform(){
        const arr = [`${this.firstname}`,`${this.lastname}`,]
    }
}
