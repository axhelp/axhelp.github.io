---
title: "IB IL AI 8/SF-PAC"
---

##### Оглавление

-   [Описание](#Описание)
-   [Пример](#Пример)
-   [Process Data](#process-data)
-   [Параметризация каналов](#Параметризация-каналов)
-   [Коммуникация с модулем](#Коммуникация-с-модулем)
-   [Вывод значений и диагностика](#Вывод-значений-и-диагностика)

## Описание

Модуль [2861412 IB IL AI 8/SF-PAC](https://www.phoenixcontact.com/online/portal/ru/?uri=pxc-oc-itemdetail:pid=2861412&library=ruru&tab=5)
служит для ввода сигналов тока или напряжения 0 - 20 мА, 4 - 20 мА, ±20 мА, 0 - 10 В, ±10 В, (дополнительно 0 - 40 мА, 
±40 мА, 0 - 5 В, ±5 В, 0 - 25 В, ±25 В, 0 - 50 В).

## Пример

Пример работы с модулем на [Github](https://github.com/axhelp/examples-analog-technology)

## Process Data

На шине модуль представлен 2 входными словами для принятия сигналов канала, и 2 выходными словами для параметризации 
каналов и отправки в модуль команд (обработка **вручную**). А также разбитыми на биты теми же выходными словами. 
DWORD **~AI32** и **~AO32** предоставляют те же данные, но скомпанованные для работы с **библиотекой**.

![IB IL AI 8/SF-PAC Process Data](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-8-SF/process-data.png?raw=true)

## Параметризация каналов

Параметры каждого канала необходимо записать в массив структур, который будет привязан ко входу **udtParameter** блока 
параметризации и обработки данных **IL AI 8**.

![IB IL AI 8/SF-PAC Parameters](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-8-SF/parameters.png?raw=true)

| .Range | Диапазон измерения     |
|--------|------------------------|
| 0      | 0 V ... 10 V (default) |
| 1      | -10 V ... +10 V        |
| 2      | 0 0 V ... 5 V          |
| 3      | -5 V ... +5 V          |
| 4      | 0 V ... 25 V           |
| 5      | -25 V ... +25 V        |
| 6      | 0 V ... 50 V           |
| 7      | Reserved               |
| 8      | 0 mA ... 20 mA         |
| 9      | -20 mA ... +20 mA      |
| 10     | 4 mA ... 20 mA         |
| 11     | Reserved               |
| 12     | 0 mA ... 40 mA         |
| 13     | -40 mA ... +40 mA      |
| 14     | Reserved               |
| 15     | Reserved               |

![IB IL AI 8/SF-PAC Set parameters](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-8-SF/set-parameters.png?raw=true)

## Коммуникация с модулем

Для общения с модулем в блок необходимо передать переменные **dwInputAddress** и **dwOutputAddress**, привязанные к 
Process Data канала.

![IB IL AI 8/SF-PAC Process Data Assignment](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-8-SF/process-data-assignment.png?raw=true)

Особенность работы с модулем заключается в том, что одновременно он предоставляет на шину данные только одного канала. 
Для опроса всех каналов необходимо циклически давать команды чтения. Этой работой занимается блок **IL AI 8**.  
Вход **bSelect** позволяет указать, какие каналы активны.

![IB IL AI 8/SF-PAC Communication](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-8-SF/com.png?raw=true)

## Вывод значений и диагностика

После принятия значения от модуля, блок выдает массив структур **udtData**, в котором содержатся как нормализованные 
значения принятых сигналов, так и диагностика по каждому каналу.

![IB IL AI 8/SF-PAC Data](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-8-SF/data.png?raw=true)
![IB IL AI 8/SF-PAC Get data](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-8-SF/get-data.png?raw=true)
