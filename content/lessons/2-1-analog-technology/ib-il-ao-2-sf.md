---
title: "IB IL AO 2/SF-PAC"
---

##### Оглавление

-   [Описание](#Описание)
-   [Пример](#Пример)
-   [Process Data](#process-data)
-   [Параметризация каналов](#Параметризация-каналов)
-   [Коммуникация с модулем](#Коммуникация-с-модулем)

## Описание

Модуль [2863083 IB IL AO 2/SF-PAC](https://www.phoenixcontact.com/online/portal/ru/?uri=pxc-oc-itemdetail:pid=2863083&library=ruru&tab=5)
служит для вывода сигналов тока или напряжения 0-20 мА, 4-20 мА, 0-10 В.

## Пример

Пример работы с модулем на [Github](https://github.com/axhelp/examples-analog-technology)

## Process Data

На шине модуль представлен 6 выходными словами для выдачи сигналов - по 3 слова на каждый канал. Каждое слово 
соответствует одному из диапазонов, которые поддерживает модуль.
DWORD **~AO32** предоставляет те же данные, но скомпанованные в одну переменную.

![IB IL AO 2/SF-PAC Process Data](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AO-2-SF/process-data.png?raw=true)

## Параметризация каналов

Параметризация диапазона не требуется - соответствующие выходные слова для каждого диапазона сигнала уже созданы.  
Нормализация для выдачи на модуль выполняется блоком **IL AO 1 SF**.

## Коммуникация с модулем

Для общения с модулем выход dwOutputAddress блока **IL AO 1 SF** необходимо передать в переменную, привязанную к 
Process Data канала.

![IB IL AO 2/SF-PAC Communication](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AO-2-SF/com.png?raw=true)
![IB IL AO 2/SF-PAC Process Data Assignment](https://github.com/axhelp/examples-analog-technology/blob/master/images/IB-IL-AO-2-SF/process-data-assignment.png?raw=true)
