+++
title = "CRISP — Computational Reconfigurable Imaging Spectrometer"
description = "A hyperspectral imager using coded masks and computational reconstruction — no moving parts, no cooling."
date = 2019-01-01

[extra]
subtitle = "Hyperspectral Imaging // Longwave Infrared // MIT Lincoln Laboratory"
feature_visualization = "visualization.html"
+++

*2016–2019*

Hyperspectral imagers capture a full spectrum in every pixel of an image — useful for identifying materials, detecting gas plumes, monitoring crops, and a lot more. The catch is they've historically required expensive, cryogenically cooled detectors and bulky optics with precise moving parts.

CRISP was designed to change that. It uses a static coded mask and computational reconstruction to extract spectral information, with no moving parts and no cooling. The key insight is that by encoding the spectrum optically and then solving for it in software, you can recover sensitivity that the cheap hardware gives up — enough to compete with instruments that cost and weigh significantly more.

I was involved from initial concept through the final flight-validated system: optical hardware design, the coded mask and calibration scheme, the spectral reconstruction algorithms, the image processing pipeline, and the flight system ruggedization.

## What It Does

The system captures 67 spectral channels across the 7.7–14 µm thermal infrared band at ~94 nm resolution. As the platform moves, the scene shifts across the coded mask, producing a time series of measurements. Software inverts that sequence to recover a full spectrum per pixel.

## Results

In the lab, CRISP outperformed an equivalent conventional spectrometer by ~5× in signal-to-noise, and successfully identified trace gases at ~2000 ppm.

From a Cessna at 1675 m altitude, we extracted mineral and water spectra matching NASA reference databases, resolved spectral signatures from sub-pixel point targets, detected atmospheric ozone, and spatially localized an SF₆ gas release.

## Specs

- **Spectral Range:** 7.7–14 µm (thermal infrared)
- **Spectral Channels:** 67
- **Detector:** Uncooled microbolometer (no cryogenic cooling)
- **Moving Parts:** None

## Publications

- R. M. Sullenberger *et al.*, "Computational reconfigurable imaging spectrometer," *Optics Express* 25, 31960 (2017). [doi:10.1364/OE.25.031960](https://doi.org/10.1364/OE.25.031960)
- C. M. Wynn *et al.*, "Flight tests of the computational reconfigurable imaging spectrometer," *Remote Sensing of Environment* 239, 111621 (2020). [doi:10.1016/j.rse.2019.111621](https://doi.org/10.1016/j.rse.2019.111621)