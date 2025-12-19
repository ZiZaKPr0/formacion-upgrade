# Guía de Despliegue en Hostinger VPS

## 📋 Requisitos Previos

1. Acceso SSH a tu VPS de Hostinger
2. Nginx instalado (generalmente viene preinstalado)
3. Acceso root o usuario con permisos sudo

## 🚀 Pasos para Desplegar

### Paso 1: Subir los archivos al servidor

Tienes varias opciones:

#### Opción A: Usando SCP (desde tu PC Windows con PowerShell)

```powershell
# OPCIÓN 1: Subcarpeta (recomendado si tienes otros sitios)
# Crea la carpeta primero en el servidor, luego sube los archivos:
scp -r dist/* usuario@IP_DEL_VPS:/var/www/html/formacion-upgrade/

# OPCIÓN 2: Raíz del sitio (si este es tu único sitio)
scp -r dist/* usuario@IP_DEL_VPS:/var/www/html/
```

#### Opción B: Usando FileZilla o WinSCP (GUI)

1. Conecta a tu VPS por SFTP
2. Navega a `/var/www/html/`
3. **Crea una carpeta** (ej: `formacion-upgrade`)
4. Entra en esa carpeta
5. Sube TODO el contenido de la carpeta `dist` (index.html y la carpeta assets)

#### Opción C: Usando Git (recomendado para actualizaciones futuras)

```bash
# En tu VPS
cd /var/www/html
git clone tu-repositorio .
npm install
npm run build
# Luego mueve los archivos de dist a la raíz
```

### Paso 2: Configurar Nginx

Conecta por SSH a tu VPS y edita la configuración de Nginx:

```bash
# Conecta por SSH
ssh usuario@IP_DEL_VPS

# Edita la configuración de Nginx
sudo nano /etc/nginx/sites-available/default
# O si tienes un dominio específico:
sudo nano /etc/nginx/sites-available/tu-dominio.com
```

**Configuración de Nginx - OPCIÓN 1: Subcarpeta (ej: tu-dominio.com/formacion-upgrade)**

```nginx
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;
    
    root /var/www/html;
    index index.html;

    # Acceso desde subcarpeta
    location /formacion-upgrade {
        alias /var/www/html/formacion-upgrade;
        try_files $uri $uri/ /formacion-upgrade/index.html;
        index index.html;
    }

    # Cache para assets
    location /formacion-upgrade/assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compresión gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
}
```

**Configuración de Nginx - OPCIÓN 2: Raíz del sitio (si es tu único sitio)**

```nginx
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;
    
    root /var/www/html/formacion-upgrade;
    index index.html;

    # Configuración para React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache para assets estáticos
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compresión gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
}
```

### Paso 3: Verificar y reiniciar Nginx

```bash
# Verificar que la configuración es correcta
sudo nginx -t

# Si todo está bien, reinicia Nginx
sudo systemctl restart nginx

# Verificar que Nginx está corriendo
sudo systemctl status nginx
```

### Paso 4: Configurar permisos

```bash
# Si usas subcarpeta:
sudo chown -R www-data:www-data /var/www/html/formacion-upgrade
sudo chmod -R 755 /var/www/html/formacion-upgrade

# Si usas raíz del sitio:
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

### Paso 5: Configurar SSL (HTTPS) - Opcional pero recomendado

Si tienes un dominio, puedes usar Let's Encrypt:

```bash
# Instalar Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Obtener certificado SSL
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com

# El certificado se renovará automáticamente
```

## 🔍 Verificación

1. **Si usas subcarpeta:** Abre `http://tu-ip-o-dominio/formacion-upgrade`
2. **Si usas raíz:** Abre `http://tu-ip-o-dominio`
3. Deberías ver tu sitio funcionando
4. Verifica que el carrusel de empresas funciona correctamente

## 🛠️ Solución de Problemas

### Error 403 Forbidden
```bash
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

### Error 404 Not Found
- Verifica que los archivos están en la ruta correcta
- Verifica la configuración de `root` en Nginx
- Asegúrate de que `index.html` existe

### Los assets no cargan
- Verifica que la carpeta `assets` está en la misma ubicación que `index.html`
- Revisa los permisos de los archivos
- Verifica la consola del navegador (F12) para ver errores específicos

## 📝 Notas Importantes

- Tu sitio usa recursos externos (Tailwind CDN, React CDN), asegúrate de que tu servidor tenga acceso a internet
- Si quieres hacer cambios, edita los archivos locales, ejecuta `npm run build` y vuelve a subir la carpeta `dist`
- Considera configurar un dominio personalizado en el panel de Hostinger

