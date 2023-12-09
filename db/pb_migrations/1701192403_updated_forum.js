/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("99rng2r9mjdmb6m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xdcqeyoi",
    "name": "username",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("99rng2r9mjdmb6m")

  // remove
  collection.schema.removeField("xdcqeyoi")

  return dao.saveCollection(collection)
})
