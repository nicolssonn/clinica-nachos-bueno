import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Calendar, Instagram, Facebook, 
  ChevronRight, Star, CheckCircle2, MapPin, 
  Clock, Mail, ArrowRight, ShieldCheck, Sparkles,
  Stethoscope, HeartPulse
} from 'lucide-react';
import { Service, TeamMember, Testimonial } from './types';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-brand-700' : 'text-brand-700'}`}>
            Nacho Bueno
          </span>
        </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_CLINIC_CALENDAR_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20"
            >
              Agendar Cita
            </a>
          </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="block text-lg font-medium text-slate-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#reservar"
                className="block w-full text-center bg-brand-500 text-white py-3 rounded-xl font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reservar Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-100/50 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4" />
            Clínica Dental en Almería
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1] mb-6 text-balance">
            Tu clínica de <span className="text-brand-500 italic">confianza</span> en el centro de Almería.
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            El Dr. Nacho Bueno y la Dra. Lucía Rivas le dan la bienvenida a un espacio diseñado para su salud y bienestar dental.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_CLINIC_CALENDAR_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/25"
            >
              Agendar Cita Online
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:950239742"
              className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
            >
              <Phone className="w-5 h-5" />
              Llamar ahora
            </a>
          </div>
          
          <div className="mt-8 text-sm text-slate-500 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-500" />
            P.º de Almería, 7, 5 B, 04001 Almería
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  alt="Paciente"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-slate-500 font-medium">+2,500 pacientes felices</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/dentist-clinic-modern/1920/1080" 
              alt="Clínica Dental Moderna"
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 z-20 glass-card p-6 rounded-2xl max-w-[240px]">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-900">Tecnología 3D</span>
            </div>
            <p className="text-sm text-slate-500">Escaneado intraoral de alta precisión para resultados perfectos.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Carillas de Porcelana',
      description: 'Transforma la forma y color de tus dientes con láminas ultra-finas de alta resistencia.',
      icon: 'sparkles',
      longDescription: ''
    },
    {
      id: '2',
      title: 'Implantes Dentales',
      description: 'Recupera la funcionalidad y estética de tu boca con implantes de titanio de última generación.',
      icon: 'stethoscope',
      longDescription: ''
    },
    {
      id: '3',
      title: 'Ortodoncia Invisible',
      description: 'Alinea tu sonrisa de forma discreta y cómoda con alineadores transparentes personalizados.',
      icon: 'shield',
      longDescription: ''
    },
    {
      id: '4',
      title: 'Tratamiento de Caries',
      description: 'Eliminación de caries y reconstrucción dental con materiales estéticos de alta durabilidad.',
      icon: 'heart',
      longDescription: ''
    },
    {
      id: '5',
      title: 'Blanqueamiento Gratis',
      description: 'Ofrecemos blanqueamientos dentales gratuitos anuales para nuestros pacientes fidelizados.',
      icon: 'sun',
      longDescription: ''
    },
    {
      id: '6',
      title: 'Seguros Privados',
      description: 'Trabajamos con los principales seguros médicos privados para facilitar tu acceso a la salud.',
      icon: 'shield',
      longDescription: ''
    }
  ];

  const getIcon = (name: string) => {
    switch(name) {
      case 'sparkles': return <Sparkles className="w-8 h-8" />;
      case 'stethoscope': return <Stethoscope className="w-8 h-8" />;
      case 'shield': return <ShieldCheck className="w-8 h-8" />;
      case 'sun': return <Sparkles className="w-8 h-8" />; 
      case 'monitor': return <Calendar className="w-8 h-8" />; 
      case 'heart': return <HeartPulse className="w-8 h-8" />;
      default: return <Stethoscope className="w-8 h-8" />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Tratamientos Especializados</h2>
          <p className="text-lg text-slate-600">Ofrecemos soluciones integrales utilizando las técnicas más avanzadas en odontología estética y restauradora.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all group"
            >
              <div className="w-16 h-16 bg-brand-50 text-brand-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <a href="#contacto" className="inline-flex items-center gap-2 text-brand-500 font-bold hover:gap-3 transition-all">
                Saber más <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    const relativeX = x - container.left;
    const percentage = Math.max(0, Math.min(100, (relativeX / container.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <section id="resultados" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Resultados Reales</h2>
            <p className="text-lg text-slate-600 mb-8">
              La satisfacción de nuestros pacientes es nuestro mejor aval. Desliza para ver la transformación lograda con nuestros tratamientos de estética dental.
            </p>
            <ul className="space-y-4 mb-10">
              {['Carillas de porcelana E-max', 'Cierre de diastemas', 'Blanqueamiento profesional', 'Armonización de la sonrisa'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-brand-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contacto" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
              Ver galería completa
            </a>
          </div>

          <div 
            className="relative aspect-[4/3] rounded-[40px] overflow-hidden cursor-ew-resize select-none shadow-2xl"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleMove}
          >
            {/* After Image */}
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
              alt="Después"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Before Image */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" 
                alt="Antes"
                className="absolute inset-0 w-full h-full object-cover grayscale"
                style={{ width: `${10000 / sliderPos}%` }}
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-brand-500 rounded-full" />
                  <div className="w-1 h-4 bg-brand-500 rounded-full" />
                </div>
              </div>
            </div>
            {/* Labels */}
            <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-bold">Antes</div>
            <div className="absolute bottom-6 right-6 bg-brand-500/80 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-bold">Después</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Nacho Bueno',
      role: 'Director Médico',
      specialty: 'Implantología y Rehabilitación Oral',
      image: 'https://picsum.photos/seed/dentist-doctor-nacho/400/500',
      bio: 'Especialista con amplia trayectoria en cirugía oral e implantología avanzada.'
    },
    {
      id: '2',
      name: 'Dra. Lucía Rivas',
      role: 'Especialista en Estética',
      specialty: 'Estética Dental y Ortodoncia Invisible',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
      bio: 'Experta en diseño de sonrisa y tratamientos de ortodoncia de última generación.'
    },
    {
      id: '3',
      name: 'Dra. Marina Soler',
      role: 'Odontóloga General',
      specialty: 'Endodoncia y Odontología Conservadora',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
      bio: 'Dedicada al cuidado preventivo y la salud dental integral de nuestros pacientes.'
    }
  ];

  return (
    <section id="equipo" className="py-24 bg-brand-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Nuestro Equipo de Expertos</h2>
          <p className="text-lg text-slate-600">Contamos con especialistas de primer nivel dedicados a brindarte la mejor atención y resultados excepcionales.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div key={member.id} className="group">
              <div className="relative rounded-[32px] overflow-hidden mb-6 aspect-[4/5] shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-700/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-500 transition-all cursor-pointer">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-500 transition-all cursor-pointer">
                      <Facebook className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-1">{member.name}</h3>
              <p className="text-brand-500 font-bold text-sm uppercase tracking-wider mb-3">{member.specialty}</p>
              <p className="text-slate-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Ricardo Valero',
      text: 'Una clínica de confianza de toda la vida. Mis padres también vienen aquí desde hace años. Trato inmejorable.',
      rating: 5,
      treatment: 'Paciente de toda la vida'
    },
    {
      id: '2',
      name: 'Beatriz G.',
      text: 'Ha tratado (y sigue tratando) a toda mi familia. Muy humano y excelente como dentista. Un profesional de los pies a la cabeza.',
      rating: 5,
      treatment: 'Odontología Familiar'
    },
    {
      id: '3',
      name: 'Carmen P.',
      text: 'Mis primeros empastes me los hizo a la edad de 12 años, 44 años después los sigo teniendo. Es buenísimo dentista, el mejor.',
      rating: 5,
      treatment: 'Odontología Conservadora'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">Lo que dicen nuestros pacientes</h2>
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center gap-1 text-yellow-400">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <div className="flex gap-4 text-sm font-medium text-slate-500">
              <span>Google: 4,9/5 (18 reseñas)</span>
              <span>•</span>
              <span>Doctoralia: 5/5 (3 reseñas)</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white font-serif text-2xl">“</div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-brand-500 font-medium uppercase tracking-tighter">{t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://picsum.photos/seed/dentist-reception-wood/1920/1080", // Reception
    "https://picsum.photos/seed/dentist-waiting-modern/1920/1080", // Waiting room
    "https://picsum.photos/seed/dentist-cabinet-green/1920/1080", // Cabinet
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400", // Treatment room
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=400", // Equipment
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400"  // Detail
  ];

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Nuestra Clínica</h2>
          <p className="text-lg text-slate-600">Instalaciones modernas diseñadas para tu máximo confort y seguridad.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <img 
                src={src} 
                alt={`Galería ${i}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const posts = [
    {
      title: "5 Consejos para mantener tus carillas como el primer día",
      excerpt: "Descubre cómo cuidar tu nueva sonrisa para que dure décadas con estos sencillos pasos.",
      date: "24 Feb, 2024",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "¿Es doloroso el tratamiento de implantes dentales?",
      excerpt: "Desmitificamos uno de los mayores miedos de los pacientes. La tecnología actual permite procesos indoloros.",
      date: "15 Feb, 2024",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Ortodoncia Invisible vs Brackets: ¿Cuál elegir?",
      excerpt: "Comparamos ambas opciones para que decidas cuál se adapta mejor a tu estilo de vida.",
      date: "02 Feb, 2024",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Recursos y Blog</h2>
            <p className="text-lg text-slate-600">Aprende más sobre salud dental y las últimas tendencias en estética de la mano de nuestros expertos.</p>
          </div>
          <a href="#" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
            Ver todos los artículos <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <p className="text-brand-500 font-bold text-xs uppercase tracking-widest mb-3">{post.date}</p>
                <h3 className="text-xl font-serif text-slate-900 mb-4 group-hover:text-brand-500 transition-colors">{post.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-900 hover:gap-3 transition-all">
                  Leer más <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservar" className="py-24 bg-brand-700 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-600 -z-0 skew-x-12 translate-x-1/2 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Empieza hoy tu camino hacia una <span className="text-brand-200 italic">sonrisa perfecta</span>.</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-200" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Consulta Inicial Gratuita</h4>
                  <p className="text-brand-100/70">Evaluamos tu caso sin compromiso y te ofrecemos un plan de tratamiento personalizado.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-200" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Financiación a Medida</h4>
                  <p className="text-brand-100/70">Hasta 24 meses sin intereses para que nada te impida sonreír.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-12 text-slate-900 shadow-2xl">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif mb-4">¡Solicitud Recibida!</h3>
                <p className="text-slate-600 mb-8">Nos pondremos en contacto contigo en menos de 24 horas para confirmar tu cita.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-brand-500 font-bold underline"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Teléfono</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+34 600 000 000"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Tratamiento de Interés</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all appearance-none">
                    <option>Estética Dental (Carillas)</option>
                    <option>Implantes Dentales</option>
                    <option>Ortodoncia Invisible</option>
                    <option>Blanqueamiento</option>
                    <option>Revisión General</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Mensaje (Opcional)</label>
                  <textarea 
                    rows={3}
                    placeholder="Cuéntanos brevemente qué necesitas..."
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2"
                >
                  Solicitar Cita Ahora
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-slate-400 text-center">Al enviar este formulario, aceptas nuestra política de privacidad y protección de datos.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contacto" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">Nacho Bueno</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Clínica Dental Nacho Bueno: Excelencia en odontología estética y salud bucodental en el centro de Almería.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/clinicarojovelazquez/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-500 transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-500 transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-500 transition-all"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif mb-8">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#inicio" className="hover:text-brand-200 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-200 transition-colors">Servicios</a></li>
              <li><a href="#resultados" className="hover:text-brand-200 transition-colors">Casos de Éxito</a></li>
              <li><a href="#equipo" className="hover:text-brand-200 transition-colors">Nuestro Equipo</a></li>
              <li><a href="#reservar" className="hover:text-brand-200 transition-colors">Pedir Cita</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif mb-8">Contacto</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-500 shrink-0" />
                <span>P.º de Almería, 7, 5 B<br />04001 Almería, España</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-brand-500 shrink-0" />
                <span>+34 950 23 97 42</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-brand-500 shrink-0" />
                <span>info@clinicadentalgodoy.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif mb-8">Horario</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span className="text-white">10:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados - Domingos</span>
                <span className="text-brand-200">Cerrado</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[10px] text-slate-500 mb-2 italic">* Día de Andalucía: el horario podría ser diferente.</p>
              <p className="text-xs text-slate-400 mb-2">Urgencias:</p>
              <p className="text-lg font-bold text-brand-200">+34 950 23 97 42</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© 2024 Clínica Dental Nacho Bueno. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Map = () => {
  return (
    <section className="w-full h-[450px] relative">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3193.314781442144!2d-2.4644556!3d36.8350778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7075f96e480001%3A0x8f8a8e8e8e8e8e8e!2sP.%C2%BA%20de%20Almer%C3%ADa%2C%207%2C%205%20B%2C%2004001%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1710000000000!5m2!1ses!2ses" 
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Godoy Clínica Dental"
      ></iframe>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-brand-100 selection:text-brand-700">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfterSlider />
        <Gallery />
        <Team />
        <Testimonials />
        <Blog />
        <BookingForm />
        <Map />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/34950239742" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-all"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
