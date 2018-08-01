
function getData() {
    var hrefData = window.location.href;
    let params = new URL(hrefData).searchParams;
    var version="31012018";
    //var searchID = params.get('id');    
    
    var fileName = hrefData.split("/").slice(-1);
    //get filename incase of querystring
    fileName = fileName.toString().split("?").slice(-2)[0];
    //alert(fileName)

    var pageType = hrefData.split("/").slice(-2)[0];
    var jsFileName = "viral-data.js";
    var hashtag = "viralstories";
    
    if(pageType == 'digital-marketing') {
        jsFileName = "article-data.js";
        hashtag = "digitalmarketing";
    } else if(pageType == 'memes') {
        jsFileName ="memes-data.js";
        hashtag ="memes";
    }

    var webURL = '//drepmark.com/js/'; 
    if(window.location.hostname == 'localhost')
        webURL ='http://localhost/digi-media-blog/js/';
    
    //webURL ='http://172.16.36.209/drepmark/js/';
    webURL = webURL + jsFileName+"?ver="+version;

  $.ajax({
    type: 'GET',
    url: webURL,
    contentType: 'application/json',
    success : function(data) {
    	var mainData = JSON.parse(data);

        if(fileName == 'latest.html') {

            var latestData = "";

            if(pageType == 'memes') {
                var type = params.get('type');
                
                var itemCount = 0;
                var rowCount = 6;
                var colCount =4;

                if(type != null && type.toLowerCase() == 'more') {
                    itemCount = rowCount * colCount;
                    rowCount = mainData.length - 9;                    
                    rowCount = rowCount/3;  
                    colCount = 4;                
                }               

                for(var r=0;r<rowCount;r++) {

                    if(itemCount >= mainData.length)
                        break; 

                    latestData = latestData + "<tr>" ;

                    for(var j=0;j<colCount;j++) {
                        if(itemCount >= mainData.length)
                            break; 
                        /*latestData = latestData + "<td>" + 
                            "<a href='"+mainData[itemCount].main_url+ "' target='_blank'>"+
                            "<img src='"+mainData[itemCount].mem_url+ "' width='75%' /></a> <br/><br/> </td>";
                        */
                        latestData = latestData + "<td>" + 
                            "<img src='"+mainData[itemCount].mem_url+ "' width='75%' style='cursor: pointer;' "+
                            " data-toggle='modal' data-target='#myModal' "+
                            " onclick=\"setImgToModalPopUp('"+mainData[itemCount].main_url+"','"+mainData[itemCount].mem_url+ "');\" />"+
                            "<br/><br/> </td>";
                            
                        itemCount++;
                    }

                    latestData = latestData + "</tr>" ;
                }

                if(latestData != "")  {
                    if(type == null){
                        latestData = latestData + "<tr><td colspan='3'> <a href='latest.html?type=more&ver="+version+"'> More #memes here</a></td></tr>" ;    
                    }
                    
                    document.getElementById("article-data").innerHTML = "<table>"+latestData+"</table";
                }

            }
            else {

                    for(var i=0;i<10;i++) {

                        if(i >= mainData.length)
                            break; 

                        latestData = latestData + "<div class='blog-content'> "+                        
                                    "<h3><a href='"+mainData[i].page_name+
                                     "'>" +  mainData[i].blog_title+ "</a>"+"</h3>"+
                                    "<ul class='blog-meta'>"+
                                        "<li><i class='fa fa-user'></i>"+mainData[i].author+"</li>"+
                                        "<li><i class='fa fa-clock-o'></i>"+mainData[i].blog_date+"</li>"+
                                    "</ul>"+
                                "</div>";                               
                    } 

                    document.getElementById("article-data").innerHTML = latestData;
            }
        }        
        else {             	
        	var searchID = fileName.toString().split("-").slice(-1).toString().split(".").slice(-2)[0];        	
        	
            var searchData = mainData.find(function(item){
                return item.blog_id == searchID;
            });

            document.getElementById("author").innerHTML= searchData.author;
            document.getElementById("blog_date").innerHTML= searchData.blog_date;
            document.getElementById("blog_title").innerHTML= searchData.blog_title; 
            fileName =  searchData.page_name;// + "?id="+searchID;
            hashtag =  searchData.hashtag;         

            for(var i=0;i<3;i++) 
            {
                document.getElementById("recent_blog_title"+ i.toString()).innerHTML= " <a href='"
                 + mainData[i].page_name + "'>" +  mainData[i].blog_title + "</a>";    
                document.getElementById("recent_blog_date"+i.toString()).innerHTML= mainData[i].blog_date;            
            } 
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
