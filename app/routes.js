var User = require('./models/user');
module.exports = function(app, passport){
	app.get('/', isLoggedIn, function(req, res){
		res.redirect('/home');
	});

	app.get('/home', function(req, res){
		res.render('home.ejs');
	});

	app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

	app.get('/auth/google/callback', 
	  passport.authenticate('google', { successRedirect: '/home',
	                                      failureRedirect: '/' }));


	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		next();
	}else{
		res.redirect('/auth/google');
	}
}