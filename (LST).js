
// 1) Region of Interest (ROI) - India boundaries
var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
var roi = countries.filter(ee.Filter.eq('country_na', 'India'));

// 2) Date range
var start = '2020-01-01';
var end   = '2025-12-30';

// 3) Load MODIS LST (Terra)
var col = ee.ImageCollection('MODIS/061/MOD11A2')
  .filterDate(start, end)
  .filterBounds(roi);

// Choose LST band
var lstBand = 'LST_Day_1km';
// var lstBand = 'LST_Night_1km';

// 4) Function: QC mask + scale to °C
function toCelsius(img) {
  // LST scale factor: 0.02 Kelvin
  var lstK = img.select(lstBand).multiply(0.02);

  // QC band name depends on Day/Night selection
  var qcBandName = 'QC_' + (lstBand.indexOf('Day') >= 0 ? 'Day' : 'Night');
  var qc = img.select(qcBandName);

  // Mandatory QA bits (bits 0-1):
  // 00 = best, 01 = good, 10 = poor, 11 = cloud
  var mandatoryQA = qc.bitwiseAnd(3);

  // Keep best + good
  var mask = mandatoryQA.lte(1);

  var lstC = lstK
    .subtract(273.15)
    .updateMask(mask)
    .rename('LST_C');

  return lstC.copyProperties(img, img.propertyNames());
}

// 5) Apply + reduce (MEAN)
var lstCcol = col.map(toCelsius);
var lstMean = lstCcol.mean().clip(roi);

// 6) Display
var vis = {
  min: 0,
  max: 45,
  palette: ['040274','1E60A8','49A7D8','A8E6A3','FFF3B0','F9A65A','E8572A','B31212']
};

Map.centerObject(roi, 5);
Map.addLayer(lstMean, vis, 'MOD11A2 LST (mean) °C');

// 7) Legend (10°C gap)
var legend = ui.Panel({
  style: { position: 'bottom-left', padding: '8px 12px' }
});

legend.add(ui.Label({
  value: 'LST (°C)',
  style: { fontWeight: 'bold', fontSize: '14px', margin: '0 0 6px 0' }
}));

var minTemp = 0;
var maxTemp = 50;
var palette = ['040274','1E60A8','49A7D8','A8E6A3','FFF3B0','F9A65A','E8572A','B31212'];

for (var t = minTemp; t <= maxTemp; t += 10) {

  var idx = Math.min(
    Math.floor((t - minTemp) / (maxTemp - minTemp) * (palette.length - 1)),
    palette.length - 1
  );

  var colorBox = ui.Label({
    style: {
      backgroundColor: '#' + palette[idx],
      padding: '10px',
      margin: '0 6px 4px 0'
    }
  });

  var tempLabel = ui.Label({
    value: t + ' °C',
    style: { margin: '0 0 4px 0' }
  });

  legend.add(ui.Panel({
    widgets: [colorBox, tempLabel],
    layout: ui.Panel.Layout.Flow('horizontal')
  }));
}

Map.add(legend);
