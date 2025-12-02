import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const faqs = [
    {
      question: isArabic ? "ما هي الخدمات التي تقدمها شركة إيجل فيت؟" : "What services does Eagle Fit offer?",
      answer: isArabic 
        ? "نقدم مجموعة شاملة من خدمات MEP والديكور بما في ذلك تكييف الهواء، والنجارة، والسباكة، والطلاء، وورق الجدران، والكهرباء، والجبس، والأسقف المعلقة، وتركيب المسابح، وصيانة المباني، وتصميم الديكور."
        : "We offer comprehensive MEP and decoration services including air conditioning, carpentry, plumbing, painting, wallpaper, electrical work, plaster, false ceiling, swimming pool installation, building maintenance, and decoration design."
    },
    {
      question: isArabic ? "كم من الوقت يستغرق إنجاز المشروع؟" : "How long does a typical project take?",
      answer: isArabic 
        ? "تختلف مدة المشروع حسب النطاق والتعقيد. عادةً ما تستغرق المشاريع الصغيرة من 1-2 أسابيع، والمشاريع المتوسطة من 2-4 أسابيع، والمشاريع الكبيرة من 4-8 أسابيع أو أكثر. سنقدم جدولاً زمنياً مفصلاً بعد تقييم مشروعك."
        : "Project duration varies based on scope and complexity. Small projects typically take 1-2 weeks, medium projects 2-4 weeks, and large projects 4-8 weeks or more. We'll provide a detailed timeline after assessing your project."
    },
    {
      question: isArabic ? "هل تقدمون استشارة مجانية؟" : "Do you provide free consultations?",
      answer: isArabic 
        ? "نعم! نقدم استشارات مجانية لجميع المشاريع. سيقوم فريقنا بزيارة موقعك، وتقييم احتياجاتك، وتقديم توصيات مفصلة مع عرض سعر شفاف."
        : "Yes! We offer free consultations for all projects. Our team will visit your site, assess your needs, and provide detailed recommendations with a transparent quote."
    },
    {
      question: isArabic ? "ما هي المناطق التي تخدمونها؟" : "What areas do you serve?",
      answer: isArabic 
        ? "نخدم جميع مناطق دبي والإمارات المجاورة. تشمل مناطقنا الرئيسية تلال دبي، مرسى دبي، وسط المدينة، نخلة جميرا، ومنطقة الأعمال الخليجية، من بين أماكن أخرى."
        : "We serve all areas of Dubai and neighboring Emirates. Our main service areas include Dubai Hills, Dubai Marina, Downtown, Palm Jumeirah, Business Bay, and many more locations."
    },
    {
      question: isArabic ? "هل تقدمون خدمات الصيانة بعد المشروع؟" : "Do you offer post-project maintenance?",
      answer: isArabic 
        ? "نعم، نقدم خدمات صيانة شاملة لجميع مشاريعنا. لدينا فريق صيانة على مدار الساعة طوال أيام الأسبوع متاح للدعم الطارئ والصيانة الدورية."
        : "Yes, we provide comprehensive maintenance services for all our projects. We have a 24/7 maintenance team available for emergency support and regular maintenance schedules."
    },
    {
      question: isArabic ? "كيف يمكنني الحصول على عرض سعر لمشروعي؟" : "How can I get a quote for my project?",
      answer: isArabic 
        ? "يمكنك الحصول على عرض سعر بالاتصال بنا على +971 55 175 3322، أو إرسال بريد إلكتروني إلى info@eaglefitdecorations.com، أو ملء نموذج الاتصال على موقعنا. سنرد خلال 24 ساعة لجدولة استشارة."
        : "You can get a quote by calling us at +971 55 175 3322, emailing info@eaglefitdecorations.com, or filling out the contact form on our website. We'll respond within 24 hours to schedule a consultation."
    },
    {
      question: isArabic ? "هل أنتم مرخصون ومؤمنون؟" : "Are you licensed and insured?",
      answer: isArabic 
        ? "نعم، نحن مرخصون بالكامل ومؤمنون. تلتزم شركتنا بجميع لوائح دبي، ونحمل جميع التراخيص والشهادات اللازمة للعمل في قطاعات MEP والديكور."
        : "Yes, we are fully licensed and insured. Our company complies with all Dubai regulations, and we hold all necessary licenses and certifications to operate in the MEP and decoration sectors."
    },
    {
      question: isArabic ? "ما هي طرق الدفع المقبولة؟" : "What payment methods do you accept?",
      answer: isArabic 
        ? "نقبل التحويلات البنكية والشيكات والنقد. عادةً ما تتطلب المشاريع دفعة أولية بنسبة 30-50٪، مع دفعات تقدمية بناءً على معالم المشروع، والدفعة النهائية عند الانتهاء."
        : "We accept bank transfers, checks, and cash payments. Projects typically require a 30-50% initial deposit, with progress payments based on project milestones, and final payment upon completion."
    }
  ];

  return (
    <section className="py-20 glass">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 glow-text">{t('section.faq')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('section.faqDesc')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass mb-4 px-6 rounded-xl border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
