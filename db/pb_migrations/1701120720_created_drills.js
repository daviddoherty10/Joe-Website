/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g3jv4shr1jj9jaw",
    "created": "2023-11-27 21:32:00.855Z",
    "updated": "2023-11-27 21:32:00.855Z",
    "name": "drills",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jexymear",
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
  const collection = dao.findCollectionByNameOrId("g3jv4shr1jj9jaw");

  return dao.deleteCollection(collection);
})
