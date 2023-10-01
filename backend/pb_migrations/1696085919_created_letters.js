/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i0osk40ogp6nzns",
    "created": "2023-09-30 14:58:39.791Z",
    "updated": "2023-09-30 14:58:39.791Z",
    "name": "letters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gcmwt8hm",
        "name": "hiragana",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kbufaq3f",
        "name": "translate",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i0osk40ogp6nzns");

  return dao.deleteCollection(collection);
})
