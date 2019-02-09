---
title: "IB IL AI 4/U-PAC"
---

##### Оглавление

- [Описание](#Описание)
- [Пример](#Пример)
- [Process Data](#process-data)
- [Параметризация каналов](#Параметризация-каналов)
- [Коммуникация с модулем](#Коммуникация-с-модулем)
- [Вывод значений и диагностика](#Вывод-значений-и-диагностика)

## Описание

Модуль [2700459 IB IL AI 4/U-PAC](https://www.phoenixcontact.com/online/portal/ru/?uri=pxc-oc-itemdetail:pid=2700459&library=ruru&tab=5)
служит для ввода сигналов напряжения 0-10 В, ±10 В.

## Пример

Пример работы с модулем на [Github](https://github.com/axhelp/examples-analog-technology)

## Process Data

На шине модуль представлен 4 словами для принятия сигналов напряжения и 4 словами для конфигурации каналов (для обработки
**вручную**).  
LWORD **~AI64** и **~AO 64** содержат те же данные, что и отдельные слова, но собраны в одну переменную (для обработки
**библиотекой**)

![IB IL AI 4/I-PAC Process Data](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-4-U/process-data.png?raw=true)

## Параметризация каналов

Параметризация каналов осуществляется блоком **IL AI 4 UI Para**.
Для каждого канала есть возможность установить диапазон измерения (вход **iMode**): 
*  0 - диапазон 0-10 В
*  1 - диапазон ±10 В
 
и пределы измерения физической величины (входы **rHighLimit** и **rLowLimit**)

![IB IL AI 4/I-PAC Parameters](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-4-U/parameters.png?raw=true)


## Коммуникация с модулем

Через структуру **udtPara**, проходящую насквозь через все блоки, данные параметризации передаются в блок коммуникации с 
модулем - **IL_AI_4_UI_Com**. Для общения с модулем блок необходимо передать пеерменные **arrProcIn** и **arrProcOut**, 
привязанные к Process Data модуля.

![IB IL AI 4/I-PAC Process Data assignment](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-4-U/process-data-assignment.png?raw=true)

Вход **bSelect** позволяет указать, какие каналы активны.

![IB IL AI 4/I-PAC Process Data assignment](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-4-U/com.png?raw=true)

## Вывод значений и диагностика

Для вывода значений и диагностики используются блоки **IL_AI_4_UI_Diag**, получающие данные от блока коммуникации через 
структуру udtStatus.  
Преобразованное значение канала содержится на выходе **rCurrentValue**.

![IB IL AI 4/I-PAC Process Data assignment](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AI-4-U/diag.png?raw=true)
