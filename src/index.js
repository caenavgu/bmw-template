import './style/index.scss';
import TemplateManager from './js/tm.js';

window.onload = function(){
    
    let pieces = document.querySelectorAll('.include-template');
    let newPieces = [];
    pieces.forEach(function(elm){
       newPieces.push({ element: elm, filePath: elm.getAttribute('filepath')});
    });
    
    TemplateManager.loadPieces('',newPieces);
}