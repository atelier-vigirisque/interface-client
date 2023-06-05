# Atelier Vigirisque / Interface Client

Front-end Angular de l'applicatif Atelier vigirisque.

Affiche les stations provenant de l'API sur une carte.

Pré requis
- Node.JS / NPM LTS
- Angular CLI

## Configuration

Installer Angular CLI :
```
npm install -g @angular/cli
```

Dupliquer le fichier de configuration exemple et configurer l'URL de l'API :
```
cp src/assets/environments/environment.example.json src/assets/environments/environment.json
```

Installer les dépendances :
```
npm install
```

### Développement

En développement :
```
npm run start
```


### Production
```
npm run build
```

Configurer un serveur HTTP pour servir le dossier `dist/interface-client` généré par Angular.
