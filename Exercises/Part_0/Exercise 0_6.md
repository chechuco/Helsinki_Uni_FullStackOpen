# Exercise 0.6

```POST - SPA
sequenceDiagram 
    participant browser
    participant server

    browser:         Add new note to json "notes"
    browser:         Delete previous element (list) "notes"
    browser:         Redraw element (list) "notes"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    browser-->>server: [{ "content": "New content", "date": "New date" }]
    deactivate server
```