/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "99rng2r9mjdmb6m",
    "created": "2023-11-27 21:27:38.613Z",
    "updated": "2023-11-27 21:27:38.613Z",
    "name": "forum",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fhkjhrm4",
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
  const collection = dao.findCollectionByNameOrId("99rng2r9mjdmb6m");

  return dao.deleteCollection(collection);
})
