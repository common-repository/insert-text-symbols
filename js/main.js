( function( wp ) {
    var MockofunInsertTextSymbolsBtn = function( props ) {
        return wp.element.createElement(
            wp.blockEditor.RichTextToolbarButton, {
                icon: 'translation',
                title: 'Insert text symbol',
                type:'primary',
                character:'y',
                isActive:true,
                onClick: function(evt) {
                    console.log(evt);
                    var startPos = props.value.start;

                    var div = window.mockofun_its.popup();

                    div.querySelectorAll("a").forEach(function(symbolLink){
                      symbolLink.addEventListener("click",function(){
                        props.onChange( wp.richText.insert(
                            props.value,
                            this.text
                        ) );
                        div.parentNode.removeChild(div);
                      });
                    })
                    

                    


                },
            }
        );
    }
    wp.richText.registerFormatType(
        'mockofun/insert-text-symbol', {
            title: 'Insert text symbol',
            tagName: 'textsymbol',
            className: null,
            edit: MockofunInsertTextSymbolsBtn,
        }
    );



} )( window.wp );


window.mockofun_its = {
  popup:function(){
    var div = document.createElement("div");
    div.className = "mockofun-its-popup";
    
    var html = "<div class='mockofun-its-popup-close'></div><h3>Insert Text Symbols MockoFun Plugin</h3><ul>";

    window.mockofun_its_emojis.forEach(function(symbols){
      html += `<li><a href="#" title="${symbols.name}">${symbols.emoji}</a></li>`;
    });
    html += "</ul>";
    div.innerHTML = html;
    document.body.appendChild(div);

    div.querySelector(".mockofun-its-popup-close").addEventListener("click",function(){
      div.parentNode.removeChild(div);
    })
    return div;
  }
}