if (Meteor.isClient) {

	Template.instanceoptions.helpers({
		instances: function() {
			return Instances.find();
		}
	});
	
	Template.submitbutton.events({
		"click #submitbutton": function(event, template) {
			var instances = document.getElementsByTagName("select")[0];
			var selectedInstance = instances.options[instances.selectedIndex].text;
			Cookie.set('tablename', selectedInstance);
			window.location.href = '/list';
		}
	})
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
