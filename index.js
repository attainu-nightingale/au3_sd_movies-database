




app.get("/",function(req,res){
res.sendfile("./login.html");
});
app.post("/auth",function(req,res){
    db.collection("admin").
    find().
    toArray(function(err,result){
        if(err) throw err;
        for(var i=0;i<result.length;i++)
        {
if(req.body.username==result[i].username && 
    req.body.password==result[i].password)
    {
    req.session.loggedIn = true;
}
        }
        res.redirect("/user");
    });
});



app.get("/user",function(req,res){
if(req.session.loggedIn == true){
    res.sendfile("./homepage.html");
}
else{
    res.redirect("/signup");
}
});
app.get("/signup",function(req,res){
    res.sendfile("./signup.html");
    });

app.get("/logout",function(req,res){
    req.session.destroy();
        res.redirect("/login");
     });


     app.listen(3000,function(){
         console.log("running!");
     });
    