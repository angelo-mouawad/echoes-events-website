# Echoes Events

Website for Echoes Events, an event planning and production company based in Beirut, Lebanon. They handle weddings, corporate galas, concerts and destination celebrations.

Built as a plain static site. No framework, no build step, no npm install. Clone it and open `index.html`.

## Stack

Plain HTML, CSS and JavaScript, plus two small PHP scripts that handle the form submissions. Montserrat is self hosted in `fonts/` rather than pulled from Google Fonts.

## Structure

```
index.html      one page site, all sections
job.html        job application form
style.css       all styling
script.js       home page behaviour
job.js          job page behaviour
contact.php     handles the "plan your event" form
job.php         handles the job application form
images/         photos, logo, icons
videos/         hero and showreel background video
fonts/          Montserrat woff and woff2
```

## Sections

The home page scrolls through six sections, each with its own anchor: `#home`, `#moments`, `#about`, `#showreel`, `#services` and `#conatct-us`. The dot navigation down the right hand side jumps between them and highlights whichever one you are looking at.

## Credits

Design and build by [Angelo Mouawad](https://www.linkedin.com/in/angelo-mouawad-02089329a).
