var GraphPolygonWidget=function(polygonId,pointList){var self=this;var defaultAnimationDuration=250;var polygon=null;var state=null;var attributeList={"polygon":{"class":null,"points":null,"fill":null,"stroke-width":null,"opacity":null}}
init();this.redraw=function(duration){draw(duration);}
this.showPolygon=function(){if(state==null||state==undefined){state=POLYGON_DEFAULT;}
attributeList["polygon"]["class"]=graphPolygonProperties["polygon"]["class"];attributeList["polygon"]["stroke-width"]=graphPolygonProperties["polygon"]["stroke-width"];attributeList["polygon"]["fill"]=graphPolygonProperties["polygon"][state]["fill"];attributeList["polygon"]["opacity"]=graphPolygonProperties["polygon"][state]["opacity"];}
this.hidePolygon=function(){attributeList["polygon"]["opacity"]=0;}
this.removePolygon=function(){polygon.remove();}
this.statePolygon=function(stateName){state=stateName;var key;for(key in graphPolygonProperties["polygon"][state])
attributeList["polygon"][key]=graphPolygonProperties["polygon"][state][key];}
this.getAttributes=function(){return deepCopy(attributeList);}
this.getClassNumber=function(){return polygonId;}
function init(){polygon=polygonSvg.append("polygon");attributeList["polygon"]["class"]="p"+polygonId;var pointListText="";for(key in pointList){pointListText=pointListText+pointList[key].x+","+pointList[key].y+" ";}
attributeList["polygon"]["points"]=pointListText;attributeList["polygon"]["fill"]=graphPolygonProperties["polygon"]["default"]["fill"];attributeList["polygon"]["stroke-width"]=0;attributeList["polygon"]["opacity"]=1.0;polygon.attr("class",attributeList["polygon"]["class"]).attr("points",attributeList["polygon"]["points"]).attr("fill",attributeList["polygon"]["fill"]).attr("stroke-width",attributeList["polygon"]["stroke-width"]).attr("opacity",attributeList["polygon"]["opacity"]);}
function draw(dur){if(dur==null||isNaN(dur))dur=defaultAnimationDuration;if(dur<=0)dur=1;polygon.transition().duration(dur).attr("points",attributeList["polygon"]["points"]).attr("fill",attributeList["polygon"]["fill"]).attr("stroke-width",attributeList["polygon"]["stroke-width"]).attr("opacity",attributeList["polygon"]["opacity"]);}}