import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      gallery: 'Gallery',
      blog: 'Blog',
      contact: 'Contact',
      
      // Company
      companyName: 'Eagle Fit Decorations',
      companyTagline: 'Premier MEP & Decoration Company',
      companyFullName: 'EAGLE FIT DECORATIONS',
      companyDesc: 'Premier MEP & Decoration Company in Dubai',
      companyIntro: 'Delivering excellence across diverse domains with innovation, quality, and customer satisfaction',
      
      // Hero
      'hero.requestQuote': 'Request Free Quote',
      'hero.exploreProjects': 'Explore Projects',
      'hero.yearsExperience': 'Years Experience',
      'hero.happyClients': 'Happy Clients',
      'hero.projectsCompleted': 'Projects Completed',
      'hero.servicesOffered': 'Services Offered',
      
      // Sections
      'section.ourServices': 'Our Services',
      'section.servicesDesc': 'Comprehensive MEP and decoration services tailored to meet your needs',
      'section.viewAllServices': 'View All Services',
      'section.featuredProjects': 'Featured Projects',
      'section.projectsDesc': 'Explore our portfolio of successfully completed projects across Dubai',
      'section.viewAllProjects': 'View All Projects',
      'section.leadership': 'Our Leadership Team',
      'section.leadershipDesc': 'Meet the visionary leaders driving excellence in MEP and decoration services',
      'section.testimonials': 'What Our Clients Say',
      'section.testimonialsDesc': "Don't just take our word for it - hear from our satisfied clients",
      'section.whyChooseUs': 'Why Choose Us',
      'section.whyChooseUsDesc': 'Excellence, innovation, and customer satisfaction drive everything we do',
      'section.projectGallery': 'Project Gallery',
      'section.galleryDesc': 'Browse through our completed projects',
      'section.faq': 'Frequently Asked Questions',
      'section.faqDesc': 'Find answers to common questions about our services',
      
      // Services
      'service.airConditioning': 'Air Conditioning Services',
      'service.carpentry': 'Carpentry & Wood Flooring Works',
      'service.sanitary': 'Sanitary Installation & Pipe Repairing',
      'service.painting': 'Painting Contracting',
      'service.wallpaper': 'Wallpaper Fixing Works',
      'service.electrical': 'Electrical Fitting & Fixture Repairing & Maintenance',
      'service.plaster': 'Plaster Works',
      'service.falseCeiling': 'False Ceiling & Light Partition Installation',
      'service.swimmingPool': 'Swimming Pool Installation Works',
      'service.maintenance': 'Building Maintenance',
      'service.decoration': 'Decoration Design & Implementation',
      
      // Leadership
      'leader.md': 'Managing Director',
      'leader.mdDesc': 'Leading Eagle Fit Decorations with strategic vision and decades of MEP expertise',
      'leader.fm': 'Financial Manager',
      'leader.fmDesc': 'Ensuring financial excellence and strategic growth for sustainable operations',
      
      // Why Choose Us
      'feature.experiencedTeam': 'Experienced Team',
      'feature.experiencedTeamDesc': 'Highly skilled professionals with years of industry experience',
      'feature.qualityMaterials': 'Quality Materials',
      'feature.qualityMaterialsDesc': 'We use only premium materials for long-lasting results',
      'feature.onTimeDelivery': 'On-Time Delivery',
      'feature.onTimeDeliveryDesc': 'Committed to completing projects within agreed timelines',
      'feature.competitivePricing': 'Competitive Pricing',
      'feature.competitivePricingDesc': 'Transparent pricing with no hidden costs',
      'feature.support247': '24/7 Support',
      'feature.support247Desc': 'Round-the-clock customer support for your peace of mind',
      'feature.guaranteedSatisfaction': 'Guaranteed Satisfaction',
      'feature.guaranteedSatisfactionDesc': 'We stand behind our work with comprehensive warranties',
      
      // CTA
      'cta.title': 'Ready to Start Your Project?',
      'cta.desc': "Let's bring your vision to life with our expert MEP and decoration services",
      'cta.consultation': 'Get Free Consultation',
      
      // Contact
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'contact.location': 'Location',
      'contact.hours': 'Working Hours',
      'contact.247': '24 x 7',
      'contact.getQuote': 'Get Quote',
      
      // Footer
      'footer.quickLinks': 'Quick Links',
      'footer.ourServices': 'Our Services',
      'footer.contact': 'Contact',
      'footer.rights': 'All rights reserved.',
      'footer.desc': 'Premier MEP & Decoration Company in Dubai, delivering excellence across diverse domains.',
      
      // Buttons
      'button.call': 'Call',
      'button.requestQuote': 'Request Quote',
      'button.learnMore': 'Learn More',
      'button.sendMessage': 'Send Message',
    }
  },
  ar: {
    translation: {
      // Navigation
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      portfolio: 'المشاريع',
      gallery: 'المعرض',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      
      // Company
      companyName: 'إيجل فيت للديكور',
      companyTagline: 'شركة رائدة في التكييف والديكور',
      companyFullName: 'إيجل فيت للديكور',
      companyDesc: 'شركة رائدة في التكييف والديكور في دبي',
      companyIntro: 'تقديم التميز في مختلف المجالات بالابتكار والجودة ورضا العملاء',
      
      // Hero
      'hero.requestQuote': 'طلب عرض سعر مجاني',
      'hero.exploreProjects': 'استكشف المشاريع',
      'hero.yearsExperience': 'سنوات الخبرة',
      'hero.happyClients': 'عملاء راضون',
      'hero.projectsCompleted': 'مشاريع منجزة',
      'hero.servicesOffered': 'خدمات مقدمة',
      
      // Sections
      'section.ourServices': 'خدماتنا',
      'section.servicesDesc': 'خدمات شاملة للتكييف والديكور مصممة لتلبية احتياجاتك',
      'section.viewAllServices': 'عرض جميع الخدمات',
      'section.featuredProjects': 'مشاريع مميزة',
      'section.projectsDesc': 'استكشف محفظة مشاريعنا المنجزة بنجاح في دبي',
      'section.viewAllProjects': 'عرض جميع المشاريع',
      'section.leadership': 'فريق القيادة',
      'section.leadershipDesc': 'تعرف على القادة الرؤيويين الذين يقودون التميز في خدمات التكييف والديكور',
      'section.testimonials': 'ماذا يقول عملاؤنا',
      'section.testimonialsDesc': 'لا تأخذ كلامنا فقط - استمع لعملائنا الراضين',
      'section.whyChooseUs': 'لماذا تختارنا',
      'section.whyChooseUsDesc': 'التميز والابتكار ورضا العملاء يقود كل ما نقوم به',
      'section.projectGallery': 'معرض المشاريع',
      'section.galleryDesc': 'تصفح مشاريعنا المكتملة',
      'section.faq': 'الأسئلة الشائعة',
      'section.faqDesc': 'ابحث عن إجابات للأسئلة الشائعة حول خدماتنا',
      
      // Services
      'service.airConditioning': 'خدمات تكييف الهواء',
      'service.carpentry': 'أعمال النجارة وأرضيات الخشب',
      'service.sanitary': 'تركيب الصحية وإصلاح الأنابيب',
      'service.painting': 'مقاولات الدهان',
      'service.wallpaper': 'أعمال تركيب ورق الجدران',
      'service.electrical': 'التركيبات الكهربائية والإصلاح والصيانة',
      'service.plaster': 'أعمال الجبس',
      'service.falseCeiling': 'تركيب الأسقف المعلقة والقواطع الخفيفة',
      'service.swimmingPool': 'أعمال تركيب المسابح',
      'service.maintenance': 'صيانة المباني',
      'service.decoration': 'تصميم وتنفيذ الديكور',
      
      // Leadership
      'leader.md': 'المدير العام',
      'leader.mdDesc': 'يقود إيجل فيت للديكور برؤية استراتيجية وعقود من الخبرة',
      'leader.fm': 'المدير المالي',
      'leader.fmDesc': 'ضمان التميز المالي والنمو الاستراتيجي للعمليات المستدامة',
      
      // Why Choose Us
      'feature.experiencedTeam': 'فريق خبير',
      'feature.experiencedTeamDesc': 'محترفون ذوو مهارات عالية مع سنوات من الخبرة',
      'feature.qualityMaterials': 'مواد عالية الجودة',
      'feature.qualityMaterialsDesc': 'نستخدم فقط المواد الممتازة لنتائج طويلة الأمد',
      'feature.onTimeDelivery': 'التسليم في الوقت المحدد',
      'feature.onTimeDeliveryDesc': 'ملتزمون بإنجاز المشاريع ضمن الجداول الزمنية المتفق عليها',
      'feature.competitivePricing': 'أسعار تنافسية',
      'feature.competitivePricingDesc': 'تسعير شفاف بدون تكاليف خفية',
      'feature.support247': 'دعم على مدار الساعة',
      'feature.support247Desc': 'دعم عملاء على مدار الساعة لراحة بالك',
      'feature.guaranteedSatisfaction': 'ضمان الرضا',
      'feature.guaranteedSatisfactionDesc': 'ندعم عملنا بضمانات شاملة',
      
      // CTA
      'cta.title': 'مستعد لبدء مشروعك؟',
      'cta.desc': 'دعنا نحول رؤيتك إلى واقع بخدماتنا الاحترافية',
      'cta.consultation': 'احصل على استشارة مجانية',
      
      // Contact
      'contact.phone': 'الهاتف',
      'contact.email': 'البريد الإلكتروني',
      'contact.location': 'الموقع',
      'contact.hours': 'ساعات العمل',
      'contact.247': '٢٤ × ٧',
      'contact.getQuote': 'طلب عرض سعر',
      
      // Footer
      'footer.quickLinks': 'روابط سريعة',
      'footer.ourServices': 'خدماتنا',
      'footer.contact': 'اتصل بنا',
      'footer.rights': 'جميع الحقوق محفوظة.',
      'footer.desc': 'شركة رائدة في التكييف والديكور في دبي، تقدم التميز في مختلف المجالات.',
      
      // Buttons
      'button.call': 'اتصل',
      'button.requestQuote': 'طلب عرض سعر',
      'button.learnMore': 'اعرف المزيد',
      'button.sendMessage': 'إرسال رسالة',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
