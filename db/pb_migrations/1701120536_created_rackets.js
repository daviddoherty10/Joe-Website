/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2wlpy3g7quah758",
    "created": "2023-11-27 21:28:56.000Z",
    "updated": "2023-11-27 21:28:56.000Z",
    "name": "rackets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2fbhv1xq",
        "name": "message",
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
  const collection = dao.findCollectionByNameOrId("2wlpy3g7quah758");

  return dao.deleteCollection(collection);
})
