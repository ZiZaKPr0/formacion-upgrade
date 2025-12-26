# Guía para Crear la Imagen OG (Open Graph)

## 📐 Especificaciones Técnicas

- **Dimensiones:** 1200 x 630 píxeles
- **Formato:** JPG o PNG
- **Tamaño máximo:** 5MB (recomendado: menos de 300KB)
- **Ratio:** 1.91:1 (horizontal)

## 🎨 Herramientas Recomendadas

### Opción 1: Canva (Recomendado - Gratis)
1. Ve a: https://www.canva.com
2. Busca "Facebook Post" o crea diseño personalizado 1200x630px
3. Añade:
   - Logo de Formación Upgrade
   - Texto: "Formación Upgrade - Academia Premium"
   - Colores de tu marca (naranja #f97316)
   - Puedes incluir una imagen de fondo relacionada con educación
4. Descarga como JPG

### Opción 2: Figma (Gratis)
1. Ve a: https://www.figma.com
2. Crea un nuevo Frame de 1200x630px
3. Diseña tu imagen con:
   - Logo y marca
   - Texto principal
   - Colores de marca
4. Exporta como PNG o JPG

### Opción 3: Photoshop / GIMP
1. Crea nuevo documento: 1200x630px
2. Diseña tu imagen
3. Exporta como JPG optimizado

### Opción 4: Herramientas Online Especializadas
- **OG Image Generator:** https://www.opengraph.xyz/
- **Favicon & App Icon Generator:** https://realfavicongenerator.net/

## 📝 Contenido Recomendado para la Imagen

### Elementos que debería incluir:
1. **Logo de Formación Upgrade** (esquina superior izquierda o centro)
2. **Texto principal:** 
   - "Formación Upgrade"
   - "Academia Premium de Formación Online"
   - O un mensaje corto y atractivo
3. **Colores de marca:**
   - Naranja (#f97316) como color principal
   - Fondo claro (blanco o gris claro)
4. **Imagen de fondo (opcional):**
   - Algo relacionado con educación/tecnología
   - Abstracto con gradientes de tu marca

### Ejemplo de diseño:
```
┌─────────────────────────────────────────┐
│ [Logo UP]  Formación Upgrade            │
│                                         │
│     Academia Premium                    │
│     Formación Online                    │
│                                         │
│ [Imagen decorativa o gradiente naranja] │
└─────────────────────────────────────────┘
```

## ✅ Después de Crear la Imagen

1. **Guarda la imagen como:** `og-image.jpg` o `og-image.png`
2. **Colócala en:** `public/og-image.jpg`
3. **Verifica el tamaño:** Idealmente menos de 300KB
4. **Prueba la imagen:**
   - Usa: https://www.opengraph.xyz/ para previsualizar
   - O usa las herramientas de validación de Facebook/Twitter

## 🔗 Verificación

Una vez subida la imagen, verifica que:
- ✅ La URL `https://formacionupgrade.com/og-image.jpg` es accesible
- ✅ La imagen se muestra correctamente en Facebook Debugger: https://developers.facebook.com/tools/debug/
- ✅ La imagen se muestra correctamente en Twitter Card Validator: https://cards-dev.twitter.com/validator

## 📌 Nota

Si tu sitio ya está desplegado y subes la imagen después, deberás:
1. Limpiar la caché de Facebook/Twitter usando sus herramientas de debug
2. Esperar unos minutos para que se actualice

