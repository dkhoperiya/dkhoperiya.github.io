<template><div><hr>
<h2 id="title-quick-start" tabindex="-1"><a class="header-anchor" href="#title-quick-start"><span>title: Quick Start</span></a></h2>
<p>Данный раздел поможет вам быстро создать простой отчет с базовыми настройками на основании компоненты Daily Reporting 2.0.</p>
<h2 id="инициализация-dag-a-продукта" tabindex="-1"><a class="header-anchor" href="#инициализация-dag-a-продукта"><span>Инициализация DAG'a продукта</span></a></h2>
<p>Для инициализации DAG'а продукта необходимо создать конфиг-словарь и указать в нем:</p>
<ul>
<li>Наименование продукта</li>
<li>Логин ответственного аналитика</li>
<li>Дата начала формирования отчетов</li>
<li>Список отчетов</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code>super_credit_reports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"product_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit"</span><span class="token punctuation">,</span> 
    <span class="token string">"owner"</span><span class="token punctuation">:</span> <span class="token string">"ivivanov"</span><span class="token punctuation">,</span>          
    <span class="token string">"start_date"</span><span class="token punctuation">:</span> <span class="token string">"2024-04-16"</span><span class="token punctuation">,</span>    
    <span class="token string">"reports"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>             
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>❗ Не оставляйте в ключе <code v-pre>reports</code> пустой массив, это вызовет ошибку парсинга и формирования DAG'а.</p>
</blockquote>
<h2 id="регистрация-нового-отчета" tabindex="-1"><a class="header-anchor" href="#регистрация-нового-отчета"><span>Регистрация нового отчета</span></a></h2>
<p>Для регистрации нового отчета необходимо указать:</p>
<ul>
<li>Наименование отчета</li>
<li>Имя канала, в который будет отправляться отчет</li>
<li>Список необходимых метрик</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code>super_credit_reports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>    
    <span class="token string">"reports"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
 		<span class="token punctuation">{</span>
			<span class="token string">"report_name"</span><span class="token punctuation">:</span> <span class="token string">"Super Credit Metrics"</span><span class="token punctuation">,</span>
            <span class="token string">"channel_name"</span><span class="token punctuation">:</span> <span class="token string">"super_credit_mm_channel"</span><span class="token punctuation">,</span>
            <span class="token string">"metrics"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span>             
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>❗ Не оставляйте в ключе <code v-pre>metrics</code> пустой массив, это вызовет ошибку парсинга и формирования DAG'а.</p>
</blockquote>
<h2 id="добавление-метрики" tabindex="-1"><a class="header-anchor" href="#добавление-метрики"><span>Добавление метрики</span></a></h2>
<p>Для добавления метрики необходимо указать:</p>
<p>Наименование метрики</p>
<ul>
<li>Идентификатор продукта</li>
<li>Наименование таблицы и столбца, где хранится значение метрики</li>
<li>Порядковый номер метрики в отчете</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code>super_credit_reports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>    
    <span class="token string">"reports"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
 		<span class="token punctuation">{</span>
                    <span class="token string">"metrics"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    	                <span class="token punctuation">{</span>
                            <span class="token string">"metric_name"</span><span class="token punctuation">:</span> <span class="token string">"Количество богатых людей"</span><span class="token punctuation">,</span>
                            <span class="token string">"product_id"</span><span class="token punctuation">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
                            <span class="token string">"query"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                                <span class="token string">"column_name"</span><span class="token punctuation">:</span> <span class="token string">"cr_covered_to_cities_presence"</span><span class="token punctuation">,</span>
                                <span class="token string">"table_name"</span><span class="token punctuation">:</span> <span class="token string">"fintech_mart_team.cdm_logistic_clients_coverage_daily"</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token string">"appearance"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                                <span class="token string">"priority"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
		    <span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span>             
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="активация-dag-a-продукта" tabindex="-1"><a class="header-anchor" href="#активация-dag-a-продукта"><span>Активация DAG'a продукта</span></a></h2>
<p>Для активации DAG'а продукта необходимо добавить его в список <code v-pre>active_daily_reports</code> и сделать merge изменений в master ветку.</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code>active_daily_reports <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>
 	super_credit_reports
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="запуск-dag-а-в-airflow-ui" tabindex="-1"><a class="header-anchor" href="#запуск-dag-а-в-airflow-ui"><span>Запуск DAG'а в Airflow UI</span></a></h1>
<p>После успешного создания нового DAG'а продукта и отчета в нем вы свой DAG, который следует запустить для отправки отчета в указанный канал MatterMost.</p>
<h1 id="проверка-отчета" tabindex="-1"><a class="header-anchor" href="#проверка-отчета"><span>Проверка отчета</span></a></h1>
<p>После завершения выполнения DAG'а в выбранный ранее канал MatterMost прийдет готовый отчет за конкретную дату с настройками по-умолчанию.</p>
<blockquote>
<p>💡 Хоть мы и не указывали комментарий к отчету, он сгенерировался автоматически, а сам отчет без указания конкретных аналитических срезов использует все доступные срезы по умолчанию.</p>
</blockquote>
<h1 id="что-дальше" tabindex="-1"><a class="header-anchor" href="#что-дальше"><span>Что дальше?</span></a></h1>
<p>С этого момента вы можете перейти в раздел 3. User Guide (Daily Reporting 2.0) для знакомства с дополнительными возможностями настройки отчетов Daily Reporting.</p>
</div></template>


