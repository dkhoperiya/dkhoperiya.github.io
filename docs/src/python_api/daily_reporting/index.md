---
title: Daily Reporting API
layout: doc
next: false
---

# {{ $frontmatter.title }}

## Модули

### Report

Daily Reporting processing, calculating, and rendering module.

This module provides the following classes:
  - ``ReportTableImage``
  - ``Report``
  - ``Metric``

The main class is ``ReportTableImage``, which implements rendering
report images and sending them to users via MatterMost.

Class ``Report`` is responsible for validating parameters, gathering
values for analytic slices, and creating a Pandas DataFrame, which is
actually used to render the report image by ``ReportTableImage`` class.

And the third class, ''Metric'', represents one row in the report and
stores metric values, which are used to combine analytic slices.

In this module, it's really important to understand the differences
between value and an analytic slice.

Analytic slices represent the metric`s analytical value.
For example, the "cW" analytic slice means that we must calculate the
cumulative aggregate for the measure over a week. It just takes one
value of this cumulative, which we'll label
"cumulative value over this week".

However, while discussing the "cWoW" analytic slice, we must consider
the difference between the cumulative values for this week and the
prior week. This indicates that a single analytic slice can be
calculated using one or two values.

### Parsing

Тут описываем зачем нужен, что тут делается в общих чертах. Нужно для понимания 
где искать ту или иную логику компоненты.

### Exceptions

Тут описываем зачем нужен, что тут делается в общих чертах. Нужно для понимания 
где искать ту или иную логику компоненты.

### Utility functions

Тут описываем зачем нужен, что тут делается в общих чертах. Нужно для понимания 
где искать ту или иную логику компоненты.

## Классы

### `Report`

Gather metric values, manage slices and create report DataFrame.

The main idea of this class is to provide a unified interface to
configure and calculate values and analytic slices
for specific reports.

After initialising, it validates its properties and raises
exceptions if some properties are invalid.
This class has 3 public methods:
- ``gather_values_for_metrics()``
- ``combine_analytics_slices()``
- ``create_report_df()``

The main method of this class is ``create_report_df()``. Call it
to create a Pandas DataFrame object with calculated and formatted
analytic slices.

This method executes the functions ``gather_values_for_metrics()``
and ``combine_analytics_slices()`` one by one.

Also, you can manually call ``gather_values_for_metrics()``
and ``combine_analytics_slices()`` then you want to regather values
and recombine analytic slices.

Attributes:
- `report_name`: A string value for the report date.
- `channel_name`: A string value represents the MM channel ID.
- `_connection_id`: A string value contains the connection ID.
- `_connection_type`: A string value is responsible for the type
   of connection ("clickhouse" or "vertica").
- `_ds`: A string value represented DAG logical date
- `__ds_dt`: A datetime value represented DAG logical date
- `comment` (str): A string value contains freeform support text.
- `metrics`: A list of metrics for this report.
- `report_df`: A Pandas DataFrame representation of this report.

### `Metric`

Тут описание класса в обзорном варианте, по сути копия хорошего docstring.

### `ReportTableImage`

Тут описание класса в обзорном варианте, по сути копия хорошего docstring.

## Функции

### `send_report_func`

Тут описание функции тоже по сути docstring.