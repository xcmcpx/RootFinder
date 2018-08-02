//grab the button from out page and initialize it to a variable that we can then use to create an event
const button = document.getElementById("submitBtn");

//dictionary for the arabic definite article "the" or ال
var ALSHADDA = {
	"اللّ" : "ّ".charCodeAt(0)};
//dicionary object for ALL arabic characters 
var DICT = {
	"ذ" : "ذ".charCodeAt(0),
	"ض" : "ض".charCodeAt(0),
	"ص" : "ص".charCodeAt(0),
	"ث" : "ث".charCodeAt(0),
	"ق" : "ق".charCodeAt(0),
	"ف" : "ف".charCodeAt(0),
	"غ" : "غ".charCodeAt(0),
	"ع" : "ع".charCodeAt(0),
	"ه" : "ه".charCodeAt(0),
	"خ" : "خ".charCodeAt(0),
	"ح" : "ح".charCodeAt(0),
	"ج" : "ج".charCodeAt(0),
	"د" : "د".charCodeAt(0),
	"ش" : "ش".charCodeAt(0),
	"س" : "س".charCodeAt(0),
	"ي" : "ي".charCodeAt(0),
	"ب" : "ب".charCodeAt(0),
	"ل" : "ل".charCodeAt(0),
	"ا" : "ا".charCodeAt(0),
	"ت" : "ت".charCodeAt(0),
	"ن" : "ن".charCodeAt(0),
	"م" : "م".charCodeAt(0),
	"ك" : "ك".charCodeAt(0),
	"ط" : "ط".charCodeAt(0),
	"ء" : "ء".charCodeAt(0),
	"ر" : "ر".charCodeAt(0),
	"ى" : "ى".charCodeAt(0),
	"ة" : "ة".charCodeAt(0),
	"و" : "و".charCodeAt(0),
	"ز" : "ز".charCodeAt(0),
	"ظ" : "ظ".charCodeAt(0)
};
//dictionary object for the sun letters: letters in the arabic alphabet which, when preceded by the definite article ال , force the word to be pronounced differently. (Aka, we don't pronounce the lam part)
var SUN = {
"ن" : "ن".charCodeAt(0),
"ط" : "ط".charCodeAt(0),
"ظ" : "ظ".charCodeAt(0),
"ت" : "ت".charCodeAt(0),
"ث" : "ث".charCodeAt(0),
"د" : "د".charCodeAt(0),
"ذ" : "ذ".charCodeAt(0),
"ر" : "ر".charCodeAt(0),
"ز" : "ز".charCodeAt(0),
"س" : "س".charCodeAt(0),
"ش" : "ش".charCodeAt(0),
"ص" : "ص".charCodeAt(0),
"ض" : "ض".charCodeAt(0),
"ل" : "ل".charCodeAt(0)
};
//dictionary object for characters that algorithm will recognize as things that need to be changed into a different correlated arabic character
var MUT = {
	"إ":"إ".charCodeAt(0),
	"ؤ":"ؤ".charCodeAt(0),
	"ئ":"ئ".charCodeAt(0),
	"آ":"آ".charCodeAt(0)
};
// TABLE 1 G1 Dictionary
var G1 = {
"ز" : "ز".charCodeAt(0),
"ر" : "ر".charCodeAt(0),
"ذ" : "ذ".charCodeAt(0),
"د" : "د".charCodeAt(0),
"خ" : "خ".charCodeAt(0),
"ح" : "ح".charCodeAt(0),
"ج" : "ج".charCodeAt(0),
"ث" : "ث".charCodeAt(0),
"ق" : "ق".charCodeAt(0),
"غ" : "غ".charCodeAt(0),
"ع" : "ع".charCodeAt(0),
"ظ" : "ظ".charCodeAt(0),
"ط" : "ط".charCodeAt(0),
"ض" : "ض".charCodeAt(0),
"ص" : "ص".charCodeAt(0),
"ش" : "ش".charCodeAt(0)
};
//Table 1 G2 Dictionary
var G2 = {
	"ه" : "ه".charCodeAt(0)
};
//TABLE 1 G3 Dictionary
var G3 = {
	"ه" : "ه".charCodeAt(0),
	"ف" : "ف".charCodeAt(0)
};
//TABLE 1 G4 Dictionary
var G4 = {
	"ه" : "ه".charCodeAt(0),
	"ف" : "ف".charCodeAt(0),
	"ئ" : "ئ".charCodeAt(0),
	"ء" : "ء".charCodeAt(0),
	"ؤ" : "ؤ".charCodeAt(0),
	"أ" : "أ".charCodeAt(0),
	"ل" : "ل".charCodeAt(0),
	"ن" : "ن".charCodeAt(0),
	"ك" : "ك".charCodeAt(0),
	"ب" : "ب".charCodeAt(0)
};
//TABLE 1 G5 Dictionary
var G5 = {
	"ه" : "ه".charCodeAt(0),
	"ف" : "ف".charCodeAt(0),
	"ئ" : "ئ".charCodeAt(0),
	"ء" : "ء".charCodeAt(0),
	"ؤ" : "ؤ".charCodeAt(0),
	"أ" : "أ".charCodeAt(0),
	"ل" : "ل".charCodeAt(0),
	"ن" : "ن".charCodeAt(0),
	"ك" : "ك".charCodeAt(0),
	"ب" : "ب".charCodeAt(0),
	"م" : "م".charCodeAt(0),
	"س" : "س".charCodeAt(0)
};
//TABLE 1 G6 Dictionary
var G6 = {
	"ف" : "ف".charCodeAt(0),
	"ئ" : "ئ".charCodeAt(0),
	"ء" : "ء".charCodeAt(0),
	"ؤ" : "ؤ".charCodeAt(0),
	"أ" : "أ".charCodeAt(0),
	"ل" : "ل".charCodeAt(0),
	"ب" : "ب".charCodeAt(0),
	"س" : "س".charCodeAt(0)
};
//TABLE 1 G7 Dictionary
var G7 = {
	"ئ" : "ئ".charCodeAt(0),
	"ؤ" : "ؤ".charCodeAt(0),
	"أ" : "أ".charCodeAt(0),
	"و" : "و".charCodeAt(0),
	"ل" : "ل".charCodeAt(0),
	"س" : "س".charCodeAt(0),
	"ف" : "ف".charCodeAt(0),
	"ب" : "ب".charCodeAt(0),

};
//TABLE 8 DICTIONARIES (dual rule for this section of the table, thus split into two dictionaries)
var G8A = {
	"ا" : "ا".charCodeAt(0)
};
var G8B = {
	"ة" : "ة".charCodeAt(0)
};
//extra rule that was not applied. Dictionary for future use
var G9 = {
	"ئ" : "ئ".charCodeAt(0),
	"ؤ" : "ؤ".charCodeAt(0),
	"أ" : "أ".charCodeAt(0),
	"ل" : "ل".charCodeAt(0),
	"س" : "س".charCodeAt(0),
	"ف" : "ف".charCodeAt(0),
	"ب" : "ب".charCodeAt(0),
	"ء" : "ء".charCodeAt(0)
}

//initialize all of our form elements into variables
var submit = document.getElementById("submitBtn");
var WORD = document.getElementById("srchBox").value;
var results = document.getElementById("results");
//initiliaze initial variables in accordance with the algorithm
var countOn = 0;
var countOff = 0;
var flag = true;
var r1_flag = false;
var rn_flag = false;
var Changes = false;
//Split the word into an array.
var W = WORD.split("");
var N = WORD.length;
var R = new Array(WORD.length).fill(-1);
var ROOT = "";

//Main method that is called on button click
function mainMethod(){
//redefine our word to current search box value, and apply the definite artcile method that checks for ال, and then define N as the length of the word
WORD = document.getElementById("srchBox").value;
defArticle();
N=WORD.length;
// the algorithm calls to check the word again for a second index of  ال, and if there is another instance of these characters in the word then we should recognize a root letter from that.
if(WORD.includes("ال")){
	R[WORD.indexOf("ال")+1] = 1;
}
// per our algorithm, initialized second set of variabels necessary for the extraction
var n = N;
var S1 = WORD.substring(0,(Math.round(n/3)));
var S2 = WORD.substring(Math.round(n/3),Math.round(n/3) +(n-(2*S1.length)));
var S3 = WORD.substring(S1.length + S2.length);
var Wseg = [S1, S2, S3];
W = WORD.split("");

//apply the mutate function to the word, using word and word segment variables
mutateFunc(S1, S2, S3, W);

//grab all values from the object G1 and put them in vals variable
var vals = Object.values(G1);

//loop through vals to apply the Table 1 rules
for(var i=0; i<vals.length; i++){
	for(var j=0; j<WORD.length; j++){
		if(WORD.charCodeAt(j) == vals[i]){
			R[j] = 1;
			countOn++;
		}
	}
}

//redefine vals as the values from the G8A object and loop through the word segment S1 to check against these values
vals = Object.values(G8A);
for(var j = 0; j<S1.length; j++){
	if(S1.charCodeAt(j) == vals[i]){
		R[j] = 0;
		countOff++;
	}
}

//redefine vals as G8B values and check if they occurr at the end of the word segment 3
vals = Object.values(G8B);
if(S3.endsWith(vals[i])){
	R[WORD.indexOf(vals[i])] = 0;
	countOff++;
}


//apply if statements outlined in algorithm. If the countOn variable that is counting how many root letters have been found is more than 3, create a ROOT string from those found values and print it to screen. Return to end the method and 
//stop extraction
var st_in = 1;
var ls_in = n;
if (countOn >= 3){
	for(var i = 0; i<R.length; i++){
		if (R[i]==1){
			ROOT = ROOT.concat(WORD.charAt(i));
		}
	}
	document.getElementById("rsltBox").innerHTML = ROOT;
	return;
}
//if we've found two root letters, apply the rootDistance method to check if our word can be shortened for a smaller search paremeter.
if(countOn == 2 && flag){
rootDistance(R);
}

//apply if else statements as per outlined by algorithm
if(R[st_in] == 0 || R[ls_in] == 0){
	if(R[st_in] == 0){
		r1_flag = true;
		while(R[st_in] == 0){
			st_in++;
		}	
	}
	if(R[ls_in]==0){
		rn_flag = true;
		while(R[ls_in] == 0){
			ls_in--;
		}
	}
}
//redfine our n and word segments.
n=WORD.length;
Wseg = [S1, S2, S3];
//initialize all variables that correlate to our TABLE 1 dictionaries
vals = Object.values(G2);
var var3 = Object.values(G3);
var var4 = Object.values(G4);
var var5 = Object.values(G5);
var var6 = Object.values(G6);
var var7 = Object.values(G7);
var var9 = Object.values(G9);

//TABLE 1 G2 rules
if(S1.charCodeAt(0) == vals[0]){
	R[0] = 1;
	countOn++;
}
//TABLE 1 G3 RULES
for(var i=0; i<var3.length; i++){
	for(var j = 0; j<S1.length; j++){
		if(S1.charCodeAt(j) == var3[i]){
			R[j] = 1;
			countOn++;
		}
	}
}
//TABLE 1 G4 RULES
for(var i=0; i<var4.length; i++){
	if(S2.charCodeAt(0) == var4[i]){
		R[S1.length] = 1;
		countOn++;
	}
}
//TABLE 1 G5 RULES
for(var i=0; i<var5.length; i++){
	for(var j = 0; j<S2.length; j++){
		if(S2.charCodeAt(j) == var5[i]){
			R[S1.length+j] = 1;
			countOn++;
		}
	}
}
//TABLE 1 G6 RULES
for(var i=0; i<var6.length; i++){
	if(S2.charCodeAt(S2.length-1) == var6[i]){
		R[S1.length+S2.length+1] = 1;
		countOn++;
	}
}
//TABLE 1 G7 RULES
for(var i=0; i<var7.length; i++){
	for (var j = 0; j<S3.length; j++){
		if(WORD.charCodeAt(n-1) == var7[i]){
			R[S1.length+S2.length+j] = 1;
			countOn++;
		}
	}
}
// ALGORITHM implementation that handles letters not mentioned in TABLE 1 and outputs our final word after extraction
while(Changes == false){
	extraRules(S1, S2, S3, n);
	if(Changes){
		if (countOn >= 3){
			for(var i = 0; i<R.length+1; i++){
				if (R[i]==1){
					ROOT = ROOT.concat(WORD.charAt(i));
				}
			}
	document.getElementById("rsltBox").innerHTML = ROOT;
	return;
		}
	
	}
}
};



//function that searchs word for occurence of ال, finds the index, and then applies 4 rules depending on where the index begins and what letters are neighboring the occurence of ال
function defArticle(){
	if(WORD.includes("ال")){
		var index = WORD.indexOf("ال");
		console.log(index);
		var values = Object.values(SUN);
		var valueS = Object.values(ALSHADDA);
		if (index == 0){
				if(values.includes(WORD.charCodeAt(index+2)) && WORD.charCodeAt(index+3) != valueS[0]){
					if(WORD.charCodeAt(index+2) != DICT["ت"]){
						R[index+2] = 1;
						R[index+1] = 1;
						countOn += 2;
					}else{
						R[index+1] = 1;
						countOn++;
					}
				}
				else{
					WORD = WORD.substring(2,WORD.length + 1);
					R.shift();
					R.shift();
					R[index+1] = 1;
					countOn++;
				}
		} else if (index == 1){
			if (WORD.charCodeAt(0)!= DICT["ب"] &&WORD.charCodeAt(0)!= DICT["ف"] &&WORD.charCodeAt(0) != DICT["و"] &&WORD.charCodeAt(0)!= DICT["ك"]){
				R[index+1] = 1;
				R[0] = 1;
				countOn+=2;
			}
			else if((WORD.length < 6) && (WORD.charCodeAt(0)== DICT["ب"] || WORD.charCodeAt(0)== DICT["ف"] || WORD.charCodeAt(0) == DICT["و"] || WORD.charCodeAt(0)== DICT["ك"])){
				R[index+1] = 1;
				R[0] = 1;
				countOn+=2;
			}
			else{
				WORD = WORD.substring(3,WORD.length+1);
				R[index+1] = 1;
				R[0] = 1;
				countOn+=2;
			}
		} else if (index == 2){
			if((WORD.charCodeAt(0) == DICT["ب"] || WORD.charCodeAt(0) == DICT["ف"] || WORD.charCodeAt(0) == DICT["و"] || WORD.charCodeAt(0) == DICT["ك"]) && (WORD.charCodeAt(1) == DICT["ب"] || WORD.charCodeAt(1) == DICT["ف"] || WORD.charCodeAt(1) == DICT["و"] || WORD.charCodeAt(1) == DICT["ك"])) {
				if((WORD.charCodeAt(0) == WORD.charCodeAt(1) || (WORD.charCodeAt(0) == DICT["و"] && WORD.charCodeAt(1) == DICT["ف"])) || ( (WORD.charCodeAt(0) == DICT["ب"] || WORD.charCodeAt(0) == DICT["ك"]) && (WORD.charCodeAt(1) == DICT["ب"] || WORD.charCodeAt(1) == DICT["ف"] || WORD.charCodeAt(1) == DICT["و"] || WORD.charCodeAt(1) == DICT["ك"]))) {
					R[1] = 1;
					R[index+1] = 1;
					countOn+=2;
				}else{
					WORD = WORD.substring(4, WORD.length+1);
					R.shift();
					R.shift();
					R.shift();
					R.shift();
					R[0] = 1;
					countOn++;
				}
			}else if((WORD.charCodeAt(0) != DICT["ب"] || WORD.charCodeAt(0) != DICT["ف"] || WORD.charCodeAt(0) != DICT["و"] || WORD.charCodeAt(0) != DICT["ك"]) || (WORD.charCodeAt(1) != DICT["ب"] || WORD.charCodeAt(1) != DICT["ف"] || WORD.charCodeAt(1) != DICT["و"] || WORD.charCodeAt(1) != DICT["ك"])){
					if(WORD.charCodeAt(1) != DICT["و"]){
					R[1] = 1;
					R[index+1] = 1;
					countOn+=2;
					}
					else{
						WORD = WORD.substring(4,WORD.length + 1);
						R.shift();
						R.shift();
						R.shift();
						R.shift();
						R[index+1] = 1;
						countOn++;
					}
				}
			else{
					WORD = WORD.substring(4, WORD.length+1);
					R.shift();
					R.shift();
					R.shift();
					R.shift();
					R[index+1] = 1;
					countOn++;
				}
		}else if (index > 2) {
			R[index+1] = 1;
			countOn++;
		}
		else{
			WORD = WORD.substring(index+1, WORD.length);
			for(var i = 0; i < index+1; i++){
				R.shift();
			}
			switch(WORD.charCodeAt(index+2)){
				 case DICT["ب"]:
				 R[index+2] = 1;
				 countOn++;
				 	break;
				 case DICT["ف"]:
				 R[index+2] = 1;
				 countOn++;
				 	break;
				 case DICT["ك"]:
				 R[index+2] = 1;
				 countOn++;
				 	break;
				 case DICT["ن"]:
				 R[index+2] = 1;
				 countOn++;
				 	break;
				 case DICT["و"]:
				 R[index+2] = 1;
				 countOn++;
				 	break;
				 case DICT["ه"]:
				 R[index+2] = 1;
				 countOn++;
				 	break;
				 case DICT["ل"]:
				 R[index+2] = 1;
				 countOn++;
				 	break;
				 case DICT["ي"]:
				 R[index+2] = 1;
				 countOn++;
				 	break;
				 case DICT["س"]:
				 R[index+2] = 1;
				 countOn++;
				 	break;
			}
		}
	}
};
//mutate function that checks our word for specfic instances of specified variables in our MUT object library. If these instances are found, apply 1 of 4 rules to these characters and MUTATE them into related characters.
function mutateFunc(S1, S2, S3, W){
	W=W;
	console.log(W);
	for (var i = 0; i < WORD.length; i++){
		if((WORD.charCodeAt(i) == MUT["إ"] || WORD.charCodeAt(i) == MUT["ؤ"] || WORD.charCodeAt(i) == MUT["ئ"]) && (S1.includes(WORD.charAt(i)))){
			if(WORD.charCodeAt(i-1) == DICT["ا"] && S1.includes(WORD.charAt(i))){
			R[i] = 1;
			}
			W[i] = "أ";
			console.log("mutate 1");
		}
		else if(WORD.charCodeAt(i) == MUT["آ"]){
			W[i] = "أ";
			R[i] = 1;
			console.log("mutate 2");
		}
		else if((WORD.charCodeAt(i) == DICT["ض"] || WORD.charCodeAt(i) == DICT["ص"])&& (WORD.charCodeAt(i+1) == DICT["ط"])){
			W[i+1] = "ت";
			R[i+1] = 0;
			console.log("mutate 3");
		}
		else if(WORD.charCodeAt(i) == DICT["ز"] && WORD.charCodeAt(i+1) == DICT["د"]){
			W[i+1] = "ت";
			R[i+1] = 0;
			console.log("mutate 4");
		}
		else{
			console.log("mutate else");
		}
		}
};
// function that applies any rules that have not already been applied by one of the previous functions. these rules are based off of character indexes and whether or not roots have already been found.
function extraRules(s1, s2, s3, N){
	var S1 = s1;
	var S2 = s2;
	var S3 = s3;
	var n=N;
		for (var i = 0; i<WORD.length; i++){
			if(WORD.charCodeAt(i) == WORD.charCodeAt(i+1)){
				R[i] = 0;
				R[i+1] = 1;
				console.log(1);
				Changes = true;
			}
			else if("نلمس".charCodeAt(0) == WORD.charCodeAt(i) || "نلمس".charCodeAt(1) == WORD.charCodeAt(i) || "نلمس".charCodeAt(2) == WORD.charCodeAt(i) || "نلمس".charCodeAt(3) == WORD.charCodeAt(i)){
				for(var j =0; j<S1.length;j++){
					if(S1.charCodeAt(j) == WORD.charCodeAt(i) && R[j] == 1 && j<i){
						R[i] == 1;
						countOn++;
					}
				}
				Changes = true;
			}
			else if("ألوي".charCodeAt(0)==WORD.charCodeAt(i) ||"ألوي".charCodeAt(1)==WORD.charCodeAt(i)|| "ألوي".charCodeAt(2)==WORD.charCodeAt(i)|| "ألوي".charCodeAt(3)==WORD.charCodeAt(i) ){
				for (var j = 0; j < S1.length; j++) {
					if(S1.charCodeAt(j) == WORD.charCodeAt(i) && S1.charCodeAt(j-1) == "م".charCodeAt(0)){
						R[i] == 1;
						countOn++;
					}
				}
				Changes = true;
			}
			else if(WORD.charCodeAt(n-1) == "ة".charCodeAt(0) && (((WORD.charCodeAt(n-2) == "ي".charCodeAt(0)) && n <= 3) || (WORD.charCodeAt(n-2) !="ي".charCodeAt(0)))){
				R[n-1] = 1;
				Changes = true;
				countOn++;
			} else{
				console.log(ROOT);
				Changes = true;
			}
		}
		Changes = true;
};
//root distance algorithm that checks how far awy two root letters are if found early on in the extraction
function rootDistance(R){
	var r = R;

	if((R.lastIndexOf(1) - R.indexOf(1)>2)){
		WORD=WORD.substring(R.indexOf(1), R.lastIndexOf(1)+1);
		return WORD;
	}
};
//javascript DOM manipulation event that listens for the click of the button and performs our root extraction
button.addEventListener("click", function(e){
	mainMethod();
});


