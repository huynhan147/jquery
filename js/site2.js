       $(function(){
            // var tmpx=$('ul li');
            // let dem =0;
            //  for(let i=0;i<tmpx.length;i++)
            //         if($(tmpx[i]).attr('class')=='checked'){
            //            dem =dem+1;    
            //         // console.log($(ulli[i]).attr('class'));
            //     }
               
            $(".clear").click(function(){
                 ulli=$('ul li');
                // console.log($(ulli[0]).attr('class'));
                for(let i=0;i<ulli.length;i++)
                    if($(ulli[i]).attr('class')=='checked'){
                       $(ulli[i]).remove();     
                }
            });
            $(".add").click(function(){
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

            });
             $('.active').click(function(){
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
                ulli=$('ul li');
                // console.log($(ulli[0]).attr('class'));
                for(let i=0;i<ulli.length;i++)
                    if($(ulli[i]).attr('class')=='checked'){
                       $(ulli[i]).show();     
                    // console.log($(ulli[i]).attr('class'));
                }else{
                    $(ulli[i]).hide();  
                }   
             });
                $('.alls').click(function(){
                    ulli=$('ul li');
                    for(let i=0;i<ulli.length;i++){
                        $(ulli[i]).show(); 
                    }
                });

           

        });

        


