---
title: "Configurar AWS S3 para Laravel Storage"
date: "2019-08-14T20:33:45-05:00"
description: Este es un paso a paso para configurar Laravel storage desde la versión 5, para usar el driver de AWS S3.
disqus: false
tags: ['aws', 'devops', 'laravel']
image: './joshua-coleman-ZVkDLrXGMdw-unsplash.jpg'
---

Este es un paso a paso para configurar Laravel storage desde la versión 5, para usar el driver de AWS S3.

Antes de empezar se necesita tener una cuenta en AWS, asi que arrancaremos desde allí hasta configurar el driver

1. Lo primero que debemos hacer es acceder a la [consola AWS](https://console.aws.amazon.com/). Si ya tienes una cuenta, puedes iniciar sesión, si no, debes hacer click en **Crear una cuenta de AWS**, llenar paso a paso el formulario, deberás tener una tarjeta de crédito y una cuenta de correo electrónico.
![consola_aws](./media/consola_aws.png)
Hasta cierto punto (bajo consumo) AWS S3 puede ser prácticamente gratis, pero lo mejor será que ingreses en la zona de facturación (billing) y agregues una tarjeta de crédito. Respecto al cálculo del costo, como es por consumo, eso puede llevar a otro [tutorial](http://www.maestrosdelweb.com/por-que-utilizar-s3-el-sistema-de-almacenamiento-de-amazon/).

2. **Crear un Bucket** después de haber iniciado sesión tendremos un dashboard (como el que se incluyen en la imágen de abajo), podemos rápidamente usar la buscador de servicios (barra de búsqueda) con la palabra **S3** o navegando en el panel.
![crear bucket s3 paso 2](./media/create-bucket-s3.png)
Una vez dentro del servicio de **AWS S3** vamos a crear un **bucket**, es un contenedor de objectos, en el que podemos almacenar de todo. Para nuestro caso serán archivos y los administraremos con nuestro servicio de Laravel.
Podemos tener buckets públicos, privados y con permisos de acceso. También un bucket privado y algún objeto público

3. ![crear bucket s3 paso 3](./media/aws-s3-create-bucket-3.png)

4. ![crear bucket s3 paso 4](./media/aws-s3-create-bucket-3-1.png)

5. ![crear bucket s3 paso 5](./media/aws-s3-create-bucket-4.png)

6. ![crear bucket s3 paso 6](./media/aws-s3-create-bucket-5.png)
Para este caso desactivaremos el bloquear todo acceso público, esto significa que los archivos serán públicos.

7. ![crear bucket s3 paso 7](./media/aws-s3-create-bucket-6.png)

8. ![crear bucket s3 paso 8](./media/aws-s3-create-bucket-7.png)

9. **Crear un usuario en IAM** en la página de la consola de AWS, seleccionamos el servicio **IAM** podemos buscarlos en la barra de búsqueda.
![crear bucket s3 paso 9](./media/aws-iam-1.png)

10. En la barra lateral izquierda, seleccionamos «Usuarios» y en la página de usuarios Hacemos clic en «Agregar usuario»
![agregar usuario](./media/IAM-aws-1.png)

11. Seleccionamos el tipo de acceso mediante programación solamente, solo queremos que este usuario pueda acceder de forma programática.
![crear bucket s3 paso 10](./media/IAM-aws-2.png)

12. Para este ejemplo estableceremos políticas de full acceso solamente para el servicio de S3. Las políticas de acceso se pueden hacer muy personalizadas para mantener la integridad y seguridad independiente para cada servicio.
![select user](./media/IAM-aws-3.png)

13. Este paso es opcional, podemos saltarnos esta parte, continuar nuestro proceso y aws se encargará por nosotros.
![crear bucket s3 paso 11](./media/IAM-aws-4.png)

14. Con esto ya estaríamos listos para finalizar el proceso.
![crear bucket s3 paso 12](./media/IAM-aws-5.png)

15. Descargar nuestras **nuevas credenciales**![](./media/IAM-aws-6.png)

16. **Finalmente** ya podemos usar el driver de S3 para Laravel 5 con el bucket y las credenciales que creamos, solo debemos colocar estos valores en nuestro archivo de entorno (.env) de nuestro proyecto en Laravel:
![crear bucket s3 paso 13](./media/laravel-env-aws-credentials.png)
Si quieres saber cómo configurar Laravel para empezar a usar el driver de S3 lo mejor es revisar la propia [documentación](https://laravel.com/docs/5.8/filesystem#driver-prerequisites).

Como bonus:

Probablemente no tengas alojado tu proyecto Laravel dentro de AWS y requieres habilitar CORS. Para esto deberás ingresar los siguientes valores en tu bucket:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""><?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
</CORSRule>
</CORSConfiguration>
```
![editando cors en s3 bucket](./media/s3-cors-editing.png)
