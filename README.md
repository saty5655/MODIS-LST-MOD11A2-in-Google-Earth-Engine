🌍 Land Surface Temperature (LST) Mapping Using MODIS MOD11A2 in Google Earth Engine
🧾 Abstract

This project focuses on mapping and analyzing Land Surface Temperature (LST) using the MODIS MOD11A2 product within the Google Earth Engine (GEE) platform. MOD11A2 provides 8-day composite LST data derived from thermal infrared observations, enabling large-scale and long-term surface temperature analysis. The study demonstrates an efficient cloud-based workflow for retrieving, processing, and visualizing LST for environmental and climate-related applications.

🎯 Objectives

The objectives of this study are to extract Land Surface Temperature from MODIS MOD11A2 data, generate spatial LST maps for the selected region, analyze temporal temperature patterns, and support applications related to urban heat islands, climate variability, and land surface processes.

🛰️ Data

The analysis uses MODIS MOD11A2 Version 6 data acquired from the Terra satellite. The product provides 8-day composite LST at a spatial resolution of 1 km, including daytime and nighttime temperature layers. Data were accessed directly through Google Earth Engine.

⚙️ Methodology

MOD11A2 imagery was filtered by date and region of interest within Google Earth Engine. Quality control flags were applied to ensure reliable temperature retrievals. Scaled digital numbers were converted to temperature values in Kelvin and subsequently transformed into degrees Celsius. Mean LST composites were generated for the study period to examine spatial temperature distribution.

🌡️ LST Conversion

Land Surface Temperature was calculated using the MODIS scale factor as follows:

LST (K) = DN × 0.02
LST (°C) = (DN × 0.02) − 273.15

where DN represents the digital number of the LST band.

🛠️ Tools and Platform

The workflow was implemented using Google Earth Engine (JavaScript and Python APIs). Spatial visualization and basic statistical analysis were performed within the GEE environment.

📊 Results

The results include spatially continuous Land Surface Temperature maps representing average thermal conditions over the selected period. The generated maps clearly capture spatial variability in surface temperature, identifying relatively warmer and cooler regions.

🌐 Applications

LST mapping using MODIS data is applicable to urban heat island analysis, climate change studies, drought and heat stress monitoring, land use and land cover impact assessment, and environmental modeling.

✅ Conclusion

This study demonstrates the effectiveness of Google Earth Engine for large-scale Land Surface Temperature mapping using MODIS MOD11A2 data. The approach is computationally efficient and suitable for regional to global-scale thermal analysis.
