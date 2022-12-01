@@ -1,16 +1,15 @@
	
	let str = "KamalPreet";
    let count =1;

for(i = 1; i<str,length; i++){
	if(str[i] == str[str.length -1 -i){
	  continue;
	}else{
	  count =0;
	 console.log("Not Plindrome");
		 break
	
	  }
					 
	}
	if(count){
	console.log("Palindrome");
	}