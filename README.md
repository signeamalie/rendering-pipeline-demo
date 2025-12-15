**Fordybelsesspor 2 - Rendering Pipeline Demo**

__ 


Denne demo visualiserer forskellen mellem en reflow-baseret animation og en GPU-optimeret compositing-animation.
Den bygger direkte videre på den teoretiske forståelse fra Fordybelsesspor 1 rapporten om browserens rendering pipeline.


***Kan tilgås på: https://rendering-pipeline-demo.signejensen.dk***


**Oversigt over mappeindhold**
- index.html - struktur og UI
- css/css.css - styling + performance-kommentarer
- js/js.js - logik til at trigge animationerne

**Hvorfor denne demo?**

Formålet er at vise, hvordan et simpelt CSS-valg (width vs. transform) kan ændre, om browseren udfører en tung CPU-reflow eller en let GPU-compositing-animation.