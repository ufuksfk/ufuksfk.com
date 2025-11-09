---
title: A Bluetooth Microphone Project
description: Bluetooth-enabled design project for a market-leading client
publishDate: 'Jun 02 2025'
seo:
  image:
    src: '/project-1.jpg'
    alt: Project preview
---

### Project Overview:

I consulted for **Sigma Connectivity**, a global tech house, as an Electronics Engineer. The work focused on an internal Medtech and Consumer Electronics project, using state-of-the-art chipsets for a market-leading client.

I was part of 4 engineer team. 2 of us was schematics engineer, 1 layout engineer and 1 EMI&EMC expert. I did the schematic design within 2 engineer team ( my colleague was very senior engineer) and supported layout planning for an 8 layer board. All the system engineering was done and we just made it real.

Due to NDA limitations, I can’t share full details, but here’s a high-level summary of the architecture:

- **BLE and RF:** nRF54 BLE MCU with 0.35 mm BGA package, nRF21540 RF FEM and external custom made antenna with spring connectors.
- **Main MCU:**NXP RT700 MCU with 0.4mm BGA. We used roughly half of the GPIO but fanout routing was a real challange within only 8 layers.
- **Power:**NXP PMIC spesifically designed for RT700 as well as 2 more SMPS circuit.
- And a couple of more peripherals I can't share details.
