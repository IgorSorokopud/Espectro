;(function($) {
	$(document).ready(function() {
		var self;
		
		$('.show-drop-down').toggle(function() {
			self = $(this).next('ul');
			self.show();
		}, function () {
			self.hide();
		});
	});
})(jQuery);
