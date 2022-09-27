---
title: Hexabase.DataReport
---

### <mark>DataReport</mark>


In `DataReport` will have functions:
```bash
getReports() // get reports in project
getDataReport() // get data of report
```

### - getReports()

```ts
  /**
   * get reports in project
   * @param  {string} projectId
   * @returns Promise
   */
  public async getReports(projectId: string): Promise<GetReportsRes>
```

> Successful response Schema

```json
  {
    "reports" : [
      {
      "rp_id": "rp_id",
      "title": "title",
      "display_order": 1,
      "hide_menu": true,
      },
      ...
    ]
    "error": undefined
  }
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const [reportsProject, setReportsProject] = useState({} as [ReportListItem]);

    const hexabase = await createClient({ url: baseUrl, token: user.token});

    async function getReportsProject(projectId: string) {
      const { reports, error } = await hexabase.applications.getReports(projectId);
      return reports;
    }

    useEffect(() =>
    {
      const projectId = "projectId";
      const reports = getReportsProject(projectId);
      if(reports && reports.length > 0) {
        setReportsProject(reports)
      }
      return;
    }, []); 
```

### - getDataReport()

```ts
/**
* function getDataReport: get data report by report id in project
* @params {string} projectId, {string} reportId, {ReportDataPayload} reportDataPayload or none
* @returns ReportDataRes
*/
public async getDataReport(projectId: string, reportId: string, reportDataPayload?: ReportDataPayload): Promise<ReportDataRes> 
```

> Successful response Schema

```json
  {
    "dataReport" :
      {
      "errors": null,
      "error": "",
      "report_title": "Report1",
      "totalItems": 21,
      "item_index_from": 0,
      "item_index_to": 20,
      "merge_cells": null,
      "report_results": [
        {
          "1983747a-119d-42f8-9070-fea451126cbb": "Dungdeptrai",
          "i_id": "62a2a46c1701d2fab0a83baa",
          "rev_no": 1
        },
        ...
      ],
      "report_fields": [
        {
          "title": "id",
          "rpf_id": "782e18ba-6ea5-4586-8c74-cc3bd3e43f04",
          "display_type": "",
          "data_type": "status",
          "display_id": "782e18ba-6ea5-4586-8c74-cc3bd3e43f04",
          "align": "",
          "width": 0,
          "negative_sign_type": null,
          "num_format": null,
          "num_info": {
            "no_comma": false,
            "suffix": "",
            "prefix": ""
          },
          "conditions": null,
          "f_id": "27b03c69-fb79-4112-a889-6f22284a0dc4",
          "d_id": "6281fd59989773ffe4504354",
          "merge_cells": false,
          "hide": false,
          "disable_search": false,
          "use_integrated_report": false,
          "is_cross_key": false
        },
        ...
      ]
      },
    "error": undefined
  }
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const [reportDt, setReportDt] = useState({} as ReportDefaultData);

    const hexabase = await createClient({ url: baseUrl, token: user.token});

    async function getReportData(projectId: string, reportId: string, reportDataPayload?: ReportDataPayload) {
      const { dataReport, error } = await hexabase.applications.getDataReport(projectId, reportId, reportDataPayload);
      return dataReport;
    }

    useEffect(() =>
    {
      const projectId = "projectId";
      const reportId = "reportId";
      const reportDataPayload = {
        "per_page": number,
        "page": number,
        "include_date_at": boolean,
        "include_lookups": boolean,
        "include_item_ref": boolean,
        "return_number_value": boolean,
        "return_id_value_results": boolean,
        "return_count_only": boolean,
        "return_utc_datetime": boolean,
        "omit_total_items": boolean,
        "total_count_timeout_sec": number,
        "data_result_timeout_sec": number,
        "debug_query": boolean
      } // or none
      const dataReport = getReportData(projectId, reportId, reportDataPayload);
      if(dataReport) {
        setReportDt(dataReport)
      }
      return;
    }, []); 
```