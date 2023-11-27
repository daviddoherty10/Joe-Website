/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "o8lwl0akk70n7r6",
    "created": "2023-11-22 11:17:09.809Z",
    "updated": "2023-11-22 11:17:09.809Z",
    "name": "hero_section",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ibbuadus",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("o8lwl0akk70n7r6");

  return dao.deleteCollection(collection);
})
