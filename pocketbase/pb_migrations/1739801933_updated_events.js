/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1687431684")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file1779456299",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/webp",
      "image/avif"
    ],
    "name": "imgUrl",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [
      "1024x1024",
      "1024x680"
    ],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1687431684")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file1779456299",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "imgUrl",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
