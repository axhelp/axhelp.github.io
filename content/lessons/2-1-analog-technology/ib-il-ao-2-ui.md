---
title: "IB IL AO 2/UI-PAC"
---

##### Оглавление

-   [Описание](#Описание)
-   [Пример](#Пример)
-   [Process Data](#process-data)
-   [Параметризация каналов](#Параметризация-каналов)
-   [Коммуникация с модулем](#Коммуникация-с-модулем)
-   [Вывод значений и диагностика](#Вывод-значений-и-диагностика)

## Описание

Модуль [2700775 IB IL AO 2/UI-PAC](https://www.phoenixcontact.com/online/portal/ru/?uri=pxc-oc-itemdetail:pid=2700775&library=ruru&tab=5)
служит для вывода сигналов тока или напряжения 0-20 mA, 4-20 mA, ±20 mA, 0-10 V, ±10 V.

## Пример

Пример работы с модулем на [Github](https://github.com/axhelp/examples-analog-technology)

## Process Data

На шине модуль представлен 2 выходными словами для параметризации, 2 для выдачи сигналов, и 4 входными словами для 
обратной связи от модуля (для обработки **вручную**).  
LWORD **~AI64** и **~AO 64** содержат те же данные, что и отдельные слова, но собраны в одну переменную (для обработки
**библиотекой**)

![IB IL AO 2/UI-PAC Process Data](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AO-2-UI/process-data.png?raw=true)

## Параметризация каналов

Параметризация каналов осуществляется блоком **IL AO 2 UI Para**.
Для каждого канала есть возможность установить выходной диапазон (вход **iRange**): 
*   0 - диапазон 0-10 В
*   1 - диапазон ±10 В
*   2 - диапазон 0..20 мА
*   3 - диапазон ±20 мА
*   4 - диапазон 4..20 мА
 
и пределы измерения физической величины (входы **rHighLimit** и **rLowLimit**)

![IB IL AO 2/UI-PAC Parameters](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AO-2-UI/parameters.png?raw=true)


## Коммуникация с модулем

Через структуру **udtPara**, проходящую насквозь через все блоки, данные параметризации передаются в блок коммуникации с 
модулем - **IL AO 2 UI**. Для общения с модулем блок необходимо передать пеерменные **arrProcIn** и **arrProcOut**, 
привязанные к Process Data модуля.

![IB IL AO 2/UI-PAC Process Data assignment](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AO-2-UI/process-data-assignment.png?raw=true)

Вход **iSelectCH** позволяет указать, какие каналы активны:

*   1 - только канал 1
*   2 - только канал 2
*   3 - канал 1 и 2

![IB IL AO 2/UI-PAC Communication](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AO-2-UI/com.png?raw=true)

## Вывод значений и диагностика

Для вывода значений и диагностики используются блоки **IL AI 4 UI Diag**, получающие данные от блока коммуникации через 
структуру **udtStatus**.  
Преобразованное значение канала содержится на выходе **rCurrentValue**.

![IB IL AO 2/UI-PAC Process Data assignment](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AO-2-UI/diag.png?raw=true)
