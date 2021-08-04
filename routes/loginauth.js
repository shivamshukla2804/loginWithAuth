const passport = require("passport");
const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("Hello ur in home");
});


router.get("/logout", (req, res) => {
  res.send("Hello ur in logout");
});


router.get("/login/google", (req, res) => {
  passport.authenticate('google',
  {scope:['profile']})
});

router.get('/redirect/google_auth',
  passport.authenticate('google',{failureRedirect:'/login'}),
  (req,res)=>{
    res.send("Profile generated")
    console.log(res);
});

module.exports=router;