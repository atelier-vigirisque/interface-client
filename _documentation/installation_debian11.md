### Production (Debian 11)

Installer Node.JS :
```
curl -sL https://deb.nodesource.com/setup_18.x | bash -
apt install nodejs
```

Installer Angular CLI :
```
npm install -g @angular/cli
```

Installer Apache :
```
apt install -y apache2
```

Cloner le projet
```
cd /var/www
git clone https://github.com/atelier-vigirisque/interface-client.git
```

Compiler le projet Angular :
```
cd /var/www/interface-client
npm install
npm run build
```

Préparer la configuration :
```
cp src/assets/environments/environment.example.json src/assets/environments/environment.json
```

Modifier le fichier `environment.json` pour y indiquer l'URL de l'API.

Configurer Apache :
```
nano /etc/apache2/sites-available/interface-client.conf
```

```
<VirtualHost *:80>
    # Saisir le nom de domaine voulu
    ServerName interface-client.local
    DocumentRoot /var/www/interface-client/dist/interface-client
</VirtualHost>
```

Activer le site :
```
a2ensite interface-client
```

Redémarrer Apache :
```
systemctl restart apache2
```
