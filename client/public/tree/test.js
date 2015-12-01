var test = {
  "name": "root",
  "children": [
    {
      "name": "src",
      "children":[
        {
          "name": "client",
          "children":[
            {
              "name": "css",
              "children": [
                {"name": "main.css"},
                {"name": "test.css"}
              ]
            },
            {
              "name": "js",
              "children": [
                {"name": "main.js"},
                {"name": "test.js"}
              ]
            }
          ]
        },
        {
          "name": "server",
          "children":[
            {
              "name": "bin",
              "children":[
                {"name": "www"}
              ]
            },
            {
              "name": "routes",
              "children": [
                {"name": "index.js"}
              ]
            },
            {
              "name": "views",
              "children": [
                {"name": "index.html"},
                {"name": "error.html"},
                {"name": "layout.html"}
              ]
            },
            {"name": "app.js"}
          ]
        }
      ]
    },
    {"name": ".gitignore"},
    {"name": "package.json"},
    {"name": "gulpfile.js"}
  ]
};
