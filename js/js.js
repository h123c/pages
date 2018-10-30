/*123*/
	window.onload=function(){
			/*导航栏鼠标变色效果*/
		var tD=document.getElementsByTagName('td');
		function nav_onmouse(){
			var i;
			for(i=0;i<tD.length;i++)
				{
					var j=i;
					if(j!==3){
						tD[j].onmouseover=function(){
						this.childNodes[0].style.color="rgba(280,190,0,0.8)";
						this.style.borderBottom="solid rgba(280,190,0,0.8)";
					}
					tD[j].onmouseout=function(j){
						this.childNodes[0].style.color="white";
						this.style.borderBottom="white";
					}
				}
			}
		}
		nav_onmouse();
		/*底部置顶功能*/
		var Top=document.getElementById('top');
		var Tringle=document.getElementById('arow-up');
					/*获取滚动条高度*/
			function getScrollTop(){ 
				var scrollTop=0; 
				if(document.documentElement&&document.documentElement.scrollTop){ 
					scrollTop=document.documentElement.scrollTop; 
				}
				else if(document.body){ 
					scrollTop=document.body.scrollTop; 
				} 
					return scrollTop; 
			} 
		Top.onclick=function jump(){
			location.href="#top1";
		}


				/*滚动时判断赋予显示与否属性*/
		window.onscroll=function(){
			var top=getScrollTop();
			if(top > 300)
			{
				Top.style.display="block";
			}
			else{
				Top.style.display="none";
			}
		}

		

		Top.onmouseover=function(){
			Top.style.width="38px";
			Top.style.height="38px";
			Top.style.backgroundColor="#eab61f";
			Top.style.borderRadius="25px";

			Tringle.style.borderLeft="8px solid transparent";
			Tringle.style.borderRight="8px solid transparent";
			Tringle.style.borderBottom="16px solid white";

			Top.style.cursor="pointer";
		}
		Top.onmouseout=function(){
			Top.style.width="38px";
			Top.style.height="38px";
			Top.style.backgroundColor="";
			Top.style.borderRadius="6px";
			Top.style.border="3px solid #eab61f";

			Tringle.style.borderLeft="8px solid transparent";
			Tringle.style.borderRight="8px solid transparent";
			Tringle.style.borderBottom="16px solid #eab61f";
		}
		
		/*头像形状变换*/
		var Article=document.getElementById('article')
		var Img=Article.getElementsByTagName('img');
			for(var i=0;i<Img.length;i++){
				Img[i].onmouseover=function(){
	
					this.style.borderRadius="10px";
				}
				Img[i].onmouseout=function(){
					this.style.borderRadius="45px";
				}
			}
		/*介绍鼠标变色*/
		var Intro_0=document.getElementById('intro_0');
		var Intro_1=Intro_0.getElementsByTagName("li");

		
		
			for(var i=0;i<Intro_1.length;i++){
				Intro_1[i].onmouseout=function(){	
					this.style.backgroundColor="#efefef";
					var Intro_1_2=this.getElementsByTagName('img');
					Intro_1_2[0].src="image/yellow1.png";
				}
				Intro_1[i].onmouseover=function(){
					this.style.backgroundColor="#ffffff";
					var Intro_1_2=this.getElementsByTagName('img');
			//			Intro_1_2[0].onmouseout=function(){
							Intro_1_2[0].src="image/yellow.png";
			//			}
			//			Intro_1_2[0].onmouseover=function(){
			//				Intro_1_2[0].src="image/black.png";
			//			}
				}

			}
		}
