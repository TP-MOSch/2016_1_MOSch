module.exports = function (grunt, options) {
	return {
		// Генерация шаблонов
		templates: {
			files: [{
				expand: true,
				cwd: 'templates',
				src: '*.xml',
				dest: 'public_html/js/tmpl'
			}],
			options: {
				template: function (data) {
					return grunt.template.process(
						'var <%= name %>Tmpl = <%= contents %> ;',
						{ data: data }
					);
				}
			}
		}
	}
};