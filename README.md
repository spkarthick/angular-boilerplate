# angular-boilerplate
Simple boilerplate for component based angular applications.

### Folder structure
```
root
|
|---components (contains all the commponents in the application)
    |
    |---view1
        |
        |---view1.js (contains module declaration and route details for the component)
        |---view1.controller.js (contains controller declaration)
        |---view1.service.js (contains service declaration)
        |---view1.component.js (contains component declaration)
        |---view1.html (contains template for the component)
        |---view1.css (contains styles for the component)
|---generator (contains template from which components are created by gulp)
    |
    |---name
        |
        |---name.js
        |---name.controller.js
        |---name.service.js
        |---name.component.js
        |---name.html
        |---name.css
|---app.js (contains root module declaration)
|---app.css (contains common styles for the application)
|---index.html (layout page for the application)
|---bower.json (configuration for loading bower components)
|---package.json (configuration for loading npm components)
|---gulpfile.js (configuration for gulp tasks)
```

### Creating new Component
To create new component run the component command with name parameter as shown below.

```
gulp component --name "componentname"
```
