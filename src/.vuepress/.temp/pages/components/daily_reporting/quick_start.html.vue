<template><div><p>Данный раздел поможет вам быстро создать простой отчет с базовыми настройками на основании компоненты Daily Reporting 2.0.</p>
<h2 id="начальные-требования" tabindex="-1"><a class="header-anchor" href="#начальные-требования"><span>Начальные требования</span></a></h2>
<p>Для работы с компонентов Daily Reporting 2.0 у вас должен быть клонирован репозиторий
<a href="">airflow-bank-dags</a> и иметься необходимые для него права.</p>
<p>Подробнее об этом можно узнать у дежурного инженера в канале <a href="">fintech_data</a> с помощью тега <code v-pre>@fde_duty</code>.</p>
<h2 id="создание-ветки-hotfix" tabindex="-1"><a class="header-anchor" href="#создание-ветки-hotfix"><span>Создание ветки Hotfix</span></a></h2>
<p>Для внесения изменений в конфигурация отчетов Daily Reporting необходимо обязательно
создать новую ветку с типом <code v-pre>Hotfix</code>:</p>
<div class="language-commandline line-numbers-mode" data-ext="commandline" data-title="commandline"><pre v-pre class="language-commandline"><code>git checkout master
git pull
git checkout -b hotfix/FDEI-0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="создание-базового-отчета" tabindex="-1"><a class="header-anchor" href="#создание-базового-отчета"><span>Создание базового отчета</span></a></h2>
<p>Создание нового отчета начинается с создания конфиг-словаря для своего продукта в файле <a href="">daily_reporting_dict_new.py</a>.</p>
<p>Попробуем создать простой отчет с базовыми настройками для продута &quot;super_credit&quot;,
который будет состоять всего из одной метрики:</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre python="" class="language-python"><code>super_credit_reports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"product_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit"</span><span class="token punctuation">,</span> 
    <span class="token string">"owner"</span><span class="token punctuation">:</span> <span class="token string">"ivivanov"</span><span class="token punctuation">,</span>          
    <span class="token string">"start_date"</span><span class="token punctuation">:</span> <span class="token string">"2024-04-16"</span><span class="token punctuation">,</span>    
    <span class="token string">"reports"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"report_name"</span><span class="token punctuation">:</span> <span class="token string">"Super Credit Metrics"</span><span class="token punctuation">,</span>
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
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>             
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Важно</p>
<p>Не оставляйте в ключах <code v-pre>reports</code> и <code v-pre>metrics</code>  пустые списки, это вызовет ошибку парсинга и формирования DAG'а.</p>
</div>
<h2 id="активация-dag-а" tabindex="-1"><a class="header-anchor" href="#активация-dag-а"><span>Активация DAG'а</span></a></h2>
<p>Для активации DAG'а продукта необходимо добавить его в список <code v-pre>active_daily_reports</code>,
расположенный в нижней части редактируемого файла:</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code>active_daily_reports <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>
 	super_credit_reports
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="сохранение-изменении" tabindex="-1"><a class="header-anchor" href="#сохранение-изменении"><span>Сохранение изменений</span></a></h2>
<p>После окончания редактирования файла необходимо:</p>
<ul>
<li>зафиксировать изменения (<code v-pre>commit</code>)</li>
<li>отправить изменения в GitLab (<code v-pre>push</code>)</li>
<li>создать и выполнить запрос на слияние (<code v-pre>merge</code>)</li>
</ul>
<div class="language-commandline line-numbers-mode" data-ext="commandline" data-title="commandline"><pre v-pre class="language-commandline"><code>git commit .
git push origin hotfix/FDEI-0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>После этого в GitLab UI необходимо создать <code v-pre>Merge Request</code> и завершить слияние веток.</p>
<h2 id="добавление-бота-в-канал" tabindex="-1"><a class="header-anchor" href="#добавление-бота-в-канал"><span>Добавление бота в канал</span></a></h2>
<p>Для того, чтобы компонента Daily Reporting 2.0 могла отправлять отчеты в
выбранный канал MatterMost необходимо добавить бота <code v-pre>fintech_alert</code> в ваш канал.</p>
<figure><img src="/assets/image/fintech_alert_check.png" alt="Бот должен быть участником канала" height="300" tabindex="0" loading="lazy"><figcaption>Бот должен быть участником канала</figcaption></figure>
<h2 id="запуск-dag-а-в-airflow-ui" tabindex="-1"><a class="header-anchor" href="#запуск-dag-а-в-airflow-ui"><span>Запуск DAG'а в Airflow UI</span></a></h2>
<p>Созданный компонентной Daily Reportin 2.0 DAG будет называться по паттерну <code v-pre>daily_reporting_ + название продукта</code>, в нашем случае это <code v-pre>daily_reporting_super_credit</code>.</p>
<p>На это этапе можно запускать DAG и ждать сформированного отчета.</p>
<figure><img src="/assets/image/daily_reporting_quick_start_2.png" alt="Не забудьте снять DAG с паузы" height="300" tabindex="0" loading="lazy"><figcaption>Не забудьте снять DAG с паузы</figcaption></figure>
<h2 id="проверка-отчета" tabindex="-1"><a class="header-anchor" href="#проверка-отчета"><span>Проверка отчета</span></a></h2>
<p>После завершения выполнения DAG'а в выбранный ранее канал MatterMost придет
готовый отчет за конкретную дату с настройками по-умолчанию.</p>
<figure><img src="/assets/image/daily_reporting_quick_start_3.png" alt="По умолчанию внешний вид отчета не самый лучший" tabindex="0" loading="lazy"><figcaption>По умолчанию внешний вид отчета не самый лучший</figcaption></figure>
<div class="hint-container info">
<p class="hint-container-title">Инфо</p>
<p>Хоть мы и не указывали комментарий к отчету, он сгенерировался автоматически, а сам отчет без указания конкретных аналитических срезов использует все доступные срезы по умолчанию.</p>
</div>
<h1 id="что-дальше" tabindex="-1"><a class="header-anchor" href="#что-дальше"><span>Что дальше?</span></a></h1>
<p>С этого момента вы можете перейти в раздел <RouteLink to="/components/daily_reporting/user_guide.html">User Guide</RouteLink> для знакомства с
дополнительными возможностями настройки отчетов Daily Reporting 2.0 или ознакомиться с
технической стороной работы компоненты в разделе <RouteLink to="/components/daily_reporting/python_api.html">Python API</RouteLink>.</p>
</div></template>


