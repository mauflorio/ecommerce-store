# Tech E-commerce Fullstack Application

&#x20;

## Descripción

Proyecto de e-commerce tecnológico que ofrece:

* Registro e inicio de sesión de usuarios con validación de correo electrónico y recuperación de contraseña.
* Catálogo de productos con filtros avanzados (categoría, precio, marca, especificaciones).
* Carrito de compras con gestión de cantidades y eliminación de ítems.
* Pasarela de pago integrada (Stripe / PayPal).
* Área de administración para CRUD de productos.

## Tabla de Contenidos

* [Características](#caracter%C3%ADsticas)
* [Tecnologías](#tecnolog%C3%ADas)
* [Instalación](#instalaci%C3%B3n)
* [Configuración](#configuraci%C3%B3n)
* [Ejecución](#ejecuci%C3%B3n)
* [Estructura del Proyecto](#estructura-del-proyecto)
* [Diagrama UML y ER](#diagrama-uml-y-er)
* [Planificación SCRUM](#planificaci%C3%B3n-scrum)
* [Testing](#testing)
* [Despliegue](#despliegue)
* [Contribución](#contribuci%C3%B3n)
* [Licencia](#licencia)
* [Contacto](#contacto)

## Características

* **Registro/Login**: autenticación JWT y recuperación de contraseña.
* **Catálogo**: búsqueda y filtrado de productos por múltiples criterios.
* **Carrito**: añadir, actualizar cantidades y eliminar productos.
* **Pago**: integración con Stripe / PayPal.
* **Perfil de Usuario**: historial de pedidos y detalles.
* **Admin**: panel para crear, editar y eliminar productos.

## Tecnologías

* **Frontend**: React, Next.js, Tailwind CSS
* **Backend**: Node.js, Express
* **Base de Datos**: PostgreSQL
* **Autenticación**: JWT / OAuth2
* **Pagos**: Stripe / PayPal
* **Testing**: Jest, Supertest, Cypress
* **Contenedores**: Docker, Docker Compose
* **CI/CD**: GitHub Actions

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/mauflorio/tech-ecommerce.git
   cd tech-ecommerce
   ```
2. Instala dependencias:

   ```bash
   yarn install  # o npm install
   ```

## Configuración

Crea un archivo `.env` en la raíz con las siguientes variables:

```env
DATABASE_URL=postgres://user:password@localhost:5432/tech_ecommerce
JWT_SECRET=tu_clave_secreta
STRIPE_SECRET_KEY=sk_test_...
PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...
```

## Ejecución

* Iniciar servicios con Docker Compose:

  ```bash
  docker-compose up -d
  ```
* Ejecutar en modo desarrollo:

  ```bash
  yarn dev  # Frontend
  cd api && yarn dev  # Backend
  ```

## Estructura del Proyecto

```
├── api/                # Backend (Node.js + Express)
├── web/                # Frontend (Next.js)
├── docker-compose.yml  # Definición de contenedores
├── .github/workflows/  # Pipelines de CI/CD
└── docs/               # Diagramas UML, ER y manual de usuario
```

## Diagrama UML y ER

Los diagramas de casos de uso, clases, secuencia y entidad-relación están disponibles en la carpeta `docs/diagrams/`.

## Planificación SCRUM

* Tablero en JIRA: [Enlace al proyecto](https://tuempresa.atlassian.net/projects/TEC)
* Sprints de 2 semanas con backlog y criterios de aceptación definidos en `/docs/scrum/`.

## Testing

* **Unitarios**: `yarn test` en cada paquete.
* **Integración / E2E**: `yarn test:e2e`.

## Despliegue

* Configura las variables de producción en tu entorno.
* Ejecuta:

  ```bash
  docker-compose -f docker-compose.prod.yml up -d --build
  ```

## Contribución

1. Haz un fork del proyecto.
2. Crea una rama de feature: `git checkout -b feature/nueva-funcionalidad`.
3. Haz commit de tus cambios: `git commit -m 'Añade nueva funcionalidad'`.
4. Envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE.md) para más detalles.

## Contacto

Mauro Florio — `mau.florio@gmail.com`
GitHub: [mauflorio](https://github.com/mauflorio)
