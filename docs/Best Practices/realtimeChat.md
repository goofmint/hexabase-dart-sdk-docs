---
title: Realtime Chat
---

## Getting Started
### Prerequisite
1) nodejs `14.0.0~`

## Installation
1) `git clone git@github.com:b-eee/hxChatt.git`
2) `yarn dev` or `npm i`

## Structure
In this example, we only used 3 files.

1) `pages/index.vue`

2) `pages/index.ts`

3) `plugins/hexabase-sdk.ts`

## Configuration
1) User authentication. currently this is fix value, but will update. this configuration is optional

```typescript
// plugins/hexabase-sdk.ts

Hexabase.initializeApp({
    email: 'j.soliva__33334@b-eee.com',
    password: 'test'
})
```

the class `Hexabase` is the main class for all static and non static objects needed to interact with hexabase. `Hexabase` class also initialize the app connection with session using email, and password using the static function `initializeApp`.

The `initializeApp` is ideal to use for opening connection or on a login page. this function also stores the JWT token to `localStorage`.

2) Getting Channel Items.

```typescript
// pages/index.ts
// https://github.com/b-eee/hxChatt/blob/master/pages/index.ts#L31

let result = await this.items.getItemsAsync({ 
    project_id: 'chat1_test',                       // project display ID
    datastore_id: 'chat1_test_db1',                 // datastore display ID
    per_page: 10, 
    page: 1, 
    use_display_id: true  
})
```

3) Connecting to SSE (Server Sent Events). 

```typescript
    // pages/index.ts
    // https://github.com/b-eee/hxChatt/blob/master/pages/index.ts#L50

    async InitChanOnClck(e: any)
    {
        // items.getItemHistories fetch item histories(アイテム一覧)
        // 
        // public async getItemHistories(datastoreID: string, itemID: string): Promise<ItemHistories>
        this.messages = await this.items.getItemHistories(`chat1`, e.key);

        // sse.addEventListener function that adds eventListener to SSE instance, and parse the message from string to object
        // this function also has a callback that can be used to process the message.
        // the message in this instance unshift the `History` interface to `messages.histories` to display to the UI.
        //
        // public addEventListener(eventName: string, callback: any)
        this.sse.addEventListener(`item_view_${e.key}_${this.currentUser.u_id}`, (e: any) =>
        {
            this.messages.histories.unshift({               // item histories(アイテム一覧)
                history: {                                  // message to push to the list
                    username: e.message.username,
                    comment: e.message.comment
                } as History2
            } as ItemMsgHistory);
        })
    }
```