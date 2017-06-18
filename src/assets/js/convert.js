$(function() {
	$('#btn-convert').on('click', function() {
		let str = $('#before').val();
		str = str
            // .replace(/\t{1,}- (.*)/gmi,"-- $1")
			.replace(/\[(.*)\]\((.*)\)/g, "[[$1:$2]]")
			.replace(/\`\`\`\n([\s\S]*?)\`\`\`\n/g, "{code}$1{/code}")
			.replace(/\`\`\`(java|cs)\n([\s\S]*?)\`\`\`\n/g, "{code:$1}\n$2{/code}")
			.replace(/\n^######/gmi, '******')
			.replace(/\n^#####/gmi, '*****')
			.replace(/\n^####/gmi, '****')
			.replace(/\n^###\s?(.*)\n\n?$/gmi, '*** $1')
			.replace(/\n^##\s?(.*)\n\n?$/gmi, '** $1')
			.replace(/\n^#/gmi, '*')
            .replace("\n{{TOC}}\n","#contents");
        str = str
            .replace(/^--{2,}\n/gmi,'');
		$('#after').html(str);
	})
});