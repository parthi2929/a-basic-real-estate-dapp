//call back function to be called when '/' route is called
exports.home = function(request,response)
{
    //render the "home" view from ejs. note we are not explicitly specifying .ejs extension
    response.render("home",
        {
            //variable we will use in ejs template and its value..
            title:"Template 1"
        }
    );
}

