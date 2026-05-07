# APU Smart Campus Transport System  
# APU 智能校园交通系统 Demo

A Flutter web demo for campus shuttle routes, parking reservation, ETA countdown, and transport status visualization.

一个基于 Flutter 的校园交通系统前端 Demo，用于展示校车路线、停车预约、ETA 倒计时和校园交通状态可视化。

---

## Live Demo 在线演示

GitHub Pages:  
https://chrisbetheking.github.io/apu-transport-demo/

---

## Project Overview 项目简介

This project is a front-end Flutter demo designed to simulate a smart campus transport system.  
It focuses on user interface design, route visualization, local state management, and simple interactive features.

本项目是一个前端 Flutter Demo，用于模拟校园交通管理系统。  
项目重点展示界面设计、路线可视化、本地状态管理和基础交互功能。

The system includes:

- Campus shuttle route display
- Simplified campus map visualization
- ETA countdown component
- Parking slot reservation simulation
- Transport status cards
- Responsive Flutter Web layout

系统包含以下功能：

- 校园校车路线展示
- 简化校园地图可视化
- 校车 ETA 倒计时
- 停车位预约模拟
- 交通状态卡片
- 响应式 Flutter Web 页面布局

---

## Features 功能模块

### 1. Dashboard 首页概览

The dashboard provides a quick overview of current transport information, including shuttle status, parking availability, and the next shuttle ETA.

首页用于展示校园交通的整体状态，包括校车运行状态、可用停车位数量以及下一班校车预计到达时间。

Main elements:

- Today’s shuttle status
- Available parking slot count
- Next shuttle arrival countdown
- Quick navigation to main modules

---

### 2. Shuttle Routes 校车路线

This section displays several simulated campus shuttle routes with stop information, estimated travel time, and current route status.

该模块展示模拟校园校车路线，包括站点信息、预计行驶时间和当前路线状态。

Example routes:

- Main Gate → Campus Block A
- Campus Block A → Library
- Library → Parking Area
- Parking Area → Main Gate

Each route includes:

- Route name
- Stops
- Estimated time
- Current status
- Next arrival time

---

### 3. Campus Map Visualization 校园路线图可视化

A simplified campus map is created using Flutter `CustomPaint`.  
The map shows campus nodes, route lines, and a moving shuttle indicator.

项目使用 Flutter 的 `CustomPaint` 绘制简化校园路线图。  
地图中包含校园节点、路线连接线以及模拟移动中的校车标记。

This feature demonstrates:

- Custom drawing with Flutter
- Basic route visualization
- Animated shuttle movement
- UI logic separated into reusable widgets

---

### 4. Parking Reservation 停车预约模拟

The parking module displays several parking slots with different states.

停车模块展示多个模拟停车位，并提供简单的预约交互。

Parking states:

- Available
- Reserved
- Full

Users can click an available parking slot to simulate a reservation.  
The slot status will then change locally from `Available` to `Reserved`.

用户可以点击可用停车位进行模拟预约，停车位状态会在本地从 `Available` 更新为 `Reserved`。

This feature does not connect to a backend.  
It is implemented with local state only.

该功能不连接后端，仅使用本地状态进行演示。

---

### 5. ETA Countdown 到站倒计时

The ETA countdown component shows the estimated time before the next shuttle arrives.

ETA 倒计时组件用于展示下一班校车预计到达时间。

Example:

```text
Next shuttle arriving in 08:30
