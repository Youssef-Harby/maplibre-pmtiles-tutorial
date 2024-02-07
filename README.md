# Visualizing Egypt's Building Data on a Web Map - Tutorial

## Introduction

This README accompanies a detailed tutorial that guides you through the process of visualizing over 14 million buildings across Egypt on a web map, without the need for a server. The tutorial picks up from the end of a previous guide on downloading the Egypt Buildings Dataset, where we prepared a 7 GB GeoPackage of the data.

The tutorial is hosted on my website https://youssefharby.com/ and provides a comprehensive walkthrough from data conversion to visualization on a web map. [Read the full tutorial here.](https://youssefharby.com/Youtube+Videos/2024/Overture+Maps+Egypt's+Data+-+14%2B+Million+Buildings+on+a+Free+Web+Map)

## Overview

- **Data Conversion:** Convert the GeoPackage data to Vector Tiles Format (PMTiles) for efficient web map visualization.
- **Data Hosting:** Upload the converted PMTiles to an S3 bucket for accessible online storage.
- **Web Map Visualization:** Utilize MapLibre GL JS to create a responsive web map that visualizes the vector tiles data.

## Steps Covered in the Tutorial

1. **Convert Data to PMTiles Format**

   - Use `ogr2ogr` to convert the dataset from GeoPackage to PMTiles format, optimizing it for web deployment.

2. **Upload PMTiles to an S3 Bucket**

   - Instructions on using Storj for hosting your PMTiles file, with 25 GB free storage.

3. **Visualize Data with a Web Map**
   - Step-by-step guidance on using MapLibre GL JS to create a web map, including how to host and share your map online.

## Final Outcome

By following the tutorial, you'll learn how to efficiently visualize large spatial datasets on the web without reliance on server-based GIS software. The final product is a publicly accessible web map showcasing the buildings of Egypt.

## Resources

- [Full Tutorial on the Blog](https://youssefharby.com/Youtube+Videos/2024/Overture+Maps+Egypt's+Data+-+14%2B+Million+Buildings+on+a+Free+Web+Map)
- [Source Code on GitHub](https://github.com/Youssef-Harby/maplibre-pmtiles-tutorial)
- [PMTiles Viewer for Testing](https://protomaps.github.io/PMTiles/)
- [Storj for Cloud Storage](https://www.storj.io/)

For a comprehensive guide on transforming spatial data into an interactive web map, ensuring accessibility and efficiency, follow the steps outlined in the tutorial linked above.
