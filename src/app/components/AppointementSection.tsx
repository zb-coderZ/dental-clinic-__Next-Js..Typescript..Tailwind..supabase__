'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
}

const services = [
'Teeth Whitening',
'Dental Implants',
'Root Canal Therapy',
'Orthodontics / Aligners',
'Cosmetic Dentistry',
'Emergency Care',
'General Check-up',
'Oral Surgery'];


const miniTestimonials = [
{
  name: 'Amanda K.',
  review: 'Absolutely painless and professional. My smile has never looked better!',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d964e610-1778825884855.png",
  treatment: 'Veneers'
},
{
  name: 'Marcus T.',
  review: 'Transparent pricing, zero surprises. Best dental clinic in the city.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d645cacd-1773651423421.png",
  treatment: 'Implant'
},
{
  name: 'David C.',
  review: '8 months of aligners and I cannot stop smiling. Life-changing!',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16c91b48a-1770940196831.png",
  treatment: 'Aligners'
}];


export default function AppointmentSection() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!form.phone.trim() || !/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid phone number.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!form.service) {
      newErrors.service = 'Please select a service.';
    }
    if (!form.date) {
      newErrors.date = 'Please select a preferred date.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormErrors) =>
  `w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all duration-200 ${
  errors[field] ?
  'border-red-300 focus:ring-red-200' : 'border-border focus:ring-accent/30 focus:border-accent'}`;


  return (
    <section id="appointment" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* Mini testimonials strip above form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 animate-on-scroll">
          {miniTestimonials.map((t) =>
          <div key={t.name} className="bg-white rounded-2xl p-5 border border-border flex items-start gap-4 card-hover">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                <AppImage
                src={t.avatar}
                alt={`${t.name} patient testimonial`}
                width={44}
                height={44}
                className="w-full h-full object-cover" />
              
              </div>
              <div className="min-w-0">
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) =>
                <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                )}
                </div>
                <p className="text-xs text-muted leading-relaxed italic mb-2">&ldquo;{t.review}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-foreground">{t.name}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-xs text-accent font-medium">{t.treatment}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — Info */}
          <div className="animate-on-scroll">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">Schedule a Visit</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-5">
              Book Your{' '}
              <span className="text-gradient-blue italic">Appointment</span>
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              Ready to take the first step toward your best smile? Fill out the form and our team will confirm your appointment within 2 hours during business hours.
            </p>

            <div className="space-y-5">
              {[
              { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
              { icon: '📧', label: 'Email', value: 'hello@dentalcare.com' },
              { icon: '📍', label: 'Address', value: '247 Madison Avenue, Suite 12, New York, NY 10016' },
              { icon: '⏰', label: 'Hours', value: 'Mon–Fri: 8AM–7PM | Sat: 9AM–4PM' }].
              map(({ icon, label, value }) =>
              <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-lg flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-0.5">{label}</div>
                    <div className="text-sm text-foreground font-medium">{value}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['No hidden fees', 'Same-week availability', 'Insurance accepted', 'Free first consult'].map((t) =>
              <div key={t} className="flex items-center gap-2 text-xs text-foreground font-medium bg-white border border-border rounded-full px-4 py-2">
                  <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  {t}
                </div>
              )}
            </div>
          </div>

          {/* Right — Form */}
          <div className="animate-on-scroll stagger-2">
            <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
              {submitted ?
              <div className="flex flex-col items-center text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-5">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">Appointment Requested!</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xs mb-2">
                    Thank you, <strong>{form.fullName}</strong>! We have received your request and will confirm your appointment at <strong>{form.email}</strong> within 2 hours.
                  </p>
                  <p className="text-xs text-muted mb-6">Our team will call you at <strong>{form.phone}</strong> to confirm.</p>
                  <div className="flex flex-col gap-2 w-full max-w-xs">
                    <button
                    onClick={() => {setSubmitted(false);setForm({ fullName: '', phone: '', email: '', service: '', date: '', message: '' });}}
                    className="btn-outline text-sm justify-center">
                    
                      Book Another Appointment
                    </button>
                    <a href="#contact" className="text-xs text-center text-muted hover:text-primary transition-colors py-2">
                      View clinic location →
                    </a>
                  </div>
                </div> :

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-xl font-semibold text-foreground">Patient Details</h3>
                    <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full font-medium">Free Consult</span>
                  </div>
                  <p className="text-xs text-muted mb-5">All fields marked with * are required.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-foreground mb-1.5">Full Name *</label>
                      <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={inputClass('fullName')}
                      autoComplete="name" />
                    
                      {errors.fullName && <p className="text-xs text-red-500 mt-1.5">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-foreground mb-1.5">Phone *</label>
                      <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass('phone')}
                      autoComplete="tel" />
                    
                      {errors.phone && <p className="text-xs text-red-500 mt-1.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-1.5">Email Address *</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={inputClass('email')}
                    autoComplete="email" />
                  
                    {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-foreground mb-1.5">Service *</label>
                      <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass('service')} cursor-pointer`}>
                      
                        <option value="">Select service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="text-xs text-red-500 mt-1.5">{errors.service}</p>}
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-xs font-semibold text-foreground mb-1.5">Preferred Date *</label>
                      <input
                      type="date"
                      id="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={inputClass('date')}
                      min="2026-07-01" />
                    
                      {errors.date && <p className="text-xs text-red-500 mt-1.5">{errors.date}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-1.5">Additional Notes</label>
                    <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe your concern or any relevant dental history..."
                    className="w-full bg-white border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 resize-none" />
                  
                  </div>

                  <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                  
                    {loading ?
                  <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Confirming...
                      </> :

                  <>
                        Request Appointment
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                  }
                  </button>

                  <p className="text-xs text-muted text-center">
                    🔒 Your information is secure and will never be shared.
                  </p>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </section>);

}