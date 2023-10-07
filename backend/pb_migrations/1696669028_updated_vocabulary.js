/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vjgkho5pht331vb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pjxding0",
    "name": "Priority",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vjgkho5pht331vb")

  // remove
  collection.schema.removeField("pjxding0")

  return dao.saveCollection(collection)
})
