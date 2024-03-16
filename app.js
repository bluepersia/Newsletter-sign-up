document.querySelector ('.card_form').addEventListener ('submit', handleSubmit);
const inputWrapper = document.querySelector ('.card_input-wrapper');
const inputError = document.querySelector ('.card_input-error');
const card = document.querySelector ('.card');
let cardHTML = card.innerHTML;

function handleSubmit (e)
{
    e.preventDefault ();

    inputWrapper.classList.remove ('invalid');

    const email = new FormData(e.target).get ('email');
    
    if (!isEmail (email))
       return setError ('Valid email required');

       card.classList.add ('success');

    card.innerHTML = `
    <div class="card_content">
        <img class="card_success_img" src="./assets/images/icon-success.svg"/>
        <h1 class="card_success_title">Thanks for subscribing!</h1>
        <p class="card_success_body">A confirmation email has been sent to <span class="email">ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.</p>
    </div>
    <button class="card_success_btn card_btn-submit">Dismiss message</button>`

    document.querySelector ('.card_success_btn').addEventListener ('click', dismiss);
}

function setError (err)
{
    inputError.textContent = err;
    inputWrapper.classList.add ('invalid');
}

function isEmail (val)
{
    const regexp = new RegExp (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    return val.match (regexp);
}


function dismiss ()
{
    card.innerHTML = cardHTML;
    card.classList.remove ('success');
}