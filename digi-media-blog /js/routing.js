
function getData() {
    var hrefData = window.location.href;
    let params = new URL(hrefData).searchParams;
    var version="23052018";
    //var searchID = params.get('id');    
    
    var fileName = hrefData.split("/").slice(-1);
    //get filename incase of querystring
    fileName = fileName.toString().split("?").slice(-2)[0];
    //alert(fileName)

    var folderDate = hrefData.split("/").slice(-2)[0];
 
    var jsFileName = "research-data.js";
    var hashtag = "research";    

    var webURL = '//drepmark.com/js/'; 
    if(window.location.hostname == 'localhost')
        webURL ='http://localhost/digi-media-blog/js/';

    webURL = webURL + jsFileName+"?ver="+version;    

  $.ajax({
    type: 'GET',
    url: webURL,
    contentType: 'application/json',
    success : function(data) {
    	var mainData = JSON.parse(data);

        if(fileName == 'list.html') {

            var latestData = "";


            for(var i=0;i<10;i++) {

                if(i >= mainData.length)
                    break; 

                latestData = latestData + "<tr> "+                            
                            "<td><a href='"+mainData[i].blog_id+"/"+mainData[i].page_name+"'>" +
                              mainData[i].blog_title+ "</a> <br/> "+"</td>"+
                              "<td>&nbsp; <br/> </td>"+
                              "<td>"+mainData[i].blog_date+" <br/> </td>" + 
                        "</tr>";                               
            } 
            
            document.getElementById("article-data").innerHTML = '<table>' + latestData +'</table>';            
        }        
        else {    
            
        	var searchID = folderDate;        	
        	
            var searchData = mainData.find(function(item){
                return item.blog_id == searchID;
            });

            document.getElementById("blog_date").innerHTML= searchData.blog_date;
            document.getElementById("blog_title").innerHTML= searchData.blog_title; 
            fileName =  searchData.page_name;// + "?id="+searchID;
            hashtag =  searchData.hashtag;         
        }

        if(document.getElementById("fb") != null)   {
            document.getElementById("fb").src = "https://www.facebook.com/plugins/share_button.php?"+
            "href=https%3A%2F%2Fdrepmark.com%2F"+pageType+"%2F"+fileName+"&layout=button&size=small&"+
            "mobile_iframe=false&width=60&height=20&appId";
        }

        if(document.getElementById("twt") != null)   {
            document.getElementById("twt").href="https://twitter.com/intent/tweet?hashtags="+hashtag+"&amp;"+
            "original_referer=https%3A%2F%2Fdrepmark.com%2F"+pageType+"%2F"+fileName+
            "&amp;ref_src=twsrc%5Etfw&amp;tw_p=tweetbutton";
        }

        if(document.getElementById("gplus") != null)   {
            document.getElementById("gplus").href = 'https://plus.google.com/share?url=https://drepmark.com/'+pageType+'/'+fileName;
        }

        if(document.getElementById("lkd") != null)   {
            document.getElementById("lkd").href = "https://www.linkedin.com/cws/share?url=https://drepmark.com/"
            +pageType+"/"+fileName+"&original_referer=https://drepmark.com/"+pageType+"/"+fileName;
        }
    		
    },
    error:function onError(err) {
    	alert('Something is not right here!!');
    }
    });
}

getData();


function setImgToModalPopUp(main_url,mem_url) {
    document.getElementById('modalLink').href= main_url;
    document.getElementById('modalImg').src= mem_url;
}
