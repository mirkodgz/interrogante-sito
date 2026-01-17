import os

# Contenido exacto deseado con la URL de imagen correcta para MINCIO
content = """---
title: "Tercera Edición|A PIEDI NUDI"
subtitle: "Tercera Edición : A PIEDI NUDI \\"Avatares sociales\\""
edition: "III Edición"
date: 2024-05-15
cover: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768616439/Terza-Edizione-Gallery-6_swh8at.webp"
location: "Milán, Italia"
description: "A PIEDI NUDI es un festival multicultural, artístico y formativo en colaboración con el Instituto Cervantes de Milán."
videoUrl: "https://www.youtube.com/watch?v=Mbls9CDu--I"
quote: "LA TERZA EDIZIONE DEL FESTIVAL MULTICULTURALE, ARTISTICO E FORMATIVO IN LINGUA SPAGNOLA CHE PROMUOVE LO SVILUPPO EMOTIVO ATTRAVERSO IL TESSUTO DELL'ESPERIENZA ARTISTICA SARÀ DEDICATA AL TEMA DEGLI AVATAR SOCIALI E DELLA COSTRUZIONE DELL'IDENTITÀ NELL'ERA DELLA COMUNICAZIONE DIGITALE"
press:
  - title: "TCG NEWS"
    image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768618207/3eraedizione-1ma-new-1024x558_freqxj.jpg"
    url: "https://www.tcgnews.it/2024/04/el-festival-a-piedi-nudi-llega-a-su-tercera-edicion-en-milan/"
  - title: "EXIBART"
    image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768525158/2daEdizioneApiediNudi_sobbb8.jpg"
    url: "https://www.exibart.com/progetti-e-iniziative/a-piedi-nudi-il-festival-multiculturale-alla-fabbrica-del-vapore-di-milano/"
  - title: "SALUZZO"
    image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768618329/apn3-img3-cover-new-1024x767_baxqio.png"
    url: "https://www.saluzzo-plana.edu.it/pagine/festival-a-piedi-nudi-2024"
  - title: "MINCIOEDINTORNI"
    image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768616439/Terza-Edizione-Gallery-6_swh8at.webp"
    url: "https://mincioedintorni.com/2024/05/22/si-e-conclusa-con-successo-la-terza-edizione-del-festival-a-piedi-nudi-ecco-tutti-i-premiati/"
gallery:
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768618934/Terza-Edizione-Gallery-7_1_hgbqii.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768618934/Terza-Edizione-Gallery-5_1_uc7o6e.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768618934/Terza-Edizione-Gallery-4_zak7uv.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768618934/Terza-Edizione-Gallery-2_gigo45.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768618934/Terza-Edizione-Gallery-3_1_bgqlcy.jpg"
---

A PIEDI NUDI es un festival multicultural, artístico y formativo en colaboración con el Instituto Cervantes de Milán, que celebra la cultura latinoamericana y la creación artística en lengua española.

Inspirado en la idea de que solo descalzos conectamos plenamente con nuestra esencia, el festival es el resultado de un año de talleres artísticos al interno de las aulas del instituto Cervantes de Milán.

En esta tercera edición, el tema central son los “Avatares Sociales” o sea, la construcción de la identidad en la era digital, explorando cómo los jóvenes enfrentan el desafío de la autenticidad en el mundo virtual.

El festival cuenta con la participación de tres institutos de la región lombarda y tiene carácter de competencia, otorgando el Premio A PIEDI NUDI a las mejores creaciones.

Un aspecto que distingue esta edición es además la participación de tres coaches que guiarán, junto al profesor de español de cada instituto, la producción artística. Los mismos entran a representar tres países diferentes de Latinoamérica: Ecuador, Venezuela y Chile, lo cual enriquece el ámbito multicultural de esta edición.
"""

path = 'd:/interrogante-sitoweb/src/content/festival/tercera-edicion-a-piedi-nudi.mdoc'
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print(f"File updated at {path}")
