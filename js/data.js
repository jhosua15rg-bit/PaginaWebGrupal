// ============================================
// DATOS DEL SITIO WEB - IESTP HUANTA
// ============================================

const SITE_DATA = {
  // Información general
  info: {
    nombre: "IESTP Huanta",
    nombreCompleto: "Instituto de Educación Superior Público \"Huanta\"",
    telefono: "(066) 322296",
    telefonoLink: "+5166322296",
    direccion: "Jr. Córdova N° 650",
    distrito: "Huanta",
    provincia: "Huamanga",
    departamento: "Ayacucho",
    pais: "Perú",
    email: "contactos@iestphuanta.edu.pe",
    emailInformes: "informes@iestphuanta.edu.pe",
    horario: "Lun - Vie: 7:30 am - 1:15 pm",
    facebook: "https://www.facebook.com/profile.php?id=61557665334329",
    aniosExperiencia: 39,
    institutoLicenciado: true
  },

  // Navegación principal
  navegacion: [
    {
      titulo: "Nosotros",
      url: "#nosotros",
      submenu: [
        { titulo: "Presentación", url: "pages/nosotros.html" },
        { titulo: "Visión, Misión y Valores", url: "pages/nosotros.html#valores" },
        { titulo: "Organización Institucional", url: "pages/nosotros.html#organizacion" },
        { titulo: "Plana Jerárquica", url: "pages/nosotros.html#plana-jerarquica" },
        { titulo: "Plana Docente", url: "pages/nosotros.html#plana-docente" },
        { titulo: "Local", url: "pages/nosotros.html#local" }
      ]
    },
    {
      titulo: "Programas de Estudio",
      url: "#carreras",
      submenu: [
        { titulo: "Diseño y Programación Web", url: "pages/carreras.html#web" },
        { titulo: "Enfermería Técnica", url: "pages/carreras.html#enfermeria" },
        { titulo: "Mecatrónica Automotriz", url: "pages/carreras.html#mecatronica" },
        { titulo: "Industrias de Alimentos y Bebidas", url: "pages/carreras.html#alimentos" },
        { titulo: "Producción Agropecuaria", url: "pages/carreras.html#agropecuaria" }
      ]
    },
    {
      titulo: "Admisión y Matrícula",
      url: "pages/admision.html",
      submenu: [
        { titulo: "Admisión 2026", url: "pages/admision.html" },
        { titulo: "Matrícula", url: "pages/matricula.html" },
        { titulo: "Becas y Créditos", url: "pages/becas.html" }
      ]
    },
    {
      titulo: "Transparencia",
      url: "pages/transparencia.html",
      submenu: [
        { titulo: "Documentos de Gestión", url: "pages/transparencia.html#documentos" },
        { titulo: "Estadísticas", url: "pages/transparencia.html#estadisticas" },
        { titulo: "Inversiones y Recursos", url: "pages/transparencia.html#inversiones" },
        { titulo: "Libro de Reclamaciones", url: "pages/transparencia.html#reclamaciones" },
        { titulo: "Licenciamiento", url: "pages/transparencia.html#licenciamiento" }
      ]
    },
    {
      titulo: "Trámite",
      url: "pages/tramites.html",
      submenu: [
        { titulo: "TUPA", url: "pages/tramites.html#tupa" }
      ]
    },
    {
      titulo: "Contáctanos",
      url: "#contacto"
    },
    {
      titulo: "Servicios",
      url: "#servicios",
      submenu: [
        { titulo: "Biblioteca", url: "pages/servicios.html#biblioteca" },
        { titulo: "Servicios Complementarios", url: "pages/servicios.html#complementarios" },
        { titulo: "Bolsa Laboral", url: "pages/servicios.html#bolsa" }
      ]
    }
  ],

  // Hero
  hero: {
    titulo: "Construye tu futuro con formación de calidad",
    descripcion: "El Instituto de Educación Superior Público Huanta se enorgullece de ser un instituto licenciado, lo que garantiza que nuestros programas académicos cumplen con los más altos estándares de calidad establecidos por las autoridades educativas.",
    imagenFondo: "assets/hero-graduado.jpg",
    imagenSecundaria: "assets/presentacion-instituto.jpg"
  },

  // Estadísticas
  estadisticas: [
    { numero: "1000", sufijo: "+", etiqueta: "Egresados" },
    { numero: "50", sufijo: "+", etiqueta: "Docentes Especializados" },
    { numero: "5", sufijo: "", etiqueta: "Programas de Estudio" },
    { numero: "3", sufijo: " años", etiqueta: "Formación Técnica" }
  ],

  // Carreras / Programas de estudio
  carreras: [
    {
      id: "web",
      nombre: "Diseño y Programación Web",
      descripcion: "Desarrollo de aplicaciones web modernas con tecnologías actuales. Aprende a crear sitios web dinámicos, responsivos y optimizados para el usuario.",
      icono: "💻",
      imagen: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      duracion: "3 años",
      modalidad: "Presencial",
      titulo: "Profesional Técnico en Diseño y Programación Web"
    },
    {
      id: "enfermeria",
      nombre: "Enfermería Técnica",
      descripcion: "Formación integral para el sector salud con prácticas clínicas. Cuidado del paciente, promoción de la salud y prevención de enfermedades.",
      icono: "🏥",
      imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      duracion: "3 años",
      modalidad: "Presencial",
      titulo: "Profesional Técnico en Enfermería Técnica"
    },
    {
      id: "mecatronica",
      nombre: "Mecatrónica Automotriz",
      descripcion: "Especialización en sistemas automotrices y mecatrónica. Diagnóstico, mantenimiento y reparación de vehículos con tecnología avanzada.",
      icono: "🔧",
      imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
      duracion: "3 años",
      modalidad: "Presencial",
      titulo: "Profesional Técnico en Mecatrónica Automotriz"
    },
    {
      id: "alimentos",
      nombre: "Industrias de Alimentos y Bebidas",
      descripcion: "Procesamiento, control de calidad y gestión de alimentos. Tecnología de alimentos, inocuidad y desarrollo de nuevos productos.",
      icono: "🍎",
      imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
      duracion: "3 años",
      modalidad: "Presencial",
      titulo: "Profesional Técnico en Industrias de Alimentos y Bebidas"
    },
    {
      id: "agropecuaria",
      nombre: "Producción Agropecuaria",
      descripcion: "Gestión de producción agrícola y pecuaria sostenible. Técnicas modernas de cultivo, crianza y manejo de recursos naturales.",
      icono: "🌾",
      imagen: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      duracion: "3 años",
      modalidad: "Presencial",
      titulo: "Profesional Técnico en Producción Agropecuaria"
    }
  ],

  // Servicios
  servicios: [
    {
      id: "laboratorios",
      titulo: "Laboratorios",
      descripcion: "Debidamente equipados y de última generación donde los estudiantes realizan trabajos de experimentación en los diferentes programas de estudios.",
      icono: "🔬",
      imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      detalles: [
        "Laboratorio Diseño y Programación",
        "Laboratorio de Enfermería Técnica",
        "Laboratorio de Mecánica Automotriz",
        "Laboratorio de Industrias Alimentarias",
        "Laboratorio de Producción Agropecuaria"
      ]
    },
    {
      id: "biblioteca",
      titulo: "Biblioteca",
      descripcion: "Se encuentra remodelada ofreciendo un ambiente apropiado, de tal manera que el estudiante se sienta en un ambiente cómodo y confortable.",
      icono: "📚",
      imagen: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      detalles: [
        "Diseño y Programación Web",
        "Enfermería Técnica",
        "Mecatrónica Automotriz",
        "Industrias Alimentarias",
        "Producción Agropecuaria"
      ]
    },
    {
      id: "red-telematica",
      titulo: "Red Telemática",
      descripcion: "Debidamente equipados de última generación, con servicios de internet, video y teleconferencias, retroproyector interconectados.",
      icono: "💻",
      imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      detalles: [
        "Uso amplio e intensivo de las TIC",
        "Equipos de última generación",
        "Actividades centrado en el alumno",
        "Aprendizaje guiado por un especialista",
        "Aprendizaje Dinámico"
      ]
    }
  ],

  // Misión, Visión y Valores
  misionVision: [
    {
      tipo: "Misión",
      titulo: "Formar para transformar",
      descripcion: "Formar profesionales técnicos con competencias de calidad, innovación, emprendimiento y compromiso con el desarrollo de la sociedad.",
      imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    },
    {
      tipo: "Visión",
      titulo: "Excelencia que inspira",
      descripcion: "Al 2030, somos un IES que lidera en la formación integral de profesionales competitivos, innovadores, fomentamos el emprendimiento, la calidad en nuestros productos y servicios, con sentido de cuidado del medio ambiente y que aportan al desarrollo económico de la región.",
      imagen: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
    },
    {
      tipo: "Valores",
      titulo: "Crecer con integridad",
      descripcion: "Promovemos respeto, responsabilidad, innovación, colaboración y servicio a nuestra comunidad.",
      imagen: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
      lista: ["Innovación", "Excelencia", "Compromiso Institucional", "Puntualidad"]
    }
  ],

  // Eventos / Acontecimientos
  eventos: [
    {
      titulo: "Aniversario Institucional",
      descripcion: "Actividades conmemorativas del instituto. Celebración de nuestros años formando profesionales técnicos.",
      imagen: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      fecha: "Por anunciar",
      categoria: "Celebración"
    },
    {
      titulo: "Feria Tecnológica",
      descripcion: "Participación de estudiantes con proyectos innovadores. Demostración de competencias tecnológicas.",
      imagen: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      fecha: "Por anunciar",
      categoria: "Innovación"
    },
    {
      titulo: "Concurso de Innovación",
      descripcion: "Presentación de proyectos tecnológicos desarrollados por nuestros estudiantes.",
      imagen: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=800&q=80",
      fecha: "Por anunciar",
      categoria: "Creatividad"
    }
  ],

  // Testimonios
  testimonios: [
    {
      nombre: "Efrael Villanueva",
      cargo: "Egresado - Diseño y Programación Web",
      texto: "El Instituto Huanta me brindó una formación práctica y sólida. Gracias a los laboratorios bien equipados, obtuve un excelente empleo en una empresa de tecnología.",
      imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      nombre: "Ever Sanchez",
      cargo: "Egresado - Mecatrónica Automotriz",
      texto: "Estudiar en el Instituto Huanta me preparó para el mundo laboral. La formación integral y el apoyo de los profesores fueron clave para conseguir mi trabajo en una multinacional.",
      imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      nombre: "Zaida Perez",
      cargo: "Estudiante - Enfermería Técnica",
      texto: "Las prácticas en campo y los proyectos de investigación en el Instituto Huanta me están preparando muy bien para los desafíos del sector informático.",
      imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      nombre: "Bruno Perez",
      cargo: "Estudiante - Producción Agropecuaria",
      texto: "Estudiar en el Instituto Huanta ha sido una experiencia increíble. Los laboratorios están muy bien equipados, y los profesores siempre están dispuestos a ayudarnos a entender los temas más complejos.",
      imagen: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    }
  ],

  // Noticias
  noticias: [
    {
      titulo: "Inicio de Matrículas 2026",
      descripcion: "Matrículas abiertas para el nuevo periodo académico. Conoce los requisitos y fechas límite para asegurar tu vacante.",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      fecha: "15 Sep 2026",
      categoria: "Admisión"
    },
    {
      titulo: "Feria Tecnológica Anual",
      descripcion: "Participación de estudiantes con proyectos innovadores en la feria tecnológica anual del instituto.",
      imagen: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      fecha: "10 Sep 2026",
      categoria: "Innovación"
    },
    {
      titulo: "Nuevo Laboratorio de Mecatrónica",
      descripcion: "Inauguración del nuevo laboratorio de mecatrónica automotriz con equipos de última generación.",
      imagen: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80",
      fecha: "5 Sep 2026",
      categoria: "Infraestructura"
    }
  ],

  // Enlaces de interés
  enlacesInteres: [
    {
      titulo: "MINEDU",
      url: "https://www.gob.pe/minedu",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80"
    },
    {
      titulo: "TITULA",
      url: "https://titula.minedu.gob.pe/",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80"
    },
    {
      titulo: "REGISTA",
      url: "https://registra.minedu.gob.pe/",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80"
    },
    {
      titulo: "AVANZA",
      url: "https://avanza.minedu.gob.pe/",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // Galería
  galeria: [
    {
      titulo: "Aprendizaje práctico",
      descripcion: "Estudiantes trabajando en laboratorio",
      imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Comunidad que inspira",
      descripcion: "Vida estudiantil en el campus",
      imagen: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Talento en acción",
      descripcion: "Proyectos y actividades académicas",
      imagen: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}
