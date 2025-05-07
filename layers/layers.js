var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PerizinanPS_1 = new ol.format.GeoJSON();
var features_PerizinanPS_1 = format_PerizinanPS_1.readFeatures(json_PerizinanPS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerizinanPS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerizinanPS_1.addFeatures(features_PerizinanPS_1);
var lyr_PerizinanPS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerizinanPS_1, 
                style: style_PerizinanPS_1,
                popuplayertitle: 'Perizinan PS',
                interactive: true,
    title: 'Perizinan PS<br />\
    <img src="styles/legend/PerizinanPS_1_0.png" /> <br />\
    <img src="styles/legend/PerizinanPS_1_1.png" /> Hutan Desa<br />\
    <img src="styles/legend/PerizinanPS_1_2.png" /> Hutan Kemasyarakatan<br />\
    <img src="styles/legend/PerizinanPS_1_3.png" /> Kulin KK<br />' });
var format_Kecamatan_2 = new ol.format.GeoJSON();
var features_Kecamatan_2 = format_Kecamatan_2.readFeatures(json_Kecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_2.addFeatures(features_Kecamatan_2);
var lyr_Kecamatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_2, 
                style: style_Kecamatan_2,
                popuplayertitle: 'Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_2.png" /> Kecamatan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PerizinanPS_1.setVisible(true);lyr_Kecamatan_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PerizinanPS_1,lyr_Kecamatan_2];
lyr_PerizinanPS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODE_PROV': 'KODE_PROV', 'KODE_KAB': 'KODE_KAB', 'PS_ID': 'PS_ID', 'SKEMA': 'SKEMA', 'NAMA_PROV': 'NAMA_PROV', 'NAMA_KAB': 'NAMA_KAB', 'NAMA_KEC': 'NAMA_KEC', 'NAMA_DESA': 'NAMA_DESA', 'LEMBAGA': 'LEMBAGA', 'NO_SK': 'NO_SK', 'TGL_SK': 'TGL_SK', 'Luas_HK': 'Luas_HK', 'LUAS_HL': 'LUAS_HL', 'LUAS_HPT': 'LUAS_HPT', 'LUAS_HP': 'LUAS_HP', 'LUAS_HPK': 'LUAS_HPK', 'LUAS_SK': 'LUAS_SK', 'Luas_Poli': 'Luas_Poli', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Kecamatan_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', 'K': 'K', 'L': 'L', });
lyr_PerizinanPS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'KODE_PROV': 'TextEdit', 'KODE_KAB': 'TextEdit', 'PS_ID': 'TextEdit', 'SKEMA': 'TextEdit', 'NAMA_PROV': 'TextEdit', 'NAMA_KAB': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_DESA': 'TextEdit', 'LEMBAGA': 'TextEdit', 'NO_SK': 'TextEdit', 'TGL_SK': 'DateTime', 'Luas_HK': 'TextEdit', 'LUAS_HL': 'TextEdit', 'LUAS_HPT': 'TextEdit', 'LUAS_HP': 'TextEdit', 'LUAS_HPK': 'TextEdit', 'LUAS_SK': 'TextEdit', 'Luas_Poli': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kecamatan_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'K': 'TextEdit', 'L': 'TextEdit', });
lyr_PerizinanPS_1.set('fieldLabels', {'OBJECTID': 'no label', 'KODE_PROV': 'no label', 'KODE_KAB': 'no label', 'PS_ID': 'no label', 'SKEMA': 'no label', 'NAMA_PROV': 'no label', 'NAMA_KAB': 'no label', 'NAMA_KEC': 'no label', 'NAMA_DESA': 'no label', 'LEMBAGA': 'no label', 'NO_SK': 'no label', 'TGL_SK': 'no label', 'Luas_HK': 'no label', 'LUAS_HL': 'no label', 'LUAS_HPT': 'no label', 'LUAS_HP': 'no label', 'LUAS_HPK': 'no label', 'LUAS_SK': 'no label', 'Luas_Poli': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Kecamatan_2.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'UUPP': 'no label', 'K': 'no label', 'L': 'no label', });
lyr_Kecamatan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});