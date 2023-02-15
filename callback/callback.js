function newButton(text, cb) {
    const body = document.querySelector('body')
    const button = document.createElement('button');
    button.textContent = text
    //textContent = define um texto.

    cb(button);

    body.insertAdjacentElement('beforeend', button)
    //inserir o botão no body.

    return button
}
/*function newButton: criar um botão, mas antes de inserir um
botão na tela queremos fazer coisas novas nele e personalizadas
para cada botão que eu crie. */


newButton('Login', function(button) {
    button.style.cssText = `
    font-size: 40px;`

    button.addEventListener('click', function() {
        console.log('Vc clicou no Login')
    })
})
newButton('Signup', function(button) {
    button.style.cssText = `
    font-size: 40px;
    color: red;`
} )

