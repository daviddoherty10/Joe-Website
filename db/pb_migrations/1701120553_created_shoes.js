/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "30hqdwrwesysc4q",
    "created": "2023-11-27 21:29:13.063Z",
    "updated": "2023-11-27 21:29:13.063Z",
    "name": "shoes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "smwoasyw",
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
  const collection = dao.findCollectionByNameOrId("30hqdwrwesysc4q");

  return dao.deleteCollection(collection);
})
