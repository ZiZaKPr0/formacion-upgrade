# Ejemplo de uso de imágenes

## Opción 1: Importar desde `src/assets/images/` (Recomendado)

```tsx
// En tu componente
import heroImage from '@/assets/images/hero.jpg';
import logo from '@/assets/images/logo.png';

function MyComponent() {
  return (
    <div>
      <img src={heroImage} alt="Hero" />
      <img src={logo} alt="Logo" />
    </div>
  );
}
```

**Ventajas:**
- Vite optimiza automáticamente las imágenes
- Mejor rendimiento
- TypeScript puede verificar que la imagen existe

## Opción 2: Usar desde `public/images/`

```tsx
// En tu componente
function MyComponent() {
  return (
    <div>
      <img src="/images/hero.jpg" alt="Hero" />
      <img src="/images/logo.png" alt="Logo" />
    </div>
  );
}
```

**Ventajas:**
- Rutas simples
- Útil para imágenes grandes que no cambian

## Recomendación

Usa `src/assets/images/` para la mayoría de imágenes del proyecto.
Usa `public/images/` solo para imágenes muy grandes o que necesites referenciar desde HTML estático.

