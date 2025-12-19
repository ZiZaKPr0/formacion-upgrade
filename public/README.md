# Carpeta Public

Esta carpeta contiene archivos estáticos que se sirven directamente sin procesamiento.

## Estructura recomendada:

- `images/` - Imágenes que se referencian con rutas absolutas
- `favicon.ico` - Favicon del sitio
- `robots.txt` - Archivo robots.txt

## Uso en componentes:

```tsx
function Component() {
  return (
    <img src="/images/logo.png" alt="Logo" />
  );
}
```

## Ventajas:
- ✅ Rutas simples y directas
- ✅ Útil para assets que no cambian frecuentemente
- ✅ Accesibles desde cualquier parte de la aplicación

## Nota:
Los archivos en `public/` se copian tal cual al build, sin optimización automática.

