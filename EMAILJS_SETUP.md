# Configuración de EmailJS

## Pasos para configurar EmailJS:

1. **Crear una cuenta en EmailJS**
   - Ve a https://www.emailjs.com/
   - Regístrate gratis (200 emails/mes en el plan gratuito)

2. **Crear un Email Service**
   - En el dashboard, ve a "Email Services"
   - Click en "Add New Service"
   - Selecciona tu proveedor de email (Gmail, Outlook, etc.)
   - Sigue las instrucciones para conectarlo
   - Copia el **Service ID**

3. **Crear un Email Template**
   - Ve a "Email Templates"
   - Click en "Create New Template"
   - Usa este template de ejemplo:

```
Subject: Nuevo mensaje de contacto - Formación Upgrade

De: {{from_name}} ({{from_email}})

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de Formación Upgrade.
```

   - Guarda el template y copia el **Template ID**

4. **Obtener tu Public Key**
   - Ve a "Account" → "General"
   - Copia tu **Public Key**

5. **Configurar en el código**
   - Abre `src/components/ContactForm.tsx`
   - Reemplaza estos valores en las líneas 12-14:
     - `YOUR_SERVICE_ID` → Tu Service ID
     - `YOUR_TEMPLATE_ID` → Tu Template ID  
     - `YOUR_PUBLIC_KEY` → Tu Public Key

Ejemplo:
```typescript
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
const EMAILJS_PUBLIC_KEY = 'abcdefghijklmnop';
```

¡Listo! El formulario debería funcionar y enviar emails a tu cuenta.

