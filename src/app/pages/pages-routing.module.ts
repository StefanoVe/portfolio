import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './containers/about/about.component';
import { ContactComponent } from './containers/contact/contact.component';
import { ExperienceComponent } from './containers/experience/experience.component';
import { LandingComponent } from './containers/landing/landing.component';
import { SkillsComponent } from './containers/skills/skills.component';
import { ToolsComponent } from './containers/tools/tools.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent,
    data: {
      title_en: 'Home',
      title_it: 'Home',
      description_en:
        'As a web developer, I specialize in creating fast, user-friendly, and visually appealing websites. My portfolio showcases my skills in HTML, CSS, JavaScript, Angular, and other technologies, Whether you need a simple landing page or a complex web application, I can help bring your ideas to life. Visit my portfolio to learn more and see my latest work.',
      description_it:
        'Come sviluppatore web, mi specializzo nella creazione di siti web veloci, facili da usare e piacevoli da guardare. Il mio portfolio mostra le mie competenze in HTML, CSS, JavaScript, Angular e altre tecnologie. Se hai bisogno di una semplice pagina di destinazione o di un complesso applicazione web, posso aiutarti a realizzare le tue idee. Visita il mio portfolio per saperne di più e vedere il mio ultimo lavoro.',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title_en: 'About',
      title_it: 'Su di me',
      description_en:
        "I'm a passionate web developer with experience in HTML, CSS, JavaScript, Angular, and other technologies. I love creating beautiful, functional, and user-friendly websites that help businesses and individuals achieve their goals online. My 'About Me' page provides more information about my background, skills, and experience, as well as my approach to web development. Whether you're a small business owner looking to establish an online presence or a large corporation in need of a complex web application, I'm here to help. Visit my 'About Me' page to learn more about me and my work.",
      description_it:
        "Sono uno sviluppatore web appassionato con esperienza in HTML, CSS, JavaScript, Angular e altre tecnologie. Amo creare siti web belli, funzionali e facili da usare che aiutano le aziende e le persone a raggiungere i loro obiettivi online. La mia pagina 'Su di me' fornisce ulteriori informazioni sul mio background, le mie competenze e l'esperienza, oltre al mio approccio allo sviluppo web. Se sei un piccolo imprenditore che cerca di stabilire una presenza online o una grande azienda che ha bisogno di un'applicazione web complessa, sono qui per aiutarti. Visita la mia pagina 'Su di me' per saperne di più su di me e sul mio lavoro.",
    },
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: {
      title_en: 'Experience',
      title_it: 'Esperienza',
      description_en:
        'Discover my experience as a web developer working on a range of projects using HTML, CSS, JavaScript, Angular, and other technologies. Learn about my approach to web development and how I can help you achieve your online goals.',
      description_it:
        'Scopri la mia esperienza come sviluppatore web che lavora su una serie di progetti utilizzando HTML, CSS, JavaScript, Angular e altre tecnologie. Scopri il mio approccio allo sviluppo web e come posso aiutarti a raggiungere i tuoi obiettivi online.',
    },
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: {
      title_en: 'Skills',
      title_it: 'Abilità',
      description_en:
        'Discover my web development skills and expertise in HTML, CSS, JavaScript, Angular, and other technologies. Explore examples of my work and learn how I can help with your front-end, back-end, or full-stack development needs.',
      description_it:
        "Scopri le mie abilità di sviluppo web e l'esperienza in HTML, CSS, JavaScript, Angular e altre tecnologie. Esplora esempi del mio lavoro e scopri come posso aiutarti con le tue esigenze di sviluppo front-end, back-end o full-stack.",
    },
  },
  {
    path: 'tools',
    component: ToolsComponent,
    data: {
      title_en: 'Tools',
      title_it: 'Strumenti',
      description_en:
        "Discover the web development tools I'm most familiar with, including HTML, CSS, JavaScript, Angular, and more. Explore my comprehensive list of tools and learn how I can help you create a beautiful, functional, and user-friendly website or web application.",
      description_it:
        "Scopri gli strumenti di sviluppo web con cui sono più familiare, tra cui HTML, CSS, JavaScript, Angular e altro ancora. Esplora la mia lista completa di strumenti e scopri come posso aiutarti a creare un sito web o un'applicazione web bello, funzionale e facile da usare.",
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title_en: 'Contact',
      title_it: 'Contattami',
      description_en: 'This is the contact page',
      description_it: 'Questa è la pagina di contatto',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
