

let $ = document
const input_elm = $.querySelector('input')
const todo_div = $.querySelector('.todoelm1')


function showvalue(event) {

    if (event.key == 'Enter') {

        creattodo()
    }


}
function creattodo() {


    let new_div = $.createElement('div')
    new_div.setAttribute('class', 'todoelm2')

    let new_P = $.createElement('p')
    new_P.innerHTML = input_elm.value
    new_P.setAttribute('class', 'name_todo')



    let new_i_delte = $.createElement('i')
    new_i_delte.setAttribute('class', 'material-icons')
    new_i_delte.innerHTML = 'delete'

    new_i_delte.addEventListener('click', function () {

        todo_div.removeChild(new_div)


    })
    let new_i_check = $.createElement('i')
    new_i_check.setAttribute('class', 'material-icons')
    new_i_check.innerHTML = 'check'

    new_i_check.addEventListener('click', function () {


        new_div.style.backgroundColor = 'rgba(252, 176, 69, 1)'
        new_i_check.style.color = 'green'

        let strick = $.createElement('strike')

        strick.innerText = new_P.innerText
        new_P.innerHTML = ''
        new_P.appendChild(strick)

    })


    new_div.append(new_P, new_i_check, new_i_delte)
    todo_div.append(new_div)

    console.log(new_div);
    input_elm.value = ''
}

input_elm.addEventListener('keydown', showvalue)
