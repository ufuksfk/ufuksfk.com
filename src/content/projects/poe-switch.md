---
title: PoE Switch Device
description: And Industrial Control device with PoE or USB
publishDate: 'Jul 01 2025'
slug: 'poe-switch'
---

## Project Overview:

I helped a company in Turkey as a free time activity.

This design was a compact, industrial-grade Ethernet node with integrated Power-over-Ethernet (PoE) and microcontroller-based management. It served as a connectivity interface for an IoT sensor platform. Not a technical challange, just have 10/100Mbit ethernet with PoE, isolated IoT input output, standart STM32 they used before, and old school buck converter

### Technical Details

I designed it via 4 layer stackup:

| L1  | Sig + PWR                 |
| --- | ------------------------- |
| L2  | GND with cutouts for SMPS |
| L3  | Sig + PWR pouring         |
| L4  | Slow Sig + GND pouring    |
