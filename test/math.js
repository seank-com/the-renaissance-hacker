
function Addition(){'use strict';this._nDigits=0;this._nFractionalDigits=0;this._nCarry=0;this._nFind=0;this._nBlankPosition=0;this._oRepeats={};this._sWholePart1='';this._sFractionalPart1='';this._sWholePart2='';this._sFractionalPart2='';this._sWholePartSolution='';this._sFractionPartSolution='';this.noCarry=function(sOperand1,sOperand2){var i;for(i=sOperand1.length-1;i>=0;i-=1){if((+sOperand1[i])+(+sOperand2[i])>9){return false;}}
return true;};this.someCarry=function(sOperand1,sOperand2){var i;for(i=sOperand1.length-1;i>=0;i-=1){if((+sOperand1[i])+(+sOperand2[i])>9){return true;}}
return false;};this.allCarry=function(sOperand1,sOperand2){var i;for(i=sOperand1.length-1;i>=0;i-=1){if((+sOperand1[i])+(+sOperand2[i])<10){return false;}}
return true;};this.getNextProblem=function(){var fHappy,sOperand1,sOperand2,sKey,i;fHappy=false;while(!fHappy){i=Math.pow(10,this._nDigits-1);sOperand1=String(Math.floor(Math.random()*9*i)+i);sOperand2=String(Math.floor(Math.random()*9*i)+i);sKey='('+sOperand1+')('+sOperand2+')';if(this._oRepeats.hasOwnProperty(sKey)){fHappy=false;}else{this._oRepeats[sKey]=sKey;fHappy=true;}
if(fHappy){this._sWholePart1=sOperand1;this._sWholePart2=sOperand2;switch(this._nCarry){case 1:fHappy=this.noCarry(sOperand1,sOperand2);break;case 2:if(this._nDigits===1){fHappy=true;}else{fHappy=this.someCarry(sOperand1,sOperand2);}
break;case 3:fHappy=this.allCarry(sOperand1,sOperand2);break;}}
if(fHappy){if(this._nFind===2){this._nBlankPosition=Math.floor(Math.random()*3)+1;this._sWholePartSolution=(+this._sWholePart1)+(+this._sWholePart2);this._sFractionPartSolution='&nbsp;';}else{this._nBlankPosition=3;this._sWholePartSolution='&nbsp;';this._sFractionPartSolution='&nbsp;';}
this._sFractionalPart1='&nbsp;';this._sFractionalPart2='&nbsp;';if(this._nFractionalDigits>0){this._sWholePart1=sOperand1.substr(0,sOperand1.length-this._nFractionalDigits);this._sFractionalPart1='.'+sOperand1.substr(sOperand1.length-this._nFractionalDigits);this._sWholePart2=sOperand2.substr(0,sOperand2.length-this._nFractionalDigits);this._sFractionalPart2='.'+sOperand2.substr(sOperand2.length-this._nFractionalDigits);}}}};this.setLevel=function(nLevel){var nDigitsMin,nDigitsMax,nFindMax;this._oRepeats={};for(this._nFractionalDigits=0;this._nFractionalDigits<=4;this._nFractionalDigits+=1){if(this._nFractionalDigits===0){nDigitsMin=1;nDigitsMax=4;}else if(this._nFractionalDigits===2){nDigitsMin=3;nDigitsMax=5;}else{nDigitsMin=this._nFractionalDigits+1;nDigitsMax=this._nFractionalDigits+1;}
for(this._nDigits=nDigitsMin;this._nDigits<=nDigitsMax;this._nDigits+=1){nFindMax=1;if(this._nDigits===1){nFindMax=2;}
for(this._nFind=1;this._nFind<=nFindMax;this._nFind+=1){for(this._nCarry=1;this._nCarry<=3;this._nCarry+=1){nLevel-=1;if(nLevel===0){return true;}}}}}
return false;};this.canDoHorizontal=function(){return(this._nDigits===1);};this.getLevelDescription=function(){var sResult;sResult='Addition with '+this._nDigits+' digit';if(this._nDigits>1){sResult+='s ';}else{sResult+=' ';}
if(this._nFractionalDigits>0){sResult+='('+this._nFractionalDigits+' behind the decimal) ';}
if(this._nDigits===1){switch(this._nCarry){case 1:sResult+='no 2 digit results ';break;case 2:sResult+='some 2 digit results ';break;case 3:sResult+='all 2 digit results ';break;}}else{switch(this._nCarry){case 1:sResult+='no carrying ';break;case 2:sResult+='some carrying ';break;case 3:sResult+='lots of carrying ';break;}}
if(this._nFind===2){sResult+=' with missing operands';}
return sResult;};this.renderNextHorizontalProblem=function(oElement){var sOperand1,sOperand2,sAnswer,sLine;this.getNextProblem();sOperand1=this._sWholePart1;sOperand2=this._sWholePart2;sAnswer=this._sWholePartSolution;sLine=$('#blankline').html();switch(this._nBlankPosition){case 1:sOperand1=sLine;break;case 2:sOperand2=sLine;break;case 3:sAnswer=sLine;break;}
$(oElement).html($('#horizontalproblem').html().replace('{{wpop1}}',sOperand1).replace('{{wpop2}}',sOperand2).replace('{{op}}','+').replace('{{wpans}}',sAnswer));};this.renderNextVerticalProblem=function(oElement){this.getNextProblem();$(oElement).html($('#verticalproblem').html().replace('{{wpop1}}',this._sWholePart1).replace('{{fpop1}}',this._sFractionalPart1).replace('{{op}}','+').replace('{{wpop2}}',this._sWholePart2).replace('{{fpop2}}',this._sFractionalPart2).replace('{{wpans}}',this._sWholePartSolution).replace('{{fpans}}',this._sFractionPartSolution));};}
function Subtraction(){'use strict';this._nDigits=0;this._nFractionalDigits=0;this._nBorrow=0;this._nFind=0;this._nBlankPosition=0;this._oRepeats={};this._sWholePart1='';this._sFractionalPart1='';this._sWholePart2='';this._sFractionalPart2='';this._sWholePartSolution='';this._sFractionPartSolution='';this.noBorrow=function(sOperand1,sOperand2){var i;for(i=sOperand1.length-1;i>=0;i-=1){if((+sOperand1[i])<(+sOperand2[i])){return false;}}
return true;};this.someBorrow=function(sOperand1,sOperand2){var i;for(i=sOperand1.length-1;i>0;i-=1){if((+sOperand1[i])<(+sOperand2[i])){return true;}}
return false;};this.allBorrow=function(sOperand1,sOperand2){var i;for(i=sOperand1.length-1;i>0;i-=i){if((+sOperand1[i])>=(+sOperand2[i])){return false;}}
return true;};this.getNextProblem=function(){var fHappy,sOperand1,sOperand2,sKey,i;fHappy=false;while(!fHappy){i=Math.pow(10,this._nDigits-1);sOperand1=String(Math.floor(Math.random()*9*i)+i);sOperand2=String(Math.floor(Math.random()*9*i)+i);if((+sOperand1)<(+sOperand2)){i=sOperand1;sOperand1=sOperand2;sOperand2=i;}
sKey='('+sOperand1+')('+sOperand2+')';if(this._oRepeats.hasOwnProperty(sKey)){fHappy=false;}else{this._oRepeats[sKey]=sKey;fHappy=true;}
if(fHappy){this._sWholePart1=sOperand1;this._sWholePart2=sOperand2;switch(this._nBorrow){case 1:fHappy=this.noBorrow(sOperand1,sOperand2);break;case 2:fHappy=this.someBorrow(sOperand1,sOperand2);break;case 3:fHappy=this.allBorrow(sOperand1,sOperand2);break;}}
if(fHappy){if(this._nFind===2){this._nBlankPosition=Math.floor(Math.random()*3)+1;this._sWholePartSolution=this._sWholePart1-this._sWholePart2;}else{this._nBlankPosition=3;this._sWholePartSolution='&nbsp;';}
this._sFractionalPart1='&nbsp;';this._sFractionalPart2='&nbsp;';if(this._nFractionalDigits>0){this._sWholePart1=sOperand1.substr(0,sOperand1.length-this._nFractionalDigits);this._sFractionalPart1='.'+sOperand1.substr(sOperand1.length-this._nFractionalDigits);this._sWholePart2=sOperand2.substr(0,sOperand2.length-this._nFractionalDigits);this._sFractionalPart2='.'+sOperand2.substr(sOperand2.length-this._nFractionalDigits);}}}};this.setLevel=function(nLevel){var nDigitsMin,nDigitsMax,nFindMax,nBorrowMax;this._oRepeats={};for(this._nFractionalDigits=0;this._nFractionalDigits<=4;this._nFractionalDigits+=1){if(this._nFractionalDigits===0){nDigitsMin=1;nDigitsMax=4;}else if(this._nFractionalDigits===2){nDigitsMin=3;nDigitsMax=5;}else{nDigitsMin=this._nFractionalDigits+1;nDigitsMax=this._nFractionalDigits+1;}
for(this._nDigits=nDigitsMin;this._nDigits<=nDigitsMax;this._nDigits+=1){nFindMax=1;if(this._nDigits===1){nFindMax=2;}
for(this._nFind=1;this._nFind<=nFindMax;this._nFind+=1){nBorrowMax=3;if(this._nDigits===1){nBorrowMax=1;}
if(this._nDigits===2){nBorrowMax=2;}
for(this._nBorrow=1;this._nBorrow<=nBorrowMax;this._nBorrow+=1){nLevel-=1;if(nLevel===0){return true;}}}}}
return false;};this.canDoHorizontal=function(){return(this._nDigits===1);};this.getLevelDescription=function(){var sResult;sResult='Subtraction with '+this._nDigits+' digit';if(this._nDigits>1){sResult+='s';}
if(this._nFractionalDigits>0){sResult+=' ('+this._nFractionalDigits+' behind the decimal)';}
switch(this._nBorrow){case 1:sResult+=' no borrowing';break;case 2:sResult+=' some borrowing';break;case 3:sResult+=' lots of borrowing';break;}
if(this._nFind===2){sResult+=' with missing operands';}
return sResult;};this.renderNextHorizontalProblem=function(oElement){var sOperand1,sOperand2,sAnswer,sLine;this.getNextProblem();sOperand1=this._sWholePart1;sOperand2=this._sWholePart2;sAnswer=this._sWholePartSolution;sLine=$('#blankline').html();switch(this._nBlankPosition){case 1:sOperand1=sLine;break;case 2:sOperand2=sLine;break;case 3:sAnswer=sLine;break;}
$(oElement).html($('#horizontalproblem').html().replace('{{wpop1}}',sOperand1).replace('{{wpop2}}',sOperand2).replace('{{op}}','&minus;').replace('{{wpans}}',sAnswer));};this.renderNextVerticalProblem=function(oElement){this.getNextProblem();$(oElement).html($('#verticalproblem').html().replace('{{wpop1}}',this._sWholePart1).replace('{{fpop1}}',this._sFractionalPart1).replace('{{op}}','&minus;').replace('{{wpop2}}',this._sWholePart2).replace('{{fpop2}}',this._sFractionalPart2).replace('{{wpans}}',this._sWholePartSolution).replace('{{fpans}}',this._sFractionPartSolution));};}
function Multiplication(){'use strict';this._nDigits1=0;this._nDigits2=0;this._nFractionalDigits=0;this._nFind=0;this._nBlankPosition=0;this._oRepeats={};this._sWholePart1='';this._sFractionalPart1='';this._sWholePart2='';this._sFractionalPart2='';this._sWholePartSolution='';this._sFractionPartSolution='';this.getNextProblem=function(){var fHappy,sOperand1,sOperand2,sKey,i;fHappy=false;while(!fHappy){i=Math.pow(10,this._nDigits1-1);sOperand1=String(Math.floor(Math.random()*9*i)+i);i=Math.pow(10,this._nDigits2-1);sOperand2=String(Math.floor(Math.random()*9*i)+i);sKey='('+sOperand1+')('+sOperand2+')';if(this._oRepeats.hasOwnProperty(sKey)){fHappy=false;}else{this._oRepeats[sKey]=sKey;fHappy=true;this._sWholePart1=sOperand1;this._sWholePart2=sOperand2;if(this._nFind===2){this._nBlankPosition=Math.floor(Math.random()*3)+1;this._sWholePartSolution=+this._sWholePart1*+this._sWholePart2;}else{this._nBlankPosition=3;this._sWholePartSolution=" ";}
this._sFractionalPart1="&nbsp;";this._sFractionalPart2="&nbsp;";if(this._nFractionalDigits>0){this._sWholePart1=sOperand1.substr(0,sOperand1.length-this._nFractionalDigits);this._sFractionalPart1='.'+sOperand1.substr(sOperand1.length-this._nFractionalDigits);this._sWholePart2=sOperand2.substr(0,sOperand2.length-this._nFractionalDigits);this._sFractionalPart2='.'+sOperand2.substr(sOperand2.length-this._nFractionalDigits);}}}};this.setLevel=function(nLevel){var nDigitsMin,nDigitsMax,nFindMax;this._oRepeats={};for(this._nFractionalDigits=0;this._nFractionalDigits<=4;this._nFractionalDigits+=1){if(this._nFractionalDigits===0){nDigitsMin=1;nDigitsMax=4;}else if(this._nFractionalDigits===2){nDigitsMin=3;nDigitsMax=5;}else{nDigitsMin=this._nFractionalDigits+1;nDigitsMax=this._nFractionalDigits+1;}
for(this._nDigits1=nDigitsMin;this._nDigits1<=nDigitsMax;this._nDigits1+=1){for(this._nDigits2=this._nFractionalDigits+1;this._nDigits2<=this._nDigits1;this._nDigits2+=1){nFindMax=1;if(this._nDigits1===1){nFindMax=2;}
for(this._nFind=1;this._nFind<=nFindMax;this._nFind+=1){nLevel-=1;if(nLevel===0){return true;}}}}}
return false;};this.canDoHorizontal=function(){return(this._nDigits1===1);};this.getLevelDescription=function(){var sResult;sResult='Multiplication of '+this._nDigits1+' digit numbers with '+this._nDigits2+' digit numbers';if(this._nFractionalDigits>0){sResult+=' ('+this._nFractionalDigits+' behind the decimal)';}
if(this._nFind===2){sResult+=' with missing operands';}
return sResult;};this.renderNextHorizontalProblem=function(oElement){var sOperand1,sOperand2,sAnswer,sLine;this.getNextProblem();sOperand1=this._sWholePart1;sOperand2=this._sWholePart2;sAnswer=this._sWholePartSolution;sLine=$('#blankline').html();switch(this._nBlankPosition){case 1:sOperand1=sLine;break;case 2:sOperand2=sLine;break;case 3:sAnswer=sLine;break;}
$(oElement).html($('#horizontalproblem').html().replace('{{wpop1}}',sOperand1).replace('{{wpop2}}',sOperand2).replace('{{op}}','&times;').replace('{{wpans}}',sAnswer));};this.renderNextVerticalProblem=function(oElement){this.getNextProblem();$(oElement).html($('#verticalproblem').html().replace('{{wpop1}}',this._sWholePart1).replace('{{fpop1}}',this._sFractionalPart1).replace('{{op}}','&times;').replace('{{wpop2}}',this._sWholePart2).replace('{{fpop2}}',this._sFractionalPart2).replace('{{wpans}}',this._sWholePartSolution).replace('{{fpans}}',this._sFractionPartSolution));};}
function Division(){'use strict';this._nDigitsQuotient=0;this._nDigitsDivisor=0;this._nRemainder=0;this._nFind=0;this._nBlankPosition=0;this._oRepeats={};this._sQuotient='';this._sDivisor='';this._sDividend='';this._sRemainder='';this.getNextProblem=function(){var fHappy,sKey,i;fHappy=false;while(!fHappy){i=Math.pow(10,this._nDigitsQuotient-1);this._sQuotient=String(Math.floor(Math.random()*9*i)+i);i=Math.pow(10,this._nDigitsDivisor-1);this._sDivisor=String(Math.floor(Math.random()*9*i)+i);if(this._nRemainder===2){this._sRemainder=String(Math.floor(Math.random()*(+this._sDivisor-1)+1));}else{this._sRemainder='0';}
this._sDividend=String(((+this._sQuotient)*(+this._sDivisor))+(+this._sRemainder));sKey='('+this._sQuotient+')('+this._sDivisor+')';if(this._oRepeats.hasOwnProperty(sKey)){fHappy=false;}else{this._oRepeats[sKey]=sKey;fHappy=true;if(this._nFind===2){this._nBlankPosition=Math.floor(Math.random()*3)+1;}else{this._nBlankPosition=3;}}}};this.setLevel=function(nLevel){var nFindMax,nRemainderMax;this._oRepeats={};for(this._nDigitsQuotient=1;this._nDigitsQuotient<=3;this._nDigitsQuotient+=1){for(this._nDigitsDivisor=1;this._nDigitsDivisor<=2;this._nDigitsDivisor+=1){nFindMax=1;if(this._nDigitsQuotient===1&&this._nDigitsDivisor===1){nFindMax=2;}
for(this._nFind=1;this._nFind<=nFindMax;this._nFind+=1){nRemainderMax=2;if(this._nDigitsQuotient===1&&this._nDigitsDivisor===1){nRemainderMax=1;}
for(this._nRemainder=1;this._nRemainder<=nRemainderMax;this._nRemainder+=1){nLevel-=1;if(nLevel===0){return true;}}}}}
return false;};this.canDoHorizontal=function(){return(this._nDigitsQuotient===1&&this._nDigitsDivisor===1);};this.getLevelDescription=function(){var sResult;sResult='Division with '+this._nDigitsQuotient+' digit quotients and '+this._nDigitsDivisor+' digit divisors';if(this._nRemainder===2){sResult+=' with remainders';}
if(this._nFind===2){sResult+=' with missing operands';}
return sResult;};this.renderNextHorizontalProblem=function(oElement){var sOperand1,sOperand2,sAnswer,sLine;this.getNextProblem();sOperand1=this._sDividend;sOperand2=this._sDivisor;sAnswer=this._sQuotient;sLine=$('#blankline').html();switch(this._nBlankPosition){case 1:sOperand1=sLine;break;case 2:sOperand2=sLine;break;case 3:sAnswer=sLine;break;}
$(oElement).html($('#horizontalproblem').html().replace('{{wpop1}}',sOperand1).replace('{{wpop2}}',sOperand2).replace('{{op}}','&divide;').replace('{{wpans}}',sAnswer));};this.renderNextVerticalProblem=function(oElement){this.getNextProblem();$(oElement).html($('#longdivisionproblem').html().replace('{{divisor}}',this._sDivisor).replace('{{dividend}}',this._sDividend));};}
$(document).ready(function(){'use strict';var oSkill,nLevel;function renderWorksheet(){if(oSkill.canDoHorizontal()){$('#worksheet').html($('#layout3x10').html());$('#worksheet td').each(function(idx,el){oSkill.renderNextHorizontalProblem(el);});}else{$('#worksheet').html($('#layout4x5').html());$('#worksheet td').each(function(idx,el){oSkill.renderNextVerticalProblem(el);});}}
$('#configdialog').dialog({autoOpen:false,modal:false,width:480,buttons:{"Regenerate":function(){$('#level').change();}}});$('body').hover(function(){$('#configbutton').slideDown('fast');},function(){$('#configbutton').hide();});$('#configbutton').click(function(event){$('#configdialog').dialog("open");});$('#skill').change(function(){var i,oLevel;switch($('#skill option').filter(':selected').val()){case'addition':oSkill=new Addition();break;case'subtraction':oSkill=new Subtraction();break;case'multiplication':oSkill=new Multiplication();break;case'division':oSkill=new Division();break;}
oLevel=$('#level');oLevel.html('');i=1;while(oSkill.setLevel(i)){oLevel.append('<option value="'+i+'">'+oSkill.getLevelDescription()+'</option>');i+=1;}
oLevel.val(1).change();});$('#level').change(function(){nLevel=+($('#level option').filter(':selected').val());oSkill.setLevel(nLevel);renderWorksheet();});$('#configbutton').hide();$('#skill').val('addition').change();});