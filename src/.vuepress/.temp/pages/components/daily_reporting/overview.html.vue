<template><div><h2 id="описание-решения" tabindex="-1"><a class="header-anchor" href="#описание-решения"><span>Описание решения</span></a></h2>
<p>Daily Reporting 2.0 - вторая версия компоненты для Apache Airflow,
предназначенная для автоматизации формирования и поставки ежедневных отчетов
на основании ключевых метрик в каналы MatterMost.</p>
<p>Относится к критическим компонентам и находится под постоянным контролем дежурного FDE.</p>
<p><strong>Дата последнего изменения:</strong> 16.04.2024</p>
<p><strong>Актуальная версия:</strong> 2.0.0</p>
<p><strong>Полезные ссылки:</strong> <a href="">Gitlab</a> | <a href="">Airflow</a></p>
<p>О<strong>тветственный со стороны FDE:</strong> <a href="">Chirgin Maksim Aleksandrovich</a></p>
<h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2>
<details class="hint-container details"><summary>Я создал конфиг-словарь для своего продукта, но DAG не появился в Airflow UI, почему?</summary>
<p>Для того, чтобы ваш DAG появился в Airflow UI необходимо активировать конфиг-словарь,
указав его название в списке <code v-pre>active_daily_reports</code>, расположенном в файле <a href="">daily_reporting_dict.py</a>.</p>
</details>
</div></template>


