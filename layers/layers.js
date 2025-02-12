var wms_layers = [];


        var lyr_SATELLITE_0 = new ol.layer.Tile({
            'title': 'SATELLITE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_ALL_ULB_305_1 = new ol.format.GeoJSON();
var features_ALL_ULB_305_1 = format_ALL_ULB_305_1.readFeatures(json_ALL_ULB_305_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALL_ULB_305_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALL_ULB_305_1.addFeatures(features_ALL_ULB_305_1);
var lyr_ALL_ULB_305_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALL_ULB_305_1, 
                style: style_ALL_ULB_305_1,
                popuplayertitle: 'ALL_ULB_305',
                interactive: true,
                title: '<img src="styles/legend/ALL_ULB_305_1.png" /> ALL_ULB_305'
            });

lyr_SATELLITE_0.setVisible(true);lyr_ALL_ULB_305_1.setVisible(true);
var layersList = [lyr_SATELLITE_0,lyr_ALL_ULB_305_1];
lyr_ALL_ULB_305_1.set('fieldAliases', {'S_No': 'S_No', 'Ulb_Name': 'Ulb_Name', 'Ulb_Catego': 'Ulb_Catego', 'Division': 'Division', 'District': 'District', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ULB_Code': 'ULB_Code', 'Name_of_EO': 'Name_of_EO', 'Mobile_No_': 'Mobile_No_', 'Land_Line': 'Land_Line', 'Link_offic': 'Link_offic', 'Designatio': 'Designatio', 'Mobile_Num': 'Mobile_Num', 'F15': 'F15', 'F16': 'F16', 'F17': 'F17', 'F18': 'F18', 'F19': 'F19', 'F20': 'F20', 'F21': 'F21', 'F22': 'F22', 'Name': 'Name', });
lyr_ALL_ULB_305_1.set('fieldImages', {'S_No': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Ulb_Catego': 'TextEdit', 'Division': 'TextEdit', 'District': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ULB_Code': 'TextEdit', 'Name_of_EO': 'TextEdit', 'Mobile_No_': 'TextEdit', 'Land_Line': 'TextEdit', 'Link_offic': 'TextEdit', 'Designatio': 'TextEdit', 'Mobile_Num': 'TextEdit', 'F15': 'TextEdit', 'F16': 'TextEdit', 'F17': 'TextEdit', 'F18': 'TextEdit', 'F19': 'TextEdit', 'F20': 'TextEdit', 'F21': 'TextEdit', 'F22': 'TextEdit', 'Name': '', });
lyr_ALL_ULB_305_1.set('fieldLabels', {'S_No': 'no label', 'Ulb_Name': 'inline label - always visible', 'Ulb_Catego': 'no label', 'Division': 'no label', 'District': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'ULB_Code': 'no label', 'Name_of_EO': 'no label', 'Mobile_No_': 'no label', 'Land_Line': 'no label', 'Link_offic': 'no label', 'Designatio': 'no label', 'Mobile_Num': 'no label', 'F15': 'no label', 'F16': 'no label', 'F17': 'no label', 'F18': 'no label', 'F19': 'no label', 'F20': 'no label', 'F21': 'no label', 'F22': 'no label', 'Name': 'no label', });
lyr_ALL_ULB_305_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});