# Carpeta Assets

Esta carpeta contiene recursos estáticos que se importan directamente en los componentes.

## Estructura recomendada:

- `images/` - Imágenes que se importan en componentes
- `icons/` - Iconos SVG personalizados
- `fonts/` - Fuentes personalizadas (si las hay)

## Uso en componentes:

```tsx
import logo from '@/assets/images/logo.png';
import heroImage from '@/assets/images/hero.jpg';

function Component() {
  return (
    <img src={logo} alt="Logo" />
  );
}
```

## Ventajas:
- ✅ Vite optimiza automáticamente las imágenes
- ✅ Tree-shaking (solo se incluyen imágenes usadas)
- ✅ Mejor para TypeScript
- ✅ Permite usar alias `@/assets`

