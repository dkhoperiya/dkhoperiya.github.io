---
title: Quick Start
layout: doc
---

# {{ $frontmatter.title }}

Данный раздел поможет вам быстро создать простой отчет с базовыми настройками на основании компоненты Daily Reporting 2.0.


## Начальные требования
Для работы с компонентов Daily Reporting 2.0 у вас должен быть клонирован репозиторий 
[airflow-bank-dags]() и иметься необходимые для него права.

Подробнее об этом можно узнать у дежурного инженера в канале [fintech_data]() с помощью тега `@fde_duty`.

## Создание ветки Hotfix
Для внесения изменений в конфигурация отчетов Daily Reporting необходимо обязательно
создать новую ветку с типом `Hotfix`:

```commandline
git checkout master
git pull
git checkout -b hotfix/FDEI-0
```

## Создание базового отчета
Создание нового отчета начинается с создания конфиг-словаря для своего продукта в файле [daily_reporting_dict_new.py]().

Попробуем создать простой отчет с базовыми настройками для продута "super_credit", 
который будет состоять всего из одной метрики:

```python {5-23}
super_credit_reports = {
    "product_name": "super_credit", 
    "owner": "ivivanov",          
    "start_date": "2024-04-16",    
    "reports": [
        {
            "report_name": "Super Credit Metrics",
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
                },
            ]
        },
    ]             
}
```

> [!important]
> Не оставляйте в ключах `reports` и `metrics`  пустые списки, это вызовет ошибку парсинга и формирования DAG'а.

## Активация DAG'а

Для активации DAG'а продукта необходимо добавить его в список `active_daily_reports`,
расположенный в нижней части редактируемого файла:

```python
active_daily_reports = [
    ...,
 	super_credit_reports
]
```

## Сохранение изменений
После окончания редактирования файла необходимо:
 - зафиксировать изменения (`commit`)
 - отправить изменения в GitLab (`push`)
 - создать и выполнить запрос на слияние (`merge`)

```commandline
git commit .
git push origin hotfix/FDEI-0
```

После этого в GitLab UI необходимо создать `Merge Request` и завершить слияние веток.

## Добавление бота в канал

Для того, чтобы компонента Daily Reporting 2.0 могла отправлять отчеты в 
выбранный канал MatterMost необходимо добавить бота `fintech_alert` в ваш канал.

<MDImage 
    src="/assets/image/fintech_alert_check.png" 
    height=300 
    caption="Бот должен быть участником канала"
/>

## Запуск DAG'а в Airflow UI

Созданный компонентной Daily Reporting 2.0 DAG будет называться по паттерну `daily_reporting_ + название продукта`, в нашем случае это `daily_reporting_super_credit`.

На это этапе можно запускать DAG и ждать сформированного отчета.

<MDImage 
    src="/assets/image/daily_reporting_quick_start_2.png" 
    height=300 
    caption="Не забудьте снять DAG с паузы"
/>

## Проверка отчета
После завершения выполнения DAG'а в выбранный ранее канал MatterMost придет 
готовый отчет за конкретную дату с настройками по-умолчанию.

<MDImage 
    src="/assets/image/daily_reporting_quick_start_3.png"  
    caption="Не забудьте снять DAG с паузы"
/>

> [!info]
> Хоть мы и не указывали комментарий к отчету, он сгенерировался автоматически, а сам отчет без указания конкретных аналитических срезов использует все доступные срезы по умолчанию.

# Что дальше?
С этого момента вы можете перейти в раздел [User Guide](user_guide.html) для знакомства с 
дополнительными возможностями настройки отчетов Daily Reporting 2.0 или ознакомиться с 
технической стороной работы компоненты в разделе [Python API](python_api.html).