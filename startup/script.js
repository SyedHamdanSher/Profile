
<script type="text/javascript">
function x(array){
	dict = {};
for (i=0;i<array.length; i++){
	if(dict.hasOwnProperty(array[i])){
console.log(dict[array[i]]);
		dict[array[i]]=dict[array[i]]+1;
	}
	else{

		dict[array[i]]=1;console.log(dict[array[i]]);	
	}
	
}

var ax=[];
for(a in dict){
 ax.push([a,dict[a]])
}
ax.sort(function(a,b){return a[1] - b[1]});
ax.reverse();
console.log(ax[0]);
//console.log(dict[Object.keys(dict)[0]]);
}

x([1,3,1,3,2,1]);


function x1(array){
	dict = {};
for (i=0;i<array.length; i++){
	dict["object"]={name:array[i],
					value: }
}

var ax=[];
for(a in dict){
 ax.push([a,dict[a]])
}
ax.sort(function(a,b){return a[1] - b[1]});
ax.reverse();
console.log(ax[0]);
//console.log(dict[Object.keys(dict)[0]]);
}



var a=[1,3,4,6,7,9];
var b=[1,2,4,5,9,10];

function x2(a,b){
var max = Math.max(a.length,b.length);
var big,small;
var ans=[];
if (a.length==max){
	big = a;
	small = b;
}

else{
	big = b;
	small = a;
}
for (i=0;i<max;i++){
	if(small.includes(big[i])){
		ans.push(big[i]);
	}else{
		continue;
	}
}
console.log(ans);
}

x2(a,b);

var a=[1,2,4,5,9,10];
var b=[5,9,10,1,2,4];

function x3(a,b){
	var x = b.indexOf(a[0]);
	for(i=0;i<a.length;i++){
		if(x== -1){
			return "Not rotation";
		}else if(a[i]!=b[x]){
			return "Not rotation";
		}else if(a.length != b.length){
			return "Not rotation";
		}
		else {
			return "Rotation";
		}
	}
}

console.log(x3(a,b));




function ss(a,b){
	var a = a.split('');
	var b = b.split('');
	var max = Math.max(a.length,b.length);
	var big,small;
	if (a.length==max){
		big = a;
		small = b;
	}
	else{
		big = b;
		small = a;
	}
	big1=big;
	small1=small;
	for (i=0;i<max;i++){
			
			if(big[i]!=small[i]){
				big[i]=small[i]; // replace
				console.log(big,small); 
				if(big.length == small.length && (big.join('')== small.join('')))
				{
					return true;
				}else{
					big=big1;
					small = small1;
					big[i]=big[i+1]; // delete 
					if(big.length-1 == small.length){
						return true;
					}
					else{
						return false;
					}

				}
			}else{
				if(big.length == small.length && (big.join('')== small.join('')))
				{
					return true;
				}
				continue;
		}
	}	
}

ss("abcd","abfd");
ss("abcd","abdc");
ss("a","a");
ss("abcdef","abqdef");

function mineit(d2,a,b){
	var XY = [];
	for(i=0;i<d2.length;i++){
		console.log(d2.length);
		console.log(d2[i]);
		func1(d2[i],a,b,XY);
	}
	console.log(XY);
	
}

function func1(ll,a,b,XY){
	w=ll[0];
	e=ll[1];
	for (i=0;i<a;i++){
		XY[i]=[];
		for(j=0;j<b;j++){
			if(i==w && j==e){
				XY[i][j]=(-1);
			}else{XY[i][j]=0;}
		}
	} 
}

mineit([[0,0],[0,1]],3,4);
</script>