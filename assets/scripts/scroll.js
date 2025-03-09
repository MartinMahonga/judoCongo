document.addEventListener("DOMContentLoaded", function () {
   const texts = document.querySelectorAll(".text");

   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add("visible");
               
               // Supprime l'animation après 2 secondes, sauf si on survole
               setTimeout(() => {
                  if (!entry.target.matches(":hover")) { 
                        entry.target.classList.remove("visible");
                        entry.target.classList.add("reset");

                        // Petite pause avant de recommencer
                        setTimeout(() => {
                           entry.target.classList.remove("reset");
                        }, 500);
                  }
               }, 10000);
            }
      });
   }, { threshold: 0.3 });

   // Arrête l'animation au survol
   texts.forEach(text => {
      text.addEventListener("mouseenter", () => {
            text.classList.add("visible");
            text.classList.remove("reset");
      });

      text.addEventListener("mouseleave", () => {
            text.classList.remove("visible");
            text.classList.add("reset");
            
            // Petite pause avant que l'animation puisse recommencer
            setTimeout(() => {
               text.classList.remove("reset");
            }, 5000);
      });

      observer.observe(text);
   });
});