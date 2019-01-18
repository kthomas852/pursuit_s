var User = require('./models/user');
module.exports = function(app, passport){
	// app.get('/', isLoggedIn, function(req, res){
	// 	res.redirect('/home');
	// });
	app.get('/', function(req, res){
		res.render('home.ejs');
	})

	app.get('/home', function(req, res){
		res.render('home.ejs');
	});

	app.get('/submit', function(req, res){
		res.render('submit.ejs');
	});

	app.get('/submit/openmic', function(req, res){
		res.render('submit/open_mic.ejs');
	});

	app.get('/submit/fill_in_friday', function(req, res){
		res.render('submit/fill_in_friday.ejs');
	});

	app.get('/submit/on_shelf', function(req, res){
		res.render('submit/on_shelf.ejs');
	});

	app.get('/submit/industry_info', function(req, res){
		res.render('submit/industry_info.ejs');
	});

	app.get('/submit/kitch', function(req, res){
		res.render('submit/kitch.ejs');
	});

	app.get('/submit/fashion', function(req, res){
		res.render('submit/fashion.ejs');
	});

	app.get('/submit/education_events', function(req, res){
		res.render('submit/education_events.ejs');
	});

	app.get('/submit/training', function(req, res){
		res.render('submit/training.ejs');
	});

	app.get('/submit/general', function(req, res){
		res.render('submit/general.ejs');
	});

	app.get('/submit/ted', function(req, res){
		res.render('submit/TED.ejs');
	});

	app.get('/submit/theme_days', function(req, res){
		res.render('submit/theme_days.ejs');
	});

	app.get('/submit/wins_personal', function(req, res){
		res.render('submit/wins_personal.ejs');
	});

	app.get('/submit/events', function(req, res){
		res.render('submit/events.ejs');
	});

	app.get('/submit/groups', function(req, res){
		res.render('submit/groups.ejs');
	});

	app.get('/submit/wins_personal', function(req, res){
		res.render('submit/wins_personal.ejs');
	});

	app.get('/submit/wins_team', function(req, res){
		res.render('submit/wins_team.ejs');
	});

	app.get('/submit/mvp', function(req, res){
		res.render('submit/mvp.ejs');
	});

	app.get('/submit/yelp_works', function(req, res){
		res.render('submit/yelp_works.ejs');
	});

	app.get('/submit/seize_mic', function(req, res){
		res.render('submit/seize_mic.ejs');
	});

	app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

	app.get('/auth/google/callback', 
	  passport.authenticate('google'), (req,res) => {
		  res.send()
	  });


	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};

function isLoggedIn(req, res, next) {
	if(req.session.views){
		req.session.views++;
		res.setHeader('Content-Type', 'text/html');
		res.write('<p>views: ' + req.session.views + '<p>');
		res.write('<p>expires in: ' + (req.session.cookie.maxAge/1000) + 's<p>');
		next();
	}else {
		req.session.views = 1;
		res.redirect('/auth/google');
		//res.end('welcome to the session demo. refresh!');
	}
	// if(req.isAuthenticated()){
	// 	next();
	// }else{
	// 	res.redirect('/auth/google');
	// }
}