import './style/index.scss';
import TemplateManager from 'html-template-engine';

window.onload = function(){
    
    TemplateManager.start();
    $(document).ready(function(){
    	let tabselected=null;
		$('#myTab a').hover( function (e) {
		  $(this).tab('show');

		})
		 $( ".men" ).mouseleave(function(){
		 	$(".menu-content").removeClass('active show');
		 	$('#myTab a').removeClass('active show');
		 });
	})


}
