# Use full command 

npx @angular/cli@20 new AngularCV ==> Generate new project with version
npx ng build --configuration production ==> Build project to deployement

# Use full link 
htaccess generator : https://julianpoemp.github.io/ngx-htaccess-generator/#/generator

# HTACCESS FILE : 
# Generated with ngx-htaccess-generator v1.2.4
# Check for updates: https://julianpoemp.github.io/ngx-htaccess-generator/

<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Redirection of requests to index.html
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
  RewriteRule ^.*$ - [NC,L]
  # Redirect all non-file routes to index.html
  RewriteRule ^(?!.*\.).*$ index.html [NC,L]
</IfModule>


# AngularCV

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
