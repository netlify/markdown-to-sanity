---
title: How the Netlify Data Team Migrated from Databricks to Snowflake
description: Read about how the Netlify Data Team migrated their data pipelines, 500 dbt models, and reports & dashboards from Databricks to Snowflake. We list many SQL and project management tips to help make your migration a success!
authors:
  - Adam Stone
date: 2021-08-10
lastmod: 2021-07-30
topics:
  - tutorials
tags:
  - Data
  - etl
  - engineering
  - sql
  - Snowflake
tweet: ""
format: blog
relatedposts:
  - How the Netlify Data Team Uses Census for Operational Analytics
  - Migrating an existing Next.js project to Netlify
seo:
  metadescription: "Case study: How Netlify migrated their data pipelines, 500 dbt models, and reports & dashboards from Databricks to Snowflake"
  metatitle: How the Netlify Data Team Migrated from Databricks to Snowflake
---

Last month, our data team at Netlify moved data stores from Databricks (DBX) to Snowflake. This was an all-hands-on-deck team effort as we re-engineered our [Airflow](https://airflow.apache.org/) data ingestion pipelines, migrated nearly 500 [dbt](https://www.getdbt.com) models, and updated definitions for dozens of [Mode](https://mode.com/) reports and dashboards. This article is in two parts:

1. How we managed the migration, broke it into bite-sized chunks, and kept the team motivated throughout
2. Our reference list of SQL functions and analytics logic which we needed to update

## How We Made The Migration Succeed

Netlify often uses the ["build the plane while you're flying it" metaphor](https://www.csmonitor.com/The-Culture/The-Home-Forum/2016/0324/Build-the-plane-while-you-re-flying-it) to describe software engineering efforts, and migrating data stores was no exception. The effort required ample communication, coordination, cheerleading, and stakeholder management, all while breaking none of the existing data infrastructure or interrupting anyone's usual data & BI routines. The sustained effort involved a team of four analytics engineers, three data analysts, and one manager; here's how we did it:

### Set Companywide Expectations Early

To give us space and focus, business leaders agreed that during the migration, we would (1) pause all in-flight data work, (2) not begin any new data work, and (3) only carry out "keeping the lights on" data work. The business continued to have access to all dashboards/reports/tools and could continue querying new data stored/transformed on DBX while we worked on the migration. This arrangement was absolutely vital to our data migration project's success.

### Set Teamwide Expectations Early, Too

We created one ironclad rule when doing the migration: **don't refactor or optimize.** The temptation to go, "Oh, while I'm migrating this, I'll just go ahead and clean up the rest of the code in this CTE" is _very_ real, and we recognize that! However, refactoring beyond the bare minimum ("Does the dbt model run succesfully on Snowflake?") creates friction points:

1. PR reviews take longer, because now not only are we checking that SQL functions have been correctly migrated, we're now also checking whether the _business logic_ is still achieving the same output.
2. Data comparison checks aren't as helpful. When migrating models, we would compare values in the legacy DBX model against the new Snowflake model to make sure our data was still the same. If we saw data discrepancies, we wouldn't know if it was due to the refactor or because we goofed somewhere in the basic SQL rewrite.
3. Refactoring steals team focus, which should be only on getting all 500 dbt models and dozens of Mode reports, in order of dependencies, moved over as quickly as possible.

We communicated this by repeatedly saying:

> Our goal is to migrate SQL, not refactor or optimize.

### Break It Down

Once the [Snowflake user/database/warehouse environment was established](https://blog.getdbt.com/how-we-configure-snowflake/), Emilie, our team manager, kicked off a GitHub issue with broad outlines of how the project should be broken down:

1. **Do The Easy Stuff First** - connect Snowflake to all our other data tools such as Fivetran, Segment, Census, Mode, Transform.
2. **Port Data Sources** - create a checklist of all data sources. Many were already handled by Fivetran, but we also had custom ingestion pipelines for production & billing data. We organized the data sources by how "easy" they were to migrate (i.e., Fivetran was easier than custom scripts running on Spark) and how "central" they were for downstream models (i.e., production data for teams & sites were prioritized over more peripheral data sources).
3. **Focus On Horizontal Slices** - if you look at a [typical data transformation DAG in dbt](https://twitter.com/getdbt/status/1308117451809398786), each data source has a corresponding set of base & staging models. We called these "horizontal slices," and each of us was responsible for migrating a set of these slices (usually based on our familiarity with these datasets). We also ran data checks on every staging model to catch and resolve data discrepancies early on (and before they could affect the next set of downstream models). Snapshot models were considered to be part of these slices.
4. **Migrate Business Logic** - Once enough base & staging models were migrated, we then moved onto fact, dimensional, and marts models. We divided these models that into business areas: core entities (users/teams/sites), finance, product, marketing, HR, etc., and assigned them based on the business teams we usually worked with. Like with base & staging models, we required data checks to be run on all tables during PR review to make sure our DBX & Snowflake numbers agreed.
5. **Update Reports & Dashboards** - Once enough fact/dimensional/marts models were migrated, we could then start updating our Mode reports and re-point them to Snowflake models. To prioritize these, we first migrated the top 20 most-used reports, then relied on our experience to decide which of the remaining reports we needed to migrate or archive. In a way, this step also served as a dashboard clean-up job! Furthermore, there were report URL links all across the business (Slack conversations, Google slides, Notion docs) and we didn't want to break any of them, so we followed these steps for each report:
    1. Clone an existing report and give it an obvious name "[CLONED] Company Metrics."
    2. In the cloned report, repoint sources to Snowflake views/tables.
    3. In the cloned report, rewrite SQL as needed and fix any tables and charts so they work again.
    4. Compare the cloned report (running on Snowflake) to the original report (running on Databricks) and make sure all numbers match.
    5. Replace the original report's SQL with the cloned report's SQL. Now the original report is pulling from Snowflake.
    6. Delete the cloned report.

### Own It, Overcommunicate It, and Share Progress

Emilie's GitHub issue was a mega-issue (we quickly memorized the issue number - may #1873 go down in Netlify's history books) that outlined the work to be done in the following several weeks, but what would happen when the rubber hit the road? We're a distributed team that works async. How did we keep each other updated and avoid getting into each other's way?

* We all owned the main GitHub issue, adding to it or making changes whenever needed. At last count, this issue had 73 checklist items!
* Each checklist item was tagged with an owner, and each spawned a child issue for tracking work.
* We prioritized reviewing each other's PRs.
* We overcommunicated in our team channel. We flagged any problems or blockers in the channel (as well as on the relevant GitHub issue). We also ran async check-ins: we'd start a new conversation thread asking each one to respond with answers to (1) What’s been going well?, (2) What are you going to work on next?, and (3) What is blocking you/what are you unsure about? This helped us understand where each one of us stood on the migration effort and surfaced potential upcoming blockers, allowing us to proactively resolve or plan around them.
* We frequently relied on help reviewing and resolving data discrepancies. Staring at a series of extremely-similar-looking spreadsheets will test anyone's soul, and a pair of fresh eyes quickly spotted things (and solutions!) we couldn't see before.

### The Final Sprint

We were excited as more and more of the 73 checklist items on the main GitHub issue were checked off. However, near the end of any long-running project, things can get messy: the team's tired and there's a bunch of smaller, miscellaneous things that don't fit neatly under any single owner or function. To motivate the team and wrap up things, we compared all files in our dbt project folder for Snowflake against the existing dbt project for DBX (using `diff`). This produced a list of all dbt files that weren't yet in our Snowflake project, which became our "punch list" -- another checklist! We all combed through the list, checking off items as (1) `already-migrated` (but named differently or in a different folder), (2) `won't-migrate`, or (3) `need-to-migrate`. Ownership was quickly assigned to remaining `need-to-migrate` items, and we built a progress box reporting % of remaining models migrated. We reported that number almost every day, which motivated us to reach 100%! We also shared GTD-style time management strategies such as the [Pomodoro Technique](https://todoist.com/productivity-methods/pomodoro-technique) to help us push through the more tedious aspects of data comparisons and report migrations.

### Retro

At our post-migration retro, our list of "things that went well" was much longer than our list of "things that could've gone better," which was great. We were quite happy with the basic structure and planning of the migration work, and how every one of us was vocal about what we needed to continue or unblock our individual work, which allowed the team to sustain momentum throughout the project. We thought we could've been better at estimating the time needed to re-engineer our custom data pipelines, which blocked some horizontal slice work which were central for building several of our core entity models. We also found it challenging to pause all other data work -- as analysts, we naturally want to be the best data partners we can be for the business. The lessons we learned here were valuable, and we hope sharing what we did will benefit other data teams as well.

## Migrating SQL & Analytics Logic

Time for the SQL part! Because each database uses a different SQL dialect, a data migration project typically involves rewriting the SQL in model definitions and BI reports. Our experience was no different, moving from [Databricks' dialect](https://databricks.com/glossary/what-is-spark-sql/) based on Apache Spark SQL to [Snowflake's dialect](https://docs.snowflake.com/en/sql-reference-functions.html) which many people on our team were already comfortable working with. To share tips and learnings, we started up a Notion doc listing each SQL difference we stumbled across. Here's what we learned:

### Time-Savers

We loved using the PostgreSQL-style operators `::` and `||` which made our SQL easier to read, especially when nested in other functions. We used these wherever we could, and they show up in some of the other tips below.

```sql
-- Casting a field to a different data type (i.e., varchar)
cast(col_name as varchar)   -- DBX & Snowflake
col_name::varchar           -- Snowflake

-- Casting a timestamp to a date
to_date(timestamp_val)      -- DBX & Snowflake
timestamp_val::date         -- Snowflake

-- Concatenating strings
concat(col_1, col_2)        -- DBX & Snowflake
col_1 || col_2              -- Snowflake
```

### Functions We Changed

Moving from DBX to Snowflake meant some function names changed. Here are the ones we came across:

```sql
-- Functions that changed, DBX -> Snowflake
if() -> iff()
boolean(col_name) -> col_name::boolean
collect_list(col_name) -> array_agg(col_name)
concat_ws(", ", collect_list(col_name)) -> listagg(col_name, ', ')
```

Some date & timestamp functions also changed! They're covered in a separate section below.

We missed some handy array-based functions: `explode()`, `array_distinct()`, `array_except()`, and `reverse()`. We develops workarounds in Snowflake to replicate these, relying on `lateral flatten` which is a more generic approach that also works for other variant types, not just arrays. Here's an example for Spark SQL's `explode()` function, and we studied the "practical example" at the end of of [Snowflake's `flatten` documentation](https://docs.snowflake.com/en/sql-reference/functions/flatten.html).

```sql
-- A SQL table with a team_id column and an array of user_ids in each team.
-- We want to "explode" (or fan out) the user_ids array so that there's now
-- a row for each team_id and user_id pair.

-- DBX
select
  team_id,
  explode(user_ids) as user_id
from tbl

-- Snowflake
select
  team_id,
  flattened.value::string as user_id
from tbl,
  lateral flatten(input => user_ids) as flattened

-- It will "explode" the input (user_ids) and put it in a special, temporary
-- view named "flattened." The contents of "flattened" can now be called
-- in the main SELECT clause.
```

Our workarounds for `array_distinct()`, `array_except()`, and `reverse()` were more involved:

* To reduce an array to distinct items only, we flattened the array, did `select distinct`, then used `array_agg()` to roll it back up into an array.

* To get values in array A that weren't in array B, we flattened array A, used `array_contains()` to check each (flattened) element of array A in array B, filtered where `array_contains()` returned `false`, then used `array_agg()` to roll up any remaining array A elements into an array.

* We wrote a dbt macro to replicate `reverse()` functionality (the parameter `max_size` is the expected maximum number of elements of the array):

    ```
    {% macro reverse_array(column_name, max_size) %}

        case array_size({{column_name}})
        {% for i in range(max_size) %}
           when {{i+1}} then array_construct(
            {%- for j in (range(i+1)|reverse) %}
                {{column_name}}[{{j}}]
                {%- if not loop.last -%},{%- endif -%}
            {% endfor %}
            )
       {% endfor %}
       end

    {% endmacro %}
    ```

### Dates and Timestamps

Every database handles dates & timestamps differently, and this was no exception.

```sql
-- Functions that changed, DBX -> Snowflake
date_sub(created_date, 3) -> dateadd(day, -3, created_date)
from_unix_time(unixtime) -> unixtime::timestamp_ntz
```

There's further nuances in how dates & timestamps are handled differently in Snowflake:

* Snowflake has [multiple timestamp variations](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#timestamp-ltz-timestamp-ntz-timestamp-tz), encoding timezone information differently. One of our team's mantras is "timezones are the worst" and we defaulted to using `timestamp_ntz` ("no time zone") wherever possible. This is also Snowflake's default variation when using `timestamp` in general.

* The order of parameters in date/timestamp arithmetic functions was different! This tripped us up a few times, and is why data comparison checks were so important to spot these gotchas:

    ```sql
    -- Get the number of days between created_date and updated_date
    datediff(updated_date, created_date)        -- DBX
    datediff(day, created_date, updated_date)   -- Snowflake
    ```

* While `to_date(timestamp_value)` worked fine in Snowflake, we preferred to use `timestamp_value::date`.

* Formatting a date/timestamp as a string? While DBX's `date_format()` is equivalent to Snowflake's `to_char()`, symbols such as `YYYY-MM-DD` are different. [Here's Snowflake's symbol list](https://docs.snowflake.com/en/sql-reference/functions-conversion.html#label-date-time-format-conversion).

### JSON

We felt Snowflake had better support for working with JSON, and were excited to use this functionality. Snowflake allows querying JSON blobs using either [dot notation or bracket notation](https://docs.snowflake.com/en/user-guide/querying-semistructured.html#traversing-semi-structured-data); we chose to use only bracket notation. Either way, our SQL looked much simpler on Snowflake!

```sql
-- Querying JSON
get_json_object(event_msg, '$.user_id')   -- DBX
event_msg['user_id']                      -- Snowflake
```

While Snowflake implicitly casts any extracted JSON value as a string, we made sure to [explicitly cast them](https://docs.snowflake.com/en/user-guide/querying-semistructured.html#explicitly-casting-values) to the appropriate data type using `::` notation:

```sql
-- Casting JSON values
event_msg['user_id']::string as user_id   -- Snowflake
```

If we had JSON data that was in string format, we used `parse_json()` to cast them to the `variant` type, which allows for JSON querying using bracket (or dot) notation. But sometimes Snowflake would throw errors if the JSON blob was bad. Where it made sense we used `try_parse_json()` instead, which allows Snowflake to fail quietly and return NULL instead of throwing an error.

### New Shiny Toys

We like shiny new toys, and Snowflake's list of SQL functions and operators are full of these. Some gems we're calling out here:

* `ilike` is a case insensitive version of `like`. No more `lower(col_name)` in `where` clauses!
* Like the above (see what we did here?), `ilike any` is a case insensitive version of `in`, as in `select * from tbl where col_name ilike any ('a', 'b')`
* `qualify` lets you filter by window functions in the _same_ query. Saves us a CTE! (This, however, fell into refactoring/optimizing territory. So we avoided using that during the migration, but are now using it wherever we can!)
* `group by cube` is really handy for data comparisons, because it [groups by all combinations of `group by`](https://docs.snowflake.com/en/sql-reference/constructs/group-by-cube.html) AND provides subtotal and total rows!
* `try_to_*()` are a suite of [error-handling conversion functions](https://docs.snowflake.com/en/sql-reference/functions-conversion.html#label-try-conversion-functions) which lets you handle casting values as different data types without throwing errors (as long as you know what you are doing, though!).

### Miscellaneous

A few things that didn't fit in any of the above:

* Snowflake's behavior around uppercasing/lowercasing table and column names can be confusing. Where DBX would downcast SQL statements, Snowflake upcasts them. This means `select id from tbl` is interpreted by Snowflake as `SELECT ID FROM TBL`. But quoted names remain in their original case, so `select "id" from tbl` is interpreted as `SELECT "id" FROM TBL` and will not work if `tbl` has column name `ID`. To deal with these, dbt comes with settings to handle quoting in Snowflake [[docs]](https://docs.getdbt.com/reference/project-configs/quoting) [[discourse]](https://discourse.getdbt.com/t/table-field-syntax-best-practices-when-using-snowflake/33). We also needed to consider column names in CSVs used by `dbt seed`. If they are lower-case, they will need to be enclosed in double-quotes when being queried. We instead chose to edit the CSVs and uppercased the column names.
* DBX has the `long` data type, which are for [really long integers](https://spark.apache.org/docs/latest/sql-ref-datatypes.html). This doesn't exist in Snowflake, and we used `bigint` instead.
* Division by zero! In DBX, `select 1/0` returns `NULL`, but in Snowflake, it throws a `Division by zero` error. The Snowflake function [`div0()` will handle these errors](https://docs.snowflake.com/en/sql-reference/functions/div0.html) and return a `0` instead.

### Migration Checklist

Could you tell that we're obsessed with checklists in general? (We're also fans of "The Checklist Manifesto" -- not recommended for reading while on a plane or waiting for surgery!) Here's our checklist we used for every PR that involved migrating a dbt model.

* [ ] Ran all models locally and they built successfully
* [ ] Tested all models locally and they passed
* [ ] If an incremental model, it has been run successfully twice (i.e., once as a full-refresh and once as an incremental build)
* [ ] Done manual data comparisons (count(*), min(col), max(col)) between the DBX & Snowflake version of marts tables. Another method: take a BI aggregation query (e.g. revenue by month), and run it across both systems and compare the results in a spreadsheet or in a Mode report.
* [ ] Removed DBX `{{ config() }}` parameters: `file_format`, `partition_by`
* [ ] Checked that your models are materialized the same way as before (check `dbt_project.yml`)
* [ ] Bonus: If you've learned new DBX-Snowflake migration tips, please contribute to the Snowflake Migration Tips doc!

## Conclusion

Moving our data ingestion and transformation layer from Databricks to Snowflake required the Netlify data team to re-engineer our data ingestion pipelines, rewrite the SQL defining nearly 500 data models, and update dozens of reports and dashboards. We certainly learned a lot during this project, and we hope these lessons will be useful for other data teams undertaking their own data migration. Major thanks and many more props to the Netlify data team: Lauren Adabie, Paige Berry, Fran Lozano, Adam Stone, Tom Nagengast, Laurie Voss, and Emilie Schario, our data team manager!
