---
author: David Khoperiya
title: User Guide
date: 2024-04-18
editLink: false
pageview: false

copyright: false
footer: Ozon.FinTech © 2024-2024 All rights reserved.
---

В данном разделе рассматриваются дополнительные кейсы настройки отчетов 
компоненты Daily Reporting 2.0.

## Настройки отчета

### Расписания

> [!tip]
> Данная настройка является необязательной, при пропуске ключа будут применены настройки по умолчанию.

Для настройки расписания вашего отчета используется ключ `schedule`:

```python {9-20}
super_credit_reports = {
    "product_name": "super_credit",
    "owner": "ivivanov",
    "start_date": "2024-04-16",
    "reports": [
        {
            "report_name": "Super Credit Report",
            "channel_name": "super_credit_mm_channel",
            "schedule": {
                "time": "11:30:00",
                "active_week_days": {
                    "Monday": True,
                    "Tuesday": True,
                    "Wednesday": True,
                    "Thursday": True,
                    "Friday": True,
                    "Saturday": False,
                    "Sunday": False
                },
            },
            "metrics": []
        },
    ]
}
```


::: details Описание ключей
- `time` — необязательный

  Время запуска формирования отчета по UTC. По умолчанию — `09:00:00`.

- `active_week_days` — необязательный

  Словарь дней недели, в которые отчет должен быть отправлен в канал. По умолчанию — ежедневно.
:::


### Подключение

> [!tip]
> Данная настройка является необязательной, при пропуске ключа будут применены настройки по умолчанию.

Для настройки подключения к БД для вашего отчета используется ключ `conn_settings`:

```python {9-12}
super_credit_reports = {
    "product_name": "super_credit",
    "owner": "ivivanov",
    "start_date": "2024-04-16",
    "reports": [
        {
            "report_name": "Super Credit Report",
            "channel_name": "super_credit_mm_channel",
            "conn_settings": {
                "conn_id": "fintech_v",
                "conn_type": "vertica",
            },
            "metrics": []
        },
    ]
}
```


::: details Описание ключей
- `conn_id` — необязательный

  Идентификатор подключения в Airflow. По умолчанию — `fintech_v`.

- `conn_type` — необязательный

  Тип СУБД для подключения (vertica или clickhouse). По умолчанию — `vertica`.
:::


### Сенсор

> [!tip]
> Данная настройка является необязательной, при пропуске ключа будут применены настройки по умолчанию.

Для настройки SQL-сенсора вашего отчета используется ключ `sensor_settings`:

```python {9-11}
super_credit_reports = {
    "product_name": "super_credit",
    "owner": "ivivanov",
    "start_date": "2024-04-16",
    "reports": [
        {
            "report_name": "Super Credit Report",
            "channel_name": "super_credit_mm_channel",
            "sensor_settings": {
                "sql_sensor_timeout_sec": 3600,
            },
            "metrics": []
        },
    ]
}
```


::: details Описание ключей
- `sql_sensor_timeout_sec` — необязательный

  Длительность ожидания SQL-сенсора в секундах. По умолчанию — `3600`.
:::


## Настройки метрики

### Запрос

Для настройки запроса, на основании которого будут вычисляться значения для 
метрики используется ключ `query`:

```python {13-21}
super_credit_reports = {
    "product_name": "super_credit",
    "owner": "ivivanov",
    "start_date": "2024-04-16",
    "reports": [
        {
            "report_name": "Super Credit Report",
            "channel_name": "super_credit_mm_channel",
            "metrics": [
                {
                    "metric_name": "Количество богатых людей",
                    "product_id": 999,
                    "query": {
                        "aggregate_function": "sum",
                        "column_name": "rich_people_cnt",
                        "table_name": "fintech_mart_team.cdm_super_credit_table",
                        "filters": [
                            "class_id IN (567, 678)",
                            "change_type = 'Покупка'"
                        ],
                    },
                    "appearance": {
                        "priority": 0,
                    },
                },
            ]
        },
    ]
}
```

::: details Описание ключей
- `aggregate_function` — необязательный

  Функция агрегации для метрики, как в SQL. По умолчанию — `sum`.

- `column_name` — обязательный

  Название столбца, в котором хранятся значения метрики в таблице CDM слоя.

- `table_name` — обязательный

  Название таблицы CDM слоя, в которой хранятся значения метрики в таблице.

- `filters` — необязательный

  Список фильтров построчно, которые будут объединены через `AND` в SQL-запросах.
:::


### Внешний вид

Для настройки внешнего вида отображени метрики (строки в отчете) используется ключ `appearance`:

```python {17-24}
super_credit_reports = {
    "product_name": "super_credit",
    "owner": "ivivanov",
    "start_date": "2024-04-16",
    "reports": [
        {
            "report_name": "Super Credit Report",
            "channel_name": "super_credit_mm_channel",
            "metrics": [
                {
                    "metric_name": "Количество богатых людей",
                    "product_id": 999,
                    "query": {
                        "column_name": "rich_people_cnt",
                        "table_name": "fintech_mart_team.cdm_super_credit_table",
                    },
                    "appearance": {
                        "priority": 0,
                        "is_important": True,
                        "tech_measure": "%",
                        "business_measure": "руб.",
                        "threshold_rate": 5,
                        "less_is_better": False,
                    },
                },
            ]
        },
    ]
}
```

::: details Описание ключей
- `priority` — обязательный

  Порядковый номер метрики (номер строки). 

- `is_important` — необязательный

  Флаг необходимости выделения метрики жирным начертанием. По умолчанию — `False`.

- `tech_measure` — необязательный

  Единица измерения метрики (тысячи, миллионы, проценты). 

- `business_measure` — необязательный

  Бизнес измерение метрики (руб., шт. и т.п.).

- `threshold_rate` — необязательный

  Значение, выше которого значения метрики будут открашиваться зеленым цветом, а ниже — красным.

- `less_is_better` — необязательный

  Изменяет принцип окрашивание метрики на противоположный (меньше — зеленый цвет, больше — красный).
:::

### Сравнительные срезы

На текущий момент доступны следующие сравнительные срезы:
- DoD (1 день)
- WoW (7 дней)
- MoM (30 дней)
- YoY (364 дня)

Управлять этими срезами можно с помощью ключа `comparison_slices`:

```python {20}
super_credit_reports = {
    "product_name": "super_credit",
    "owner": "ivivanov",
    "start_date": "2024-04-16",
    "reports": [
        {
            "report_name": "Super Credit Report",
            "channel_name": "super_credit_mm_channel",
            "metrics": [
                {
                    "metric_name": "Количество богатых людей",
                    "product_id": 999,
                    "query": {
                        "column_name": "rich_people_cnt",
                        "table_name": "fintech_mart_team.cdm_super_credit_table",
                    },
                    "appearance": {
                        "priority": 0,
                    },
                    "comparison_slices": ["DoD", "WoW", "MoM"]
                },
            ]
        },
    ]
}
```

> [!important]
> При отсутствии ключа для данной метрики будет применены все доступные сравнительные срезы.

> [!tip]
> Если вы не хотите видеть сравнительные метрики необходимо передать пустой список `[]`.

### Кумулятивные срезы

На текущий момент доступны следующие кумулятивные срезы:
- сWoW
- сMoM
- сQoQ
- cYoY
- сW
- сM
- сQ
- cY

Управлять этими срезами можно с помощью ключа `cumulative_slices`:

```python {20}
super_credit_reports = {
    "product_name": "super_credit",
    "owner": "ivivanov",
    "start_date": "2024-04-16",
    "reports": [
        {
            "report_name": "Super Credit Report",
            "channel_name": "super_credit_mm_channel",
            "metrics": [
                {
                    "metric_name": "Количество богатых людей",
                    "product_id": 999,
                    "query": {
                        "column_name": "rich_people_cnt",
                        "table_name": "fintech_mart_team.cdm_super_credit_table",
                    },
                    "appearance": {
                        "priority": 0,
                    },
                    "cumulative_slices": ["cWoW", "cM"]
                },
            ]
        },
    ]
}
```

> [!important]
> При отсутствии ключа для данной метрики будет применены все доступные кумулятивные срезы.

> [!tip]
> Если вы не хотите видеть кумулятивные метрики необходимо передать пустой список `[]`.