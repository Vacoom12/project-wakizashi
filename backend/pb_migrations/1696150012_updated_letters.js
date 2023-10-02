/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0osk40ogp6nzns")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a5csy9iy",
    "name": "katakana",
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
    "id": "1hlybo3c",
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
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kbufaq3f",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0osk40ogp6nzns")

  // remove
  collection.schema.removeField("a5csy9iy")

  // remove
  collection.schema.removeField("1hlybo3c")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
