# api-playground
Legeplads til api kald i NodeJS


## Forudsætninger
  1. NodeJS er installeret
  2. Grundlæggende forståelse for Javascript

## Initialiser projektet
Starter med at køre `npm init` i roden af vores projekt mappe.

Denne kommando stiller en række spørgsmål som bruges til at genererer en package.json fil, som indeholder informationer om den app vi er ved at lave.

Eksempel på `package.json` fil:
```json
{
  "name": "api-playground",
  "version": "1.0.0",
  "description": "Legeplads til api kald",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": ""
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/datahubi/api-playground.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/datahubi/api-playground/issues"
  },
  "homepage": "https://github.com/datahubi/api-playground#readme"
}
```
Denne fil vil "vokse" efterhånden som vi bygger vores app. Der vil f.eks. komme feltet `"dependencies"` som fortæller hvilke andre pakker vores app er afhængig af.

## Teknologier
Her er en liste med de frameworks og teknologier som vores projekt indeholder.

  - NodeJS (selvfølgelig duh): Et programmerings miljø til Javascript apps.
  - Express.js: Framework til at lave webservere i NodeJS
  - Axios: Library til at implementere en `fetch()` lignende funktionalitet i NodeJS, til asynkrone API kald.
  - Nodemon: Udvikler værktøj til at genstarte vores app hver gang vi ændre en fil.


## Installation af dependencies
Det er de færreste som ønsker at opfinde den dybe tallerken selv, hver gang. Så vi gør selvfølgelig brug af allerede eksisterende pakker/projekter. Det har den fordel at vi ikke skal sætte os ind i alt ting selv og de folk som laver vores dependencies sørger (som regel) for at opdatere og vedligeholde dem.

Kør kommandoen `npm install -S axios express` i terminalen.

Dette vil tilføje axios og express til `"dependencies"` feltet i vores `package.json` og downloade pakkerne til mappen `node_modules`.

## Installations af devDependencies
Devdependencies er ligesom normale dependencies, men de er kun brugt under udvikling. Her er et godt sted at installere nodemon pakken.

Kør kommandoen `npm install --save-dev nodemon` i terminalen.

Vores `package.json` fil har nu også fået feltet `"devDependencies"` hvor nodemon bor.


## HUSK AT LAVE EN .gitignore FIL!
Når først vi er begyndt at installere pakker/dependencies til vores projekt og vi har fået mappen `node_modules` er det meget vigtigt at ekskludere `node_modules` i en `.gitignore` fil. I skrivende stund har jeg over 1000 filer i denne mappe efter installation og dem er jeg absolut ikke interesseret i at commit'e til github.

Eksempel på `.gitignore` fil:
```
  node_modules
```

Meget simpelt, men effektivt! Nu har jeg kun 5 filer at commit'e.

## Happy coding!
Vi er nu klar til at starte med at kode!

![Control all the things!!](https://i.chzbgr.com/full/5173597184/hCCC034CF/code-all-the-things)




