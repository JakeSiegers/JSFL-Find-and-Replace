var arrayOfRules = [
	['Replace This','With This']
	,['Replace This','With This']
	,['Replace This','With This']
	,['Replace This','With This']
	,['Replace This','With This']
];

fl.showIdleMessage(false);
fl.outputPanel.clear();

var arrayOfAs = new Array();
var arrayLength = 0;
var changesMade = -1;
fl.outputPanel.trace('Starting!');
while(changesMade!=0){
	changesMade=0;

	for(var currentRule=0;currentRule<arrayOfRules.length;currentRule++){
		for(var h = 0; h < fl.getDocumentDOM().library.items.length; h++){
			var currentItem = fl.getDocumentDOM().library.items[h];
			if(currentItem.itemType=='movie clip'){
				for(var i=0;i<currentItem.timeline.layers.length;i++){
					var currentLayer = currentItem.timeline.layers[i];				
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
										fl.getDocumentDOM().library.items[h].timeline.layers[i].frames[j].actionScript=as;
										changesMade++;
										
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
				}
			}
		}
	}
	fl.outputPanel.trace(changesMade);
}
alert("done!");
