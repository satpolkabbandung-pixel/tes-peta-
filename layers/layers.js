var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_total_1 = new ol.format.GeoJSON();
var features_total_1 = format_total_1.readFeatures(json_total_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_total_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_total_1.addFeatures(features_total_1);
var lyr_total_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_total_1, 
                style: style_total_1,
                popuplayertitle: 'total',
                interactive: true,
    title: 'total<br />\
    <img src="styles/legend/total_1_0.png" /> 32 - 67,5<br />\
    <img src="styles/legend/total_1_1.png" /> 67,5 - 106<br />\
    <img src="styles/legend/total_1_2.png" /> 106 - 129,5<br />\
    <img src="styles/legend/total_1_3.png" /> 129,5 - 152<br />\
    <img src="styles/legend/total_1_4.png" /> 152 - 172<br />\
    <img src="styles/legend/total_1_5.png" /> 172 - 176<br />\
    <img src="styles/legend/total_1_6.png" /> 176 - 196,5<br />\
    <img src="styles/legend/total_1_7.png" /> 196,5 - 211<br />\
    <img src="styles/legend/total_1_8.png" /> 211 - 227,5<br />\
    <img src="styles/legend/total_1_9.png" /> 227,5 - 257<br />\
    <img src="styles/legend/total_1_10.png" /> 257 - 269<br />\
    <img src="styles/legend/total_1_11.png" /> 269 - 319<br />\
    <img src="styles/legend/total_1_12.png" /> 319 - 335<br />\
    <img src="styles/legend/total_1_13.png" /> 335 - 385<br />\
    <img src="styles/legend/total_1_14.png" /> 385 - 487<br />\
    <img src="styles/legend/total_1_15.png" /> 487 - 492<br />\
    <img src="styles/legend/total_1_16.png" /> 492 - 561<br />\
    <img src="styles/legend/total_1_17.png" /> 561 - 628<br />\
    <img src="styles/legend/total_1_18.png" /> 628 - 1503,5<br />\
    <img src="styles/legend/total_1_19.png" /> 1503,5 - 4974<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_total_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_total_1];
lyr_total_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'MIRAS': 'MIRAS', 'PROSTITUSI': 'PROSTITUSI', 'JOMPO TRLN': 'JOMPO TRLN', 'PMKS': 'PMKS', 'ANAK JLN': 'ANAK JLN', 'ODGJ': 'ODGJ', 'NARKOBA': 'NARKOBA', 'SMP JALAN': 'SMP JALAN', 'SMP SUNGAI': 'SMP SUNGAI', 'KARAMBA JA': 'KARAMBA JA', 'PEMB ANAK': 'PEMB ANAK', 'PENGAMANAN': 'PENGAMANAN', 'UNJUK RASA': 'UNJUK RASA', 'PNGRUSAKAN': 'PNGRUSAKAN', 'TAWURAN': 'TAWURAN', 'YUSTISI': 'YUSTISI', 'PKL': 'PKL', 'BANGUN LIA': 'BANGUN LIA', 'REKLAME': 'REKLAME', 'IZIN MB': 'IZIN MB', 'SENGKETA': 'SENGKETA', 'PCEMAR AIR': 'PCEMAR AIR', 'PCMAR LING': 'PCMAR LING', 'PNAMBANG L': 'PNAMBANG L', 'P TENKERJA': 'P TENKERJA', 'SIUP': 'SIUP', 'TOTAL': 'TOTAL', });
lyr_total_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'MIRAS': 'TextEdit', 'PROSTITUSI': 'TextEdit', 'JOMPO TRLN': 'TextEdit', 'PMKS': 'TextEdit', 'ANAK JLN': 'TextEdit', 'ODGJ': 'TextEdit', 'NARKOBA': 'TextEdit', 'SMP JALAN': 'TextEdit', 'SMP SUNGAI': 'TextEdit', 'KARAMBA JA': 'TextEdit', 'PEMB ANAK': 'TextEdit', 'PENGAMANAN': 'TextEdit', 'UNJUK RASA': 'TextEdit', 'PNGRUSAKAN': 'TextEdit', 'TAWURAN': 'TextEdit', 'YUSTISI': 'TextEdit', 'PKL': 'TextEdit', 'BANGUN LIA': 'TextEdit', 'REKLAME': 'TextEdit', 'IZIN MB': 'TextEdit', 'SENGKETA': 'TextEdit', 'PCEMAR AIR': 'TextEdit', 'PCMAR LING': 'TextEdit', 'PNAMBANG L': 'TextEdit', 'P TENKERJA': 'TextEdit', 'SIUP': 'TextEdit', 'TOTAL': 'TextEdit', });
lyr_total_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'inline label - visible with data', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'hidden field', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'MIRAS': 'inline label - visible with data', 'PROSTITUSI': 'inline label - visible with data', 'JOMPO TRLN': 'inline label - visible with data', 'PMKS': 'inline label - visible with data', 'ANAK JLN': 'inline label - visible with data', 'ODGJ': 'inline label - visible with data', 'NARKOBA': 'inline label - visible with data', 'SMP JALAN': 'inline label - visible with data', 'SMP SUNGAI': 'inline label - visible with data', 'KARAMBA JA': 'inline label - visible with data', 'PEMB ANAK': 'inline label - visible with data', 'PENGAMANAN': 'inline label - visible with data', 'UNJUK RASA': 'inline label - visible with data', 'PNGRUSAKAN': 'inline label - visible with data', 'TAWURAN': 'inline label - visible with data', 'YUSTISI': 'inline label - visible with data', 'PKL': 'inline label - visible with data', 'BANGUN LIA': 'inline label - visible with data', 'REKLAME': 'inline label - visible with data', 'IZIN MB': 'inline label - visible with data', 'SENGKETA': 'inline label - visible with data', 'PCEMAR AIR': 'inline label - visible with data', 'PCMAR LING': 'inline label - visible with data', 'PNAMBANG L': 'inline label - visible with data', 'P TENKERJA': 'inline label - visible with data', 'SIUP': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', });
lyr_total_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});