window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getItem('NAME');
    const email = sessionStorage.getItem('EMAIL');
    const phone = sessionStorage.getItem('PHONE');
    const address = sessionStorage.getItem('ADDRESS');
    const code = sessionStorage.getItem('CODE');
    const subject = sessionStorage.getItem('SUBJECT');
    
    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-email').innerHTML = email;
    
    document.getElementById('result-phone').innerHTML = phone;
    document.getElementById('result-address').innerHTML = address;
    document.getElementById('result-code').innerHTML = code;
    document.getElementById('result-subject').innerHTML = subject;

})