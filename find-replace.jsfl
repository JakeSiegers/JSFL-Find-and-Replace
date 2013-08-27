fl.showIdleMessage(false);

var arrayOfRules = [
	['Replace This','With This']
	,['Replace This','With This']
	,['Replace This','With This']
	,['Replace This','With This']
	,['Replace This','With This']
];

fl.outputPanel.clear();

var arrayOfAs = new Array();
var arrayLength = 0;

for(var currentRule=0;currentRule<arrayOfRules.length;currentRule++){
	//fl.outputPanel.trace("On Rule"+currentRule);
	for(var h = 0; h < fl.getDocumentDOM().library.items.length; h++){
		var currentItem = fl.getDocumentDOM().library.items[h];
		if(currentItem.itemType=='movie clip'){
			for(var i=0;i<currentItem.timeline.layers.length;i++){
				var currentLayer = currentItem.timeline.layers[i];
				//for(var k=0;k<arrayOfRules.length;k++){
					for(var j=0;j<currentLayer.frames.length;j++){
						var currentFrame = currentLayer.frames[j];
						var as = currentFrame.actionScript;
						var weHaveThisAlready = false;
						arrayLength = arrayOfAs.length;
						for(var k=0;k < arrayLength;k++){
							if(arrayOfAs[k][0].indexOf(as)!=-1){
								weHaveThisAlready = true;
								while(as.indexOf(arrayOfRules[currentRule][0])!=-1){
									as=as.replace(arrayOfRules[currentRule][0],arrayOfRules[currentRule][1]);
									//as=str_replace(arrayOfRules[currentRule][0],arrayOfRules[currentRule][1],as);
									
									//currentFrame.actionScript=as;
									fl.getDocumentDOM().library.items[h].timeline.layers[i].frames[j].actionScript=as; //This line is not working. You need to do some googling to set the actionscript on an item. I'm sorry. I need to eat.
									//fl.outputPanel.trace(fl.getDocumentDOM().library.items[h].timeline.layers[i].frames[j].actionScript);
									fl.outputPanel.trace("Item:"+h+" Layer:"+i+" Frame:"+j+" Replaced '"+arrayOfRules[currentRule][0]+"' with '"+arrayOfRules[currentRule][1]+"'");
								}	
							}
							
						}
						if(weHaveThisAlready != true){
							arrayOfAs[arrayLength] = new Array();
							arrayOfAs[arrayLength][0]=as;
							arrayOfAs[arrayLength][1]=h; //items
							arrayOfAs[arrayLength][2]=i; //layers
							arrayOfAs[arrayLength][3]=j; //frames
						}
					}
				//}
			}
		}
	}
}
alert("done!")
/*
for(var j=0;j<arrayOfRules.length;j++){
	for(var k=0;k<arrayOfAs.length;k++){
		//alert(arrayOfAs[k][0]);
		var as= arrayOfAs[k][0];

		//if(as.indexOf(arrayOfRules[j][0])!=-1){
		
		//Checking to make sure its the actionscript i think it is
			if(as == fl.getDocumentDOM().library.items[arrayOfAs[k][1]].timeline.layers[arrayOfAs[k][2]].frames[arrayOfAs[k][3]].actionScript){
				fl.outputPanel.trace(arrayOfRules[j][1]);		
				//as=as.replace(arrayOfRules[j][0],arrayOfRules[j][1]);
				as=str_replace(arrayOfRules[j][0],arrayOfRules[j][1],as);
				//fl.getDocumentDOM().library.editItem(fl.getDocumentDOM().library.items[arrayOfAs[k][1]].name);				
				fl.getDocumentDOM().library.items[arrayOfAs[k][1]].timeline.layers[arrayOfAs[k][2]].frames[arrayOfAs[k][3]].actionScript=as;
				//fl.outputPanel.trace("On - "+fl.getDocumentDOM().library.items[arrayOfAs[k][1]].name+" Replaced '"+arrayOfRules[j][0]+"' with '"+arrayOfRules[j][1]+"'");
				//fl.outputPanel.trace(arrayOfAs[k][1]);
				//fl.outputPanel.trace(arrayOfAs[k][2]);
				//fl.outputPanel.trace(arrayOfAs[k][3]);
			}
		//}
	}
	
	
		if(as.indexOf(arrayOfRules[k][0])!=-1){
			//codeWeWantFound = true;
			as=as.replace(arrayOfRules[k][0],arrayOfRules[k][1]);
			if(currentLayer.name="Layer 5"){
				alert(as);
			}
			//fl.getDocumentDOM().library.items[h].timeline.layers[i].frames[0].actionScript=as;
			//fl.outputPanel.trace("Replacing code on "+currentLayer.name+" using rule:"+k);
		}
		
}*/
