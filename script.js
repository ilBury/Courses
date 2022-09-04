const main = function() {

    let tooltip = [...document.querySelectorAll('[data-prompt]')];
    let tooltipValue = [];
    
    if(!tooltip) return;
 
    tooltip.forEach(function(elem) {
        tooltipValue.push(elem.getAttribute('title'));
    });
    

    let create = function(elem) {
        
        let content = document.createElement('div');
        content.classList.add('prompt');
        content.innerHTML = elem.getAttribute('title');
        return content;
    }


    const show = function(elem, event) {
        if(document.body.querySelector('.prompt')) document.body.querySelector('.prompt').remove();
        
        let main = document.querySelector('.main');
        if(!main) return;

        const result = create(elem);
        
        document.body.append(result);
        result.style.left = (event.pageX + 5) + "px";
        result.style.top = (event.pageY + 5) + "px"
        console.dir(result.style.left);
        elem.removeAttribute('title');
    }

    const close = function(elem) {
        let content = document.querySelector('.prompt');
        if(!content) return;

        elem.setAttribute('title', content.innerHTML);
        content.remove();
        console.log(elem);
    }

    tooltip.forEach(function(elem) {
        elem.addEventListener('mouseover', function(event) {
            
            show(elem, event);
        });
    });


    tooltip.forEach(function(elem) {
        elem.addEventListener('mouseleave', function(event) {
            close(elem);
        });
    });

    

}



main();














