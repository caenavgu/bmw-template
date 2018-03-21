export default (function(){
    
    var theObject = {};
    var templateFolder = '';
    
    theObject.loadPieces = function(templateFolder, pieces){
        pieces.forEach((piece)=>{
            getTemplate(piece.filePath, function(fileContent){
                if(typeof(piece.elementId) !== 'undefined') document.querySelector(piece.elementId).innerHTML = fileContent; 
                else if(typeof(piece.element) !== 'undefined') piece.element.innerHTML = fileContent; 
            });
        });
    }
    
    function getTemplate(path, successCallback)
    {
        var ajax = new XMLHttpRequest(path);
        ajax.open("GET", templateFolder+path, true);
        ajax.addEventListener('load',(response) => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                console.log('The following path was successfully loaded: '+path);
                successCallback(ajax.responseText);
            }
            else if(ajax.status != 200)
            {
                alert('There was an error loading: '+path);
            }
        });
        ajax.addEventListener('error',() => {
            alert('There was an error loading: '+path);
        });
        ajax.send();
    }
    
    return theObject;
})();