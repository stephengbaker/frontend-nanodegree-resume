


var bio = {
	"name" : "Stephen Baker",
	"role" : "Algorithmic Composer",
	"contacts" : {
		"mobile": "555-555-5555",
		"email": "stephen@example.com",
		"github": "stephenexample",
		"twitter": "@example",
		"location": "Spencer, IA",
		"blog": "www.stephengbaker.com"
	},
	"welcomeMessage": "I'm passionate about combining my creative abilities with my front-end development skills to create innovative, data-driven online music education methods and apps",
	"skills": [
		"music composition", "developing websites", "writing things", "Javascript", "jQuery", "CSS", "HTML5", "education"
	],
	"bioPic": "images/profilephoto.jpg"
}

bio.displayRole = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
}

bio.displayRole();

bio.displayName = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
}

bio.displayName();

bio.displayContacts = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedBlog);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedBlog);
	$("#footerContacts").append(formattedLocation);
}

bio.displayContacts();

bio.displayPic = function() {
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);
}

bio.displayPic();

bio.displayWelcomeMessage = function() {
	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);
}

bio.displayWelcomeMessage();

bio.displaySkills = function() {
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}
	}
}

bio.displaySkills();

var work = {
	"jobs": [
	{
		"employer": "Bethany Lutheran Church",
		"title": "Director of Music Ministries",
		"location": "Spencer, IA",
		"dates": "2013 - Present",
		"responsibilities": "Lead all aspects of the music ministries of a thriving ELCA congregation"
	},
	{
		"employer": "Abbey of the Genesee",
		"title": "Bakery Worker",
		"location": "Rochester, NY",
		"dates": "2009 - 2013",
		"responsibilities": "Managed a warehouse, taught music to Novice monks, and helped out in an industrial bakery setting"
	}
	]
}

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedResponsibilities = HTMLworkDescription.replace("%data%", work.jobs[job].responsibilities);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedResponsibilities);
	}
}

work.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


function inName() {
	bio.name = bio.name.split(" ");
	console.log(name);
	bio.name[1] = bio.name[1].toUpperCase();
	bio.name[0] = bio.name[0].slice(0,1).toUpperCase() + bio.name[0].slice(1).toLowerCase();

	return bio.name[0] +" "+bio.name[1];
}

$("#main").append(internationalizeButton);


var projects = {
	"list": [
	{
		"title": "Practisaurus",
		"dates": "2014-2015",
		"description": "An automatic practice logging journal",
		"image": "images/197x148.gif"
	},
	{
		"title": "ScoreKeeper",
		"dates": "2015-2016",
		"description": "An app to display music on multiple devices for a mixed ensemble",
		"image": "images/197x148.gif"
	}
	]
}

projects.display = function() {
	for(item in projects.list) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.list[item].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.list[item].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.list[item].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.list[item].image);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

projects.display();

var education = {
	"schools": [
	{
		"name": "Central Michigan University",
		"location": "Mt. Pleasant, MI, US",
		"degree": "BMus",
		"major": "Organ Performance",
		"dates": "2008"
	},
	{
		"name": "University of Rochester",
		"location": "Rochester, NY",
		"degree": "MMus",
		"major": "Organ Performance",
		"dates": "2010"
	}
	],
	"onlineCourses": [
	{
		"title": "CS101: Intro to Computer Science",
		"school": "Udacity",
		"date": "March 2013",
		"url": "www.udacity.com"
	},
	{
		"title": "Front End Web Developer Nanodegree",
		"school": "Udacity",
		"date": "Anticipated August 2015",
		"url": "www.udacity.com"
	}
	]
}

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for(course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

education.display();


$("#mapDiv").append(googleMap);

