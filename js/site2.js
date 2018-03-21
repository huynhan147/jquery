        $(function(){
            ulli=$('ul li');
            $(".clear").hide();
            function check(){
                let ktra =0;
                   for(let i=0;i<ulli.length;i++){
                    if($(ulli[i]).attr('class')=='checked'){
                       ktra= 1
                       // console.log('hien');    
                    // console.log($(ulli[i]).attr('class'));
                }
                }
                // console.log('xxxx');
                if(ktra !=0){
                    $(".clear").show();
                }else{
                    $(".clear").hide();
                }
            }
              
            
            $(".clear").click(function(){
                 ulli=$('ul li');
                for(let i=0;i<ulli.length;i++)
                    if($(ulli[i]).attr('class')=='checked'){
                       $(ulli[i]).remove();     
                }
                alss();
                $('.alls').addClass('actives');
                check();
            });
            $(".add").click(Adds =function(){
                $('#txtinput').show();
                let textinput = $('#txtinput').val();
                $('#txtinput').val('');
                if(textinput!=''){
                    let checkbox =$("<input type='checkbox' id ='checkbox'>");
                    let li=$("<li id ='item'></li>").text(textinput);
                        li.prepend(checkbox);
                        x =$("<span>\u00D7</span>");
                        hr= $("<hr>");
                        li.append(x);
                        li.append(hr);          
                     $("#ul-list").append(li);
                }
                let dem=0;
                ulli=$('ul li');
                for(let i=0;i<ulli.length;i++)
                    if($(ulli[i]).attr('class')!='checked'){
                    dem =dem+1;       
                }

                 $('.dems').text(dem+ " Item");

            });
            $(document).on('click', 'span', function (e) {
                 // e.preventDefault();
                $(this).parent().remove();
                  let dem=0;
                ulli=$('ul li');
                for(let i=0;i<ulli.length;i++)
                    if($(ulli[i]).attr('class')!='checked'){
                    dem =dem+1;       
                }

                 $('.dems').text(dem+ " Item");

            });
             $(document).on('click', '#checkbox', function (e) {
                $(this).parent().toggleClass('checked');
                let dem=0;
                ulli=$('ul li');
                for(let i=0;i<ulli.length;i++)
                    if($(ulli[i]).attr('class')!='checked'){
                    dem =dem+1;       
                }

                 $('.dems').text(dem+ " Item");
                 // console.log('xxxx');
                 check();

            });
             $('.active').click(function(){
                $('.active').addClass('actives');
                $('.completed').removeClass('actives');
                $('.alls').removeClass('actives');

                ulli=$('ul li');
                // console.log($(ulli[0]).attr('class'));
                for(let i=0;i<ulli.length;i++)
                    if($(ulli[i]).attr('class')=='checked'){
                       $(ulli[i]).hide();     
                }else{
                    $(ulli[i]).show();
                }   
             });
                $('.completed').click(function(){
                $('.completed').addClass('actives');
                $('.active').removeClass('actives');
                $('.alls').removeClass('actives');
                ulli=$('ul li');
                // console.log($(ulli[0]).attr('class'));
                for(let i=0;i<ulli.length;i++){
                    if($(ulli[i]).attr('class')=='checked'){
                       $(ulli[i]).show();     
                    // console.log($(ulli[i]).attr('class'));
                }else{
                    $(ulli[i]).hide();  
                }
                }   
             });
                $('.alls').click(alss());
                 $('.alls').click(function(){
                    $('.alls').addClass('actives');
                $('.active').removeClass('actives');
                $('.completed').removeClass('actives');
                 ulli=$('ul li');
                    for(let i=0;i<ulli.length;i++){
                        $(ulli[i]).show(); 
                    }

                 });
                function alss(){
                // $('.alls').addClass('actives');
                $('.active').removeClass('actives');
                $('.completed').removeClass('actives');
                    ulli=$('ul li');
                    for(let i=0;i<ulli.length;i++){
                        $(ulli[i]).show(); 
                    }
                }

           $("#txtinput").keypress(function(e){
            if(e.keyCode==13 ||e.which ==13){
                Adds();
            }
           });

        });

        


