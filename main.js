var slideIndex = 1;

DisplaySlides(slideIndex);

function DisplaySlides(index)
{
    var slides = document.getElementsByClassName("image");

    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < slides.length; i += 1)
    {
        slides[i].style.display = "none";
    }

    //if user is on the last picture and clicks on the right button (next) it goes back to the first
    if (index > slides.length)
    {
        slideIndex = 1;
    }

    //if user is on the first picture and clicks on the left button (previous) it goes to the last one
    if (index < 1)
    {
        slideIndex = slides.length;
    }

    for (var i = 0; i < dots.length; i += 1)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className += " active";
}

function changeSlide(index)
{
    DisplaySlides(slideIndex += index);
}

function currentSlide(index)
{
    DisplaySlides(slideIndex = index);
}