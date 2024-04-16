# Moment 3

## Om webbplatsen
Denna koden visar hur ett projekt kan se ut i Angular. Webbplatsen erbjuder en tjänst där besökaren kan omvandla Meter till Fot (och vice verca, samt Celsius till Fahrenheit (och vice verca). Momentet gick ut på att skapa en omvandlare med ramverket Angular. Eftersom att Angular är byggt på Typescript, så är lösningen skriven i Typescript för omvandlingen. 

## Lösning på uppgiften
**Komponenter:** Webbplatsen innehåller totalt 6 komponenter. Varje komponent har sin egna uppgift i webbplatsen. Om man delar upp komponenterna så är 4 komponenter till för undersidor och de andra två för navigation och footer. De 4 undersidorna är Startsida, Konvertering, Om uppgiften samt Not Found. Startsidan erbjuder en enkel välkomsttext. Konverteringskomponenten erbjuder koden för konverteringsverktyget. Om uppgiften-komponenten erbjuder lite text om uppgiften. Not found innehåller en enkel 404 text som varnar besökaren för att det inte gick att hitta sidan. 

**Konvertering:** Konverteringen är byggd på undersidans komponent. Genom att använda ngmodel och databinding har jag på så sätt kunnat skriva ut och hämta data för besökaren. Databindingen gör att vid ändring så uppdateras interfacet för besökaren med det nya konverteringsvärdet. Jag valde att använda automatisk uppdatering av webbplatsen när man skriver i inputfälten. 

**Navigering & footer:** Navigeringen är en egen komponent i projektet och är självgående. Genom att länka in navigeringen i `app.component.html` filen skapas då en navigationsmeny på alla undersidor. Detsamma gäller även för footern. Genom att göra detta får man god struktur på sitt projekt och kan enkelt ändra huvudinnehållet på webbplatsen. Navigeringen är uppbyggd med routerModulen. Denna modul gör att besökaren skickas vidare till de olika undersidorna beroende på vilken länk besökaren klickar på genom routeModulen. Jag valde även att använda routerLinkActive för att visa aktuell undersida besökaren befinner sig på, vilket är ett smidigt sätt.  

**Styling / SCSS:** Jag valde att använda SCSS för att styla webbplatsen. 

**Bild:** Genom att använda IMG-taggen kunde jag infoga en bild till webbplatsen. Jag skapade en mapp i `assets` mappen där jag valde att lägga min bild. 

Nedanför finner du den engelska versionen på hur man använder projektet, skapat av Angular. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
