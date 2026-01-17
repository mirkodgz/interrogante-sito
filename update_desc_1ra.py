import os

content = """---
title: "Primera Edición|A PIEDI NUDI"
subtitle: "Primera Edición del Concierto Espectáculo “PIES DESCALZOS: SUELOS, PUEBLOS Y SUS CONEXIONES”"
edition: "I Edición"
date: 2022-05-15
cover: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768521937/fotoportada-1era-edicion-apiedinudi_iqzzwr.jpg"
location: "Milán, Italia"
description: "Un canto de agradecimiento a la Madre Tierra reuniendo artistas de diferentes culturas."
videoUrl: "https://www.youtube.com/watch?v=mUn7pO-G3Eo"
quote: "Vogliamo favorire l’armonia con la natura e la terra, un legame antico e necesario como quello tra l’uomo, i popoli e le loro tradizioni da leggere in un unico cuadro"
press:
  - title: "TCG News"
    image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768521902/TCGNews-ParlanodiNoi_xogftg.jpg"
    url: "https://www.tcgnews.it/2022/05/prima-edizione-dello-spettacolo-concerto-a-piedi-nudi-suoli-popoli-e-le-loro-connessioni/"
  - title: "ConquistaLatino"
    image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768521976/ConquistaLatinoParlanoDiNoi_rdt9zu.jpg"
    url: "https://www.conquistalatino.it/a-piedi-nudi-la-nueva-puesta-artistica-latinoamericana-en-milano"
  - title: "EXPRESOLATINO"
    image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768521989/ExpresoLatinoParlanodiNoi_dmqhgp.jpg"
    url: "https://expresolatino.net/cultural/historia/prima-edizione-dello-spettacolo-concerto-a-piedi-nudi-suoli-popoli-e-le-loro-connessioni/"
gallery:
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768522358/Photo1Concerto2_s3cniv.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768522356/Photo1Concert7_sinmxo.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768522356/Photo1Concert6_bo5kij.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768522357/Photo1Concert5_w7clfe.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768522358/Photo1Concert4_h7oj5f.jpg"
  - "https://res.cloudinary.com/dskliu1ig/image/upload/v1768522360/Photo1Concert3_lfov4j.jpg"
---

Primera Edición del Concierto Espectáculo “PIES DESCALZOS: SUELOS, PUEBLOS Y SUS CONEXIONES”. El evento, concebido y organizado por la Asociación Interrogante Spettacolo, cuenta con el patrocinio del Municipio 3 de la Municipalidad de Milán, el Consulado General de la República Dominicana en Milán, el Grupo Consular de América Latina y el Caribe en el Norte de Italia y el Instituto Cervantes de Milán. La iniciativa tiene como objetivo crear un canto de agradecimiento a la “Madre Tierra” reuniendo en un mismo escenario a artistas de diferentes culturas y nacionalidades. Una representación que cuenta el vínculo entre Milán y los diferentes pueblos del mundo. Un gesto solidario de participación colectiva por el bienestar, el respeto y la paz.

**Finalidad**

El evento tiene como objetivo motivar futuras actividades y dinámicas artísticas que materialicen los conceptos de inclusión, interacción, innovación, diversidad y contaminación creativa entre las diferentes voces culturales que convergen en Milán.

El objetivo es promover y mejorar las expresiones y tradiciones de una comunidad multicultural a través de la participación y las relaciones de trabajo entre instituciones y asociaciones en el área de Milán.
"""

file_path = r'd:/interrogante-sitoweb/src/content/festival/primera-edicion-a-piedi-nudi.mdoc'
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
