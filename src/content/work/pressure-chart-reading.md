---
title: "Reading pressure charts with computer vision"
description: "Replacing slow, error-prone chart transcription with a fast visual inference pipeline."
category: "Computer vision"
order: 2
confidential: false
featured: true
technologies: [OpenCV, keypoint detection, OCR, Python]
---

## The problem

Pressure charts used in oil-and-gas workflows had to be read manually. That created slow turnaround, rounding mistakes, and repeated data entry.

## The approach

I built a computer vision pipeline using OpenCV and keypoint detection to process three chart types. The system extracted readings, handled the chart-specific geometry, and integrated the results directly with client software.

## Outcome

The system achieved over 95% accuracy with processing time below three seconds. Direct integration removed manual rounding errors and reduced data entry.
