<template><div><p>В данном разделе рассматриваются дополнительные кейсы настройки отчетов
компоненты Daily Reporting 2.0.</p>
<h2 id="настроики-отчета" tabindex="-1"><a class="header-anchor" href="#настроики-отчета"><span>Настройки отчета</span></a></h2>
<h3 id="расписания" tabindex="-1"><a class="header-anchor" href="#расписания"><span>Расписания</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>Данная настройка является необязательной, при пропуске ключа будут применены настройки по умолчанию.</p>
</div>
<p>Для настройки расписания вашего отчета используется ключ <code v-pre>schedule</code>:</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre python="" class="language-python"><code>super_credit_reports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"product_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit"</span><span class="token punctuation">,</span>
    <span class="token string">"owner"</span><span class="token punctuation">:</span> <span class="token string">"ivivanov"</span><span class="token punctuation">,</span>
    <span class="token string">"start_date"</span><span class="token punctuation">:</span> <span class="token string">"2024-04-16"</span><span class="token punctuation">,</span>
    <span class="token string">"reports"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"report_name"</span><span class="token punctuation">:</span> <span class="token string">"Super Credit Report"</span><span class="token punctuation">,</span>
            <span class="token string">"channel_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit_mm_channel"</span><span class="token punctuation">,</span>
            <span class="token string">"schedule"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">"time"</span><span class="token punctuation">:</span> <span class="token string">"11:30:00"</span><span class="token punctuation">,</span>
                <span class="token string">"active_week_days"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token string">"Monday"</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
                    <span class="token string">"Tuesday"</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
                    <span class="token string">"Wednesday"</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
                    <span class="token string">"Thursday"</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
                    <span class="token string">"Friday"</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
                    <span class="token string">"Saturday"</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
                    <span class="token string">"Sunday"</span><span class="token punctuation">:</span> <span class="token boolean">False</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">"metrics"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Описание ключей</summary>
<ul>
<li>
<p><code v-pre>time</code> — необязательный</p>
<p>Время запуска формирования отчета по UTC. По умолчанию — <code v-pre>09:00:00</code>.</p>
</li>
<li>
<p><code v-pre>active_week_days</code> — необязательный</p>
<p>Словарь дней недели, в которые отчет должен быть отправлен в канал. По умолчанию — ежедневно.</p>
</li>
</ul>
</details>
<h3 id="подключение" tabindex="-1"><a class="header-anchor" href="#подключение"><span>Подключение</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>Данная настройка является необязательной, при пропуске ключа будут применены настройки по умолчанию.</p>
</div>
<p>Для настройки подключения к БД для вашего отчета используется ключ <code v-pre>conn_settings</code>:</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre python="" class="language-python"><code>super_credit_reports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"product_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit"</span><span class="token punctuation">,</span>
    <span class="token string">"owner"</span><span class="token punctuation">:</span> <span class="token string">"ivivanov"</span><span class="token punctuation">,</span>
    <span class="token string">"start_date"</span><span class="token punctuation">:</span> <span class="token string">"2024-04-16"</span><span class="token punctuation">,</span>
    <span class="token string">"reports"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"report_name"</span><span class="token punctuation">:</span> <span class="token string">"Super Credit Report"</span><span class="token punctuation">,</span>
            <span class="token string">"channel_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit_mm_channel"</span><span class="token punctuation">,</span>
            <span class="token string">"conn_settings"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">"conn_id"</span><span class="token punctuation">:</span> <span class="token string">"fintech_v"</span><span class="token punctuation">,</span>
                <span class="token string">"conn_type"</span><span class="token punctuation">:</span> <span class="token string">"vertica"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">"metrics"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Описание ключей</summary>
<ul>
<li>
<p><code v-pre>conn_id</code> — необязательный</p>
<p>Идентификатор подключения в Airflow. По умолчанию — <code v-pre>fintech_v</code>.</p>
</li>
<li>
<p><code v-pre>conn_type</code> — необязательный</p>
<p>Тип СУБД для подключения (vertica или clickhouse). По умолчанию — <code v-pre>vertica</code>.</p>
</li>
</ul>
</details>
<h3 id="сенсор" tabindex="-1"><a class="header-anchor" href="#сенсор"><span>Сенсор</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>Данная настройка является необязательной, при пропуске ключа будут применены настройки по умолчанию.</p>
</div>
<p>Для настройки SQL-сенсора вашего отчета используется ключ <code v-pre>sensor_settings</code>:</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre python="" class="language-python"><code>super_credit_reports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"product_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit"</span><span class="token punctuation">,</span>
    <span class="token string">"owner"</span><span class="token punctuation">:</span> <span class="token string">"ivivanov"</span><span class="token punctuation">,</span>
    <span class="token string">"start_date"</span><span class="token punctuation">:</span> <span class="token string">"2024-04-16"</span><span class="token punctuation">,</span>
    <span class="token string">"reports"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"report_name"</span><span class="token punctuation">:</span> <span class="token string">"Super Credit Report"</span><span class="token punctuation">,</span>
            <span class="token string">"channel_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit_mm_channel"</span><span class="token punctuation">,</span>
            <span class="token string">"sensor_settings"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">"sql_sensor_timeout_sec"</span><span class="token punctuation">:</span> <span class="token number">3600</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">"metrics"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Описание ключей</summary>
<ul>
<li>
<p><code v-pre>sql_sensor_timeout_sec</code> — необязательный</p>
<p>Длительность ожидания SQL-сенсора в секундах. По умолчанию — <code v-pre>3600</code>.</p>
</li>
</ul>
</details>
<h2 id="настроики-метрики" tabindex="-1"><a class="header-anchor" href="#настроики-метрики"><span>Настройки метрики</span></a></h2>
<h3 id="запрос" tabindex="-1"><a class="header-anchor" href="#запрос"><span>Запрос</span></a></h3>
<p>Для настройки запроса, на основании которого будут вычисляться значения для
метрики используется ключ <code v-pre>query</code>:</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre python="" class="language-python"><code>super_credit_reports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"product_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit"</span><span class="token punctuation">,</span>
    <span class="token string">"owner"</span><span class="token punctuation">:</span> <span class="token string">"ivivanov"</span><span class="token punctuation">,</span>
    <span class="token string">"start_date"</span><span class="token punctuation">:</span> <span class="token string">"2024-04-16"</span><span class="token punctuation">,</span>
    <span class="token string">"reports"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"report_name"</span><span class="token punctuation">:</span> <span class="token string">"Super Credit Report"</span><span class="token punctuation">,</span>
            <span class="token string">"channel_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit_mm_channel"</span><span class="token punctuation">,</span>
            <span class="token string">"metrics"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string">"metric_name"</span><span class="token punctuation">:</span> <span class="token string">"Количество богатых людей"</span><span class="token punctuation">,</span>
                    <span class="token string">"product_id"</span><span class="token punctuation">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
                    <span class="token string">"query"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token string">"aggregate_function"</span><span class="token punctuation">:</span> <span class="token string">"sum"</span><span class="token punctuation">,</span>
                        <span class="token string">"column_name"</span><span class="token punctuation">:</span> <span class="token string">"rich_people_cnt"</span><span class="token punctuation">,</span>
                        <span class="token string">"table_name"</span><span class="token punctuation">:</span> <span class="token string">"fintech_mart_team.cdm_super_credit_table"</span><span class="token punctuation">,</span>
                        <span class="token string">"filters"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                            <span class="token string">"class_id IN (567, 678)"</span><span class="token punctuation">,</span>
                            <span class="token string">"change_type = 'Покупка'"</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">"appearance"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token string">"priority"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Описание ключей</summary>
<ul>
<li>
<p><code v-pre>aggregate_function</code> — необязательный</p>
<p>Функция агрегации для метрики, как в SQL. По умолчанию — <code v-pre>sum</code>.</p>
</li>
<li>
<p><code v-pre>column_name</code> — обязательный</p>
<p>Название столбца, в котором хранятся значения метрики в таблице CDM слоя.</p>
</li>
<li>
<p><code v-pre>table_name</code> — обязательный</p>
<p>Название таблицы CDM слоя, в которой хранятся значения метрики в таблице.</p>
</li>
<li>
<p><code v-pre>filters</code> — необязательный</p>
<p>Список фильтров построчно, которые будут объединены через <code v-pre>AND</code> в SQL-запросах.</p>
</li>
</ul>
</details>
<h3 id="внешнии-вид" tabindex="-1"><a class="header-anchor" href="#внешнии-вид"><span>Внешний вид</span></a></h3>
<p>Для настройки внешнего вида отображени метрики (строки в отчете) используется ключ <code v-pre>appearance</code>:</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre python="" class="language-python"><code>super_credit_reports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"product_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit"</span><span class="token punctuation">,</span>
    <span class="token string">"owner"</span><span class="token punctuation">:</span> <span class="token string">"ivivanov"</span><span class="token punctuation">,</span>
    <span class="token string">"start_date"</span><span class="token punctuation">:</span> <span class="token string">"2024-04-16"</span><span class="token punctuation">,</span>
    <span class="token string">"reports"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"report_name"</span><span class="token punctuation">:</span> <span class="token string">"Super Credit Report"</span><span class="token punctuation">,</span>
            <span class="token string">"channel_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit_mm_channel"</span><span class="token punctuation">,</span>
            <span class="token string">"metrics"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string">"metric_name"</span><span class="token punctuation">:</span> <span class="token string">"Количество богатых людей"</span><span class="token punctuation">,</span>
                    <span class="token string">"product_id"</span><span class="token punctuation">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
                    <span class="token string">"query"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token string">"column_name"</span><span class="token punctuation">:</span> <span class="token string">"rich_people_cnt"</span><span class="token punctuation">,</span>
                        <span class="token string">"table_name"</span><span class="token punctuation">:</span> <span class="token string">"fintech_mart_team.cdm_super_credit_table"</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">"appearance"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token string">"priority"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token string">"is_important"</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
                        <span class="token string">"tech_measure"</span><span class="token punctuation">:</span> <span class="token string">"%"</span><span class="token punctuation">,</span>
                        <span class="token string">"business_measure"</span><span class="token punctuation">:</span> <span class="token string">"руб."</span><span class="token punctuation">,</span>
                        <span class="token string">"threshold_rate"</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                        <span class="token string">"less_is_better"</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Описание ключей</summary>
<ul>
<li>
<p><code v-pre>priority</code> — обязательный</p>
<p>Порядковый номер метрики (номер строки).</p>
</li>
<li>
<p><code v-pre>is_important</code> — необязательный</p>
<p>Флаг необходимости выделения метрики жирным начертанием. По умолчанию — <code v-pre>False</code>.</p>
</li>
<li>
<p><code v-pre>tech_measure</code> — необязательный</p>
<p>Единица измерения метрики (тысячи, миллионы, проценты).</p>
</li>
<li>
<p><code v-pre>business_measure</code> — необязательный</p>
<p>Бизнес измерение метрики (руб., шт. и т.п.).</p>
</li>
<li>
<p><code v-pre>threshold_rate</code> — необязательный</p>
<p>Значение, выше которого значения метрики будут открашиваться зеленым цветом, а ниже — красным.</p>
</li>
<li>
<p><code v-pre>less_is_better</code> — необязательный</p>
<p>Изменяет принцип окрашивание метрики на противоположный (меньше — зеленый цвет, больше — красный).</p>
</li>
</ul>
</details>
<h3 id="сравнительные-срезы" tabindex="-1"><a class="header-anchor" href="#сравнительные-срезы"><span>Сравнительные срезы</span></a></h3>
<p>На текущий момент доступны следующие сравнительные срезы:</p>
<ul>
<li>DoD (1 день)</li>
<li>WoW (7 дней)</li>
<li>MoM (30 дней)</li>
<li>YoY (364 дня)</li>
</ul>
<p>Управлять этими срезами можно с помощью ключа <code v-pre>comparison_slices</code>:</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre python="" class="language-python"><code>super_credit_reports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"product_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit"</span><span class="token punctuation">,</span>
    <span class="token string">"owner"</span><span class="token punctuation">:</span> <span class="token string">"ivivanov"</span><span class="token punctuation">,</span>
    <span class="token string">"start_date"</span><span class="token punctuation">:</span> <span class="token string">"2024-04-16"</span><span class="token punctuation">,</span>
    <span class="token string">"reports"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"report_name"</span><span class="token punctuation">:</span> <span class="token string">"Super Credit Report"</span><span class="token punctuation">,</span>
            <span class="token string">"channel_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit_mm_channel"</span><span class="token punctuation">,</span>
            <span class="token string">"metrics"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string">"metric_name"</span><span class="token punctuation">:</span> <span class="token string">"Количество богатых людей"</span><span class="token punctuation">,</span>
                    <span class="token string">"product_id"</span><span class="token punctuation">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
                    <span class="token string">"query"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token string">"column_name"</span><span class="token punctuation">:</span> <span class="token string">"rich_people_cnt"</span><span class="token punctuation">,</span>
                        <span class="token string">"table_name"</span><span class="token punctuation">:</span> <span class="token string">"fintech_mart_team.cdm_super_credit_table"</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">"appearance"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token string">"priority"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">"comparison_slices"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"DoD"</span><span class="token punctuation">,</span> <span class="token string">"WoW"</span><span class="token punctuation">,</span> <span class="token string">"MoM"</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Важно</p>
<p>При отсутствии ключа для данной метрики будет применены все доступные сравнительные срезы.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>Если вы не хотите видеть сравнительные метрики необходимо передать пустой список <code v-pre>[]</code>.</p>
</div>
<h3 id="кумулятивные-срезы" tabindex="-1"><a class="header-anchor" href="#кумулятивные-срезы"><span>Кумулятивные срезы</span></a></h3>
<p>На текущий момент доступны следующие кумулятивные срезы:</p>
<ul>
<li>сWoW</li>
<li>сMoM</li>
<li>сQoQ</li>
<li>cYoY</li>
<li>сW</li>
<li>сM</li>
<li>сQ</li>
<li>cY</li>
</ul>
<p>Управлять этими срезами можно с помощью ключа <code v-pre>cumulative_slices</code>:</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre python="" class="language-python"><code>super_credit_reports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"product_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit"</span><span class="token punctuation">,</span>
    <span class="token string">"owner"</span><span class="token punctuation">:</span> <span class="token string">"ivivanov"</span><span class="token punctuation">,</span>
    <span class="token string">"start_date"</span><span class="token punctuation">:</span> <span class="token string">"2024-04-16"</span><span class="token punctuation">,</span>
    <span class="token string">"reports"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"report_name"</span><span class="token punctuation">:</span> <span class="token string">"Super Credit Report"</span><span class="token punctuation">,</span>
            <span class="token string">"channel_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit_mm_channel"</span><span class="token punctuation">,</span>
            <span class="token string">"metrics"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string">"metric_name"</span><span class="token punctuation">:</span> <span class="token string">"Количество богатых людей"</span><span class="token punctuation">,</span>
                    <span class="token string">"product_id"</span><span class="token punctuation">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
                    <span class="token string">"query"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token string">"column_name"</span><span class="token punctuation">:</span> <span class="token string">"rich_people_cnt"</span><span class="token punctuation">,</span>
                        <span class="token string">"table_name"</span><span class="token punctuation">:</span> <span class="token string">"fintech_mart_team.cdm_super_credit_table"</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">"appearance"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token string">"priority"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">"cumulative_slices"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"cWoW"</span><span class="token punctuation">,</span> <span class="token string">"cM"</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Важно</p>
<p>При отсутствии ключа для данной метрики будет применены все доступные кумулятивные срезы.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>Если вы не хотите видеть кумулятивные метрики необходимо передать пустой список <code v-pre>[]</code>.</p>
</div>
</div></template>


