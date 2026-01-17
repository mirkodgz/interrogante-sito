import os

# Define exact binary content to avoid any tool-induced formatting issues
# Using 2 spaces for indentation and simple string mapping
content = """---
title: "Segunda Edición|A PIEDI NUDI"
subtitle: "Segunda Edición del Concierto Espectáculo “PIES DESCALZOS: SUELOS, PUEBLOS Y SUS CONEXIONES”"
edition: "II Edición"
date: 2022-05-15
cover: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768525158/2daEdizioneApiediNudi_sobbb8.jpg"
location: "Milán, Italia"
description: "Un canto de agradecimiento a la Madre Tierra reuniendo artistas de diferentes culturas."
videoUrl: "https://www.youtube.com/watch?v=jH46cRgrKNk"
press:
  - title: "TCG News"
    image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768525245/TCGnews-a-p-n-2_rprff6.jpg"
    url: "https://www.tcgnews.it/2023/05/al-mudec-di-milano-la-2-edizione-del-festival-a-piedi-nudi-educazione-arte-e-cultura/"
  - title: "SempioneNews"
    image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768525247/SempioneNews_qdlwim.jpg"
    url: "https://www.sempionenews.it/cultura/festival-a-piedi-nudi-educazione-arte-e-cultura-al-mudec/"
  - title: "ZERO"
    image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768525246/Zero-Eu-a-p-n-2_ovivhq.jpg"
    url: "https://zero.eu/it/eventi/277101-a-piedi-nudi-parade,milano/"
gallery:
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768525422/A-Piedi-Nudi-1-Gallery_k9qy6n.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768525421/gallery-2_sy8z7u.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768525419/A-Piedi-Nudi-3-Gallery_ke6fb9.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768525417/A-Piedi-Nudi-4-Gallery_yqaahl.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768525414/A-Piedi-Nudi-5-Gallery_s1bsio.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768525415/A-Piedi-Nudi-6-Gallery_bihevn.jpg"
---

**Tema 2023: Residencia artística de formación interdisciplinaria en español**

**La segunda edición del festival “A Piedi Nudi” este año se dedicará a la enseñanza del arte en lengua española. “Educación, Arte y Cultura”, nombre específico de este encuentro, tiene como objetivo crear una performance artística con y para los jóvenes de la ciudad de Milán. El evento se desarrollará en formato de laboratorio escénico: un día de intenso trabajo creativo donde los estudiantes, guiados por artistas y profesores nativos de español, podrán combinar diferentes técnicas del movimiento surrealista con los nuevos métodos contemporáneos de interdisciplinariedad y multiculturalismo.**

**Objetivos**

**A través de la experiencia física y emocional que genera la creación artística, se busca que el estudiante entre en contacto con su propio cuerpo, con el espacio en el que se mueve e interactúa, y con los demás. De esta forma, el acercamiento a la lengua española y a la cultura hispánica se convierte en una herramienta para aproximarse a otras culturas, fomentar la convivencia pacífica e impulsar una interacción positiva.**
"""

file_path = r'd:/interrogante-sitoweb/src/content/festival/segunda-edicion-a-piedi-nudi.mdoc'
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
