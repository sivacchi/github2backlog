$(function() {
	$('#btn-convert').on('click', function() {
		let str = $('#before').val();
		str = str
			.replace(/\[(.*)\]\((.*)\)/g, "[[$1:$2]]")
			.replace(/\`\`\`([\s\S]*?)\`\`\`\n/g, "{code}$1{/code}")
			.replace(/^###/gmi, '***')
			.replace(/^##/gmi, '**');
		$('#after').html(str);
	})
});