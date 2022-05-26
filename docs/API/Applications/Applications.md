---
title: Hexabase.Applications
---

### <mark>Applications</mark>
Applications further lists down all essential groups of data stores available for use to use in managing data.


In `Application` will have functions:
```bash
getProjectsAndDatastores() // get applications and datastores list
create() // create a application
getReports() // get reports in project
```


### - getProjectsAndDatastores()

> get all user workspace applications and datastores list

```ts
  /**
   * get workspace applications and datastores list
   * @param  {string} workspaceId
   * @returns Promise
   */
  public async getProjectsAndDatastores(workspaceId: string): Promise<AppAndDsRes>
```

> Successful response Schema

```json
  {
    "appAndDs" : [
      {
        "application_id": "string",
        "name": "string",
        "display_id": "string",
        "datastores": [
          {
            "datastore_id": "string",
            "did": "string",
            "display_id": "string",
            "name": "string"
          },
          ....
        ]
      }
    ],
  "error": undefined
}
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token});


    const [appDs, setAppDs] = useState([] as [ApplicationAndDataStore]);

    async function getAppAndDs(wId) {
      const {appAndDs, error} = await hexabase.applications.getProjectsAndDatastores(wId);
      return appAndDs;
    }

    useEffect(() =>
    {
      const workspaceId = '12345678';
      const appAndDs = getAppAndDs(workspaceId);
      return;
    }, []); 
```

### - create()

```ts
  /**
   * create application in current workspace
   * @param  {CreateProjectPl} createProjectParams
   * @returns Promise
   */
  public async create(createProjectParams: CreateProjectPl): Promise<CreateAppRes>
```

> Successful response Schema

```json
  {
    "app" : {
      "project_id": "string"
    },
    "error": undefined
  }
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const [appCreated, setAppCreated] = useState({} as CreateApp);
    const hexabase = await createClient({ url: baseUrl, token: user.token});

    async function createApplication(createProjectParams) {
      const { app, error } = await hexabase.applications.create(createProjectParams);
      return app;
    }

    useEffect(() =>
    {
      const paramNewPj: CreateProjectPl = {
        tp_id: '798798798',
        name: {
          en: 'EN Project',
          ja: 'JA Project',
        }
      };
      const app = createApplication(paramNewPj);
      if(app) {
        setAppCreated(app)
      }
      return;
    }, []); 
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
      if(reports) {
        setReportsProject(reports)
      }
      return;
    }, []); 
```

### - getDataReport()

```ts
/**
* function getDataReport: get data report by report id in project
* @params projectId, reportId, reportDataPayload
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
          "19548cc5-f49b-4758-abb8-4aa985895d82": "Female",
          "54e62c95-2d72-4bc8-8cb3-44aa32a92524": "Sheilah",
          "782e18ba-6ea5-4586-8c74-cc3bd3e43f04": "2",
          "8d42da06-899c-42ae-8314-44bcae94c951": "sleheude1@creativecommons.org",
          "eb03642b-94a0-4b2f-a806-de91e94d3f01": "210.78.208.110",
          "f8120af7-2018-4656-af6c-a311ef4ee736": "Leheude"
        },
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

    async function getReportData(projectId: string, reportId: string, reportDataPayload: ReportDataPayload) {
      const { dataReport, error } = await hexabase.applications.getDataReport(projectId, reportId, reportDataPayload);
      return dataReport;
    }

    useEffect(() =>
    {
      const projectId = "projectId";
      const reportId = "reportId";
      const reportDataPayload = {
        "per_page": null,
        "page": null,
        "include_date_at": null,
        "include_lookups": null,
        "include_item_ref": null,
        "return_number_value": null,
        "return_id_value_results": null,
        "return_count_only": null,
        "return_utc_datetime": null,
        "omit_total_items": null,
        "total_count_timeout_sec": null,
        "data_result_timeout_sec": null,
        "debug_query": null
      }
      const dataReport = getReportData(projectId, reportId, reportDataPayload);
      if(dataReport) {
        setReportDt(dataReport)
      }
      return;
    }, []); 
```
