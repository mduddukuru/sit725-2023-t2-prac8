const cardList = [
    {
    title: "Kitten 2",
    image: "kitten2.jpeg",
    link: "About Kitten 2",
    desciption: "Here is Kitten 2, hope you enjoy the pictures!"
    },
    {
    title: "Kitten 3",
    image: "kitten3.jpeg",
    link: "About Kitten 3",
    desciption: "Here is Kitten 3, hope you enjoy the pictures!"
    }
    ]
   
    const addCards = (items) => {
    items.forEach(item => {
    let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
    '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
    '<p class="card-text black-text">'+item.desciption+'</p>'+
    '</div></div></div>';
    $("#card-section").append(itemToAppend)
    });
    }
    const submitForm = () =>
{
    let formData = {}
    formData.firstname = $('#firstname').val()
    formData.lastname = $('#lastame').val()
    formData.password = $('#password').val()
    formData.email = $('#email').val()
    console.log("Form Submitted: ", formData);
}

    $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.modal').modal();
    addCards(cardList);
    $('#formsubmit').click(()=>{
        submitForm();
    })
    });


