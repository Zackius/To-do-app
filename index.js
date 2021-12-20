let title = document.getElementById('text')
 let btn = document.getElementById('submit')
let list = document.getElementById('to-do')



btn.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-style')

    paragraph.innerText = title.value;

    list.appendChild(paragraph)
    title.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        list.removeChild(paragraph)
})
})