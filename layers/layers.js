var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MW01_1 = new ol.format.GeoJSON();
var features_MW01_1 = format_MW01_1.readFeatures(json_MW01_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MW01_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MW01_1.addFeatures(features_MW01_1);
var lyr_MW01_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MW01_1, 
                style: style_MW01_1,
                popuplayertitle: "MW01",
                interactive: true,
                title: '<img src="styles/legend/MW01_1.png" /> MW01'
            });
var format_MW02_2 = new ol.format.GeoJSON();
var features_MW02_2 = format_MW02_2.readFeatures(json_MW02_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MW02_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MW02_2.addFeatures(features_MW02_2);
var lyr_MW02_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MW02_2, 
                style: style_MW02_2,
                popuplayertitle: "MW02",
                interactive: true,
                title: '<img src="styles/legend/MW02_2.png" /> MW02'
            });
var format_MW03_3 = new ol.format.GeoJSON();
var features_MW03_3 = format_MW03_3.readFeatures(json_MW03_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MW03_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MW03_3.addFeatures(features_MW03_3);
var lyr_MW03_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MW03_3, 
                style: style_MW03_3,
                popuplayertitle: "MW03",
                interactive: true,
                title: '<img src="styles/legend/MW03_3.png" /> MW03'
            });
var format_SB01_4 = new ol.format.GeoJSON();
var features_SB01_4 = format_SB01_4.readFeatures(json_SB01_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SB01_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SB01_4.addFeatures(features_SB01_4);
var lyr_SB01_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SB01_4, 
                style: style_SB01_4,
                popuplayertitle: "SB01",
                interactive: true,
                title: '<img src="styles/legend/SB01_4.png" /> SB01'
            });
var format_SB02_5 = new ol.format.GeoJSON();
var features_SB02_5 = format_SB02_5.readFeatures(json_SB02_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SB02_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SB02_5.addFeatures(features_SB02_5);
var lyr_SB02_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SB02_5, 
                style: style_SB02_5,
                popuplayertitle: "SB02",
                interactive: true,
                title: '<img src="styles/legend/SB02_5.png" /> SB02'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MW01_1.setVisible(true);lyr_MW02_2.setVisible(true);lyr_MW03_3.setVisible(true);lyr_SB01_4.setVisible(true);lyr_SB02_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MW01_1,lyr_MW02_2,lyr_MW03_3,lyr_SB01_4,lyr_SB02_5];
lyr_MW01_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Fill_Depth': 'Fill_Depth', 'GW_Depth': 'GW_Depth', 'TD': 'TD', });
lyr_MW02_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Fill_Depth': 'Fill_Depth', 'GW_Depth': 'GW_Depth', 'TD': 'TD', });
lyr_MW03_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Fill_Depth': 'Fill_Depth', 'GW_Depth': 'GW_Depth', 'TD': 'TD', });
lyr_SB01_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Fill_Depth': 'Fill_Depth', 'GW_Depth': 'GW_Depth', 'TD': 'TD', });
lyr_SB02_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Fill_Depth': 'Fill_Depth', 'GW_Depth': 'GW_Depth', 'TD': 'TD', });
lyr_MW01_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Fill_Depth': 'TextEdit', 'GW_Depth': 'TextEdit', 'TD': 'TextEdit', });
lyr_MW02_2.set('fieldImages', {'id': '', 'Name': '', 'Fill_Depth': '', 'GW_Depth': '', 'TD': '', });
lyr_MW03_3.set('fieldImages', {'id': '', 'Name': '', 'Fill_Depth': '', 'GW_Depth': '', 'TD': '', });
lyr_SB01_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Fill_Depth': 'TextEdit', 'GW_Depth': 'TextEdit', 'TD': 'TextEdit', });
lyr_SB02_5.set('fieldImages', {'id': '', 'Name': '', 'Fill_Depth': '', 'GW_Depth': '', 'TD': '', });
lyr_MW01_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Fill_Depth': 'no label', 'GW_Depth': 'no label', 'TD': 'no label', });
lyr_MW02_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Fill_Depth': 'inline label - visible with data', 'GW_Depth': 'no label', 'TD': 'no label', });
lyr_MW03_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Fill_Depth': 'no label', 'GW_Depth': 'no label', 'TD': 'no label', });
lyr_SB01_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Fill_Depth': 'no label', 'GW_Depth': 'no label', 'TD': 'no label', });
lyr_SB02_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Fill_Depth': 'no label', 'GW_Depth': 'no label', 'TD': 'no label', });
lyr_SB02_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});