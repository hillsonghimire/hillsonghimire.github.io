---
layout: post
title: Monitoring Re/construction on HiRes Imagery
description: Change detection using bitemporal image transformer (BIT) architecture for disaster recovery
image:  /assets/images/project/building_reconstruction/predict.jpg
---
<hr>
### IMPLEMENTATED ARCHITECTURE
<hr>

<div>
  <img src="/assets/images/project/building_reconstruction/pipeline.png" alt="Result in test dataset" style="max-width:100%">
</div>


<hr>

### BACKGROUND
<hr>

### Palu, Indonesia 2018 earthquake event detail
1.	Event date: 28/09/2018
2.	Event type: Earthquake (7.5 MW) and Tsunami [<u>(source)</u>](https://www.dfat.gov.au/crisis-hub/sulawesi-earthquake-and-tsunami-response#:~:text=The%20earthquake%20and%20tsunami%20on,Donggala%20in%20Central%20Sulawesi%2C%20Indonesia)
3.	Area affected: Palu and Donggala in Central Sulawesi, Indonesia
4.	Population Affected: 2.4 million.
5.	Casualties: 2000 deaths, 4600 severely injured, and 210,000 displaced from homes.
6.	Homes, critical infrastructures, and buildings, including health services and schools disrupted.
  - Houses damaged: 70,000.
7.	Other damages:
  -	Parts of Central Sulawesi had been hit by major mudflows following the earthquake because of [<u>(liquefaction).</u>](https://www.youtube.com/watch?v=v24vLY6Wqc4)
  -	In Petobo, survivors claimed that 2-meter-high mud came out of ground. Survivors also recalled that the ground immediately turned into liquid-like substance. Hundreds of houses sank into the soil and hundreds of people were drowned by the mudflow.
  -	Balora almost disappeared as the ground collapsed, with most of the village’s 1747 houses sinking into the mud.
  -	Major soil liquefaction was reported in Sigi Regency, which was located south of Palu.

### Problem Statement
1.	Effectively mapping damaged structures using high resolution satellite imagery.
2.	Monitoring reconstruction efforts using the data generated in step 1.
3.	Employ damaged structure detection model in high resolution data depending on its availability.

### Earlier Operational Process
1. Utilizing high resolution optical imagery from satellite sources before and different time-stamp of after the disaster to manually map buildings through <u>Visual Inspections.</u>
2. Utilizing Small Baseline Subset Interferometric Synthetic Aperture Radar (SBAS-InSAR) to monitor area of land subsidence, and overlaying it to the existing building footprints to monitor the displacement (mm/yr), which could be the proxy to building damages.

<hr>

### DISCUSSION
<hr>
In 2019, a paper: H. Chen, Z. Qi and Z. Shi, "Remote Sensing Image Change Detection With Transformers (doi: 10.1109/TGRS.2021.3095166)" was published in IEEE Transactions on Geoscience and Remote Sensing, vol. 60, and was greatly appreciated in the remote sensing community especially ones working on change detection. The paper proposed a bitemporal image transformer (BIT) model and claimed to significantly outperform the pure <u>convolutional baseline using three times lower computational costs and model parameter.</u>

Although well heard of its computational efficiency and accuracy, I hadn't implemented vision transformer model in any of my earlier studies. So, I tried to replicate the work of authors on implementing their same [<u>architecture</u>](https://github.com/justchenhao/BIT_CD) over the dataset that they used while formulating the studies. I was amazed to see that the results were easily replicable; cannot appreciate enough to the authors in providing the whole implementation with easy guidelines.
<div>
  <img src="/assets/images/project/building_reconstruction/predict.jpg" alt="Result in test dataset" style="max-width:100%">
</div>

The above image demonstrates the immediate result after two hours of training on the [<u>LEVIR-CD dataset</u>](https://paperswithcode.com/dataset/levir-cd).

<hr>

### CHALLENGES
<hr>
1. Training on high-resoulution dataset is resource intersive.
2. Although after major disaster events the disaster charter and other organizations facilitates providing high resolution satellite dataset from Maxar, Digital Globe, PlanetLabs, Pléiades etc., the challenge is to find similar quality of high-resolution pre disaster datasets. Making it a challenge in implementing these solutions.
3. Training with high spatial variability in terms of geospatial region. Because the disaster can occur anywhere, the model performance has to be gauged by taking into account its accuracy at different geospatial context. The training dataset were not very well spatiall distributed, more so for remote rural or hilly contexts.