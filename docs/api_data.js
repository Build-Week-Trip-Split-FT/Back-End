define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Authorize user",
    "name": "LoginUser",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username for the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password for the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n username: \"BarryAllen27\",\n password: \"nightmonkey\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Object containing an authorization token for the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful-Response:",
          "content": "HTTP/1.1 200 OK\n{\n token: \"1925uijh384325214jsafjiaj2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/auth/auth-router.ts",
    "groupTitle": "Authorization"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Register new user",
    "name": "RegisterUser",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username for the User, unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password for the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n username: \"BarryAllen27\",\n password: \"nightmonkey\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the new User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/auth/auth-router.ts",
    "groupTitle": "Authorization"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "D__Programming_Lambda_School_Back_End_docs_main_js",
    "groupTitle": "D__Programming_Lambda_School_Back_End_docs_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/:username/trips",
    "title": "Add trip for the User",
    "name": "CreateTrip",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's unique username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "destination",
            "description": "<p>Trip's destination or name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Trip's date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>Whether the Trip is active or not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n destination: \"Paris\",\n date: \"2019-09-02\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the created Trip.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/users/user-router.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/:username",
    "title": "Request user information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's unique username.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Profile photo location of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "trips",
            "description": "<p>List of trips created by the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trips.id",
            "description": "<p>ID of the Trip.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trips.destination",
            "description": "<p>Destination or name for the Trip.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trips.date",
            "description": "<p>Date of the Trip.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "trips.active",
            "description": "<p>Whether the Trip it active or inactive.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trips.num_people",
            "description": "<p>The number of people associated with the Trip.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful-Response:",
          "content": "HTTP/1.1 200 OK\n{\n id: 1,\n username: BarryAllen27\n photo: null,\n trips: [\n   {\n     id: 1,\n     destination: \"Paris\",\n     date: null,\n     active: true,\n     num_people: 4\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/users/user-router.ts",
    "groupTitle": "User"
  }
] });
