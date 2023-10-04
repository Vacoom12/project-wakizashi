/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vjgkho5pht331vb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "znxrgk7i",
    "name": "pronounce",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nvta2q1a",
    "name": "img",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vjgkho5pht331vb")

  // remove
  collection.schema.removeField("znxrgk7i")

  // remove
  collection.schema.removeField("nvta2q1a")

  return dao.saveCollection(collection)
})
