---
title: A camera device with Raspberry Pi CM4
description: A camera motherboard holding 2 RPI CM4, 2 Camera, 2 SD Card and 2 Gigabit Ethernet connection.
publishDate: 'Oct 24 2025'
---

## Project Overview:

I helped a company in Turkey as a free time activity.

This project integrated a Raspberry Pi CM4 module with a CSI-2 camera, Gigabit Ethernet with Power-over-Ethernet. It is designed for use in parking area monitoring and other industrial vision applications. It is a redesign of older version with slighly different industrial design and different tech specs.

### Technical Details

We used 4 layer stackup:

| L1  | High speed + PWR(3.3V) |
| --- | ---------------------- |
| L2  | Solid GND              |
| L3  | Solid GND              |
| L4  | SIG + PWR(5V)          |

PoE+ power delivery, Gigabit ethernet for live video transfer, SD card for live recording and 8 MP camera, STM8 Watchdog MCU.
