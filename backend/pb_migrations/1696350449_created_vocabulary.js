/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vjgkho5pht331vb",
    "created": "2023-10-03 16:27:29.705Z",
    "updated": "2023-10-03 16:27:29.705Z",
    "name": "vocabulary",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kddvky55",
        "name": "word",
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
        "id": "7tja7xf8",
        "name": "THtranslate",
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
        "id": "sadas8ud",
        "name": "ENGtranslate",
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
  const collection = dao.findCollectionByNameOrId("vjgkho5pht331vb");

  return dao.deleteCollection(collection);
})
