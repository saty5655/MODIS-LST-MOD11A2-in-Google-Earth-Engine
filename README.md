Land Surface Temperature (LST) Mapping Using MODIS MOD11A2 in Google Earth Engine
Abstract

This project focuses on mapping and analyzing Land Surface Temperature (LST) using the MODIS MOD11A2 product within the Google Earth Engine (GEE) platform. MOD11A2 provides 8-day composite LST data derived from thermal infrared measurements, enabling large-scale and long-term surface temperature analysis. The study demonstrates an efficient cloud-based approach for retrieving, processing, and visualizing LST for environmental and climate-related applications.

Objectives

The primary objectives of this study are to extract Land Surface Temperature from MODIS MOD11A2 data, generate spatial LST maps for the study area, analyze temporal temperature patterns, and support applications related to urban heat islands, climate variability, and land surface processes.

Data

The MODIS MOD11A2 Version 6 product was used in this analysis. It provides 8-day composite LST at a spatial resolution of 1 km. Daytime and nighttime LST layers are derived from the MODIS Terra satellite. The dataset was accessed directly through Google Earth Engine.

Methodology

MOD11A2 imagery was filtered by date and region of interest in Google Earth Engine. Quality control flags were applied to ensure reliable temperature retrievals. The LST values were converted from scaled digital numbers to temperature in Kelvin using the provided scale factor and subsequently converted to degrees Celsius. Mean LST composites were generated for the selected time period and visualized to analyze spatial temperature distribution.

LST Conversion

The MOD11A2 LST values are scaled by a factor of 0.02. Land Surface Temperature was calculated as:

LST (K) = DN × 0.02
LST (°C) = (DN × 0.02) − 273.15

where DN represents the digital number of the LST band.

Tools and Platform

The analysis was performed using Google Earth Engine with the JavaScript and Python APIs. Visualization and interpretation were supported through GEE map layers and statistical summaries.

Results

The output consists of spatially continuous Land Surface Temperature maps representing average surface temperature conditions for the selected period. The results capture spatial variability in surface temperature, highlighting warmer and cooler regions within the study area.

Applications

LST mapping using MODIS data is widely used for urban heat island analysis, climate change studies, drought monitoring, land use and land cover impact assessment, and environmental modeling.

Conclusion

This project demonstrates the effectiveness of Google Earth Engine for large-scale LST mapping using MODIS MOD11A2 data. The approach enables efficient processing of long-term temperature datasets and provides valuable insights into surface thermal characteristics.
