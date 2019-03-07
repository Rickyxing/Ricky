/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-01-04 05:47:19
 * @version $Id$
 */

	
	/*
	  counter的步骤分析
	  	一.拿到个个点击事件的操作权限
	  	二.通过点击事件获取到内容输入到inp
	  		1.运算符只能储存不能显示
	  	三.当点击运算符时储存并清空当前的内容
	  	四.点击=时计算结果
	  	五.点击reset清空所有计算结果
	*/
	/*获取元素的权限*/
	let aIpn = document.getElementById("inp");
	let oLi =document.querySelector(".wpa .wpa-b li");
		for(let i=0; i<oLi.length; i++){
			oLi[i].onclick = function(){
				aIpn.value += oLi.innerHTML; 
				//单独点击时弹出
				//let aler = document.getElementsByClassName("aler");
				oLi[12].onclick = function(){
				alert("此按钮禁止点击 \n                sorry please onclick welcome to back!");
				
				}
			}
		}
		