# Guía de Despliegue en VPS

Esta guía explica cómo desplegar el proyecto en tu VPS después de migrar Tailwind CSS a instalación local.

## Cambios Realizados

✅ **Tailwind CSS migrado de CDN a instalación local**
- Antes: Carga desde `cdn.tailwindcss.com` (~3-4MB sin optimizar)
- Ahora: Bundle optimizado local (~33KB sin comprimir, ~6KB gzip)
- Mejor rendimiento y SEO
- Sin dependencias externas

## Pasos para Desplegar en tu VPS

### 1. Preparación Local

Primero, asegúrate de tener todos los cambios en git:

```bash
git add .
git commit -m "Migrar Tailwind CSS de CDN a instalación local"
git push
```

### 2. Conectar a tu VPS

```bash
ssh usuario@tu-vps-ip
```

### 3. Navegar al Directorio del Proyecto

```bash
cd /ruta/a/tu/proyecto  # Reemplaza con la ruta real de tu proyecto
```

### 4. Actualizar el Código

```bash
git pull origin main  # o la rama que uses (master, main, etc.)
```

### 5. Instalar/Actualizar Dependencias

```bash
npm install
```

Esto instalará las nuevas dependencias:
- `tailwindcss@^3.4.0`
- `postcss`
- `autoprefixer`

### 6. Construir el Proyecto para Producción

```bash
npm run build
```

Esto generará la carpeta `dist/` con los archivos optimizados.

### 7. Verificar el Build

Revisa que la carpeta `dist/` se haya generado correctamente:

```bash
ls -la dist/
```

Deberías ver:
- `index.html`
- `assets/` (con CSS y JS optimizados)

**Importante**: El CSS generado (`dist/assets/index-*.css`) ahora incluye solo las clases de Tailwind que realmente usas, optimizado y minificado.

### 8. Configurar tu Servidor Web

Dependiendo de cómo tengas configurado tu servidor:

#### Opción A: Nginx (Recomendado)

```nginx
server {
    listen 80;
    server_name formacionupgrade.com;
    root /ruta/a/tu/proyecto/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache para assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Opción B: Apache

```apache
<VirtualHost *:80>
    ServerName formacionupgrade.com
    DocumentRoot /ruta/a/tu/proyecto/dist

    <Directory /ruta/a/tu/proyecto/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # Rewrite para SPA
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</VirtualHost>
```

#### Opción C: Node.js (PM2, etc.)

Si usas un servidor Node.js:

```bash
npm install -g serve
serve -s dist -l 3000
```

O con PM2:

```bash
npm install -g pm2
pm2 serve dist 3000 --spa --name "formacion-upgrade"
```

### 9. Reiniciar el Servidor

```bash
# Para Nginx
sudo systemctl restart nginx

# Para Apache
sudo systemctl restart apache2

# Para PM2
pm2 restart formacion-upgrade
```

### 10. Verificar el Despliegue

1. Visita tu sitio web en el navegador
2. Abre las DevTools (F12)
3. Ve a la pestaña "Network"
4. Recarga la página (Ctrl+R)
5. Busca el archivo CSS y verifica:
   - ✅ Debe estar en tu dominio (no en `cdn.tailwindcss.com`)
   - ✅ Tamaño optimizado (~6-33KB según compresión)
   - ✅ Carga rápida

## Mejoras de Rendimiento Esperadas

Después de esta migración, deberías ver:

1. **Tiempo de carga reducido**: El CSS ahora es ~100x más pequeño
2. **Mejor PageSpeed Score**: Sin dependencias externas
3. **Mejor SEO**: Contenido servido desde tu propio dominio
4. **Mayor confiabilidad**: No depende de servicios externos

## Verificación Post-Despliegue

### Test de Lighthouse

Ejecuta un test de Lighthouse y verifica que:
- Performance Score mejore
- No haya recursos bloqueantes externos
- El CSS esté optimizado

### Test Manual

```bash
# Desde tu VPS, verifica que no haya referencias al CDN
grep -r "cdn.tailwindcss.com" dist/
# No debería devolver nada
```

## Solución de Problemas

### El CSS no se carga

1. Verifica que `npm run build` se ejecutó correctamente
2. Revisa que `dist/assets/index-*.css` existe
3. Comprueba los permisos del archivo: `chmod 644 dist/assets/index-*.css`

### Estilos no aplicados

1. Asegúrate de que `src/index.css` tenga las directivas `@tailwind`
2. Verifica que `tailwind.config.js` tenga la configuración correcta
3. Revisa que los archivos estén en `content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]`

### Build falla

1. Verifica Node.js version: `node --version` (debe ser >= 16)
2. Limpia cache: `rm -rf node_modules package-lock.json && npm install`
3. Revisa logs: `npm run build` mostrará errores detallados

## Comandos Útiles

```bash
# Desarrollo local (con hot-reload)
npm run dev

# Build de producción
npm run build

# Preview del build local
npm run preview

# Limpiar build anterior
rm -rf dist/

# Ver tamaño de los archivos generados
du -sh dist/
du -sh dist/assets/
```

## Mantenimiento Futuro

Cada vez que actualices el código:

1. `git pull` en el VPS
2. `npm install` (si hay nuevas dependencias)
3. `npm run build`
4. Reiniciar servidor web si es necesario

## Notas Importantes

- ⚠️ **No necesitas** configurar nada especial para Tailwind en el VPS
- ✅ El CSS se genera automáticamente durante `npm run build`
- ✅ Todos los estilos están incluidos en el bundle final
- ✅ No hay dependencias externas en tiempo de ejecución
- ✅ El tamaño del CSS es mucho menor que con el CDN

## Comparación Tamaños

| Método | Tamaño Original | Tamaño Gzip | Notas |
|--------|----------------|-------------|-------|
| CDN (anterior) | ~3-4 MB | ~1-1.5 MB | Sin optimización |
| Local (actual) | ~33 KB | ~6 KB | Solo clases usadas |

🎉 **Reducción del ~99% en el tamaño del CSS**
