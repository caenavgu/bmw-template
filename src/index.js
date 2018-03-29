import './style/index.scss';
import TemplateManager from 'html-template-engine';
window.onload = TemplateManager.start;

// window.onload = function(){
//
//     let pieces = document.querySelectorAll('.include-template');
//     let newPieces = [];
//     pieces.forEach(function(elm){
//        newPieces.push({ element: elm, filePath: elm.getAttribute('filepath')});
//     });
//
//     TemplateManager.loadPieces('',newPieces);
//     $(document).ready(function(){
//     	let tabselected=null;
// 		$('#myTab a').hover( function (e) {
// 		  $(this).tab('show');
//
// 		})
// 		 $( ".men" ).mouseleave(function(){
// 		 	$(".menu-content").removeClass('active show');
// 		 	$('#myTab a').removeClass('active show');
// 		 });
// 	})
//
//
// }
