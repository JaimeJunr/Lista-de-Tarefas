
$('form').on('submit', function(e) {
    e.preventDefault()
    
    const task = $('#inp-task').val()
    const newTask = $('ul');

    
    $(`<li>${task}</li>`).appendTo(newTask);

    $('#inp-task').val('')

    $('li').one("click", function() {
        $(this).css({
            "text-decoration": "line-through"
        });
    });
})
