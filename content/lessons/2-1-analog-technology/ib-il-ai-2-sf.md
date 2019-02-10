---
title: "IB IL AI 2/SF-PAC"
---

##### Оглавление

-   [Описание](#Описание)
-   [Пример](#Пример)
-   [Process Data](#process-data)
-   [Коммуникация с модулем](#Коммуникация-с-модулем)
-   [Ввод сигналов напряжения](#Ввод-сигналов-напряжения)
-   [Ввод сигналов тока](#Ввод-сигналов-тока)

## Описание

Модуль [2861302 IB IL AI 2/SF-PAC](https://www.phoenixcontact.com/online/portal/ru/?uri=pxc-oc-itemdetail:pid=2861302&library=ruru&tab=5)
служит для ввода сигналов тока или напряжения 0 - 20 мА, 4 - 20 мА, ±20 мА, 0 - 10 В, ±10 В.

## Пример

Пример работы с модулем на [Github](https://github.com/axhelp/examples-analog-technology)

## Process Data

На шине модуль представлен 2 словами для принятия сигналов 1 канала, 2 словами для принятия сигналов 2 канала, и 2 
словами для конфигурации каналов.

![IB IL AI 2/SF-PAC Process Data](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-2-SF/process-data.png?raw=true)

## Коммуникация с модулем

Для общения с модулем в блок необходимо передать переменные **wInputAddress** и **wOutputAddress**, привязанные к 
Process Data канала.

![IB IL AI 2/SF-PAC Process Data Assignment](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-2-SF/process-data-assignment.png?raw=true)

## Ввод сигналов напряжения

Параметризацию и обработку сигнала модуля осуществляет блок **IL AI 2 SF** Выбор диапазона измерения производится 
изменением **iSelectRange**:

*   0 – Unipolar (0-10 В)
*   3 – Bipolar (±10 В)
 
и пределы измерения физической величины (входы **rHI_Limit** и **rLO_Limit**)

![IB IL AI 2/SF-PAC Voltage input](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-2-SF/voltage-input.png?raw=true)

## Ввод сигналов тока

Выбор диапазона измерения производится изменением **iSelectRange**:

*   1 – Unipolar (0-20 мА)
*   2 – Unipolar (4-20 мА)
*   4 – Bipolar (±20 мА)

![IB IL AI 2/SF-PAC Voltage input](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-2-SF/current-input.png?raw=true)
