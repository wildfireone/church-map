/**
 * @Author: John Isaacs <john>
 * @Date:   20-Mar-192019
 * @Filename: map.js
 * @Last modified by:   john
 * @Last modified time: 20-Mar-192019
 */

var mapBounds = new L.LatLngBounds(
  new L.LatLng(49.852539, -7.793077),
  new L.LatLng(60.894042, 1.790425));
var mapMinZoom = 1;
var mapMaxZoom = 17;




var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
});

var OldMaps = L.tileLayer('http://nls-{s}.tileserver.com/nls/{z}/{x}/{y}.jpg', {
  minZoom: mapMinZoom, maxZoom: mapMaxZoom,
  bounds: mapBounds,
  attribution: 'Historical Maps Layer, 1919-1947 from the <a href="http://maps.nls.uk/projects/api/">NLS Maps API</a>',
  opacity: 0.85,
  subdomains: '0123'
});

var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

/* var mymap = L.map('mapid', {
  center: [57.1497, -2.0943],
  zoom: 13,
  layers: [ OldMaps,CartoDB_Positron]
}); */


  var southWest = L.latLng(59.03499076414602, -1.5475702285766604),
    northEast = L.latLng(54.54667910890574, -7.260460853576661),
    bounds = L.latLngBounds(southWest, northEast);

var mymap = L.map('mapid', {
  center: [57.1497, -2.0943],
  zoom: 11,
  minZoom: 7,
  layers: [Esri_WorldTopoMap]
});

var baseMaps = {
  
 //"Histroic": OldMaps,
  "Modern": Esri_WorldTopoMap
};

L.control.layers(baseMaps).addTo(mymap);

var redIcon = new L.Icon({
  iconUrl: 'img/marker-icon-red.png',
  shadowUrl: 'img/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var blueIcon = new L.Icon({
  iconUrl: 'img/marker-icon-blue.png',
  shadowUrl: 'img/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var greenIcon = new L.Icon({
  iconUrl: 'img/marker-icon-green.png',
  shadowUrl: 'img/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var yellowIcon = new L.Icon({
  iconUrl: 'img/marker-icon-yellow.png',
  shadowUrl: 'img/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var purpleIcon = new L.Icon({
  iconUrl: 'img/marker-icon-violet.png',
  shadowUrl: 'img/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var sredIcon = new L.Icon({
  iconUrl: 'img/marker-icon-red.png',
  shadowUrl: 'img/marker-shadow.png',
  iconSize: [12, 20],
  iconAnchor: [6, 20],
  popupAnchor: [1, -34],
  shadowSize: [20, 20]
});

var sblueIcon = new L.Icon({
  iconUrl: 'img/marker-icon-blue.png',
  shadowUrl: 'img/marker-shadow.png',
  iconSize: [12, 20],
  iconAnchor: [6, 20],
  popupAnchor: [1, -34],
  shadowSize: [20, 20]
});

var sgreenIcon = new L.Icon({
  iconUrl: 'img/marker-icon-green.png',
  shadowUrl: 'img/marker-shadow.png',
  iconSize: [12, 20],
  iconAnchor: [6, 20],
  popupAnchor: [1, -34],
  shadowSize: [20, 20]
});

var syellowIcon = new L.Icon({
  iconUrl: 'img/marker-icon-yellow.png',
  shadowUrl: 'img/marker-shadow.png',
  iconSize: [12, 20],
  iconAnchor: [6, 20],
  popupAnchor: [1, -34],
  shadowSize: [20, 20]
});
var spurpleIcon = new L.Icon({
  iconUrl: 'img/marker-icon-violet.png',
  shadowUrl: 'img/marker-shadow.png',
  iconSize: [12, 20],
  iconAnchor: [6, 20],
  popupAnchor: [1, -34],
  shadowSize: [20, 20]
});








//var printPlugin = L.easyPrint({
 // position: 'topleft',
	//hidden: false,
	//sizeModes: ['Current']
//}).addTo(map); 
//printPlugin.printMap('A4Portrait', 'MyFileName');
 
//L.easyPrint({
//	title: 'My awesome print button',
//	position: 'topleft',
 // sizeModes: ['Current']
//}).addTo(mymap);


//L.control.browserPrint().addTo(mymap);

function saveImg(){
/* domtoimage.toBlob()
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    }); */
var node = document.getElementById('mapid')

    domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
        document.getElementById('mapid').style.display = "none";
        console.log("done");
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
}

$.getJSON("churches.json", function (data) {
  //var collisionLayer = L.layerGroup.collision({margin:5});
  //collisionLayer.addTo(mymap);
  //var locations =[];
  var idno =0;
  data.forEach(function (location) {
     
      //var osgb = new GT_OSGB();

      //var gr = location["Grid Ref"];
    //if (osgb.parseGridRef(gr))
    //{
          //location.wgs84 = osgb.getWGS84();
          //console.log(location.Status)
          //locations.push(location);
       
          var m;
          
          if(location.Status.toLowerCase() == "yes"){
              m= L.marker([location.wgs84.latitude, location.wgs84.longitude], { icon: greenIcon }).addTo(mymap);
          }
          else if(location.Status.toLowerCase() == "scrap" || location.Status.toLowerCase() == "unknown" ){
            m= L.marker([location.wgs84.latitude, location.wgs84.longitude], { icon: redIcon }).addTo(mymap);
          }
          else if(location.Status.toLowerCase() == "overhaul"){
            m= L.marker([location.wgs84.latitude, location.wgs84.longitude],{ icon: purpleIcon }).addTo(mymap);
          }
          else if(location.Status.toLowerCase() == "moved"){
            m= L.marker([location.wgs84.latitude, location.wgs84.longitude],{ icon: yellowIcon }).addTo(mymap);
          }
          else if(location.Status.toLowerCase() == "rebuild"){
            m= L.marker([location.wgs84.latitude, location.wgs84.longitude], { icon: blueIcon }).addTo(mymap);
          }
          idno++;
          m.bindTooltip(""+idno, {permanent: true, className: "my-label", offset: [0, 0] });
          
          m.addTo(mymap);
          
          //var locationtext = "<p>"+idno+": "+location['Full Name']+" completed: "+location['Comp Year']+"</p>";


          //$('#sidebar').append(locationtext);


      m.setBouncingOptions({
        bounceHeight: 20,    // height of the bouncing
        bounceSpeed: 50,    // bouncing speed coefficient
        exclusive: true,  // if this marker bouncing all others must stop
      }).on('click', function () {
  
        resetAllMarkers();
        this.toggleBouncing();
        if (this.isBouncing()) {
          //this.setIcon(redIcon);
          showSidebar(location);
        }
        else {
          resetAllMarkers();
          //this.setIcon(blueIcon);
          hideSideBar();
        }
      });
     // }

      
  })
  //console.log(JSON.stringify(locations));
});

//$('#mapid').click(function(){
//L.Marker._bouncingMarkers
//resetAllMarkers();
//hideSideBar();
//});

resetAllMarkers = function () {
  var marker;
  L.Marker._bouncingMarkers.forEach(function(marker){
    marker._bouncingMotion.isBouncing = false;
   // marker.setIcon(blueIcon);   // stop bouncing
  });

};

function showSidebar(location) {
  $("#mapid").removeClass("col-md-12")
  $("#mapid").addClass("col-md-9")
  $("#sidebar").removeClass("col-md-0")
  $("#sidebar").addClass("col-md-3")
  $("#sidebar").show();
  var title = location["pin-title"]
  var loc = location['location']
  var desc = location['text']
  var photoSrc = location['photos']
  var photoSrcs = photoSrc.split(' ');
  var photoString = "";

  for (i = 0; i < photoSrcs.length; i++) {
    photoString = photoString + "  <a href='" + photoSrcs[i] + "' data-lightbox='image'" + loc + " data-title='" + loc + "'><img class='popupimg' src='" + photoSrcs[i] + "' /></a>"
  }


  var content = "<div class='pop'><b>" + title + "</b><br>" + loc + "<br>" + desc + "<br>" + "<p>" + photoString + "</p></div>"
  $('#sidebar').html(content);
  //console.log("sidebar on")
  //console.log(title)

}

function hideSideBar() {
  $("#sidebar").removeClass("col-md-3")
  $("#sidebar").addClass("col-md-0")
  $("#mapid").removeClass("col-md-9")
  $("#mapid").addClass("col-md-12")
  $("#sidebar").hide();
  //console.log("sidebar hidden")
}

